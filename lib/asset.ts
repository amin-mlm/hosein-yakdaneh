// When deployed to GitHub Pages the site lives under a sub-path
// (e.g. /hosein-yakdaneh). `next/image` does not prepend `basePath` to
// `unoptimized` images, so static assets in /public are prefixed manually.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export function asset(path: string) {
  if (/^[a-z]+:\/\//i.test(path) || path.startsWith('data:')) return path
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${basePath}${normalized}`
}
