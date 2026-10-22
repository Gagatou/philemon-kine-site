/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  headers: async () => [
    {
      source: '/robots.txt',
      headers: [
        {
          key: 'Content-Type',
          value: 'text/plain',
        },
      ],
    },
    {
      source: '/sitemap.xml',
      headers: [
        {
          key: 'Content-Type',
          value: 'application/xml',
        },
      ],
    },
  ],
  redirects: async () =>
    ['philemon-kine-site.vercel.app', 'phil-kine.vercel.app'].map((host) => ({
      source: '/:path*',
      has: [{ type: 'host', value: host }],
      destination: 'https://kineydoux.fr/:path*',
      permanent: true,
    })),
  rewrites: async () => ({
    beforeFiles: [
      {
        source: '/about',
        destination: '/',
      },
      {
        source: '/contact',
        destination: '/',
      },
    ],
  }),
}

module.exports = nextConfig
