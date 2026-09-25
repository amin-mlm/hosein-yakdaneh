import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const steps = [
  { title: 'Consultation', body: 'We listen, survey the site, and define ambitions, budget, and timeline.' },
  { title: 'Concept Design', body: 'Mood, spatial strategy, and a curated palette of materials and light.' },
  { title: '3D Visualization', body: 'Photoreal renders so every surface is approved before it is built.' },
  { title: 'Technical Planning', body: 'Construction drawings, joinery details, MEP coordination, and costing.' },
  { title: 'Execution', body: 'Our craftsmen build under daily supervision and strict quality control.' },
  { title: 'Final Delivery', body: 'Styling, snagging, and a handover of a space ready to be lived in.' },
]

export function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="relative overflow-hidden border-y border-border bg-card/40 py-28 md:py-40">
      <div aria-hidden="true" className="blueprint-grid absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          index="05"
          eyebrow="Design Process"
          align="center"
          className="mx-auto"
          title={<span id="process-title">Six deliberate steps.</span>}
          description="A transparent workflow that keeps design intent intact from the first conversation to the final key."
        />

        <div className="relative mt-20">
        <Reveal className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px lg:block">
          <span className="block h-px w-full origin-left scale-x-0 bg-gradient-to-r from-gold/0 via-gold/60 to-gold/0 transition-transform delay-300 duration-[2200ms] ease-in-out in-[.is-visible]:scale-x-100" />
        </Reveal>
        <ol className="relative grid gap-12 md:grid-cols-3 md:gap-x-10 md:gap-y-16 lg:grid-cols-6 lg:gap-6">
          {steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 140} className="relative flex gap-6 lg:flex-col lg:gap-0">
              <div className="relative flex flex-col items-center lg:items-start">
                <span className="relative z-10 inline-flex size-12 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-background font-serif text-lg italic text-gold">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {i < steps.length - 1 ? (
                  <span aria-hidden="true" className="mt-2 h-full w-px bg-gradient-to-b from-gold/50 to-transparent md:hidden" />
                ) : null}
              </div>
              <div className="pb-2 lg:mt-8">
                <h3 className="font-serif text-2xl">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
        </div>
      </div>
    </section>
  )
}
