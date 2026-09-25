import Image from 'next/image'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const facts = [
  { label: 'Location', value: 'Tehran, Iran' },
  { label: 'Area', value: '240 m²' },
  { label: 'Scope', value: 'Full apartment renovation' },
  { label: 'Timeline', value: '9 months' },
]

const servicesProvided = ['Interior design', '3D visualization', 'Custom joinery', 'Execution', 'Site supervision']
const materials = ['Statuario & Portoro marble', 'Live-edge walnut', 'Antique mirror', 'Brushed brass', 'Black lacquer']

const gallery = [
  { src: '/projects/living-room.png', alt: 'Living room with marble media wall and tube chandeliers.', label: 'Living' },
  { src: '/projects/kitchen.png', alt: 'Kitchen with waterfall marble island.', label: 'Kitchen' },
  { src: '/projects/entry-hall.png', alt: 'Entry hall with walnut slats and mirror panels.', label: 'Entry' },
]

export function CaseStudy() {
  return (
    <section aria-labelledby="case-title" className="relative border-t border-border py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          index="04"
          eyebrow="Case Study"
          title={
            <span id="case-title">
              The Walnut &amp; Marble <em className="text-gold">Residence</em>
            </span>
          }
        />

        <Reveal className="mt-14">
          <figure className="overflow-hidden rounded-2xl ring-1 ring-foreground/10">
            <Image
              src="/projects/entry-hall.png"
              alt="Entry hall with a live-edge walnut frame, vertical walnut slat screen, full-height mirror panels, and a white gloss console with a gilded chariot sculpture."
              width={1080}
              height={764}
              sizes="(min-width: 1280px) 1200px, 100vw"
              className="h-auto w-full"
            />
          </figure>
        </Reveal>

        <div className="mt-16 grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <h3 className="text-[0.7rem] uppercase tracking-[0.3em] text-gold">Overview</h3>
            <p className="mt-5 text-pretty font-serif text-2xl font-light leading-snug md:text-3xl">
              A dated apartment re-imagined as one continuous gallery of materials, where walnut, marble, and
              mirror flow from the entry through the kitchen and into the living room.
            </p>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Walls were opened to connect the kitchen with the living space, and a mirrored partition now doubles
              the light at the entrance. Every surface, from the waterfall island to the slatted screens, was drawn
              in-house and built under our direct supervision.
            </p>
          </Reveal>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-7">
            <Reveal delay={100}>
              <dl className="grid grid-cols-2 gap-6">
                {facts.map((f) => (
                  <div key={f.label} className="border-t border-border pt-4">
                    <dt className="text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">{f.label}</dt>
                    <dd className="mt-2 font-serif text-xl">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
            <Reveal delay={200} className="flex flex-col gap-8">
              <div>
                <h4 className="text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">Services provided</h4>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {servicesProvided.map((s) => (
                    <li key={s} className="rounded-full border border-border px-3 py-1 text-xs">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">Materials</h4>
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

        <ul className="mt-16 grid gap-5 sm:grid-cols-3" aria-label="Gallery preview">
          {gallery.map((g, i) => (
            <Reveal as="li" key={g.src} delay={i * 120}>
              <figure className="group overflow-hidden rounded-xl ring-1 ring-foreground/10">
                <div className="overflow-hidden">
                  <Image
                    src={g.src}
                    alt={g.alt}
                    width={1080}
                    height={764}
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="h-auto w-full transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
                  />
                </div>
                <figcaption className="flex items-center justify-between px-4 py-3 text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
                  <span>{g.label}</span>
                  <span className="font-serif text-sm italic normal-case tracking-normal text-gold">0{i + 1}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
