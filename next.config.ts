import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.wallpaperflare.com" },
      { protocol: "https", hostname: "images.ctfassets.net" },
    ],
  },
};

export default nextConfig;
