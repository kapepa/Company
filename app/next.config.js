/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ]
  },
  images: {
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '5000',
        pathname: '/images/**',
      },
    ]
  },
  env: {
    API: process.env.NODE_ENV === "development" ? "http://localhost:5000" : "https://company-961r.onrender.com",
  }
}

module.exports = nextConfig
