import { ArrowUpLeft, Compass, Hammer, HardHat, Home, Lamp, PenTool } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const services = [
  { icon: Lamp, title: 'طراحی داخلی', body: 'برنامه‌ریزی فضا، پالت متریال، طراحی نورپردازی و نجاری سفارشی.' },
  { icon: Home, title: 'طراحی نما و محوطه', body: 'نما، محوطه‌سازی و فضای زندگی بیرونی که زبان طراحی داخلی را ادامه می‌دهند.' },
  { icon: Hammer, title: 'اجرای داخلی', body: 'اجرای کلید در دست با استادکاران زبده، از سنگ‌کاری تا نازک‌کاری.' },
  { icon: HardHat, title: 'نظارت پروژه', body: 'کنترل کیفیت در محل، زمان‌بندی و هماهنگی پیمانکاران.' },
  { icon: Compass, title: 'بازسازی', body: 'دگرگونی خانه‌ها و دفاتر موجود، با احترام به ساختار آن‌ها.' },
  { icon: PenTool, title: 'مشاوره طراحی', body: 'جلسات متمرکز برای انتخاب متریال، چیدمان و جهت‌گیری طراحی.' },
]

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="relative border-y border-border bg-card/40 py-28 md:py-40">
      <div aria-hidden="true" className="blueprint-grid absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            index="۰۲"
            eyebrow="خدمات"
            title={<span id="services-title">رویکردی جامع، از ایده تا تحویل.</span>}
          />
          <Reveal className="max-w-sm text-sm leading-loose text-muted-foreground">
            ما را برای یک تخصص یا تمام مسیر همراه کنید؛ در هر حال، یک استودیو پاسخگوی نتیجه خواهد بود.
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 [perspective:1200px]">
          {services.map((service, i) => (
            <Reveal as="li" key={service.title} delay={(i % 3) * 110}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-border bg-background/70 p-8 transition-[transform,border-color,box-shadow] duration-700 ease-out [transform-style:preserve-3d] hover:[transform:rotateX(4deg)_translateY(-8px)] hover:border-gold/40 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.9)]">
                <div
                  aria-hidden="true"
                  className="absolute -end-16 -top-16 size-40 rounded-full bg-gold/0 blur-2xl transition-colors duration-700 group-hover:bg-gold/15"
                />
                <div className="flex items-start justify-between">
                  <span className="inline-flex size-12 items-center justify-center rounded-full border border-gold/30 text-gold transition-colors duration-500 group-hover:bg-gold group-hover:text-primary-foreground">
                    <service.icon className="size-5" aria-hidden="true" />
                  </span>
                  <ArrowUpLeft
                    aria-hidden="true"
                    className="size-5 text-muted-foreground transition-all duration-500 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gold"
                  />
                </div>
                <h3 className="mt-10 text-2xl font-light">{service.title}</h3>
                <p className="mt-3 text-sm leading-loose text-muted-foreground">{service.body}</p>
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 start-0 h-px w-full origin-right scale-x-0 bg-gold transition-transform duration-700 group-hover:scale-x-100"
                />
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
