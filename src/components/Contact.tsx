"use client";

import { contactContent, availabilityBadge } from "@/data/content";
import RevealOnScroll from "./RevealOnScroll";

export default function Contact() {
  return (
    <section id="iletisim" className="relative bg-dark px-[15px] py-28 mobile:py-20">
      <div className="mx-auto max-w-[1340px] text-center">
        <RevealOnScroll variant="up" className="mx-auto flex max-w-[520px] flex-col items-center">
          <span className="text-[8px] font-medium uppercase leading-3 tracking-[-0.08px] text-accent-terra">
            {contactContent.eyebrow}
          </span>
          <h2 className="mt-4 font-serif text-5xl font-medium uppercase leading-[90%] tracking-[-1.5px] text-light mobile:text-3xl">
            {contactContent.title}
          </h2>
          <p className="mt-6 text-base leading-6 tracking-[-0.16px] text-light/80">
            {contactContent.description}
          </p>
          <div className="mt-8 flex items-center gap-3">
            <span
              className="pulse-dot relative inline-block h-[7px] w-[7px] rounded-full"
              style={{ backgroundColor: "#C86D51", color: "#C86D51" }}
            />
            <span className="text-xs font-medium uppercase tracking-[-0.12px] text-light">
              {availabilityBadge}
            </span>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
