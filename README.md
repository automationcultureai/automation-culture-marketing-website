# Automation Culture.AI — Website

Full website for [acai-webpage.vercel.app](https://acai-webpage.vercel.app).

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui components (custom)
- Framer Motion
- next-themes (light/dark)
- Formspree (contact form)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Before You Deploy

1. **Add dashboard screenshots** — drop two images into `public/images/`:
   - `public/images/dashboard-dark.png` — shown in dark mode (default)
   - `public/images/dashboard-light.png` — shown in light mode

2. **Formspree endpoint** — already wired to `mvzwleja` in `ContactSection.tsx`. Update if needed.

3. **Booking link** — when you set up Calendly/Cal.com, swap the `#contact` href in `Navbar.tsx` and the CTA buttons.

## Project Structure

```
app/
├── layout.tsx                          Root layout + ThemeProvider
├── page.tsx                            Home page (all sections)
├── globals.css                         CSS variables + animations
└── components/
    ├── ThemeProvider.tsx               next-themes wrapper
    ├── ui/
    │   ├── animated-gradient-background.tsx
    │   ├── badge.tsx
    │   ├── button.tsx
    │   ├── glow.tsx
    │   └── mockup.tsx
    └── sections/
        ├── Navbar.tsx
        ├── HeroSection.tsx
        ├── ServicesSection.tsx
        ├── CaseStudiesSection.tsx
        ├── PricingSection.tsx
        ├── ContactSection.tsx
        └── Footer.tsx

lib/
└── utils.ts                            cn() helper

public/
└── images/                             ← Add dashboard-dark.png + dashboard-light.png here
```

## Deployment

Pushes to `main` auto-deploy on Vercel. No extra config needed.
