import { faqs } from '@/lib/faq'
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
            description="پاسخ چند پرسش رایج درباره خدمات، محدوده فعالیت و روند همکاری با گروه معماری حسین یکدانه."
          />
        </div>
        <Reveal className="lg:col-span-7">
          <ul className="flex flex-col gap-px overflow-hidden rounded-2xl border border-border bg-border">
            {faqs.map((item) => (
              <li key={item.q} className="bg-background">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 p-6 transition-colors hover:bg-card md:p-7 [&::-webkit-details-marker]:hidden">
                    <span className="text-base font-light md:text-lg">{item.q}</span>
                    <span
                      aria-hidden="true"
                      className="relative inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold"
                    >
                      <span className="absolute h-px w-3 bg-current" />
                      <span className="absolute h-3 w-px bg-current transition-transform duration-300 group-open:rotate-90 group-open:opacity-0" />
                    </span>
                  </summary>
                  <div className="px-6 pb-6 md:px-7 md:pb-7">
                    <p className="text-sm leading-loose text-muted-foreground">{item.a}</p>
                  </div>
                </details>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
