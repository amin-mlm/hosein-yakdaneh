import { toFa } from '@/lib/fa'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const steps = [
  { title: 'مشاوره', body: 'گوش می‌دهیم، از محل بازدید می‌کنیم و اهداف، بودجه و زمان‌بندی را مشخص می‌کنیم.' },
  { title: 'طراحی مفهومی', body: 'تعیین روح فضا، راهبرد چیدمان و پالت متریال و نور.' },
  { title: 'تصویرسازی سه‌بعدی', body: 'رندرهای واقع‌نما تا هر جزئیات، پیش از ساخت تأیید شود.' },
  { title: 'برنامه‌ریزی فنی', body: 'نقشه‌های اجرایی، جزئیات نجاری، هماهنگی تأسیسات و برآورد هزینه.' },
  { title: 'اجرا', body: 'استادکاران ما زیر نظارت روزانه و کنترل کیفیت دقیق کار می‌کنند.' },
  { title: 'تحویل نهایی', body: 'چیدمان، رفع نواقص و تحویل فضایی آماده برای زندگی.' },
]

export function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="relative overflow-hidden border-y border-border bg-card/40 py-28 md:py-40">
      <div aria-hidden="true" className="blueprint-grid absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          index="۰۵"
          eyebrow="فرایند طراحی"
          align="center"
          className="mx-auto"
          title={<span id="process-title">شش گام سنجیده.</span>}
          description="روندی شفاف که ایده طراحی را از نخستین گفت‌وگو تا تحویل کلید حفظ می‌کند."
        />

        <div className="relative mt-20">
          <Reveal className="pointer-events-none absolute inset-x-0 top-6 hidden h-px lg:block">
            <span className="block h-px w-full origin-right scale-x-0 bg-gradient-to-l from-gold/0 via-gold/60 to-gold/0 transition-transform delay-300 duration-[2200ms] ease-in-out in-[.is-visible]:scale-x-100" />
          </Reveal>
          <ol className="relative grid gap-12 md:grid-cols-3 md:gap-x-10 md:gap-y-16 lg:grid-cols-6 lg:gap-6">
            {steps.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 140} className="relative flex gap-6 lg:flex-col lg:gap-0">
                <div className="relative flex flex-col items-center lg:items-start">
                  <span className="relative z-10 inline-flex size-12 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-background text-lg font-light text-gold">
                    {toFa(String(i + 1).padStart(2, '0'))}
                  </span>
                  {i < steps.length - 1 ? (
                    <span aria-hidden="true" className="mt-2 h-full w-px bg-gradient-to-b from-gold/50 to-transparent md:hidden" />
                  ) : null}
                </div>
                <div className="pb-2 lg:mt-8">
                  <h3 className="text-xl font-light">{step.title}</h3>
                  <p className="mt-2 text-sm leading-loose text-muted-foreground">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
