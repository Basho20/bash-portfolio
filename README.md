# Bethuel Maluti — Portfolio v2

A clean, editorial-style Next.js portfolio. **No GSAP, no JavaScript animations** — all motion is pure CSS transitions and keyframes.

## Design Direction

**Warm editorial serif** — Inspired by high-end design studios and print magazines.

| Token     | Value       | Role              |
|-----------|-------------|-------------------|
| `cream`   | `#F5F0E8`   | Background        |
| `paper`   | `#EDE8DF`   | Hover/card bg     |
| `ink`     | `#1A1714`   | Primary text      |
| `stone`   | `#7A7060`   | Secondary text    |
| `terra`   | `#C2694F`   | Accent (terracotta)|

## Fonts

- **Cormorant Garamond** — serif display, headlines, large type
- **Outfit** — clean sans-serif body text
- **IBM Plex Mono** — labels, tags, metadata

## Animation Strategy (CSS only)

- `fade-up` keyframe with stagger via `delay-1..5` on hero elements
- CSS `transition` on hover (colors, border, padding, width)
- CSS `@keyframes scroll-left` for the marquee strip
- `::before` pseudo-element fill-up effect on buttons
- No layout shifts, no JS required for any motion

## Pages

| Route        | Description                                      |
|--------------|--------------------------------------------------|
| `/`          | Hero headline, stats, featured work, CTA         |
| `/services`  | 4-service grid, process steps, pricing info      |
| `/about`     | Bio, skills grid, vertical timeline              |
| `/contact`   | Split form with contact info sidebar             |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build & Deploy

```bash
npm run build
npm start
```

## Customisation

1. Replace `Bethuel Maluti` / `malutibethuel@gmail.com` across page files
2. Update projects in `app/work/page.tsx`
3. Update social links in `components/Navbar.tsx` and `components/Footer.tsx`
4. Replace portrait placeholder in `app/about/page.tsx` with a real `<Image>`
