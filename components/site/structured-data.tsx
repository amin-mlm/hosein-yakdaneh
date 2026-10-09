import { contactChannels } from '@/lib/contact'
import { faqs } from '@/lib/faq'
import { services } from '@/lib/services'
import { founderName, ogImage, siteDescription, siteName, siteUrl } from '@/lib/site'

function channel(id: string) {
  return contactChannels.find((item) => item.id === id)
}

// Renders JSON-LD (schema.org) describing the studio, its services and the FAQ.
export function StructuredData() {
  const phone = channel('phone')?.href.replace('tel:', '')
  const instagram = channel('instagram')?.href
  const addressValue = channel('address')?.value ?? ''
  const [locality, ...streetParts] = addressValue.split('،')

  const graph = [
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
      url: `${siteUrl}/`,
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${siteUrl}/#business`,
      name: siteName,
      alternateName: founderName,
      url: `${siteUrl}/`,
      description: siteDescription,
      image: `${siteUrl}${ogImage.url}`,
      logo: `${siteUrl}/brand/logo.png`,
      telephone: phone,
      founder: { '@id': `${siteUrl}/#founder` },
      sameAs: instagram ? [instagram] : undefined,
      address: {
        '@type': 'PostalAddress',
        streetAddress: streetParts.join('،').trim() || addressValue,
        addressLocality: locality?.trim() || 'اصفهان',
        addressRegion: 'اصفهان',
        addressCountry: 'IR',
      },
      areaServed: { '@type': 'Country', name: 'ایران' },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
          opens: '09:00',
          closes: '18:00',
        },
      ],
      knowsAbout: [
        'طراحی داخلی',
        'معماری',
        'بازسازی',
        'نظارت کارگاهی',
        'طراحی نما و محوطه',
        'اجرای کلید در دست',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'خدمات استودیو',
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
    },
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/#faq`,
      mainEntity: faqs.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ]

  const json = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(
    /</g,
    '\\u003c',
  )

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
}
