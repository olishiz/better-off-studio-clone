# betteroff.studio — homepage brief

Source: https://betteroff.studio/ (Nuxt 2 SSR, DatoCMS content, Vimeo video)
Local route: `/` → `src/app/page.tsx`, components in `src/components/sites/betteroff/`

## Global system

- Root font size is fluid: `min(16px, 100vw * 10 / 390)` below 650px and `min(16px, 100vw * 10 / 1500)` above. All sizes are rem; the clone sets Tailwind `--spacing: .1rem` so `pt-20` = 2rem, matching the source's class names.
- Breakpoint `s` = 650px. Grid: 6 cols / 0.7rem gap on mobile, 12 cols / 1.7rem gap on desktop, 2rem / 2.5rem side padding.
- Fonts: PP Neue Montreal (400/500/700) for text, Founders Grotesk X-Condensed Bold for the display words.
- Colors: black `#1e1e1e`, off-white `#e5e7df`, gray border `#dce4e5`, gray text `#949690`, purple `#cfa9ed`, yellow `#e0f07d`.
- Type: body 2rem/1.35 weight 500; `.h2` 3.35rem → 5rem, line-height 1.07; display words 11.75rem → 47.5rem uppercase with -.22em / -.1175em trims.

## Section order

1. Intro loader — black screen, white globe mark, wipes upward.
2. Header — fixed, `mix-blend-difference`, logo / Overview·Work·Feed / Pricing. Mobile: Pricing + Menu (full-screen black menu).
3. Hero — 100vh on desktop, statement + "Explore Plans", "SUBSCRIBE" marquee with a cycling work-loop image.
4. Statement + "Creative as it should be" (BO® — 01) with three features.
5. Projects (BO® — 02) — "PREMIUM WORK", Vimeo reel (re-encoded to 720p locally).
6. Services (BO® — 03) — black, "SERVICES", three-item accordion with tag lists.
7. Client approval (BO® — 04) — five testimonials, logo tabs with active bar, auto-advance.
8. Culture slideshow — full-height stop-motion of six photos.
9. Full benefits (BO® — 05) — "CREATIVE WITH [img] NO FLUFF", six numbered benefits.
10. Plans (BO® — 06) — Subscriptions / Projects switch; 3 subscription cards, 7 project cards (from the Nuxt state payload).
11. FAQ (BO® — 07) — twelve-item accordion.
12. What we're about (BO® — 08) — "GET [img] TO KNOW US", Feed article card.
13. Footer — CTA, sitemap/legal/social, "SUBSCRIBE" marquee, back to top, copyright.
14. Cookie banner — dismiss stored in localStorage.

## Out-of-scope destinations

Work, Feed, Contact, Terms, Privacy, and the Feed article link back to betteroff.studio. Pricing links scroll to `#packages`. Typeform/Calendly CTAs keep their original URLs.
