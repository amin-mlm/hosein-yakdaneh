import type { Metadata } from 'next'
import { ServicePage } from '@/components/site/service-page'
import { serviceMetadata } from '@/lib/service-metadata'
import { servicePages } from '@/lib/service-pages'

export const metadata: Metadata = serviceMetadata('renovation')

export default function Page() {
  return <ServicePage page={servicePages['renovation']} />
}
