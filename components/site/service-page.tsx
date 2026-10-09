import Image from 'next/image'
import { ArrowLeft, ArrowUpLeft } from 'lucide-react'
import { asset } from '@/lib/asset'
import { servicePages, type ServicePage as ServicePageData } from '@/lib/service-pages'
import { toFa } from '@/lib/fa'
import { ContactTrigger } from './contact-trigger'
import { FaqList } from './faq-list'
import { MagneticLink } from './magnetic-link'
import { Reveal } from './reveal'
import { ServiceStructuredData } from './structured-data'

export function ServicePage({ page }: { page: ServicePageData }) {
  const related = page.related
    .map((slug) => servicePages[slug])
    .filter((item): item is ServicePageData => Boolean(item))

  return (
    <main className="pt-28 md:pt-36">
      <ServiceStructuredData page={page} />

      <section className="relative overflow-hidden border-b border-border">
        <div aria-hidden="true" className="blueprint-grid absolute inset-0 opacity-40" />
        <div
          aria-hidden="true"
          className="absolute -start-40 top-0 size-[420px] rounded-full bg-gold/10 blur-3xl"
        />
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-10 md:py-24">
          <Reveal>
            <nav aria-label="مسیر صفحه" className="flex items-center gap-2 text-xs text-muted-foreground">
              <a href="/" className="transition-colors hover:text-gold">
                خانه
              </a>
              <span aria-hidden="true">/</span>
              <span className="text-foreground/80">{page.navLabel}</span>
            </nav>
            <p className="mt-6 flex items-center gap-4 text-sm text-gold">
              <span aria-hidden="true" className="h-px w-10 bg-gold/70" />
              {page.eyebrow}
            </p>
            <h1 className="mt-6 max-w-3xl text-balance text-4xl font-extralight leading-tight sm:text-5xl md:text-6xl">
              {page.h1}
            </h1>
            <p className="mt-6 max-w-2xl text-pretty leading-loose text-muted-foreground">{page.intro}</p>
          </Reveal>
          <Reveal delay={120} className="mt-10 flex flex-wrap items-center gap-4">
            <MagneticLink href="/#projects">
              مشاهده پروژه‌ها <ArrowLeft className="size-4" aria-hidden="true" />
            </MagneticLink>
            <ContactTrigger className="inline-flex items-center justify-center gap-3 rounded-full border border-foreground/25 px-7 py-3.5 text-sm font-medium text-foreground backdrop-blur-md transition-colors duration-500 ease-out hover:border-gold hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold">
              تماس با ما
            </ContactTrigger>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <h2 className="text-3xl font-extralight md:text-4xl">این خدمت شامل چه مواردی است؟</h2>
          </Reveal>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2">
            {page.highlights.map((item, index) => (
              <Reveal as="li" key={item.title} delay={(index % 2) * 100}>
                <article className="group h-full rounded-2xl border border-border bg-background/70 p-8 transition-colors duration-500 hover:border-gold/40">
                  <p className="text-sm text-gold">{toFa(`0${index + 1}`)}</p>
                  <h3 className="mt-4 text-2xl font-light">{item.title}</h3>
                  <p className="mt-3 text-sm leading-loose text-muted-foreground">{item.body}</p>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-border bg-card/40 py-24 md:py-32">
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-10">
          <Reveal>
            <h2 className="text-3xl font-extralight md:text-4xl">خروجی کار</h2>
            <p className="mt-5 leading-loose text-muted-foreground">
              بسته به دامنه پروژه، این موارد پیش از اجرا یا در جریان آن تحویل داده می‌شود:
            </p>
            <ul className="mt-8 flex flex-col gap-4">
              {page.deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3 border-t border-border pt-4">
                  <ArrowUpLeft className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                  <span className="text-sm leading-loose">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <figure className="overflow-hidden rounded-2xl ring-1 ring-foreground/10">
              <Image
                src={asset(page.image)}
                alt={`${page.h1} — گروه معماری حسین یکدانه`}
                width={1200}
                height={900}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-auto w-full object-cover"
              />
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <Reveal>
            <h2 className="text-3xl font-extralight md:text-4xl">پرسش‌های پرتکرار</h2>
          </Reveal>
          <Reveal delay={100} className="mt-10">
            <FaqList items={page.faqs} />
          </Reveal>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="border-t border-border py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <h2 className="text-sm text-gold">سایر خدمات گروه معماری</h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-3">
              {related.map((item) => (
                <li key={item.slug}>
                  <a
                    href={`/${item.slug}/`}
                    className="group flex h-full items-center justify-between gap-4 rounded-2xl border border-border bg-background/70 p-6 transition-colors duration-500 hover:border-gold/40"
                  >
                    <span className="text-lg font-light">{item.navLabel}</span>
                    <ArrowUpLeft className="size-4 text-muted-foreground transition-colors group-hover:text-gold" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}
    </main>
  )
}
