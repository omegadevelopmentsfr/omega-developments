import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: GitHub Pages only serves static files, no Node server
  // (so no dynamic Route Handlers, no on-the-fly image optimization).
  output: "export",
  // Custom domain configured at the root (see public/CNAME): no basePath
  // needed, the site is served from "/".
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    // Next.js image optimization requires a server; in static export,
    // images are served as-is.
    unoptimized: true,
    formats: ["image/avif", "image/webp"]
  }
};

export default nextConfig;
