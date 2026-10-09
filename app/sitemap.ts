import type { MetadataRoute } from 'next'
import { servicePageList } from '@/lib/service-pages'
import { siteUrl } from '@/lib/site'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    {
      url: `${siteUrl}/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...servicePageList.map((page) => ({
      url: `${siteUrl}/${page.slug}/`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}
