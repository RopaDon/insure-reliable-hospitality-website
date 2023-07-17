/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_PROD_CLIENT_URL || 'https://insurehospitality.pro',
    generateRobotsTxt: true,
  }