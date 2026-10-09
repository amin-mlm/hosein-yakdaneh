import type { MetadataRoute } from 'next'
import { siteDescription, siteName } from '@/lib/site'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteName,
    short_name: 'حسین یکدانه',
    description: siteDescription,
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#1a1816',
    theme_color: '#1a1816',
    lang: 'fa',
    dir: 'rtl',
    categories: ['business', 'lifestyle'],
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
      { src: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  }
}
