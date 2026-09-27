'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { ArrowLeft } from 'lucide-react'
import { asset } from '@/lib/asset'
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
          src={asset('/projects/living-room.png')}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-35 blur-md"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_30%_40%,transparent_0%,var(--background)_75%)]"
      />
      <div aria-hidden="true" className="blueprint-grid absolute inset-0 -z-10 opacity-60" />
      <div
        aria-hidden="true"
        className="absolute -start-40 top-1/3 -z-10 size-[520px] rounded-full bg-gold/10 blur-3xl"
      />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 px-6 lg:grid-cols-12 lg:gap-10 lg:px-10">
        <div className="flex flex-col gap-8 lg:col-span-5">
          <p className="animate-in fade-in slide-in-from-bottom-4 flex items-center gap-4 text-sm text-gold duration-1000">
            <span aria-hidden="true" className="h-px w-10 bg-gold/70" />
            طراحی · اجرا · نظارت
          </p>
          <h1
            id="hero-title"
            className="animate-in fade-in slide-in-from-bottom-6 text-balance text-4xl font-extralight leading-[1.35] delay-150 duration-1000 fill-mode-both sm:text-5xl xl:text-6xl"
          >
            فضاهایی که با <em className="font-normal text-gold">متریال</em>، نور و دقتی آرام شکل می‌گیرند.
          </h1>
          <p className="animate-in fade-in slide-in-from-bottom-6 max-w-md text-pretty leading-loose text-muted-foreground delay-300 duration-1000 fill-mode-both">
            استودیوی معماری و طراحی داخلی حسین یکدانه، خانه‌ها و فضاهای کاری را از نخستین طرح تا تحویل نهایی
            خلق می‌کند؛ هر جزئیات به دست تیم خودمان طراحی، اجرا و نظارت می‌شود.
          </p>
          <div className="animate-in fade-in slide-in-from-bottom-6 flex flex-wrap items-center gap-4 delay-500 duration-1000 fill-mode-both">
            <MagneticLink href="#projects">
              مشاهده پروژه‌ها <ArrowLeft className="size-4" aria-hidden="true" />
            </MagneticLink>
            <MagneticLink href="#contact" variant="ghost">
              تماس با ما
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
              className="absolute -end-4 -top-4 h-full w-full rounded-2xl border border-gold/40 md:-end-6 md:-top-6"
            />
            <figure className="relative overflow-hidden rounded-2xl shadow-[0_40px_120px_-30px_rgba(0,0,0,0.8)] ring-1 ring-foreground/10">
              <Image
                src={asset('/projects/living-room.png')}
                alt="نشیمن اقامتگاه غروب با لوسترهای لوله‌ای برنجی و مشکی، دیوار تلویزیون از مرمر پورتورو و ترکه‌های گردو در برابر منظره غروب."
                width={1080}
                height={764}
                priority
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="h-auto w-full"
              />
              <figcaption className="absolute end-4 top-4 rounded-full border border-foreground/15 bg-background/40 px-4 py-2 text-xs backdrop-blur-md">
                اقامتگاه غروب · ۱۴۰۴
              </figcaption>
            </figure>
          </div>

          <div
            className="absolute -bottom-12 -start-4 hidden w-[38%] will-change-transform sm:block lg:-start-16"
            style={{
              transform:
                'translate3d(calc(var(--mx) * 16px), calc(var(--sy) * -0.16px + var(--my) * 12px), 0)',
            }}
          >
            <div className="animate-float-slow overflow-hidden rounded-xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)] ring-1 ring-foreground/15">
              <Image
                src={asset('/projects/kitchen.png')}
                alt="آشپزخانه آتلیه مرمر با جزیره آبشاری و چراغ‌های آویز."
                width={1080}
                height={764}
                sizes="30vw"
                className="h-auto w-full"
              />
            </div>
          </div>

          <div
            className="absolute -end-2 bottom-8 hidden rounded-xl border border-foreground/10 bg-background/50 p-5 backdrop-blur-xl md:block lg:-end-8"
            style={{ transform: 'translate3d(calc(var(--mx) * 20px), calc(var(--my) * 14px), 0)' }}
          >
            <p className="text-4xl font-extralight text-gold">۱۸۰+</p>
            <p className="mt-2 text-xs text-muted-foreground">فضای تحویل‌شده</p>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 text-xs text-muted-foreground transition-colors hover:text-gold"
      >
        پیمایش
        <span aria-hidden="true" className="relative h-12 w-px overflow-hidden bg-foreground/15">
          <span className="animate-scroll-line absolute inset-0 bg-gold" />
        </span>
      </a>
    </section>
  )
}
