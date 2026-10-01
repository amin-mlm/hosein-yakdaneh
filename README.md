# استودیو حسین یکدانه — وب‌سایت

Landing page for the architecture & interior design studio, built with Next.js
(App Router) and exported as a fully static site so it can be hosted on GitHub
Pages. There is no backend.

## Requirements

- Node.js 22+
- [pnpm](https://pnpm.io/) 12 (declared via `packageManager` in `package.json`)

## Local development

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000/hosein-yakdaneh/.

## Build the static site

```bash
pnpm build
```

The exported site is written to `out/`. To preview it under the same sub-path
used in production:

```bash
mkdir -p /tmp/preview
cp -r out /tmp/preview/hosein-yakdaneh
cd /tmp/preview && python3 -m http.server 4321
# open http://127.0.0.1:4321/hosein-yakdaneh/
```

## GitHub Pages deployment

The workflow at `.github/workflows/deploy.yml` builds the site and publishes
`out/` on every push to `main` (or when run manually from the Actions tab).

One-time setup:

1. Repository **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.

The site is served at `https://amin-mlm.github.io/hosein-yakdaneh/`. The
`basePath` in `next.config.mjs` is `hosein-yakdaneh` and must match the
repository name.

> If you later attach a custom domain (or rename the repository), update `repo`
> at the top of `next.config.mjs`.

## Contact popup

There is no contact form. Every contact call-to-action (the header's
«رزرو جلسه مشاوره», the nav/footer «تماس» link and the hero's «تماس با ما»
button) opens a modal with direct actions:

- **تماس تلفنی** — opens the phone app (`tel:`)
- **پیامک** — opens the SMS app (`sms:`)
- **اینستاگرام** — opens the Instagram profile
- **نشانی استودیو** — opens the maps app (Apple Maps on iOS, Google Maps
  elsewhere)

### Editing the details

All phone numbers, the Instagram handle and the address live in one place:
[`lib/contact.ts`](lib/contact.ts). Update `contactChannels` there and the modal
updates everywhere.

The address uses a [Neshan](https://nshn.ir) share URL that opens the location in
the user's maps app.

## Hero scroll animation

`components/site/hero.tsx` implements a scroll-expansion hero: the project image
starts as a small framed card and grows to full-bleed as you scroll, while the
split wordmark drifts apart and the hero copy fades in. It uses native scrolling
plus a CSS custom property (`--p`) updated in a `requestAnimationFrame`, so it
respects `prefers-reduced-motion` (which renders the final, expanded state).
