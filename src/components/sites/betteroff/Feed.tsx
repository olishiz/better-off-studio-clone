import { feedArticle, images } from "./data";
import { BigWord, Reveal } from "./Reveal";
import { SectionLabel } from "./Shared";

export function Feed() {
  return (
    <section className="bg-white-off overflow-hidden">
      <div className="site-max pt-35 pb-150">
        <div className="site-grid">
          <SectionLabel className="col-span-6 s:col-span-4 max-s:justify-center">
            What we&apos;re about
          </SectionLabel>
          <div className="col-span-6 s:col-span-2 max-s:text-center">(BO® — 08)</div>
          <div className="hidden s:block s:col-span-3 s:col-start-10 uppercase text-right">
            Creative as bundled projects
          </div>
        </div>
        <Reveal
          as="h2"
          aria-label="Get to know us"
          className="flex flex-col gap-y-8 s:gap-y-30 relative font-[family-name:var(--font-display)] text-[10rem] s:text-[47.25rem] leading-none mt-50 s:my-100"
        >
          <div aria-hidden="true" className="overflow-hidden flex items-center justify-center">
            <BigWord className="mr-8 s:mr-0">Get</BigWord>
            <figure className="text-image reveal-clip relative media-fill mx-25 hidden s:block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={images.getToKnow} alt="" draggable={false} loading="lazy" />
            </figure>
            <BigWord className="ml-8 s:ml-0" delay={0.1}>
              To
            </BigWord>
          </div>
          <div aria-hidden="true" className="overflow-hidden text-center s:text-right">
            <BigWord className="whitespace-nowrap" delay={0.2}>
              Know us
            </BigWord>
          </div>
        </Reveal>
        <div className="site-grid mt-70 s:mt-0 s:pt-30">
          <figure className="relative media-fill col-span-6 pt-[75%] s:hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={images.getToKnow} alt="" draggable={false} loading="lazy" />
          </figure>
          <Reveal className="s:col-start-6 col-span-6 s:col-span-7 s:order-2 mt-30 s:mt-0">
            <div className="txt big h2">
              <p className="reveal-fade">
                More than a blog, The Feed is our point of view. It reflects who we are and what
                we’re into. It’s where industry, culture, lifestyle, and our own work intersect in a
                meaningful way.
              </p>
            </div>
          </Reveal>
          <div className="col-span-6 s:col-span-3 mt-50 s:mt-0 s:order-1">
            <article className="relative">
              <a href={feedArticle.href} className="block h-trig">
                <div className="relative overflow-hidden">
                  <figure className="overflow-hidden h-scale media-fill relative w-full">
                    <div style={{ paddingTop: "56.32%" }} />
                    <div className="absolute inset-0 opacity-50" style={{ backgroundColor: feedArticle.tint }} />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={feedArticle.image} alt="" loading="lazy" draggable={false} />
                  </figure>
                </div>
                <h3 className="mt-12 s:pr-30">{feedArticle.title}</h3>
                <p className="mt-10 text-gray-text">{feedArticle.meta}</p>
              </a>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
