import { faqs } from '@/lib/faq'
import { FaqList } from './faq-list'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="relative border-t border-border py-28 md:py-40">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-12 lg:gap-20 lg:px-10">
        <div className="lg:col-span-5">
          <SectionHeading
            index="۰۸"
            eyebrow="پرسش‌های پرتکرار"
            title={<span id="faq-title">پرسش‌ها و پاسخ‌ها.</span>}
            description="پاسخ چند پرسش رایج درباره خدمات، محدوده فعالیت و روند همکاری با گروه معماری."
          />
        </div>
        <Reveal className="lg:col-span-7">
          <FaqList items={faqs} />
        </Reveal>
      </div>
    </section>
  )
}
