import React from 'react';
import { Sparkles } from 'lucide-react';
import { buildMetadata } from '@/lib/metadata';
import BlogList from '@/components/blog/BlogList';

export const metadata = buildMetadata({
  title: 'EdTech Blog & School ERP Insights | ApanaCampus',
  description: 'Read the latest trends, guides, and insights about school management software, college ERP systems, fee automation, and education technology.',
  path: '/blog',
  keywords: [
    'school management blogs',
    'edtech insights',
    'school administration guides',
    'erp software trends',
  ],
});

interface Blog {
  id: number;
  title: string;
  slug: string;
  summary: string;
  featured_image: string;
  author: string;
  publishedAt: string;
  createdAt: string;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.apanacampus.com';

async function fetchPublishedBlogs(): Promise<Blog[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/admin/public/blogs`, {
      next: { revalidate: 300 }, // Cache and revalidate every 5 minutes
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data.success && data.data ? data.data.blogs : [];
  } catch (err) {
    console.error('Failed to fetch public blogs:', err);
    return [];
  }
}

export default async function BlogListingPage() {
  const blogs = await fetchPublishedBlogs();

  return (
    <div className="min-h-screen bg-base-cream font-sans text-shade-dark antialiased pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-lime/20 text-accent-green text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Latest Insights</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            ApanaCampus Blog
          </h1>
          <p className="text-lg text-shade-dark/70">
            Explore experts tips, guides, and software features to transform your campus operations, secure databases, and automate billing.
          </p>
        </div>

        {/* Live-updated Blogs List */}
        <BlogList initialBlogs={blogs} />

      </div>
    </div>
  );
}
