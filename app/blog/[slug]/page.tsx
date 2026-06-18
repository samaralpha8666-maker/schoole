import React from 'react';
import { buildMetadata } from '@/lib/metadata';
import BlogDetail from '@/components/blog/BlogDetail';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.apanacampus.com';

interface Blog {
  id: number;
  title: string;
  slug: string;
  content: string;
  summary: string;
  featured_image: string;
  meta_title: string;
  meta_description: string;
  keywords: string;
  author: string;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

// Fetch single blog detail by slug
async function fetchBlogBySlug(slug: string): Promise<Blog | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/admin/public/blogs/${slug}`, {
      next: { revalidate: 300 }, // Cache and revalidate every 5 minutes
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.success && data.data ? data.data : null;
  } catch (err) {
    console.error(`Failed to fetch public blog details for slug ${slug}:`, err);
    return null;
  }
}

// Dynamic SEO metadata generation
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = await fetchBlogBySlug(slug);
  if (!blog) {
    return buildMetadata({
      title: 'Article Not Found | ApanaCampus',
      description: 'The requested blog post could not be found.',
      path: `/blog/${slug}`,
    });
  }

  return buildMetadata({
    title: blog.meta_title || `${blog.title} | ApanaCampus`,
    description: blog.meta_description || blog.summary || '',
    path: `/blog/${slug}`,
    keywords: blog.keywords ? blog.keywords.split(',').map((k) => k.trim()) : [],
  });
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = await fetchBlogBySlug(slug);

  // JSON-LD structured data for Google Articles
  const blogSchema = blog ? {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': blog.title,
    'description': blog.summary || blog.meta_description,
    'image': blog.featured_image || 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1200',
    'author': {
      '@type': 'Organization',
      'name': 'ApanaCampus',
      'url': 'https://apanacampus.com',
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'ApanaCampus',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://apanacampus.com/logo.svg',
      },
    },
    'datePublished': blog.publishedAt || blog.createdAt,
    'dateModified': blog.updatedAt || blog.createdAt,
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': `https://apanacampus.com/blog/${blog.slug}`,
    },
  } : null;

  return (
    <div className="min-h-screen bg-base-cream font-sans text-shade-dark antialiased pt-24 pb-16">
      {/* Schema injection */}
      {blogSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
        />
      )}

      {/* Live-updated Blog Detail Component */}
      <BlogDetail initialBlog={blog} slug={slug} />
    </div>
  );
}
