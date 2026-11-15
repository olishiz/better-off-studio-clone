import { checklist, marqueeImages, principles, WHATSAPP } from "./data";
import { Check, WhatsAppIcon } from "./icons";
import { Marquee } from "./Marquee";
import { Reveal } from "./Reveal";
import { ExploreLink, SectionLabel } from "./Shared";

export function Hero() {
  return (
    <div className="bg-white-off">
      <div className="s:h-svh flex flex-col justify-end pt-90 s:pt-0">
        <div className="s:mt-70 pb-20 s:order-2">
          <Marquee
            word="The Shiz"
            images={marqueeImages}
            className="text-[22rem] s:text-[47.5rem] animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-1000 fill-mode-both"
          />
        </div>
        <Reveal className="site-max site-grid items-start s:order-1">
          <div className="s:col-start-6 col-span-6 s:col-span-7 s:order-2">
            <h1 className="h2 reveal-fade" style={{ ["--delay" as string]: "1.1s" }}>
              Your success is our mission.{" "}
              <span className="text-gray-text">
                No one-size-fits-all templates, no paying more than you need to — just a site that is
                simple, functional and attractive.
              </span>
            </h1>
          </div>
          <div
            className="col-span-6 s:col-span-3 mt-40 s:mt-0 s:order-1 reveal-fade"
            style={{ ["--delay" as string]: "1.25s" }}
          >
            <p className="s:max-w-[30rem]">
              Websites have evolved, and the way you build them should too.
            </p>
            <div className="flex flex-wrap items-center gap-x-40 gap-y-20 mt-40">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="uline-double gap-x-12"
              >
                <WhatsAppIcon className="w-[1em] h-[1em]" />
                Message me!
              </a>
              <ExploreLink href="#services">How we help</ExploreLink>
            </div>
          </div>
        </Reveal>
      </div>

      <section id="about" aria-labelledby="about-title" className="site-max mt-150 s:pt-130 pb-100 s:pb-250 scroll-mt-60">
        <Reveal className="site-grid">
          <div className="col-span-6 s:col-span-8 txt big h2">
            <h2 id="about-title" className="reveal-fade">
              We build websites for Malaysian brands.
            </h2>
            <p className="reveal-fade text-gray-text" style={{ ["--delay" as string]: ".15s" }}>
              We are a full-service web development studio working with businesses of all sizes, from
              emerging startups to established companies. Using current technology and proven best
              practice, we help you stand out and reach more customers.
            </p>
          </div>
        </Reveal>
        <Reveal className="site-grid items-start mt-30 s:mt-100">
          <hr className="col-span-6 s:col-span-12 mb-35 border-gray-4" />
          <div className="col-span-6 s:col-span-3">
            <SectionLabel index="01">About</SectionLabel>
            <ul className="mt-40 flex flex-col gap-y-12" aria-label="What you can expect">
              {checklist.map((item, i) => (
                <li
                  key={item}
                  className="flex items-center gap-x-15 reveal-fade"
                  style={{ ["--delay" as string]: `${i * 0.08}s` }}
                >
                  <Check className="w-14 h-10 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="s:col-start-12 col-span-6 s:col-span-1 s:text-right whitespace-nowrap s:order-last max-s:mt-40">
            (TS — 01)
          </div>
          <div className="s:col-start-7 col-span-6 s:col-span-4 flex flex-col gap-y-50 pl s:pr-30 mt-75 s:mt-0">
            {principles.map((f, i) => (
              <div key={f.title} className="reveal-fade" style={{ ["--delay" as string]: `${i * 0.1}s` }}>
                <h3>{f.title}</h3>
                <p className="text-gray-text mt-20">{f.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>
    </div>
  );
}
