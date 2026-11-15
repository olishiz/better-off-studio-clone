import { clients, stats } from "./data";
import { ArrowUpRight } from "./icons";
import { BigWord, Reveal } from "./Reveal";
import { SectionLabel } from "./Shared";

function BrowserPreview({ url, image, alt }: { url: string; image: string; alt: string }) {
  return (
    <div className="rounded-[.8rem] overflow-hidden border border-gray-4 bg-paper">
      <div className="flex items-center gap-x-15 h-34 px-15 border-b border-gray-4 bg-gray-3">
        <span className="flex gap-x-6" aria-hidden="true">
          <i className="w-8 h-8 rounded-full bg-gray-4" />
          <i className="w-8 h-8 rounded-full bg-gray-4" />
          <i className="w-8 h-8 rounded-full bg-gray-4" />
        </span>
        <span className="font-mono text-[1.3rem] text-gray-text truncate">{url}</span>
      </div>
      <div className="relative media-fill aspect-[1.6] bg-gray-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="transition-transform duration-1000 ease-expo group-hover:scale-[1.04]"
        />
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="clients" aria-labelledby="clients-title" className="relative bg-white scroll-mt-60">
      <div className="site-max pt-30 pb-100 s:pb-150">
        <div className="flex flex-col items-center text-center">
          <SectionLabel index="02">Clients</SectionLabel>
          <div>(TS — 02)</div>
        </div>
        <Reveal
          as="h2"
          id="clients-title"
          aria-label="Selected work"
          className="flex flex-col items-center gap-y-8 s:gap-y-30 relative text-[10.5rem] s:text-[40rem] leading-none mt-50"
        >
          <div className="overflow-hidden">
            <BigWord>Selected</BigWord>
          </div>
          <div className="overflow-hidden">
            <BigWord delay={0.1}>Work</BigWord>
          </div>
        </Reveal>
        <Reveal className="flex flex-col items-center text-center mt-50">
          <p className="h2 max-w-[60rem] reveal-fade">Trusted by businesses across Malaysia.</p>
          <p className="text-gray-text mt-20 max-w-[48rem] reveal-fade" style={{ ["--delay" as string]: ".1s" }}>
            We’re proud to have partnered with these brands to build their digital presence.
          </p>
        </Reveal>

        <Reveal as="ul" className="grid grid-cols-1 s:grid-cols-2 gap-x-20 gap-y-60 mt-80 s:mt-120">
          {clients.map((client, i) => {
            const body = (
              <>
                <BrowserPreview url={client.url} image={client.image} alt={client.alt} />
                <div className="flex items-start justify-between gap-x-30 pt-20">
                  <div>
                    <h3 className="flex items-center gap-x-10">
                      {client.name}
                      {client.href && <ArrowUpRight className="w-10 h-10 opacity-60" />}
                    </h3>
                    <p className="text-gray-text mt-5">{client.blurb}</p>
                  </div>
                  <div className="font-mono text-[1.4rem] text-gray-text whitespace-nowrap pt-4">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
              </>
            );
            return (
              <li
                key={client.name}
                className="reveal-fade"
                style={{ ["--delay" as string]: `${(i % 2) * 0.12}s` }}
              >
                {client.href ? (
                  <a href={client.href} target="_blank" rel="noopener noreferrer" className="group block">
                    {body}
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                ) : (
                  <div className="group">{body}</div>
                )}
              </li>
            );
          })}
        </Reveal>

        <Reveal as="dl" className="grid grid-cols-2 s:grid-cols-4 border-t border-gray-4 mt-100 s:mt-150">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col-reverse justify-end gap-y-10 pt-25 pb-10 s:pr-30 max-s:odd:pr-15 reveal-fade"
              style={{ ["--delay" as string]: `${i * 0.08}s` }}
            >
              <dt className="text-gray-text">{stat.label}</dt>
              <dd className="font-[family-name:var(--font-display)] uppercase text-[9rem] s:text-[12rem] leading-none">
                {stat.value}
                {stat.label.startsWith("Hours") && <span className="text-gray-text">+</span>}
              </dd>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
