'use client'

import { useActionState } from 'react'
import { ArrowLeft, AtSign, Camera as Instagram, Mail, MapPin, Phone } from 'lucide-react'
import { submitInquiry, type ContactState } from '@/app/actions'
import { categories } from '@/lib/projects'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

const initialState: ContactState = { status: 'idle', message: '' }

const channels = [
  { icon: Phone, label: 'تلفن', value: '۰۹۱۲ ۰۰۰ ۰۰۰۰', href: 'tel:+989120000000', ltr: true },
  { icon: Mail, label: 'ایمیل', value: 'studio@yekdaneh.design', href: 'mailto:studio@yekdaneh.design', ltr: true },
  { icon: Instagram, label: 'اینستاگرام', value: '@hosein.yekdaneh', href: 'https://instagram.com/', ltr: true },
  { icon: AtSign, label: 'واتس‌اپ', value: 'پیام به استودیو', href: 'https://wa.me/989120000000', ltr: false },
]

const labelClass = 'text-xs text-muted-foreground'
const fieldClass =
  'w-full border-0 border-b border-border bg-transparent px-0 py-3 text-base text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-gold focus:outline-none focus:ring-0'

export function Contact() {
  const [state, formAction, pending] = useActionState(submitInquiry, initialState)

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative py-28 md:py-40">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:px-10">
        <div className="flex flex-col gap-10 lg:col-span-5">
          <SectionHeading
            index="۰۷"
            eyebrow="تماس"
            title={
              <span id="contact-title">
                بیایید فضای شما را <em className="font-normal text-gold">شکل دهیم</em>.
              </span>
            }
            description="چند نکته درباره پروژه‌تان با ما در میان بگذارید تا یک جلسه مشاوره خصوصی هماهنگ کنیم."
          />
          <Reveal>
            <ul className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
              {channels.map((c) => (
                <li key={c.label} className="bg-background">
                  <a
                    href={c.href}
                    className="group flex h-full flex-col gap-3 p-6 transition-colors hover:bg-card"
                    {...(c.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    <c.icon className="size-4 text-gold" aria-hidden="true" />
                    <span className={labelClass}>{c.label}</span>
                    <span
                      dir={c.ltr ? 'ltr' : undefined}
                      className="text-right text-sm transition-colors group-hover:text-gold"
                    >
                      <bdi>{c.value}</bdi>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <div
              role="img"
              aria-label="نقشه نمادین موقعیت استودیو در تهران"
              className="blueprint-grid relative flex aspect-[16/9] items-center justify-center overflow-hidden rounded-2xl border border-border bg-card"
            >
              <span aria-hidden="true" className="absolute start-[18%] top-0 h-full w-px bg-gold/15" />
              <span aria-hidden="true" className="absolute inset-x-0 top-[62%] h-px bg-gold/15" />
              <span aria-hidden="true" className="absolute start-[55%] top-0 h-full w-px -rotate-12 bg-foreground/10" />
              <span className="relative flex flex-col items-center gap-2">
                <span className="relative flex size-12 items-center justify-center rounded-full bg-gold text-primary-foreground">
                  <span aria-hidden="true" className="absolute inset-0 animate-ping rounded-full bg-gold/40" />
                  <MapPin className="relative size-5" aria-hidden="true" />
                </span>
                <span className="rounded-full bg-background/70 px-4 py-1.5 text-xs backdrop-blur">
                  استودیو · تهران، ایران
                </span>
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={150} className="lg:col-span-7">
          <form
            action={formAction}
            className="flex h-full flex-col gap-8 rounded-2xl border border-border bg-card/50 p-8 backdrop-blur md:p-12"
          >
            <div className="grid gap-8 md:grid-cols-2">
              <label className="flex flex-col gap-1">
                <span className={labelClass}>نام و نام خانوادگی</span>
                <input name="name" required minLength={2} maxLength={100} autoComplete="name" placeholder="نام شما" className={fieldClass} />
              </label>
              <label className="flex flex-col gap-1">
                <span className={labelClass}>ایمیل</span>
                <input
                  name="email"
                  type="email"
                  dir="ltr"
                  required
                  maxLength={200}
                  autoComplete="email"
                  placeholder="you@example.com"
                  className={`${fieldClass} text-right`}
                />
              </label>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <label className="flex flex-col gap-1">
                <span className={labelClass}>نوع پروژه</span>
                <select name="type" defaultValue={categories[0]} className={`${fieldClass} [&>option]:bg-popover`}>
                  {categories.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </label>
              <label className="flex flex-col gap-1">
                <span className={labelClass}>شماره تماس (اختیاری)</span>
                <input
                  name="phone"
                  type="tel"
                  dir="ltr"
                  maxLength={30}
                  autoComplete="tel"
                  placeholder="۰۹۱۲ ۰۰۰ ۰۰۰۰"
                  className={`${fieldClass} text-right`}
                />
              </label>
            </div>
            <label className="flex flex-1 flex-col gap-1">
              <span className={labelClass}>درباره پروژه شما</span>
              <textarea
                name="message"
                required
                minLength={10}
                maxLength={3000}
                rows={5}
                placeholder="فضا، متراژ، زمان‌بندی و حسی که در جست‌وجوی آن هستید…"
                className={`${fieldClass} resize-none leading-loose`}
              />
            </label>
            <div className="flex flex-col-reverse items-start justify-between gap-6 sm:flex-row sm:items-center">
              <p
                role="status"
                aria-live="polite"
                className={`text-sm ${state.status === 'error' ? 'text-destructive' : 'text-gold'}`}
              >
                {state.message}
              </p>
              <button
                type="submit"
                disabled={pending}
                className="inline-flex shrink-0 items-center gap-3 rounded-full bg-gold px-8 py-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-stone disabled:opacity-60"
              >
                {pending ? 'در حال ارسال…' : 'ارسال درخواست'}
                <ArrowLeft className="size-4" aria-hidden="true" />
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
