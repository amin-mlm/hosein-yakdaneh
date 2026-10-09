'use client'

import { useEffect, useRef, useState } from 'react'
import { toFa } from '@/lib/fa'

const stats = [
  { value: 180, suffix: '+', label: 'پروژه اجراشده' },
  { value: 15, suffix: '', label: 'سال تجربه' },
  { value: 140, suffix: '+', label: 'کارفرمای راضی' },
  { value: 320, suffix: '', label: 'نظارت کارگاهی' },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    let frame = 0
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          setDisplay(value)
          return
        }
        const start = performance.now()
        const duration = 1800
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 4)
          setDisplay(Math.round(value * eased))
          if (progress < 1) frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )
    observer.observe(node)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [value])

  return (
    <span ref={ref} className="tabular-nums">
      <span aria-hidden="true">
        {toFa(display)}
        {suffix}
      </span>
      <span className="sr-only">
        {toFa(value)}
        {suffix}
      </span>
    </span>
  )
}

export function Stats() {
  return (
    <section aria-label="آمار گروه معماری حسین یکدانه" className="border-y border-border">
      <dl className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`flex flex-col gap-3 px-6 py-14 lg:px-10 lg:py-20 ${i % 2 === 1 ? 'border-s border-border' : ''} ${i > 1 ? 'border-t border-border lg:border-t-0' : ''} ${i === 2 ? 'lg:border-s' : ''}`}
          >
            <dt className="order-2 text-sm text-muted-foreground">{s.label}</dt>
            <dd className="order-1 text-5xl font-bold text-gold md:text-7xl">
              <Counter value={s.value} suffix={s.suffix} />
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
