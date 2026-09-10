"use client";

import Link from "next/link";
import { meetingTeaser } from "@/data/content";
import RevealOnScroll from "./RevealOnScroll";

export default function Bulusma() {
  return (
    <section id="bulusma" className="relative bg-dark px-[15px] py-28 mobile:py-20">
      <div className="mx-auto max-w-[1340px]">
        <RevealOnScroll variant="up" className="max-w-[620px]">
          <span className="text-[8px] font-medium uppercase leading-3 tracking-[-0.08px] text-accent-terra">
            {meetingTeaser.eyebrow}
          </span>
          <h2 className="mt-4 font-serif text-6xl font-medium uppercase leading-[90%] tracking-[-2px] text-light mobile:text-4xl mobile:tracking-[-1px]">
            {meetingTeaser.title}
          </h2>
          <p className="mt-3 text-[8px] font-medium uppercase leading-3 tracking-[-0.08px] text-light/40">
            {meetingTeaser.dateline}
          </p>
        </RevealOnScroll>

        <RevealOnScroll
          variant="up"
          className="relative mt-12 aspect-[2/1] w-full overflow-hidden mobile:aspect-[4/3]"
        >
          <Link href={meetingTeaser.ctaHref} className="group block h-full w-full">
            <img
              src={meetingTeaser.image.src}
              alt={meetingTeaser.image.alt}
              className="imza-photo-tone h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-10 mobile:p-6">
              <p className="max-w-[520px] text-base leading-6 tracking-[-0.16px] text-light/85">
                {meetingTeaser.note}
              </p>
              <span className="nav-link-underline mt-5 inline-block text-xs font-medium uppercase tracking-[-0.12px] text-accent-terra">
                {meetingTeaser.ctaLabel} →
              </span>
            </div>
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}
