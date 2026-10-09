'use client'

import Image from 'next/image'
import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { ArrowLeft } from 'lucide-react'
import { asset } from '@/lib/asset'
import { cn } from '@/lib/utils'
import { ContactTrigger } from './contact-trigger'
import { MagneticLink } from './magnetic-link'

const REVEAL_AT = 0.8

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const stickyRef = useRef<HTMLDivElement>(null)
  const [revealed, setRevealed] = useState(false)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    // Respect users who prefer less motion: show the final state right away.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      node.style.setProperty('--p', '1')
      setReduced(true)
      setRevealed(true)
      return
    }

    let frame = 0
    const update = () => {
      frame = 0
      // Measure against the sticky viewport height (not window.innerHeight) so
      // mobile URL-bar resizing doesn't shift the scroll distance.
      const viewport = stickyRef.current?.offsetHeight ?? window.innerHeight
      const distance = node.offsetHeight - viewport
      // Finish expanding a little before the sticky section releases, so the
      // revealed copy sits still for a moment before the page continues.
      const span = distance > 0 ? distance * 0.85 : 0
      const progress = span > 0 ? Math.min(Math.max(window.scrollY / span, 0), 1) : 1
      node.style.setProperty('--p', progress.toFixed(4))
      setRevealed(progress > REVEAL_AT)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <section
      id="top"
      ref={ref}
      aria-labelledby="hero-title"
      className={cn(
        'relative isolate bg-background',
        reduced ? 'h-auto' : 'h-[130svh] sm:h-[170svh] lg:h-[190svh]',
      )}
      style={{ '--p': 0 } as CSSProperties}
    >
      <div
        ref={stickyRef}
        className="sticky top-0 flex h-svh w-full items-center justify-center overflow-hidden"
      >
        {/* Full-bleed backdrop that fades away as the portrait expands. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20"
          style={{ opacity: 'calc(1 - var(--p))' }}
        >
          <Image
            src={asset('/projects/villa-exterior.webp')}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-background/75" />
        </div>

        <div aria-hidden="true" className="blueprint-grid absolute inset-0 -z-10 opacity-50" />
        <div
          aria-hidden="true"
          className="absolute -start-32 top-1/4 -z-10 size-[460px] rounded-full bg-gold/10 blur-3xl"
        />

        {/* Expanding media — the signature scroll-expansion effect. */}
        <figure
          className="relative z-0 overflow-hidden shadow-[0_50px_140px_-40px_rgba(0,0,0,0.9)] ring-1 ring-foreground/10"
          style={{
            width: 'calc(280px + (100vw - 280px) * var(--p))',
            height: 'calc(380px + (100svh - 380px) * var(--p))',
            borderRadius: 'calc(1.75rem * (1 - var(--p)))',
          }}
        >
          <Image
            src={asset('/projects/living-room.webp')}
            alt="نشیمن اقامتگاه غروب با لوسترهای لوله‌ای برنجی و مشکی، دیوار تلویزیون از مرمر پورتورو و ترکه‌های گردو در برابر منظره غروب."
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-background/60"
            style={{ opacity: 'calc(1 - var(--p) * 0.75)' }}
          />
        </figure>

        {/* Split wordmark that drifts outward and fades as the media expands. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center"
        >
          <div className="flex items-center justify-center gap-[0.18em]">
            <span
              className="text-[clamp(2.75rem,11vw,8rem)] font-extralight leading-none text-foreground [text-shadow:0_2px_30px_rgba(0,0,0,0.55)]"
              style={{
                transform: 'translate3d(calc(var(--p) * 26vw), 0, 0)',
                opacity: 'calc(1 - var(--p) * 1.15)',
              }}
            >
              حسین
            </span>
            <span
              className="text-[clamp(2.75rem,11vw,8rem)] font-extralight leading-none text-gold [text-shadow:0_2px_30px_rgba(0,0,0,0.55)]"
              style={{
                transform: 'translate3d(calc(var(--p) * -26vw), 0, 0)',
                opacity: 'calc(1 - var(--p) * 1.15)',
              }}
            >
              یکدانه
            </span>
          </div>
        </div>

        {/* Hero copy, revealed once the media has expanded. */}
        <div
          aria-hidden={!revealed}
          className="absolute inset-0 z-20 flex items-center justify-center px-6"
          style={{
            opacity: 'clamp(0, calc((var(--p) - 0.65) * 3), 1)',
            pointerEvents: revealed ? 'auto' : 'none',
          }}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,var(--background)_35%,transparent_85%)]"
          />
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <p className="flex items-center gap-4 text-sm text-gold">
              <span aria-hidden="true" className="h-px w-10 bg-gold/70" />
              طراحی · اجرا · نظارت
            </p>
            <h1
              id="hero-title"
              className="mt-7 text-balance text-4xl font-extralight leading-[1.35] sm:text-5xl xl:text-6xl"
            >
              فضاهایی که با <em className="font-normal text-gold">متریال</em>، نور و جزئیاتِ دقیق شکل می‌گیرند.
            </h1>
            <p className="mt-7 max-w-lg text-pretty leading-loose text-muted-foreground">
              گروه معماری و طراحی داخلی حسین یکدانه، از نخستین ایده تا تحویل نهایی همراه شماست؛ طراحی،
              اجرا و نظارت را تیم خودمان بر عهده می‌گیرد.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <MagneticLink href="#projects">
                مشاهده پروژه‌ها <ArrowLeft className="size-4" aria-hidden="true" />
              </MagneticLink>
              <ContactTrigger className="inline-flex items-center justify-center gap-3 rounded-full border border-foreground/25 px-7 py-3.5 text-sm font-medium text-foreground backdrop-blur-md transition-colors duration-500 ease-out hover:border-gold hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold">
                تماس با ما
              </ContactTrigger>
            </div>
          </div>
        </div>

        {/* Scroll cue, only while the media is still expanding. */}
        <div
          aria-hidden="true"
          className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-3 text-xs text-muted-foreground"
          style={{ opacity: 'clamp(0, calc(1 - var(--p) * 4), 1)' }}
        >
          پیمایش
          <span className="relative h-12 w-px overflow-hidden bg-foreground/15">
            <span className="animate-scroll-line absolute inset-0 bg-gold" />
          </span>
        </div>
      </div>
    </section>
  )
}
