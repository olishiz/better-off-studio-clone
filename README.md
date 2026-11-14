# Better Off Studio — homepage clone

A Next.js recreation of the [betteroff.studio](https://betteroff.studio/) homepage, built with the
[AI Website Cloner Template](https://github.com/JCodesMore/ai-website-cloner-template).

It reproduces the full homepage with the real copy, fonts, images, and video, including:

- the black globe intro loader and the blend-mode header (with the full-screen mobile menu)
- the "SUBSCRIBE" display-type marquees with cycling photos
- scroll-triggered reveals for the oversized words and inline photos
- the Services and FAQ accordions
- the testimonial carousel with clickable client-logo tabs that also advances on a timer
- the full-bleed culture slideshow
- the Subscriptions / Projects pricing switch (3 subscription cards, 7 project cards)
- the cookie banner, which remembers when you accept it

## Run locally

Requires Node.js 20.9+ (the template recommends 24).

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
src/app/globals.css                   # fluid rem scale, fonts, tokens, shared component styles
src/components/sites/betteroff/       # one component per section + data.ts with all copy
public/sites/betteroff/               # fonts, images, video, logo
scripts/download-betteroff-assets.sh  # re-downloads the images and video from the source CDNs
docs/research/betteroff/page-brief.md # measurements, section map, and link notes
docs/design-references/betteroff/     # source vs. clone screenshots
```

Links to pages that were not cloned (Work, Feed, Contact, Terms, Privacy) point back to
betteroff.studio. "Pricing" scrolls to the plans section.

## Deploy

The app is a static Next.js build and deploys to Vercel with no configuration: import the
repository in Vercel, or run `npx vercel --prod`.

## Credits

All brand assets, copy, photography, and the PP Neue Montreal / Founders Grotesk font files belong to
Better Off Studio and their respective licensors. This repository is a study and should not be used
to impersonate the studio. The template code is MIT licensed (see `LICENSE`).
