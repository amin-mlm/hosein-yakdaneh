'use client'

import { useRef, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

type MagneticLinkProps = {
  href: string
  children: ReactNode
  variant?: 'solid' | 'ghost'
  className?: string
}

export function MagneticLink({ href, children, variant = 'solid', className }: MagneticLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null)

  function handleMove(event: React.PointerEvent<HTMLAnchorElement>) {
    if (event.pointerType !== 'mouse') return
    const node = ref.current
    if (!node) return
    const rect = node.getBoundingClientRect()
    const x = event.clientX - rect.left - rect.width / 2
    const y = event.clientY - rect.top - rect.height / 2
    node.style.transform = `translate3d(${x * 0.18}px, ${y * 0.28}px, 0)`
  }

  function handleLeave() {
    if (ref.current) ref.current.style.transform = ''
  }

  return (
    <a
      ref={ref}
      href={href}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={cn(
        'inline-flex items-center justify-center gap-3 rounded-full px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] transition-[transform,background-color,color,border-color] duration-500 ease-out focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold',
        variant === 'solid'
          ? 'bg-gold text-primary-foreground hover:bg-stone'
          : 'border border-foreground/25 text-foreground backdrop-blur-md hover:border-gold hover:text-gold',
        className,
      )}
    >
      {children}
    </a>
  )
}
