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

// NOTE: phone number, Instagram handle and address are placeholders taken from
// the previous design — replace them with the real studio details.
export const addressQuery = '35.6892,51.3890'

export const contactChannels: ContactChannel[] = [
  {
    id: 'phone',
    label: 'تماس تلفنی',
    value: '۰۹۱۲ ۰۰۰ ۰۰۰۰',
    href: 'tel:+989120000000',
    hint: 'باز کردن برنامه تماس',
    ltr: true,
  },
  {
    id: 'sms',
    label: 'پیامک',
    value: '۰۹۱۲ ۰۰۰ ۰۰۰۰',
    href: 'sms:+989120000000',
    hint: 'ارسال پیام کوتاه',
    ltr: true,
  },
  {
    id: 'instagram',
    label: 'اینستاگرام',
    value: '@hosein.yekdaneh',
    href: 'https://instagram.com/hosein.yekdaneh',
    hint: 'نمونه‌کارها و پشت‌صحنه',
    ltr: true,
    external: true,
  },
  {
    id: 'address',
    label: 'نشانی استودیو',
    value: 'تهران، ایران',
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressQuery)}`,
    hint: 'مسیریابی در نقشه',
  },
]
