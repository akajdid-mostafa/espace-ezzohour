/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://ezzohour.ma', // <-- change this to your real domain
    generateRobotsTxt: true,
    sitemapSize: 7000,
    exclude: ['/admin/*'], // optional
    robotsTxtOptions: {
      additionalSitemaps: [
        'https://ezzohour.ma/sitemap.xml',
      ],
    },
  };
  