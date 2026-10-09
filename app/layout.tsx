import type { Metadata, Viewport } from 'next'
import { Vazirmatn } from 'next/font/google'
import { ContactModal } from '@/components/site/contact-modal'
import { SiteFooter } from '@/components/site/site-footer'
import { SiteHeader } from '@/components/site/site-header'
import { SiteStructuredData } from '@/components/site/structured-data'
import {
  ogImage,
  siteDescription,
  siteKeywords,
  siteName,
  siteTitle,
  siteUrl,
} from '@/lib/site'
import './globals.css'

const vazirmatn = Vazirmatn({
  subsets: ['arabic', 'latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-vazirmatn',
  display: 'swap',
  fallback: ['Arial', 'sans-serif'],
})

const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: '%s | حسین یکدانه',
  },
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: 'حسین یکدانه', url: `${siteUrl}/` }],
  creator: 'حسین یکدانه',
  publisher: siteName,
  category: 'معماری و طراحی داخلی',
  keywords: siteKeywords,
  openGraph: {
    type: 'website',
    url: '/',
    siteName,
    title: siteTitle,
    description: siteDescription,
    locale: 'fa_IR',
    images: [{ url: ogImage.url, width: ogImage.width, height: ogImage.height, alt: ogImage.alt }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: [ogImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: ['/favicon.ico'],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/manifest.webmanifest',
  appleWebApp: {
    capable: true,
    title: 'گروه معماری حسین یکدانه',
    statusBarStyle: 'black-translucent',
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  ...(googleVerification ? { verification: { google: googleVerification } } : {}),
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#1a1816',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fa" dir="rtl" className={`${vazirmatn.variable} bg-background`}>
      <body className="antialiased">
        <SiteStructuredData />
        <SiteHeader />
        {children}
        <SiteFooter />
        <ContactModal />
      </body>
    </html>
  )
}
