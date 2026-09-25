import { navLinks } from '@/lib/nav'
import { Wordmark } from './wordmark'

export function SiteFooter() {
  const year = new Intl.DateTimeFormat('fa-IR', { year: 'numeric' }).format(new Date())

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <p className="text-balance text-5xl font-extralight leading-snug md:text-8xl md:leading-snug">
          ساخته‌شده با <em className="font-normal text-gold">اندیشه</em>.
        </p>
        <div className="mt-16 flex flex-col justify-between gap-10 border-t border-border pt-10 md:flex-row md:items-center">
          <Wordmark />
          <nav aria-label="ناوبری پانویس">
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-gold">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="mt-10 text-xs text-muted-foreground">{`© ${year} استودیو حسین یکدانه. تمامی حقوق محفوظ است.`}</p>
      </div>
    </footer>
  )
}
