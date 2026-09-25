import Image from 'next/image'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const pillars = [
  {
    title: 'Philosophy',
    body: 'Restraint over ornament. We let natural stone, timber, and light carry the emotion of a space.',
  },
  {
    title: 'Experience',
    body: 'Over fifteen years delivering residences, offices, and retail interiors across Iran.',
  },
  {
    title: 'Process',
    body: 'One accountable team from concept and 3D visualization to execution and site supervision.',
  },
]

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative py-28 md:py-40">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:gap-20 lg:px-10">
        <div className="lg:col-span-5">
          <Reveal className="relative">
            <div aria-hidden="true" className="absolute -bottom-5 -left-5 h-full w-full rounded-2xl border border-gold/30" />
            <div className="relative overflow-hidden rounded-2xl ring-1 ring-foreground/10">
              <Image
                src="/portrait.png"
                alt="Portrait of Hosein Yekdaneh in the studio."
                width={1122}
                height={1402}
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="h-auto w-full"
              />
            </div>
            <div className="absolute -right-3 top-10 rounded-xl border border-foreground/10 bg-background/60 px-5 py-4 backdrop-blur-xl md:-right-8">
              <p className="font-serif text-lg italic">Hosein Yekdaneh</p>
              <p className="text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">Founder &amp; Principal</p>
            </div>
          </Reveal>
        </div>

        <div className="flex flex-col justify-center gap-12 lg:col-span-7">
          <SectionHeading
            index="01"
            eyebrow="The Studio"
            title={
              <span id="about-title">
                Architecture that feels <em className="text-gold">inevitable</em>, crafted to be lived in.
              </span>
            }
            description="We began as a small atelier obsessed with how a room changes from morning to night. Today we design, build, and supervise complete environments, yet every project still starts with the same question: how should this space make you feel?"
          />
          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 120} className="bg-background p-7">
                <p className="font-serif text-sm italic text-gold">0{i + 1}</p>
                <h3 className="mt-3 font-serif text-2xl">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pillar.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
