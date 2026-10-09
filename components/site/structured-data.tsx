import { contactChannels } from '@/lib/contact'
import type { FaqItem } from '@/lib/faq'
import type { ServicePage } from '@/lib/service-pages'
import { services } from '@/lib/services'
import { founderName, ogImage, siteDescription, siteName, siteUrl } from '@/lib/site'

function channel(id: string) {
  return contactChannels.find((item) => item.id === id)
}

function JsonLd({ graph }: { graph: Record<string, unknown>[] }) {
  const json = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(
    /</g,
    '\\u003c',
  )
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
}

function businessNode() {
  const phone = channel('phone')?.href.replace('tel:', '')
  const instagram = channel('instagram')?.href
  const address = channel('address')
  const [locality, ...streetParts] = (address?.value ?? '').split('،')

  return {
    '@type': ['ProfessionalService', 'HomeAndConstructionBusiness'],
    '@id': `${siteUrl}/#business`,
    name: siteName,
    alternateName: [
      founderName,
      'دفتر مهندسی معماری حسین یکدانه',
      'دفتر فنی مهندسی حسین یکدانه',
    ],
    url: `${siteUrl}/`,
    description: siteDescription,
    image: `${siteUrl}${ogImage.url}`,
    logo: `${siteUrl}/brand/logo.png`,
    telephone: phone,
    hasMap: address?.href,
    founder: { '@id': `${siteUrl}/#founder` },
    sameAs: instagram ? [instagram] : undefined,
    address: {
      '@type': 'PostalAddress',
      streetAddress: streetParts.join('،').trim() || address?.value,
      addressLocality: locality?.trim() || 'اصفهان',
      addressRegion: 'اصفهان',
      addressCountry: 'IR',
    },
    areaServed: [
      { '@type': 'City', name: 'اصفهان' },
      { '@type': 'Country', name: 'ایران' },
    ],
    knowsLanguage: ['fa'],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    knowsAbout: [
      'گروه معماری',
      'دفتر مهندسی معماری',
      'دفتر فنی مهندسی',
      'طراحی داخلی',
      'معماری',
      'بازسازی',
      'نظارت کارگاهی',
      'طراحی نما و محوطه',
      'اجرای کلید در دست',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'خدمات گروه معماری',
      itemListElement: services.map((service, index) => ({
        '@type': 'Offer',
        position: index + 1,
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.body,
          areaServed: 'ایران',
        },
      })),
    },
  }
}

// Site-wide identity graph. Rendered once in the root layout.
export function SiteStructuredData() {
  return (
    <JsonLd
      graph={[
        {
          '@type': 'WebSite',
          '@id': `${siteUrl}/#website`,
          url: `${siteUrl}/`,
          name: siteName,
          description: siteDescription,
          inLanguage: 'fa-IR',
          publisher: { '@id': `${siteUrl}/#business` },
        },
        {
          '@type': 'Person',
          '@id': `${siteUrl}/#founder`,
          name: founderName,
          jobTitle: 'معمار و طراح داخلی',
          worksFor: { '@id': `${siteUrl}/#business` },
          url: `${siteUrl}/`,
        },
        businessNode(),
      ]}
    />
  )
}

export function FaqStructuredData({ faqs }: { faqs: FaqItem[] }) {
  return (
    <JsonLd
      graph={[
        {
          '@type': 'FAQPage',
          '@id': `${siteUrl}/#faq`,
          mainEntity: faqs.map((item) => ({
            '@type': 'Question',
            name: item.q,
            acceptedAnswer: { '@type': 'Answer', text: item.a },
          })),
        },
      ]}
    />
  )
}

export function ServiceStructuredData({ page }: { page: ServicePage }) {
  const url = `${siteUrl}/${page.slug}/`

  return (
    <JsonLd
      graph={[
        {
          '@type': 'Service',
          '@id': `${url}#service`,
          name: page.h1,
          description: page.description,
          serviceType: page.navLabel,
          url,
          provider: { '@id': `${siteUrl}/#business` },
          areaServed: [
            { '@type': 'City', name: 'اصفهان' },
            { '@type': 'Country', name: 'ایران' },
          ],
        },
        {
          '@type': 'BreadcrumbList',
          '@id': `${url}#breadcrumb`,
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'خانه', item: `${siteUrl}/` },
            { '@type': 'ListItem', position: 2, name: page.navLabel, item: url },
          ],
        },
        {
          '@type': 'FAQPage',
          '@id': `${url}#faq`,
          mainEntity: page.faqs.map((item) => ({
            '@type': 'Question',
            name: item.q,
            acceptedAnswer: { '@type': 'Answer', text: item.a },
          })),
        },
      ]}
    />
  )
}
