"use client";

import { useState, type FormEvent } from "react";
import { cn } from "@/lib/utils";
import { contactDetails, FORMSPREE } from "./data";
import { ArrowUpRight } from "./icons";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./Shared";

type Status = "idle" | "sending" | "sent" | "error";

function SubmitButton({ label, disabled }: { label: string; disabled: boolean }) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className="btn relative inline-flex justify-between items-center w-full h-80 px-40 rounded-[.7rem] bg-black text-white disabled:opacity-60"
    >
      <span className="font-medium leading-none">{label}</span>
      <ArrowUpRight className="h-12 w-11" />
      <span
        aria-hidden="true"
        className="btn-mask absolute inset-[-1px] z-2 flex items-center justify-between px-40 rounded-[.7rem] bg-white-off text-black font-medium leading-none border border-black"
      >
        {label}
        <ArrowUpRight className="h-12 w-11" />
      </span>
    </button>
  );
}

const fieldClass =
  "w-full bg-transparent border-b border-gray-4 py-15 outline-none transition-colors focus:border-black placeholder:text-gray-text/70";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative bg-white pb-100 s:pb-200 scroll-mt-0">
      <div className="site-max pt-35">
        <div className="site-grid">
          <SectionLabel index="06" className="col-span-6 s:col-span-4">
            Contact
          </SectionLabel>
          <div className="col-span-6 s:col-span-2">(TS — 06)</div>
          <div className="col-span-6 s:col-span-3 s:col-start-10 hidden s:block uppercase text-right">
            Free quote
          </div>
        </div>

        <Reveal className="max-w-[105rem] mt-60 s:mt-100">
          <h2 id="contact-title" className="h2 reveal-fade">
            Let’s talk about how we can help.{" "}
            <span className="text-gray-text">
              Have an idea or project in mind? Tell us a little about it and we’ll help make it real.
            </span>
          </h2>
        </Reveal>

        <div className="site-grid items-start gap-y-60 mt-60 s:mt-100">
          <Reveal as="dl" className="col-span-6 s:col-span-5 border-t border-gray-4">
            {contactDetails.map((d, i) => (
              <div
                key={d.label}
                className="flex justify-between gap-x-30 py-20 border-b border-gray-4 reveal-fade"
                style={{ ["--delay" as string]: `${i * 0.05}s` }}
              >
                <dt className="text-gray-text">{d.label}</dt>
                <dd className="text-right">
                  {d.href ? (
                    <a
                      href={d.href}
                      className="uline"
                      {...(d.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {d.value}
                    </a>
                  ) : (
                    d.value
                  )}
                </dd>
              </div>
            ))}
          </Reveal>

          <form
            onSubmit={onSubmit}
            action={FORMSPREE}
            method="POST"
            className="s:col-start-7 col-span-6 s:col-span-6 border border-gray rounded-[1.2rem] bg-paper p-30 s:p-50 flex flex-col gap-y-30"
          >
            <div>
              <label htmlFor="name" className="text-gray-text text-[1.6rem]">
                Name
              </label>
              <input id="name" name="name" type="text" autoComplete="name" required className={fieldClass} />
            </div>
            <div>
              <label htmlFor="email" className="text-gray-text text-[1.6rem]">
                Email
              </label>
              <input
                id="email"
                name="_replyto"
                type="email"
                autoComplete="email"
                required
                className={fieldClass}
              />
            </div>
            <div>
              <label htmlFor="message" className="text-gray-text text-[1.6rem]">
                Message
              </label>
              <textarea id="message" name="message" rows={5} required className={cn(fieldClass, "resize-y")} />
            </div>
            <SubmitButton label={status === "sending" ? "Sending…" : "Send message"} disabled={status === "sending"} />
            <p
              role="status"
              className={cn(
                "text-[1.6rem] min-h-[1.4em]",
                status === "error" ? "text-red-700" : "text-gray-text",
              )}
            >
              {status === "sent" && "Thanks — your message is on its way. We’ll get back to you shortly."}
              {status === "error" && "Something went wrong sending that. Please try WhatsApp or email instead."}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
