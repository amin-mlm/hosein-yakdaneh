'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { MagneticLink } from './magnetic-link'

export function Hero() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        node.style.setProperty('--sy', String(Math.min(window.scrollY, window.innerHeight * 1.2)))
      })
    }
    const onPointer = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return
      const x = (event.clientX / window.innerWidth - 0.5) * 2
      const y = (event.clientY / window.innerHeight - 0.5) * 2
      node.style.setProperty('--mx', x.toFixed(3))
      node.style.setProperty('--my', y.toFixed(3))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    node.addEventListener('pointermove', onPointer)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      node.removeEventListener('pointermove', onPointer)
    }
  }, [])

  return (
    <section
      id="top"
      ref={ref}
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-svh items-center overflow-hidden pb-24 pt-32 [--mx:0] [--my:0] [--sy:0]"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 will-change-transform"
        style={{ transform: 'translate3d(0, calc(var(--sy) * 0.3px), 0) scale(1.15)' }}
      >
        <Image
          src="/projects/living-room.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-35 blur-md"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_70%_40%,transparent_0%,var(--background)_75%)]"
      />
      <div aria-hidden="true" className="blueprint-grid absolute inset-0 -z-10 opacity-60" />
      <div
        aria-hidden="true"
        className="absolute -left-40 top-1/3 -z-10 size-[520px] rounded-full bg-gold/10 blur-3xl"
      />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 px-6 lg:grid-cols-12 lg:gap-10 lg:px-10">
        <div className="flex flex-col gap-8 lg:col-span-5">
          <p className="animate-in fade-in slide-in-from-bottom-4 flex items-center gap-4 text-xs uppercase tracking-[0.32em] text-gold duration-1000">
            <span aria-hidden="true" className="h-px w-10 bg-gold/70" />
            Design · Execution · Supervision
          </p>
          <h1
            id="hero-title"
            className="animate-in fade-in slide-in-from-bottom-6 text-balance font-serif text-5xl font-light leading-[0.98] delay-150 duration-1000 fill-mode-both sm:text-6xl xl:text-7xl"
          >
            Spaces shaped by <em className="text-gold">material</em>, light &amp; quiet precision.
          </h1>
          <p className="animate-in fade-in slide-in-from-bottom-6 max-w-md text-pretty leading-relaxed text-muted-foreground delay-300 duration-1000 fill-mode-both">
            Hosein Yekdaneh is an architecture and interior design studio crafting residences and workplaces
            from first sketch to final handover, with every detail designed, built, and supervised in-house.
          </p>
          <div className="animate-in fade-in slide-in-from-bottom-6 flex flex-wrap items-center gap-4 delay-500 duration-1000 fill-mode-both">
            <MagneticLink href="#projects">
              View Projects <ArrowRight className="size-4" aria-hidden="true" />
            </MagneticLink>
            <MagneticLink href="#contact" variant="ghost">
              Contact
            </MagneticLink>
          </div>
        </div>

        <div className="relative lg:col-span-7">
          <div
            className="relative will-change-transform"
            style={{
              transform:
                'translate3d(calc(var(--mx) * -10px), calc(var(--sy) * -0.06px + var(--my) * -8px), 0)',
            }}
          >
            <div
              aria-hidden="true"
              className="absolute -right-4 -top-4 h-full w-full rounded-2xl border border-gold/40 md:-right-6 md:-top-6"
            />
            <figure className="relative overflow-hidden rounded-2xl shadow-[0_40px_120px_-30px_rgba(0,0,0,0.8)] ring-1 ring-foreground/10">
              <Image
                src="/projects/living-room.png"
                alt="Sunset Residence living room with brass-and-black tube chandeliers, Portoro marble media wall, and walnut slats against a sunset view."
                width={1080}
                height={764}
                priority
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="h-auto w-full"
              />
              <figcaption className="absolute right-4 top-4 rounded-full border border-foreground/15 bg-background/40 px-4 py-2 text-[0.65rem] uppercase tracking-[0.25em] backdrop-blur-md">
                Sunset Residence · 2025
              </figcaption>
            </figure>
          </div>

          <div
            className="absolute -bottom-12 -left-4 hidden w-[38%] will-change-transform sm:block lg:-left-16"
            style={{
              transform:
                'translate3d(calc(var(--mx) * 16px), calc(var(--sy) * -0.16px + var(--my) * 12px), 0)',
            }}
          >
            <div className="animate-float-slow overflow-hidden rounded-xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)] ring-1 ring-foreground/15">
              <Image
                src="/projects/kitchen.png"
                alt="Marble Atelier Kitchen with waterfall island and pendant lights."
                width={1080}
                height={764}
                sizes="30vw"
                className="h-auto w-full"
              />
            </div>
          </div>

          <div
            className="absolute -right-2 bottom-8 hidden rounded-xl border border-foreground/10 bg-background/50 p-5 backdrop-blur-xl md:block lg:-right-8"
            style={{ transform: 'translate3d(calc(var(--mx) * 20px), calc(var(--my) * 14px), 0)' }}
          >
            <p className="font-serif text-4xl font-light text-gold">180+</p>
            <p className="mt-1 text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">Spaces delivered</p>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 text-[0.6rem] uppercase tracking-[0.35em] text-muted-foreground transition-colors hover:text-gold"
      >
        Scroll
        <span aria-hidden="true" className="relative h-12 w-px overflow-hidden bg-foreground/15">
          <span className="animate-scroll-line absolute inset-0 bg-gold" />
        </span>
      </a>
    </section>
  )
}
