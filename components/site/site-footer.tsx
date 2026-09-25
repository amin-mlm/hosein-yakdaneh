import { navLinks } from '@/lib/nav'
import { Wordmark } from './wordmark'

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <p className="text-balance font-serif text-5xl font-light leading-none md:text-8xl">
          Crafted with <em className="text-gold">intention</em>.
        </p>
        <div className="mt-16 flex flex-col justify-between gap-10 border-t border-border pt-10 md:flex-row md:items-center">
          <Wordmark />
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-xs uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-gold">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="mt-10 text-xs text-muted-foreground">
          {`© ${new Date().getFullYear()} Hosein Yekdaneh Studio. All rights reserved.`}
        </p>
      </div>
    </footer>
  )
}
