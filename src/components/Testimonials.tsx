"use client";

import { testimonials, testimonialsContent } from "@/data/content";
import RevealOnScroll from "./RevealOnScroll";

export default function Testimonials() {
  return (
    <section id="okuyuculardan" className="relative bg-dark px-[15px] py-28 mobile:py-20">
      <div className="mx-auto max-w-[1340px]">
        <RevealOnScroll variant="up" className="max-w-[560px]">
          <span className="text-[8px] font-medium uppercase leading-3 tracking-[-0.08px] text-accent-terra">
            {testimonialsContent.eyebrow}
          </span>
          <h2 className="mt-4 font-serif text-5xl font-medium uppercase leading-[90%] tracking-[-1.5px] text-light mobile:text-3xl">
            {testimonialsContent.title}
          </h2>
        </RevealOnScroll>

        <div className="mt-16 grid grid-cols-2 gap-x-12 gap-y-12 mobile:grid-cols-1 mobile:gap-8">
          {testimonials.map((testimonial) => (
            <RevealOnScroll
              key={testimonial.name}
              variant="up"
              className="border-t border-light/15 pt-6"
            >
              <p className="font-serif text-xl italic leading-8 text-light/90">
                “{testimonial.quote}”
              </p>
              <p className="mt-5 text-xs font-medium uppercase tracking-[-0.12px] text-light">
                {testimonial.name}
                <span className="ml-2 text-light/40">— {testimonial.role}</span>
              </p>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
