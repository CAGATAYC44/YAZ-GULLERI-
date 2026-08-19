"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { aboutContent } from "@/data/content";
import RevealOnScroll from "./RevealOnScroll";

export default function About() {
  const [imgAvailable, setImgAvailable] = useState(false);
  const initials = aboutContent.name
    .split(" ")
    .map((word) => word[0])
    .join("");

  useEffect(() => {
    let cancelled = false;
    const probe = new window.Image();
    probe.onload = () => {
      if (!cancelled) setImgAvailable(true);
    };
    probe.onerror = () => {
      if (!cancelled) setImgAvailable(false);
    };
    probe.src = aboutContent.portrait.src;
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="hakkinda" className="relative bg-dark px-[15px] py-28 mobile:py-20">
      <div className="mx-auto flex max-w-[1340px] items-center gap-20 mobile:flex-col mobile:gap-12">
        <RevealOnScroll variant="up" className="flex flex-1 justify-center">
          <div className="relative aspect-[3/4] w-full max-w-[360px] overflow-hidden border border-light/15 bg-light/5">
            {imgAvailable ? (
              <img
                src={aboutContent.portrait.src}
                alt={aboutContent.portrait.alt}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-light/40">
                <span className="font-serif text-5xl">{initials}</span>
                <span className="text-[8px] font-medium uppercase tracking-[-0.08px]">
                  Portre Yakında
                </span>
              </div>
            )}
          </div>
        </RevealOnScroll>

        <RevealOnScroll variant="up" className="flex-1">
          <span className="text-[8px] font-medium uppercase leading-3 tracking-[-0.08px] text-accent-terra">
            {aboutContent.eyebrow}
          </span>
          <h2 className="mt-4 font-serif text-5xl font-medium uppercase leading-[90%] tracking-[-1.5px] text-light mobile:text-4xl">
            {aboutContent.name}
          </h2>
          <div className="mt-6 flex max-w-[460px] flex-col gap-4">
            {aboutContent.bio.map((paragraph) => (
              <p key={paragraph} className="text-base leading-6 tracking-[-0.16px] text-light/80">
                {paragraph}
              </p>
            ))}
          </div>
          <p className="mt-6 max-w-[460px] font-serif text-xl italic leading-8 text-accent-terra">
            {aboutContent.dedication}
          </p>
          <Link
            href={aboutContent.readMoreHref}
            className="nav-link-underline mt-8 inline-block text-xs font-medium uppercase tracking-[-0.12px] text-light"
          >
            {aboutContent.readMoreLabel} →
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}
