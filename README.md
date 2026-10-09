# استودیو حسین یکدانه — وب‌سایت

Landing page for the architecture & interior design studio, built with Next.js
(App Router) and exported as a fully static site. There is no backend.

Live at **https://hosein-yekdaneh.ir**.

## Requirements

- Node.js 22+
- [pnpm](https://pnpm.io/) 12 (declared via `packageManager` in `package.json`)

## Local development

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000/.

## Build the static site

```bash
pnpm build
```

The exported site is written to `out/`. Preview it locally:

```bash
cd out && python3 -m http.server 4321
# open http://127.0.0.1:4321/
```

## Deployment

The workflow at `.github/workflows/deploy.yml` builds the site and publishes
`out/` on every push to `main` (or when run manually from the Actions tab).

- The site is served at the **custom domain root** `https://hosein-yekdaneh.ir`,
  so `next.config.mjs` has **no `basePath`**.
- `public/CNAME` contains `hosein-yekdaneh.ir` and must stay in sync with
  `siteUrl` in `lib/site.ts` and with **Settings → Pages → Custom domain**.
- One-time setup: **Settings → Pages → Build and deployment → Source =
  GitHub Actions**.

> If the domain changes, update `lib/site.ts` (`siteUrl`), `public/CNAME`, and
> the GitHub Pages custom-domain setting.

## SEO

Most SEO is driven by a few files:

| What | Where |
| --- | --- |
| Domain, name, title, description, keywords | `lib/site.ts` |
| Title/description, canonical, Open Graph, Twitter, icons, robots, manifest link | `app/layout.tsx` |
| `robots.txt` | `app/robots.ts` |
| `sitemap.xml` | `app/sitemap.ts` |
| `manifest.webmanifest` (PWA/installability) | `app/manifest.ts` |
| JSON-LD structured data (WebSite, Person, ProfessionalService, FAQPage) | `components/site/structured-data.tsx` |
| Services (shown in the UI **and** structured data) | `lib/services.ts` |
| FAQ (shown in the UI **and** structured data) | `lib/faq.ts` |
| Social share image (1200×630) | `public/og-image.jpg` |

### Google Search Console

- **DNS/domain verification** (already done) is enough.
- Optional HTML-tag verification: set a repository variable
  `GOOGLE_SITE_VERIFICATION` (Settings → Secrets and variables → Actions →
  Variables). The deploy workflow passes it to the build, which injects the
  `<meta name="google-site-verification">` tag.
- After deploying, submit `https://hosein-yekdaneh.ir/sitemap.xml` in Search
  Console.

### Images

Project images are stored as WebP and total well under 1 MB (down from ~11 MB of
PNG). When adding new images, export them as WebP (~80% quality) and keep the
real pixel dimensions in `lib/projects.ts`, which are used for layout sizing.

## Contact popup

There is no contact form. Every contact call-to-action (the header's
«رزرو جلسه مشاوره», the nav/footer «تماس» link and the hero's «تماس با ما»
button) opens a modal with direct actions:

- **تماس تلفنی** — opens the phone app (`tel:`)
- **پیامک** — opens the SMS app (`sms:`)
- **اینستاگرام** — opens the Instagram profile
- **نشانی شرکت** — opens the address in the user's maps app

### Editing the details

All phone numbers, the Instagram handle and the address live in one place:
[`lib/contact.ts`](lib/contact.ts). Update `contactChannels` there and the modal,
as well as the structured data, update everywhere.

## Hero scroll animation

`components/site/hero.tsx` implements a scroll-expansion hero: the project image
starts as a small framed card and grows to full-bleed as you scroll, while the
split wordmark drifts apart and the hero copy fades in. It uses native scrolling
plus a CSS custom property (`--p`) updated in a `requestAnimationFrame`, so it
respects `prefers-reduced-motion` (which renders the final, expanded state).
