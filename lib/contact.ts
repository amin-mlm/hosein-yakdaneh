// Shared contact details plus a tiny event bus used to open the contact modal
// from anywhere on the page (header, hero, footer).

export const CONTACT_EVENT = 'yekdaneh:open-contact'

export function openContactModal() {
  if (typeof window === 'undefined') return
  window.dispatchEvent(new Event(CONTACT_EVENT))
}

export type ContactChannel = {
  id: 'phone' | 'sms' | 'instagram' | 'address'
  label: string
  value: string
  href: string
  hint: string
  ltr?: boolean
  external?: boolean
}

export const contactChannels: ContactChannel[] = [
  {
    id: 'phone',
    label: 'تماس تلفنی',
    value: '۰۹۱۳ ۱۱۳ ۸۴۰۶',
    href: 'tel:+989131138406',
    hint: 'باز کردن برنامه تماس',
    ltr: true,
  },
  {
    id: 'sms',
    label: 'پیامک',
    value: '۰۹۱۳ ۱۱۳ ۸۴۰۶',
    href: 'sms:+989131138406',
    hint: 'ارسال پیام کوتاه',
    ltr: true,
  },
  {
    id: 'instagram',
    label: 'اینستاگرام',
    value: '@hosein_yekdaneh',
    href: 'https://www.instagram.com/hosein_yekdaneh',
    hint: 'نمونه‌کارها و پشت‌صحنه',
    ltr: true,
    external: true,
  },
  {
    id: 'address',
    label: 'نشانی شرکت',
    value: 'اصفهان، شهید باهنر، بین گلبرگ و هدایت',
    href: 'https://nshn.ir/25_bZ6VQPxai3i',
    hint: 'مسیریابی در نقشه',
  },
]
