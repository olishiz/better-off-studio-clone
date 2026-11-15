import { EMAIL, media, WHATSAPP } from "./data";
import { ShizMark } from "./icons";
import { BigWord, Reveal } from "./Reveal";
import { SectionLabel } from "./Shared";

export function Feed() {
  return (
    <section className="bg-white-off overflow-hidden">
      <div className="site-max pt-35 pb-150">
        <div className="site-grid">
          <SectionLabel className="col-span-6 s:col-span-4 max-s:justify-center">
            Who we are
          </SectionLabel>
          <div className="col-span-6 s:col-span-2 max-s:text-center">(TS — 07)</div>
          <div className="hidden s:block s:col-span-3 s:col-start-10 uppercase text-right">
            Kuala Lumpur, Malaysia
          </div>
        </div>
        <Reveal
          as="h2"
          aria-label="Get to know us"
          className="flex flex-col gap-y-8 s:gap-y-30 relative text-[10rem] s:text-[40rem] leading-none mt-50 s:my-100"
        >
          <div aria-hidden="true" className="overflow-hidden flex items-center justify-center">
            <BigWord className="mr-8 s:mr-0">Get</BigWord>
            <figure className="text-image reveal-clip relative media-fill mx-25 hidden s:block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={media.aboutImage} alt="" draggable={false} loading="lazy" />
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
          <figure className="relative media-fill col-span-6 pt-[56.25%] s:hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={media.aboutImage} alt="" draggable={false} loading="lazy" />
          </figure>
          <Reveal className="s:col-start-6 col-span-6 s:col-span-7 s:order-2 mt-30 s:mt-0">
            <div className="txt big h2">
              <p className="reveal-fade">
                Fast, well-built websites for Malaysian businesses. From design to deployment, we
                handle it all.
              </p>
            </div>
          </Reveal>
          <div className="col-span-6 s:col-span-3 mt-50 s:mt-0 s:order-1">
            <article className="relative border border-gray-4 rounded-[1.2rem] bg-paper p-30 flex flex-col gap-y-30">
              <ShizMark className="w-46 h-auto" />
              <div>
                <h3>Oliver Sim</h3>
                <p className="text-gray-text mt-5">Software engineer · Kuala Lumpur, Malaysia</p>
              </div>
              <ul className="flex flex-col gap-y-8 text-[1.7rem]">
                <li>
                  <a href={`mailto:${EMAIL}`} className="uline">
                    {EMAIL}
                  </a>
                </li>
                <li>
                  <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="uline">
                    Chat on WhatsApp
                  </a>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
