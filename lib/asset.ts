// Assets live at the site root (custom domain). This helper is kept as a single
// place to prefix assets if the site is ever moved under a sub-path again
// (e.g. via NEXT_PUBLIC_BASE_PATH).
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export function asset(path: string) {
  if (/^[a-z]+:\/\//i.test(path) || path.startsWith('data:')) return path
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${basePath}${normalized}`
}
