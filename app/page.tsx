import { SiteHeader } from '@/components/site/site-header'
import { Hero } from '@/components/site/hero'
import { About } from '@/components/site/about'
import { Services } from '@/components/site/services'
import { Projects } from '@/components/site/projects'
import { CaseStudy } from '@/components/site/case-study'
import { Process } from '@/components/site/process'
import { Stats } from '@/components/site/stats'
import { Testimonials } from '@/components/site/testimonials'
import { Contact } from '@/components/site/contact'
import { SiteFooter } from '@/components/site/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <CaseStudy />
        <Process />
        <Stats />
        <Testimonials />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
