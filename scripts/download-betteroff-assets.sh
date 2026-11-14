#!/usr/bin/env bash
# Downloads the images and video used by the betteroff.studio clone into public/sites/betteroff.
set -euo pipefail

cd "$(dirname "$0")/.."
OUT=public/sites/betteroff
mkdir -p "$OUT/img" "$OUT/video" "$OUT/fonts"

DATO=https://www.datocms-assets.com/106915

fetch() {
  local name=$1 url=$2
  [ -s "$OUT/$name" ] && return 0
  curl -sSfL "$url" -o "$OUT/$name"
  echo "downloaded $name"
}

fetch logo.svg https://betteroff.studio/logo.svg
fetch fonts/founders-grotesk-x.woff2 https://betteroff.studio/_nuxt/fonts/founders-grotesk-x.cd2d353.woff2
fetch fonts/PPNeueMontreal-Bold.woff2 https://betteroff.studio/_nuxt/fonts/PPNeueMontreal-Bold.2b1a179.woff2
fetch fonts/PPNeueMontreal-Medium.woff2 https://betteroff.studio/_nuxt/fonts/PPNeueMontreal-Medium.88ee7c9.woff2
fetch fonts/PPNeueMontreal-Book.woff2 https://betteroff.studio/_nuxt/fonts/PPNeueMontreal-Book.525bb33.woff2

# 800px loops (marquee + inline word images)
for f in \
  1717687450-betteroffstudio_work-loop_24 1717687140-betteroffstudio_work-loop_3 \
  1717687183-betteroffstudio_work-loop_11 1717687471-betteroffstudio_work-loop_29 \
  1717687167-betteroffstudio_work-loop_8 1717687146-betteroffstudio_work-loop_4 \
  1717687178-betteroffstudio_work-loop_10 1717687460-betteroffstudio_work-loop_26 \
  1717687161-betteroffstudio_work-loop_7 1717687125-betteroffstudio_work-loop_1 \
  1717687454-betteroffstudio_work-loop_25 1717687414-betteroffstudio_work-loop_18-1 \
  1717687398-betteroffstudio_work-loop_14 1717687151-betteroffstudio_work-loop_5 \
  1717687440-betteroffstudio_work-loop_22 \
  1717685597-betteroffstudio_culture-loop_12 1717686438-betteroffstudio_culture-loop_21-1-min; do
  short=$(echo "$f" | sed -E 's/^[0-9]+-betteroffstudio_//; s/-1-min$//; s/-1$//')
  fetch "img/$short.jpg" "$DATO/$f.jpg?fm=jpg&q=80&fit=max&h=800&w=800"
done

# Full-bleed culture slideshow
for n in 1 2 3 4 5 6; do
  case $n in
    1) id=1717685614 ;; 2) id=1717685621 ;; 3) id=1717685628 ;;
    4) id=1717685635 ;; 5) id=1717685642 ;; 6) id=1717685649 ;;
  esac
  fetch "img/culture-large-$n.jpg" "$DATO/$id-betteroffstudio_culture-large-loop_${n}-min.jpg?fm=jpg&q=80&fit=max&h=1500&w=2000"
done

# Testimonial avatars
fetch img/testimonial-hollis.jpg "$DATO/1717762172-thehollisco_testimonial.jpg?fm=jpg&fit=max&h=200&w=200"
fetch img/testimonial-royal-caribbean.jpg "$DATO/1717762517-royalcaribbean_testimonial.jpg?fm=jpg&fit=max&h=200&w=200"
fetch img/testimonial-built-things.jpg "$DATO/1717775064-builtthings_testimonial.jpg?fm=jpg&fit=max&h=200&w=200"
fetch img/testimonial-space-craft.jpg "$DATO/1717983633-fran-mayo_testimonial.jpg?fm=jpg&fit=max&h=200&w=200"
fetch img/testimonial-relevant.jpg "$DATO/1717981990-jesse-orrico_testimonial.jpg?fm=jpg&fit=max&h=200&w=200"

# Client logos (white PNGs)
fetch img/logo-hollis.png "$DATO/1717982764-hoco_logo.png?fm=png&fit=max&h=500&w=500"
fetch img/logo-royal-caribbean.png "$DATO/1717982464-royal-caribbean_logo.png?fm=png&fit=max&h=500&w=500"
fetch img/logo-built.png "$DATO/1717858815-built_logo.png?fm=png&fit=max&h=500&w=500"
fetch img/logo-spacecraft.png "$DATO/1717983726-spacecraft_logo.png?fm=png&fit=max&h=500&w=500"
fetch img/logo-relevant.png "$DATO/1717982440-relevant-compliance_logo.png?fm=png&fit=max&h=500&w=500"

# Feed card + share image + favicon
fetch img/feed-channel-islands.jpg "$DATO/1742567030-1.jpg?fm=jpg&q=80&fit=max&h=1200&w=1200"
fetch img/og-share.jpg "$DATO/1721481326-better-off-studios_overview_share.jpg"
fetch img/favicon.gif "$DATO/1722183158-better-off-studio-favcon.gif"

# Client work reel. The source is a signed 1080p Vimeo file (~21 MB); re-encode to 720p without audio.
if [ ! -s "$OUT/video/client-work.mp4" ]; then
  tmp=$(mktemp --suffix=.mp4)
  curl -sSfL "https://player.vimeo.com/progressive_redirect/playback/964456701/rendition/1080p/file.mp4?loc=external&signature=ed2837df3216140eefd132460dd1a1e5b5c4a64d42d09edf23898493d96b6e73" -o "$tmp"
  ffmpeg -loglevel error -y -i "$tmp" -an -vf scale=1280:-2 -c:v libx264 -crf 28 -preset slow -movflags +faststart "$OUT/video/client-work.mp4"
  ffmpeg -loglevel error -y -i "$OUT/video/client-work.mp4" -frames:v 1 -q:v 4 "$OUT/video/client-work-poster.jpg"
  rm -f "$tmp"
  echo "downloaded video/client-work.mp4"
fi
