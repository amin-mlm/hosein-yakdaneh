'use client'

import { useEffect, useRef, useState } from 'react'
import { Camera as Instagram, MapPin, MessageSquare, Phone, X } from 'lucide-react'
import { CONTACT_EVENT, addressQuery, contactChannels } from '@/lib/contact'
import { cn } from '@/lib/utils'

const icons = [Phone, MessageSquare, Instagram, MapPin]

const itemClass =
  'group flex h-full flex-col gap-5 p-7 transition-colors hover:bg-card focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-gold'

export function ContactModal() {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [mapHref, setMapHref] = useState(
    contactChannels.find((channel) => channel.id === 'address')?.href ?? '',
  )

  // Prefer Apple Maps on iOS so the link opens the native Maps app.
  useEffect(() => {
    const isIOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
    if (isIOS) {
      setMapHref(
        `https://maps.apple.com/?ll=${encodeURIComponent(addressQuery)}&q=${encodeURIComponent('استودیو حسین یکدانه')}`,
      )
    }
  }, [])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    const handleOpen = () => {
      if (!dialog.open) dialog.showModal()
    }
    window.addEventListener(CONTACT_EVENT, handleOpen)
    return () => window.removeEventListener(CONTACT_EVENT, handleOpen)
  }, [])

  function close() {
    dialogRef.current?.close()
  }

  const channels = contactChannels.map((channel, index) => ({
    ...channel,
    icon: icons[index] ?? Phone,
    href: channel.id === 'address' ? mapHref : channel.href,
  }))

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="contact-modal-title"
      onClick={(event) => {
        if (event.target === event.currentTarget) close()
      }}
      className="m-auto max-h-[92svh] w-[min(640px,92vw)] overflow-y-auto rounded-3xl border border-border bg-popover p-0 text-foreground shadow-2xl backdrop:bg-background/80 backdrop:backdrop-blur-sm open:animate-in open:fade-in open:zoom-in-95"
    >
      <div className="relative overflow-hidden border-b border-border">
        <div aria-hidden="true" className="blueprint-grid absolute inset-0 opacity-40" />
        <div
          aria-hidden="true"
          className="absolute -end-16 -top-24 size-56 rounded-full bg-gold/10 blur-3xl"
        />
        <div className="relative flex items-start justify-between gap-6 p-7 md:p-9">
          <div>
            <div className="flex items-center gap-4 text-sm text-gold">
              <span className="text-base font-light">۰۷</span>
              <span aria-hidden="true" className="h-px w-10 bg-gold/60" />
              <span>تماس</span>
            </div>
            <h2 id="contact-modal-title" className="mt-5 text-2xl font-light md:text-3xl">
              راه‌های تماس با <em className="font-normal text-gold">خانه معماری</em>
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-loose text-muted-foreground">
              از هر راهی که راحت‌ترید با ما در تماس باشید؛ برای هماهنگی جلسه مشاوره یا بازدید از پروژه‌ها.
            </p>
          </div>
          <button
            type="button"
            onClick={close}
            className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-border transition-colors hover:border-gold hover:text-gold"
          >
            <X className="size-4" aria-hidden="true" />
            <span className="sr-only">بستن</span>
          </button>
        </div>
      </div>

      <ul className="grid gap-px bg-border sm:grid-cols-2">
        {channels.map((channel) => (
          <li key={channel.label} className="bg-popover">
            <a
              href={channel.href}
              className={itemClass}
              {...(channel.external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
            >
              <span className="inline-flex size-11 items-center justify-center rounded-full border border-gold/30 text-gold transition-colors duration-500 group-hover:bg-gold group-hover:text-primary-foreground">
                <channel.icon className="size-5" aria-hidden="true" />
              </span>
              <span className="flex flex-col gap-1.5">
                <span className="text-xs text-muted-foreground">{channel.label}</span>
                <span
                  dir={channel.ltr ? 'ltr' : undefined}
                  className={cn(
                    'text-base transition-colors group-hover:text-gold',
                    channel.ltr && 'text-right',
                  )}
                >
                  <bdi>{channel.value}</bdi>
                </span>
                <span className="mt-1 text-xs text-gold/80">{channel.hint}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>

      <p className="border-t border-border p-5 text-center text-xs text-muted-foreground">
        پاسخ‌گویی شنبه تا پنجشنبه، ۹ صبح تا ۶ عصر
      </p>
    </dialog>
  )
}
