import { approachSteps, media } from "./data";
import { BigWord, Reveal } from "./Reveal";
import { SectionLabel } from "./Shared";

export function Approach() {
  return (
    <section id="approach" aria-labelledby="approach-title" className="bg-white-off scroll-mt-60">
      <div className="site-max pt-35 pb-100 s:pb-250">
        <div className="site-grid">
          <SectionLabel index="05" className="col-span-6 s:col-span-4">
            Approach
          </SectionLabel>
          <div className="col-span-6 s:col-span-2">(TS — 05)</div>
          <div className="col-span-6 s:col-span-3 s:col-start-10 hidden s:block uppercase text-right">
            Build, launch &amp; partner
          </div>
        </div>
        <Reveal
          as="h2"
          id="approach-title"
          aria-label="How we build and partner long-term."
          className="flex flex-col gap-y-8 s:gap-y-30 relative text-[8.5rem] s:text-[34rem] leading-none mt-60 s:mt-100"
        >
          <div className="overflow-hidden s:text-center" aria-hidden="true">
            <BigWord>Build</BigWord>
          </div>
          <div className="overflow-hidden flex items-center" aria-hidden="true">
            <BigWord delay={0.1}>Launch</BigWord>
            <figure className="text-image reveal-clip relative media-fill ml-12 s:ml-25">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={media.approachImage} alt="" draggable={false} loading="lazy" />
            </figure>
          </div>
          <div className="overflow-hidden s:pl-100" aria-hidden="true">
            <BigWord delay={0.2}>&amp; grow</BigWord>
          </div>
        </Reveal>
        <div className="site-grid mt-70 s:mt-240">
          <p className="col-span-6 s:col-span-3 s:pr-30">
            First we make your website, app or AI workflow clear, fast and ready to convert. Then we
            stay on to host, grow search visibility and keep improving it with you.
          </p>
          <div className="s:col-start-5 col-span-6 s:col-span-8 grid grid-cols-1 s:grid-cols-2 gap-x-17 gap-y-50 s:gap-y-90 pl mt-30 s:mt-0">
            {approachSteps.map((step, i) => (
              <Reveal key={step.title} className="col-span-1 flex flex-col gap-y-20">
                <div className="reveal-fade flex justify-between gap-x-20">
                  <span>({String(i + 1).padStart(2, "0")})</span>
                  <span className="text-gray-text uppercase text-[1.4rem] tracking-[.04em] pt-[.3em]">
                    {step.phase}
                  </span>
                </div>
                <hr className="border-black/20" />
                <h3 className="reveal-fade" style={{ ["--delay" as string]: ".05s" }}>
                  {step.title}
                </h3>
                <p className="text-gray-text reveal-fade" style={{ ["--delay" as string]: ".1s" }}>
                  {step.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
