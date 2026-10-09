import Image from 'next/image'
import { asset } from '@/lib/asset'
import { toFa } from '@/lib/fa'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const facts = [
  { label: 'موقعیت', value: 'تهران، ایران' },
  { label: 'متراژ', value: '۲۴۰ متر مربع' },
  { label: 'دامنه کار', value: 'بازسازی کامل آپارتمان' },
  { label: 'مدت اجرا', value: '۹ ماه' },
]

const servicesProvided = ['طراحی داخلی', 'تصویرسازی سه‌بعدی', 'نجاری سفارشی', 'اجرا', 'نظارت کارگاهی']
const materials = ['مرمر استاتواریو و پورتورو', 'گردو با لبه طبیعی', 'آینه آنتیک', 'برنج براشد', 'لاک مشکی']

const gallery = [
  { src: '/projects/living-room.webp', alt: 'نشیمن با دیوار مرمر تلویزیون و لوسترهای لوله‌ای.', label: 'نشیمن' },
  { src: '/projects/kitchen.webp', alt: 'آشپزخانه با جزیره آبشاری مرمر.', label: 'آشپزخانه' },
  { src: '/projects/entry-hall.webp', alt: 'راهروی ورودی با ترکه‌های گردو و پنل‌های آینه.', label: 'ورودی' },
]

export function CaseStudy() {
  return (
    <section aria-labelledby="case-title" className="relative border-t border-border py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          index="۰۴"
          eyebrow="مطالعه موردی"
          title={
            <span id="case-title">
              اقامتگاه گردو و <em className="font-normal text-gold">مرمر</em>
            </span>
          }
        />

        <Reveal className="mt-14">
          <figure className="overflow-hidden rounded-2xl ring-1 ring-foreground/10">
            <Image
              src={asset('/projects/entry-hall.webp')}
              alt="راهروی ورودی با قاب گردوی لبه‌طبیعی، پارتیشن ترکه‌ای عمودی، پنل‌های آینه تمام‌قد و کنسول سفید براق با تندیس طلایی ارابه."
              width={1080}
              height={764}
              sizes="(min-width: 1280px) 1200px, 100vw"
              className="h-auto w-full"
            />
          </figure>
        </Reveal>

        <div className="mt-16 grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <h3 className="text-sm text-gold">نمای کلی</h3>
            <p className="mt-5 text-pretty text-xl font-light leading-loose md:text-2xl md:leading-loose">
              آپارتمانی قدیمی که به روایتی پیوسته از متریال‌ها بدل شد؛ جایی که گردو، مرمر و آینه از ورودی تا
              آشپزخانه و نشیمن ادامه می‌یابند.
            </p>
            <p className="mt-6 leading-loose text-muted-foreground">
              دیوارها برداشته شدند تا آشپزخانه به فضای نشیمن بپیوندد و پارتیشنی آینه‌ای اکنون نور ورودی را دوچندان
              می‌کند. تک‌تک سطوح، از جزیره آبشاری تا دیوارهای ترکه‌ای، در استودیو طراحی و زیر نظارت مستقیم ما اجرا
              شده‌اند.
            </p>
          </Reveal>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-7">
            <Reveal delay={100}>
              <dl className="grid grid-cols-2 gap-6">
                {facts.map((f) => (
                  <div key={f.label} className="border-t border-border pt-4">
                    <dt className="text-xs text-muted-foreground">{f.label}</dt>
                    <dd className="mt-2 text-lg font-light">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
            <Reveal delay={200} className="flex flex-col gap-8">
              <div>
                <h4 className="text-xs text-muted-foreground">خدمات ارائه‌شده</h4>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {servicesProvided.map((s) => (
                    <li key={s} className="rounded-full border border-border px-3 py-1 text-xs">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xs text-muted-foreground">متریال‌ها</h4>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {materials.map((m) => (
                    <li key={m} className="rounded-full border border-gold/30 px-3 py-1 text-xs text-stone">
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>

        <ul className="mt-16 grid gap-5 sm:grid-cols-3" aria-label="پیش‌نمایش گالری">
          {gallery.map((g, i) => (
            <Reveal as="li" key={g.src} delay={i * 120}>
              <figure className="group overflow-hidden rounded-xl ring-1 ring-foreground/10">
                <div className="overflow-hidden">
                  <Image
                    src={asset(g.src)}
                    alt={g.alt}
                    width={1080}
                    height={764}
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="h-auto w-full transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
                  />
                </div>
                <figcaption className="flex items-center justify-between px-4 py-3 text-sm text-muted-foreground">
                  <span>{g.label}</span>
                  <span className="text-sm text-gold">{toFa(`0${i + 1}`)}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
