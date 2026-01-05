import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/tejas-portfolio",
  assetPrefix: "/tejas-portfolio/",
};

export default nextConfig;
