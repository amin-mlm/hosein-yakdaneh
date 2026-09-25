'use client'

import { useRef } from 'react'
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react'
import { SectionHeading } from './section-heading'

const testimonials = [
  {
    quote:
      'Hosein understood how we live better than we did. The walnut and marble flow through the whole apartment, and every evening the light still surprises us.',
    name: 'Sara & Reza Moradi',
    role: 'Private residence, Tehran',
  },
  {
    quote:
      'From renders to handover, what was promised is exactly what was built. The supervision was meticulous and the site was never left to chance.',
    name: 'Kamran Ahmadi',
    role: 'CEO, Arvand Holdings',
  },
  {
    quote:
      'Our boutique finally feels like the brand. Customers stay longer, and they notice the details: the brass, the stone, the way the light falls.',
    name: 'Leila Farahani',
    role: 'Founder, Maison Leila',
  },
  {
    quote:
      'A rare studio that designs and builds with the same care. Our villa facade looks as good at dusk as it did in the visualization.',
    name: 'Dr. Navid Karimi',
    role: 'Villa owner, Lavasan',
  },
]

export function Testimonials() {
  const trackRef = useRef<HTMLUListElement>(null)

  function scrollByCard(direction: 1 | -1) {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector('li')
    const amount = card ? card.getBoundingClientRect().width + 24 : track.clientWidth
    track.scrollBy({ left: amount * direction, behavior: 'smooth' })
  }

  return (
    <section aria-labelledby="testimonials-title" className="py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            index="06"
            eyebrow="Testimonials"
            title={<span id="testimonials-title">Words from our clients.</span>}
          />
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              className="inline-flex size-12 items-center justify-center rounded-full border border-border transition-colors hover:border-gold hover:text-gold"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              <span className="sr-only">Previous testimonial</span>
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              className="inline-flex size-12 items-center justify-center rounded-full border border-border transition-colors hover:border-gold hover:text-gold"
            >
              <ArrowRight className="size-4" aria-hidden="true" />
              <span className="sr-only">Next testimonial</span>
            </button>
          </div>
        </div>

        <ul
          ref={trackRef}
          aria-label="Client testimonials"
          className="mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((t) => (
            <li
              key={t.name}
              className="w-[88%] shrink-0 snap-start sm:w-[60%] lg:w-[calc((100%-3rem)/2.4)]"
            >
              <figure className="flex h-full flex-col justify-between gap-10 rounded-2xl border border-border bg-gradient-to-br from-card to-background p-8 md:p-10">
                <Quote className="size-8 text-gold" aria-hidden="true" />
                <blockquote className="text-pretty font-serif text-2xl font-light leading-snug">
                  {`“${t.quote}”`}
                </blockquote>
                <figcaption className="border-t border-border pt-5">
                  <p className="font-medium">{t.name}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{t.role}</p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
