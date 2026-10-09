import type { Metadata } from 'next'
import { servicePages } from './service-pages'

export function serviceMetadata(slug: keyof typeof servicePages): Metadata {
  const data = servicePages[slug]

  return {
    title: { absolute: data.title },
    description: data.description,
    alternates: { canonical: `/${data.slug}/` },
    openGraph: {
      type: 'website',
      url: `/${data.slug}/`,
      title: data.title,
      description: data.description,
      images: [{ url: data.ogImage, width: 1200, height: 630, alt: data.h1 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: data.title,
      description: data.description,
      images: [data.ogImage],
    },
  }
}
