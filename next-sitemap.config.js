// next-sitemap.config.js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://apanacampus.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.8,
  additionalPaths: async () => [
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
  ],
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};
