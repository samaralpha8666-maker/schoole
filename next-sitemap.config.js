// next-sitemap.config.js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://apanacampus.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.8,
  additionalPaths: async (config) => {
    const defaultPaths = [
      {
        loc: '/school-admission',
        changefreq: 'weekly',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/college-management',
        changefreq: 'weekly',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/features',
        changefreq: 'monthly',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/pricing',
        changefreq: 'monthly',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/contact',
        changefreq: 'yearly',
        priority: 0.7,
      },
      {
        loc: '/blog',
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      },
    ];

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://api.apanacampus.com';
      const response = await fetch(`${apiUrl}/api/admin/public/blogs`);
      const data = await response.json();
      if (data.success && data.data && data.data.blogs) {
        const blogPaths = data.data.blogs.map((blog) => ({
          loc: `/blog/${blog.slug}`,
          changefreq: 'weekly',
          priority: 0.8,
          lastmod: new Date(blog.updatedAt || blog.createdAt).toISOString(),
        }));
        return [...defaultPaths, ...blogPaths];
      }
    } catch (err) {
      console.error('Failed to fetch dynamic blogs for sitemap:', err.message);
    }

    return defaultPaths;
  },
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};
