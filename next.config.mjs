/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export for GitHub Pages.
  output: "export",
  // The site is served from the custom domain root (https://hosein-yekdaneh.ir),
  // so no basePath is needed.
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  // next/image optimization needs a server, which static hosting cannot run.
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
