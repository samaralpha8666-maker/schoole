import React from 'react';
import Link from 'next/link';
import { Calendar, User, ArrowRight, Sparkles } from 'lucide-react';
import { buildMetadata } from '@/lib/metadata';

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

        {/* Blogs Grid */}
        {blogs.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-black/5 p-8 max-w-lg mx-auto">
            <span className="text-4xl block mb-4">✍️</span>
            <h3 className="text-xl font-bold text-shade-dark mb-2">No Articles Yet</h3>
            <p className="text-shade-dark/60 fs-7">
              We are crafting high-quality posts. Check back soon for edtech guides and ERP updates!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => {
              const publishDate = blog.publishedAt || blog.createdAt;
              const formattedDate = new Date(publishDate).toLocaleDateString('en-IN', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              });

              return (
                <article
                  key={blog.id}
                  className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-black/5 hover:border-accent-green/20 hover:shadow-xl hover:shadow-accent-green/5 transition-all duration-300"
                >
                  {/* Card Image */}
                  <Link href={`/blog/${blog.slug}`} className="relative block aspect-video overflow-hidden bg-gray-100">
                    <img
                      src={blog.featured_image || 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=640'}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=640';
                      }}
                    />
                  </Link>

                  {/* Card Content */}
                  <div className="flex-1 flex flex-col p-6">
                    {/* Meta */}
                    <div className="flex items-center gap-4 text-xs text-shade-dark/50 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {formattedDate}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-3.5 h-3.5" />
                        {blog.author || 'ApanaCampus Team'}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-accent-green transition-colors">
                      <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                    </h3>

                    {/* Summary */}
                    <p className="text-sm text-shade-dark/70 line-clamp-3 mb-6">
                      {blog.summary || 'Click below to read the full guide detailing features and updates.'}
                    </p>

                    {/* Footer link */}
                    <div className="mt-auto">
                      <Link
                        href={`/blog/${blog.slug}`}
                        className="inline-flex items-center gap-1 text-sm font-bold text-accent-green hover:gap-2 transition-all duration-200"
                      >
                        Read Full Post
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
}
