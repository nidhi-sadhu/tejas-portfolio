import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/tejas-shah-react-portfolio',
  assetPrefix: '/tejas-shah-react-portfolio/',
}

export default nextConfig
