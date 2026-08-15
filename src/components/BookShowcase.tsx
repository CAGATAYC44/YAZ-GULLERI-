"use client";

import { bookShowcase, bookMockup } from "@/data/content";
import RevealOnScroll from "./RevealOnScroll";

export default function BookShowcase() {
  return (
    <section id="eserler" className="relative bg-dark px-[15px] py-28 mobile:py-20">
      <div className="mx-auto flex max-w-[1340px] items-center gap-20 mobile:flex-col-reverse mobile:gap-12">
        <RevealOnScroll variant="up" className="flex-1">
          <span className="text-[8px] font-medium uppercase leading-3 tracking-[-0.08px] text-accent-terra">
            {bookShowcase.eyebrow}
          </span>
          <h2 className="mt-4 font-serif text-6xl font-medium uppercase leading-[90%] tracking-[-2px] text-light mobile:text-4xl mobile:tracking-[-1px]">
            {bookShowcase.title}
          </h2>
          <p className="mt-6 max-w-[460px] text-base leading-6 tracking-[-0.16px] text-light/80">
            {bookShowcase.description}
          </p>
          <p className="mt-5 max-w-[460px] font-serif text-lg italic leading-8 text-accent-terra">
            {bookShowcase.poemExcerpt}
          </p>

          <dl className="mt-10 grid max-w-[460px] grid-cols-2 gap-x-8 gap-y-5">
            {bookShowcase.details.map((detail) => (
              <div key={detail.label} className="border-t border-light/[0.08] pt-3">
                <dt className="text-[7px] font-medium uppercase leading-3 tracking-[0.15em] text-light/40">
                  {detail.label}
                </dt>
                <dd className="mt-2 text-sm font-medium uppercase tracking-[-0.12px] text-light">
                  {detail.value}
                </dd>
              </div>
            ))}
          </dl>

          <a
            href="#iletisim"
            className="cta-button mt-10 inline-flex items-center border border-light/40 px-7 py-4 text-xs font-medium uppercase tracking-[-0.12px] text-light"
          >
            {bookShowcase.ctaLabel}
          </a>
        </RevealOnScroll>

        <RevealOnScroll variant="up" className="relative flex flex-1 justify-center">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-terra/25 blur-[110px]" />
          <img
            src={bookMockup.src}
            alt={bookMockup.alt}
            className="relative w-full max-w-[320px] drop-shadow-2xl"
          />
        </RevealOnScroll>
      </div>
    </section>
  );
}
