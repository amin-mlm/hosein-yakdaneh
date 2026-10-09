import { navLinks } from '@/lib/nav'
import { ContactTrigger } from './contact-trigger'
import { Wordmark } from './wordmark'

export function SiteFooter() {
  const year = new Intl.DateTimeFormat('fa-IR', { year: 'numeric' }).format(new Date())

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-center">
          <Wordmark />
          <nav aria-label="ناوبری پانویس">
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  {link.href === '#contact' ? (
                    <ContactTrigger className="text-sm text-muted-foreground transition-colors hover:text-gold">
                      {link.label}
                    </ContactTrigger>
                  ) : (
                    <a href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-gold">
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="mt-10 text-xs text-muted-foreground">{`© ${year} گروه معماری حسین یکدانه. تمامی حقوق محفوظ است.`}</p>
      </div>
    </footer>
  )
}
