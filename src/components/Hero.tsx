"use client";

import { useEffect, useState } from "react";
import {
  heroVideos,
  availabilityBadge,
  heroTitle,
  heroParagraph,
  ctaLabel,
  bookMockup,
  contactBadge,
} from "@/data/content";
import RevealOnScroll from "./RevealOnScroll";
import { useScrollParallax } from "@/hooks/useScrollParallax";

type HeroProps = {
  activeId: string;
  onSelect: (id: string) => void;
};

const MOCKUP_FADE_DISTANCE = 420;

export default function Hero({ activeId, onSelect }: HeroProps) {
  const activeVideo = heroVideos.find((video) => video.id === activeId) ?? heroVideos[0];
  const scrollY = useScrollParallax(1);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 250);
    return () => clearTimeout(timer);
  }, []);

  const fadeProgress = Math.min(scrollY / MOCKUP_FADE_DISTANCE, 1);
  const mockupOpacity = mounted ? 1 - fadeProgress : 0;
  const mockupTranslate = mounted ? -(fadeProgress * 40) : 50;

  return (
    <div className="relative z-[2] mx-auto flex h-full max-w-[1340px] flex-col items-end justify-end gap-[150px] px-[15px] pt-[190px] mobile:gap-16 mobile:pt-[140px]">
      {/* Üst Kısım — Video Değiştirici */}
      <div className="flex w-full items-center mobile:flex-col mobile:items-start mobile:gap-6">
        <div className="flex flex-[4] items-center">
          <div className="inline-flex items-center gap-1 rounded-full border border-light/20 p-1 mobile:flex-wrap">
            {heroVideos.map((video) => (
              <button
                key={video.id}
                type="button"
                onClick={() => onSelect(video.id)}
                className={`rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[-0.12px] transition-colors duration-300 ${
                  video.id === activeId
                    ? "bg-light text-dark"
                    : "text-light/60 hover:text-light/85"
                }`}
              >
                {video.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end gap-3 mobile:justify-start">
          <span
            className="pulse-dot relative inline-block h-[7px] w-[7px] rounded-full"
            style={{ backgroundColor: activeVideo.dotColor, color: activeVideo.dotColor }}
          />
          <span className="text-xs font-medium uppercase tracking-[-0.12px] text-light">
            {availabilityBadge}
          </span>
        </div>
      </div>

      {/* Alt Kısım — İsim ve CTA */}
      <div className="flex w-full items-end gap-10 pb-[60px] mobile:flex-col mobile:items-start mobile:gap-10 mobile:pb-16">
        <RevealOnScroll variant="up" className="flex-[2]">
          <h1 className="font-serif text-[200px] font-medium uppercase leading-[81%] tracking-[-6px] text-light md-tablet:text-[120px] md-tablet:tracking-[-3.6px] mobile:text-[58px] mobile:leading-[92%] mobile:tracking-[-1.74px]">
            {heroTitle.lines[0]}
            <span className="text-accent-wine">{heroTitle.punctuation}</span>
          </h1>
        </RevealOnScroll>

        <div className="hidden shrink-0 pb-2 md-tablet:block desktop:block">
          <img
            src={bookMockup.src}
            alt={bookMockup.alt}
            style={{
              opacity: mockupOpacity,
              transform: `translateY(${mockupTranslate}px)`,
              transition: "opacity 0.9s var(--ease-spring), transform 0.9s var(--ease-spring)",
            }}
            className="w-[150px] drop-shadow-2xl md-tablet:w-[110px]"
          />
        </div>

        <RevealOnScroll variant="up" className="flex-1">
          <p className="max-w-[380px] text-base leading-6 tracking-[-0.16px] text-light/85">
            {heroParagraph}
          </p>
          <RevealOnScroll variant="right" delay className="mt-8">
            <a
              href={contactBadge.href}
              className="cta-button inline-flex items-center border border-light/40 px-7 py-4 text-xs font-medium uppercase tracking-[-0.12px] text-light"
            >
              {ctaLabel}
            </a>
          </RevealOnScroll>
        </RevealOnScroll>
      </div>
    </div>
  );
}
