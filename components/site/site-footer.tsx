import { navLinks } from '@/lib/nav'
import { servicePageList } from '@/lib/service-pages'
import { ContactTrigger } from './contact-trigger'
import { Wordmark } from './wordmark'

const linkClass = 'text-sm text-muted-foreground transition-colors hover:text-gold'

export function SiteFooter() {
  const year = new Intl.DateTimeFormat('fa-IR', { year: 'numeric' }).format(new Date())

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="flex flex-col justify-between gap-12 md:flex-row md:items-start">
          <div className="flex flex-col gap-5">
            <Wordmark />
            <p className="max-w-xs text-sm leading-loose text-muted-foreground">
              گروه معماری حسین یکدانه؛ طراحی، اجرا و نظارت فضاهای داخلی و نما در اصفهان و سراسر ایران.
            </p>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 sm:gap-20">
            <nav aria-label="ناوبری پانویس">
              <ul className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    {link.href === '#contact' ? (
                      <ContactTrigger className={linkClass}>{link.label}</ContactTrigger>
                    ) : (
                      <a href={link.href} className={linkClass}>
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label="خدمات گروه معماری">
              <ul className="flex flex-col gap-3">
                {servicePageList.map((page) => (
                  <li key={page.slug}>
                    <a href={`/${page.slug}/`} className={linkClass}>
                      {page.navLabel}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        <p className="mt-12 text-xs text-muted-foreground">{`© ${year} گروه معماری حسین یکدانه. تمامی حقوق محفوظ است.`}</p>
      </div>
    </footer>
  )
}
