// sitemap.config.js
/** @type {import('sitemap').IConfigOptions} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_APP_URL || 'https://mrcarwash.app', // Ganti dengan URL aplikasi Anda
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'], // Kecualikan sitemap server jika ada
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      `${process.env.NEXT_PUBLIC_APP_URL || 'https://mrcarwash.app'}/server-sitemap.xml`,
    ],
  },
};
