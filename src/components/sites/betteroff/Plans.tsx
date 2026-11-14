"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { projectPlans, subscriptionPlans, type Plan } from "./data";
import { ArrowUpRight, Check } from "./icons";
import { SectionLabel } from "./Shared";

function PlanButton({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="btn relative inline-flex justify-between items-center w-full h-80 px-40 rounded-[.7rem] bg-black text-white"
    >
      <span className="font-medium leading-none">{label}</span>
      <ArrowUpRight className="h-12 w-11" />
      <span
        aria-hidden="true"
        className="btn-mask absolute inset-[-1px] z-2 flex items-center justify-between px-40 rounded-[.7rem] bg-yellow text-black font-medium leading-none"
      >
        {label}
        <ArrowUpRight className="h-12 w-11" />
      </span>
    </a>
  );
}

function PlanCard({ plan, index }: { plan: Plan; index: number }) {
  const isCustom = plan.price == null;
  return (
    <article
      className="col-span-6 s:col-span-4 flex relative border border-gray rounded-[1.2rem] animate-in fade-in slide-in-from-bottom-6 duration-700 fill-mode-both"
      style={{ animationDelay: `${(index % 3) * 80}ms` }}
    >
      <div className="w-full flex flex-col">
        {plan.label && (
          <div
            className={cn(
              "absolute left-35 top-0 -translate-y-1/2 inline-flex items-center h-38 px-20 rounded-[.7rem] text-[1.7rem]",
              index % 2 === 0 ? "bg-purple" : "bg-yellow",
            )}
          >
            {plan.label}
          </div>
        )}
        <div className="relative mb-10 flex flex-col justify-between s:min-h-[48.5rem]">
          <div>
            <div
              className={cn(
                "pl flex flex-col items-start pl-35 pb-45 pr-35 s:pr-55",
                isCustom ? "pt-40" : "pt-60",
              )}
            >
              {isCustom ? (
                <p className="h2">{plan.description}</p>
              ) : (
                <>
                  <h3 className="mb-20">{plan.title}</h3>
                  <p className="text-gray-text">{plan.description}</p>
                </>
              )}
            </div>
            {!isCustom && (
              <div className="px-35">
                <div className="flex items-end">
                  <div className="h2 flex items-start">
                    <span className="text-[.4em] font-medium mt-[.35em] mr-[.1em]">$</span>
                    {plan.price}
                  </div>
                  <span className="pl-5 pb-5">{plan.priceSubLabel}</span>
                </div>
                <div className="text-gray-text text-[1.7rem] leading-none">{plan.priceDisclaimer}</div>
              </div>
            )}
          </div>
          <div className="px-35 mt-50">
            <PlanButton href={plan.buttonLink} label={plan.buttonLabel} />
            <div className="relative h-50 mt-10 flex justify-center">
              {plan.contactLabel && plan.contactLink && (
                <a
                  href={plan.contactLink}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute uline-double text-[1.7rem] whitespace-pre"
                >
                  {plan.contactLabel}
                </a>
              )}
            </div>
          </div>
        </div>
        <hr />
        <div className="flex-1 flex flex-col items-start px-35 pt-25 pb-40 bg-gray-3 rounded-b-[1.2rem]">
          <h4>What’s included</h4>
          <ul className="flex flex-col items-start gap-y-20 mt-30">
            {plan.included.map((item) => (
              <li key={item} className="flex text-[1.8rem]">
                <Check className="h-8 w-auto mr-15 shrink-0" />
                <span className="mt-[-.4em]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export function Plans() {
  const [projects, setProjects] = useState(false);
  const plans = projects ? projectPlans : subscriptionPlans;

  return (
    <section id="packages" className="relative bg-white pb-100 s:pb-200 scroll-mt-0">
      <div className="site-max pt-35">
        <div className="site-grid">
          <SectionLabel className="col-span-6 s:col-span-4">Plans</SectionLabel>
          <div className="col-span-6 s:col-span-2">(BO® — 06)</div>
          <div className="col-span-6 s:col-span-3 s:col-start-10 hidden s:block uppercase text-right">
            Add-to-cart creative
          </div>
        </div>
        <button
          type="button"
          role="switch"
          aria-checked={projects}
          aria-label="Show bundled projects instead of subscriptions"
          onClick={() => setProjects((p) => !p)}
          className="flex items-center gap-x-10 mt-60 s:mt-100"
        >
          <span className={cn("transition-opacity", projects && "opacity-50")}>Subscriptions</span>
          <span className="switch" data-on={projects} />
          <span className={cn("transition-opacity", !projects && "opacity-50")}>Projects</span>
        </button>
        <div className="max-w-[105rem] mt-30 s:mt-50 stack">
          <h2
            className={cn(
              "h2 transition-[opacity,transform] duration-700 ease-expo",
              projects ? "opacity-0 translate-y-10 invisible" : "opacity-100",
            )}
          >
            Subscriptions are like having an in-house creative department without the headaches of
            managing salaried employees.
          </h2>
          <h2
            className={cn(
              "h2 transition-[opacity,transform] duration-700 ease-expo",
              projects ? "opacity-100" : "opacity-0 translate-y-10 invisible",
            )}
          >
            Bundled projects are for clients who know exactly what they need. Off the shelf and
            on-target, everything included.
          </h2>
        </div>
        <div className="relative mt-80">
          <div key={projects ? "projects" : "subscriptions"} className="site-grid gap-y-50 s:gap-y-40">
            {plans.map((plan, i) => (
              <PlanCard key={plan.buttonLink + i} plan={plan} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
