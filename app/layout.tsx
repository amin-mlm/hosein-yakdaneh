import type { Metadata, Viewport } from 'next'
import { Vazirmatn } from 'next/font/google'
import { ContactModal } from '@/components/site/contact-modal'
import './globals.css'

const vazirmatn = Vazirmatn({
  subsets: ['arabic', 'latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-vazirmatn',
  display: 'swap',
  fallback: ['Arial', 'sans-serif'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://amin-mlm.github.io/hosein-yakdaneh/'),
  title: 'حسین یکدانه | معمار و طراح داخلی',
  description:
    'استودیوی معماری و طراحی داخلی حسین یکدانه؛ طراحی، اجرا و نظارت فضاهای مسکونی، تجاری و اداری با تمرکز بر متریال، نور و کیفیت اجرا.',
  generator: 'v0.app',
  openGraph: {
    title: 'حسین یکدانه | معمار و طراح داخلی',
    description: 'طراحی، اجرا و نظارت فضاهای داخلی، نما و محوطه.',
    locale: 'fa_IR',
    images: ['projects/living-room.png'],
  },
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
        {children}
        <ContactModal />
      </body>
    </html>
  )
}
