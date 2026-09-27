const repo = "hosein-yakdaneh";
const basePath = `/${repo}`;

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export, required for GitHub Pages.
  output: "export",
  // The site is served from https://<user>.github.io/<repo>/, so every
  // internal link and asset needs this prefix.
  basePath,
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // next/image optimization needs a server, which GitHub Pages cannot run.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
