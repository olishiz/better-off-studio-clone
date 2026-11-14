import { benefits, images } from "./data";
import { BigWord, Reveal } from "./Reveal";
import { SectionLabel } from "./Shared";

export function Benefits() {
  return (
    <section className="bg-white-off">
      <div className="site-max pt-35 pb-100 s:pb-250">
        <div className="site-grid">
          <SectionLabel className="col-span-6 s:col-span-4">Full benefits</SectionLabel>
          <div className="col-span-6 s:col-span-2">(BO® — 05)</div>
          <div className="col-span-6 s:col-span-3 s:col-start-10 hidden s:block uppercase text-right">
            Creative as a subscription
          </div>
        </div>
        <Reveal
          as="h2"
          aria-label="Creative with no fluff"
          className="flex flex-col gap-y-8 s:gap-y-30 relative font-[family-name:var(--font-display)] text-[11.75rem] s:text-[47.5rem] leading-none mt-60 s:mt-100"
        >
          <div className="overflow-hidden s:text-center" aria-hidden="true">
            <BigWord>Creative</BigWord>
          </div>
          <div className="overflow-hidden flex items-center" aria-hidden="true">
            <BigWord delay={0.1}>with</BigWord>
            <figure className="text-image reveal-clip relative media-fill ml-12 s:ml-25">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={images.creativeWith} alt="" draggable={false} loading="lazy" />
            </figure>
          </div>
          <div className="overflow-hidden s:pl-100" aria-hidden="true">
            <BigWord delay={0.2}>no fluff</BigWord>
          </div>
        </Reveal>
        <div className="site-grid mt-70 s:mt-240">
          <p className="col-span-6 s:col-span-2">
            We&apos;ve trimmed the fat to focus on essential services at skinny rates.
          </p>
          <div className="s:col-start-5 col-span-6 s:col-span-8 grid grid-cols-1 s:grid-cols-2 gap-x-17 gap-y-50 s:gap-y-90 pl mt-30 s:mt-0">
            {benefits.map((b, i) => (
              <Reveal key={b.title} className="col-span-1 flex flex-col gap-y-20">
                <div className="reveal-fade">({String(i + 1).padStart(2, "0")})</div>
                <hr className="border-black/20" />
                <h4 className="reveal-fade" style={{ ["--delay" as string]: ".05s" }}>
                  {b.title}
                </h4>
                <p className="text-gray-text reveal-fade" style={{ ["--delay" as string]: ".1s" }}>
                  {b.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
