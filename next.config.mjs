/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export, required for GitHub Pages.
  output: "export",
  trailingSlash: true,
  // next/image optimization needs a server, which GitHub Pages cannot run.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
