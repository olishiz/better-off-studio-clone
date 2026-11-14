import { creativeFeatures, pricingHref, workLoopImages } from "./data";
import { Marquee } from "./Marquee";
import { Reveal } from "./Reveal";
import { ExploreLink, SectionLabel } from "./Shared";

export function Hero() {
  return (
    <div className="bg-white-off">
      <div className="s:h-svh flex flex-col justify-end pt-90 s:pt-0">
        <div className="s:mt-70 pb-20 s:order-2">
          <Marquee
            word="Subscribe"
            images={workLoopImages}
            className="text-[22rem] s:text-[47.5rem] animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-1000 fill-mode-both"
          />
        </div>
        <Reveal className="site-max site-grid items-start s:order-1">
          <div className="s:col-start-6 col-span-6 s:col-span-7 s:order-2">
            <h1 className="h2 reveal-fade" style={{ ["--delay" as string]: "1.1s" }}>
              Premium quality creative at lean rates for growing businesses. Packaged as
              subscriptions or bundled projects.
            </h1>
          </div>
          <div
            className="col-span-6 s:col-span-3 mt-40 s:mt-0 s:order-1 reveal-fade"
            style={{ ["--delay" as string]: "1.25s" }}
          >
            <p className="s:max-w-[30rem]">
              Pick a plan, submit a job request, and your project will kickoff within 24 hours.
            </p>
            <ExploreLink href={pricingHref}>Explore Plans</ExploreLink>
          </div>
        </Reveal>
      </div>

      <div className="site-max mt-150 s:pt-130 pb-100 s:pb-250">
        <Reveal className="site-grid">
          <div className="col-span-6 s:col-span-8 txt big h2">
            <p className="reveal-fade">
              Strategy, Design, and Development.
              <br />
              Lightning-fast, lean, and sensibly priced.
            </p>
            <p className="reveal-fade" style={{ ["--delay" as string]: ".15s" }}>
              Get max value and velocity in a turnkey platform that promises your brand will be
              Better Off®.
            </p>
          </div>
        </Reveal>
        <Reveal className="site-grid items-start mt-30 s:mt-100">
          <hr className="col-span-6 s:col-span-12 mb-35 border-gray-4" />
          <SectionLabel className="col-span-6 s:col-span-3">Creative as it should be</SectionLabel>
          <div className="s:col-start-12 col-span-6 s:col-span-1 s:text-right whitespace-nowrap s:order-last">
            (BO® — 01)
          </div>
          <div className="s:col-start-7 col-span-6 s:col-span-4 flex flex-col gap-y-50 pl s:pr-30 mt-75 s:mt-0">
            {creativeFeatures.map((f, i) => (
              <div key={f.title} className="reveal-fade" style={{ ["--delay" as string]: `${i * 0.1}s` }}>
                <h4>{f.title}</h4>
                <p className="text-gray-text mt-20">{f.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
}
