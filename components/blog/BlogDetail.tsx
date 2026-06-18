'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Calendar, User, ArrowLeft, Clock, Loader2 } from 'lucide-react';

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

interface BlogDetailProps {
  initialBlog: Blog | null;
  slug: string;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.apanacampus.com';

// Simple Markdown Parser function
function parseMarkdownToHtml(md: string): string {
  if (!md) return '';

  let html = md
    // Headings
    .replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold mt-6 mb-3 text-gray-800">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mt-8 mb-4 text-gray-800 border-b pb-2">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-extrabold mt-8 mb-4 text-gray-950">$1</h1>')
    // Bold
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-extrabold text-gray-900">$1</strong>')
    // Italics
    .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
    // Links
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener" class="text-accent-green hover:underline font-semibold">$1</a>')
    // Bullet points
    .replace(/^\s*[\-\*]\s+(.*$)/gim, '<li class="ml-4 list-disc mb-2 text-gray-700">$1</li>');

  // Wrap standard paragraph lines
  const sections = html.split('\n\n').map((p) => {
    const trimmed = p.trim();
    if (!trimmed) return '';
    // If already wrapped in block elements, skip wrapping in p tag
    if (
      trimmed.startsWith('<h') ||
      trimmed.startsWith('<li') ||
      trimmed.startsWith('<ul') ||
      trimmed.startsWith('<ol')
    ) {
      return trimmed;
    }
    return `<p class="mb-5 leading-relaxed text-gray-700">${trimmed}</p>`;
  });

  return sections.join('\n');
}

export default function BlogDetail({ initialBlog, slug }: BlogDetailProps) {
  const [blog, setBlog] = useState<Blog | null>(initialBlog);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getLiveBlogDetail() {
      try {
        setLoading(true);
        // Add cache-busting timestamp
        const res = await fetch(`${API_BASE_URL}/api/admin/public/blogs/${slug}?t=${Date.now()}`);
        if (res.ok) {
          const data = await res.json();
          if (data.success && data.data) {
            setBlog(data.data);
          }
        }
      } catch (err) {
        console.error('Failed client-side fetch of blog detail:', err);
      } finally {
        setLoading(false);
      }
    }

    getLiveBlogDetail();
  }, [slug]);

  if (loading && !blog) {
    return (
      <div className="min-h-screen bg-base-cream flex items-center justify-center pt-24 px-6 text-center">
        <Loader2 className="w-8 h-8 text-accent-green animate-spin" />
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-base-cream flex flex-col items-center justify-center pt-24 px-6 text-center">
        <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
        <p className="text-shade-dark/60 mb-6">The post you are looking for does not exist or has been removed.</p>
        <Link href="/blog" className="btn btn-primary bg-accent-green hover:bg-accent-green/90 text-white px-6 py-3 rounded-xl inline-flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
      </div>
    );
  }

  const publishDate = blog.publishedAt || blog.createdAt;
  const formattedDate = new Date(publishDate).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  // Calculate estimated reading time
  const wordsCount = blog.content ? blog.content.split(/\s+/).length : 0;
  const readTime = Math.max(1, Math.round(wordsCount / 200));

  const parsedHtmlContent = parseMarkdownToHtml(blog.content);

  return (
    <div className="max-w-4xl mx-auto px-6">
      {/* Back Link */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm font-bold text-accent-green mb-8 group hover:-translate-x-1 transition-transform"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Blog
      </Link>

      {/* Article Header */}
      <header className="mb-10">
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6 text-gray-950">
          {blog.title}
        </h1>

        {/* Author/Date/ReadTime Info */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-shade-dark/60 border-y border-black/5 py-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-accent-green text-white flex items-center justify-center font-bold text-sm">
              AC
            </div>
            <span className="font-semibold text-shade-dark">{blog.author || 'ApanaCampus Team'}</span>
          </div>

          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            {formattedDate}
          </span>

          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            {readTime} min read
          </span>
        </div>
      </header>

      {/* Featured Image */}
      <div className="mb-10 rounded-2xl overflow-hidden shadow-sm aspect-video bg-gray-100 border border-black/5">
        <img
          src={blog.featured_image || 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1200'}
          alt={blog.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1200';
          }}
        />
      </div>

      {/* Article Body Content */}
      <main
        className="prose max-w-none mb-16 text-shade-dark/95"
        dangerouslySetInnerHTML={{ __html: parsedHtmlContent }}
      />

      {/* Bottom Call to Action banner */}
      <div className="bg-white rounded-2xl border border-black/5 p-8 md:p-12 text-center shadow-lg shadow-black/5">
        <h3 className="text-2xl font-bold mb-3">Ready to transform your school or college campus?</h3>
        <p className="text-shade-dark/70 max-w-lg mx-auto mb-6">
          Get isolated secure databases, automated online fee collection, dynamic report cards, and more.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact?action=demo"
            className="px-6 py-3 bg-accent-green hover:bg-accent-green/90 text-white font-bold rounded-xl transition-all shadow-sm shadow-accent-green/10"
          >
            Request a Live Demo
          </Link>
          <Link
            href="/pricing"
            className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-shade-dark font-bold rounded-xl transition-all"
          >
            View Pricing plans
          </Link>
        </div>
      </div>
    </div>
  );
}
