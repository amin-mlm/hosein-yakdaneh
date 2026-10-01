'use client'

import type { ReactNode } from 'react'
import { openContactModal } from '@/lib/contact'

type ContactTriggerProps = {
  children: ReactNode
  className?: string
  onClick?: () => void
}

export function ContactTrigger({ children, className, onClick }: ContactTriggerProps) {
  return (
    <button
      type="button"
      onClick={() => {
        onClick?.()
        openContactModal()
      }}
      className={className}
    >
      {children}
    </button>
  )
}
