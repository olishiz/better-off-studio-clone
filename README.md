# The Shiz — homepage on the Better Off layout

This branch takes the [betteroff.studio](https://betteroff.studio/) homepage clone (on `main`) and
fills it with The Shiz's content. The copy, client list, testimonials, contact details, hero video
and client screenshots come from the the-shiz.co revamp ("layout skeleton", PR #3).

The sections are:

| Better Off section | The Shiz version |
| --- | --- |
| Intro loader | Dark loader with the `=>` mark |
| Header | The Shiz wordmark, About / Services / Clients, "Free quote" |
| Hero marquee | "THE SHIZ" marquee cycling through client site screenshots |
| Statement + features | 01 About: "We build websites for Malaysian brands." with the checklist and principles |
| Premium Work | 02 Clients: "SELECTED WORK", four client previews in browser frames, and the stats |
| Services accordion | 03 Services: the five service groups and their tags |
| Testimonials | 04 Testimonials from Russell, Marisa and Frankitas, with logo tabs |
| Culture slideshow | Full-bleed loop of the hero video |
| Benefits | 05 Approach: "BUILD / LAUNCH / & GROW" and the six process steps |
| Plans | 06 Contact: contact details and the Formspree form |
| Feed | "GET TO KNOW US" with the studio line and Oliver's contact card |
| Footer | WhatsApp CTA, sitemap / services / contact columns, marquee |

There is also a floating WhatsApp button. The FAQ, pricing plans and cookie banner were dropped
because The Shiz has no content for them.

## Run locally

Requires Node.js 20.9+.

```bash
npm install
npm run dev        # http://localhost:4317
```

Other commands:

```bash
npm run build      # production build
npm run start      # serve the production build on port 4317
npm run check      # lint + typecheck + build
```

## Project layout

```
src/app/page.tsx                      # homepage composition
src/app/layout.tsx                    # metadata and the Anton display font
src/app/globals.css                   # fluid rem scale, fonts, palette, shared component styles
src/components/sites/the-shiz/        # one component per section + data.ts with all copy
public/sites/the-shiz/                # Inter + League Spartan fonts, hero video, images, favicon
```

## Fonts and palette

- Body: Inter. Wordmark: League Spartan. Both are self-hosted from the the-shiz.co repo (SIL OFL).
- Display words: Anton (SIL OFL, loaded with `next/font/google`). It replaces Better Off's licensed
  Founders Grotesk.
- Colours come from The Shiz name-card palette: `#F7F7F4` background, `#E6E5E0` surface, `#26251F`
  text, `#6B6B66` muted text and `#CDCDC9` borders. There is no accent colour.

## Deploy

The app is a static Next.js build and deploys to Vercel with no configuration.

## Credits

The layout and interactions are modelled on Better Off Studio's homepage. All The Shiz copy,
client screenshots and logos belong to The Shiz and its clients. The template code is MIT licensed
(see `LICENSE`).
