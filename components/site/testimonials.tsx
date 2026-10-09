'use client'

import { useRef } from 'react'
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react'
import { SectionHeading } from './section-heading'

const testimonials = [
  {
    quote:
      'حسین بهتر از خودمان فهمید که چگونه زندگی می‌کنیم. گردو و مرمر در سراسر آپارتمان جریان دارد و هنوز هر عصر، نور ما را شگفت‌زده می‌کند.',
    name: 'سارا و رضا مرادی',
    role: 'اقامتگاه خصوصی، تهران',
  },
  {
    quote:
      'از رندر تا تحویل، هر آن‌چه وعده داده شد همان ساخته شد. نظارت بسیار دقیق بود و هیچ جزئیاتی بدون کنترل پیش نرفت.',
    name: 'کامران احمدی',
    role: 'مدیرعامل، هلدینگ اروند',
  },
  {
    quote:
      'بوتیک ما سرانجام حس برندمان را دارد. مشتریان بیشتر می‌مانند و جزئیات را می‌بینند: برنج، سنگ و نحوه تابش نور.',
    name: 'لیلا فراهانی',
    role: 'بنیان‌گذار، مزون لیلا',
  },
  {
    quote:
      'گروه معماری کمیاب که با همان دقتی می‌سازد که طراحی می‌کند. نمای ویلای ما در غروب همان‌قدر زیباست که در تصویرسازی بود.',
    name: 'دکتر نوید کریمی',
    role: 'مالک ویلا، لواسان',
  },
]

export function Testimonials() {
  const trackRef = useRef<HTMLUListElement>(null)

  function scrollByCard(direction: 1 | -1) {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector('li')
    const amount = card ? card.getBoundingClientRect().width + 24 : track.clientWidth
    // In RTL, moving forward means scrolling toward negative scrollLeft.
    track.scrollBy({ left: -amount * direction, behavior: 'smooth' })
  }

  return (
    <section aria-labelledby="testimonials-title" className="py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            index="۰۶"
            eyebrow="نظرات کارفرمایان"
            title={<span id="testimonials-title">سخن کارفرمایان ما.</span>}
          />
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              className="inline-flex size-12 items-center justify-center rounded-full border border-border transition-colors hover:border-gold hover:text-gold"
            >
              <ArrowRight className="size-4" aria-hidden="true" />
              <span className="sr-only">نظر قبلی</span>
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              className="inline-flex size-12 items-center justify-center rounded-full border border-border transition-colors hover:border-gold hover:text-gold"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              <span className="sr-only">نظر بعدی</span>
            </button>
          </div>
        </div>

        <ul
          ref={trackRef}
          aria-label="نظرات کارفرمایان"
          className="mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((t) => (
            <li key={t.name} className="w-[88%] shrink-0 snap-start sm:w-[60%] lg:w-[calc((100%-3rem)/2.4)]">
              <figure className="flex h-full flex-col justify-between gap-10 rounded-2xl border border-border bg-gradient-to-bl from-card to-background p-8 md:p-10">
                <Quote className="size-8 -scale-x-100 text-gold" aria-hidden="true" />
                <blockquote className="text-pretty text-xl font-light leading-loose">{`«${t.quote}»`}</blockquote>
                <figcaption className="border-t border-border pt-5">
                  <p className="font-medium">{t.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{t.role}</p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
