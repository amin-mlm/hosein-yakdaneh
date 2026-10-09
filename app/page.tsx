import type { Metadata } from 'next'
import { Hero } from '@/components/site/hero'
import { About } from '@/components/site/about'
import { Services } from '@/components/site/services'
import { Projects } from '@/components/site/projects'
import { CaseStudy } from '@/components/site/case-study'
import { Process } from '@/components/site/process'
import { Stats } from '@/components/site/stats'
import { Testimonials } from '@/components/site/testimonials'
import { Faq } from '@/components/site/faq'
import { FaqStructuredData } from '@/components/site/structured-data'
import { faqs } from '@/lib/faq'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
}

export default function Page() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Projects />
      <CaseStudy />
      <Process />
      <Stats />
      <Testimonials />
      <Faq />
      <FaqStructuredData faqs={faqs} />
    </main>
  )
}
