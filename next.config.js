const { hostname } = require('os');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'imagehub',
        port: '',
        pathname: '/**'
      },
    ],
  }
}

module.exports = nextConfig;
