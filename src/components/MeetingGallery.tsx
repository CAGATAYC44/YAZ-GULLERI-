"use client";

import { useEffect, useRef, useState } from "react";
import type { MeetingImage } from "@/data/content";
import Lightbox from "./Lightbox";
import RoseIcon from "./RoseIcon";

type MeetingGalleryProps = {
  images: MeetingImage[];
  introVideo?: string;
};

export default function MeetingGallery({ images, introVideo }: MeetingGalleryProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const introVideoRef = useRef<HTMLVideoElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const videoOffset = introVideo ? 1 : 0;
  const totalSlides = images.length + videoOffset;

  // Mobile browsers cap how many videos can autoplay at once on a page;
  // only play the intro video while its slide is actually active.
  useEffect(() => {
    const video = introVideoRef.current;
    if (!video) return;
    if (activeIndex === 0) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [activeIndex]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let timer: ReturnType<typeof setTimeout>;
    function updateActiveIndex() {
      const trackEl = trackRef.current;
      if (!trackEl) return;

      const atEnd = trackEl.scrollLeft + trackEl.clientWidth >= trackEl.scrollWidth - 1;
      if (atEnd) {
        setActiveIndex(slideRefs.current.length - 1);
        return;
      }

      let closest = 0;
      let closestDist = Infinity;
      slideRefs.current.forEach((el, i) => {
        if (!el) return;
        const dist = Math.abs(el.offsetLeft - trackEl.scrollLeft);
        if (dist < closestDist) {
          closestDist = dist;
          closest = i;
        }
      });
      setActiveIndex(closest);
    }

    function onScroll() {
      clearTimeout(timer);
      timer = setTimeout(updateActiveIndex, 100);
    }

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", onScroll);
      clearTimeout(timer);
    };
  }, []);

  function scrollToIndex(i: number) {
    const el = slideRefs.current[i];
    const track = trackRef.current;
    if (!el || !track) return;
    track.scrollTo({ left: el.offsetLeft, behavior: "smooth" });
  }

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="no-scrollbar flex h-[440px] snap-x snap-mandatory gap-4 overflow-x-auto mobile:h-[260px] mobile:gap-3"
      >
        {introVideo && (
          <div
            ref={(el) => {
              slideRefs.current[0] = el;
            }}
            className="h-full flex-shrink-0 snap-start"
          >
            <div className="block h-full border border-light/15 p-1.5">
              <video
                ref={introVideoRef}
                src={introVideo}
                className="imza-photo-tone h-full w-auto"
                muted
                loop
                playsInline
              />
            </div>
          </div>
        )}

        {images.map((image, i) => (
          <div
            key={image.src}
            ref={(el) => {
              slideRefs.current[i + videoOffset] = el;
            }}
            className="h-full flex-shrink-0 snap-start"
          >
            <button
              type="button"
              onClick={() => setLightboxIndex(i)}
              className="group block h-full border border-light/15 p-1.5 transition-colors duration-300 hover:border-accent-terra/60"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="imza-photo-tone h-full w-auto transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </button>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
        aria-label="Önceki görsel"
        disabled={activeIndex === 0}
        className="absolute left-2 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center border border-light/30 bg-dark/70 text-xl text-light backdrop-blur-sm transition-colors hover:border-accent-terra disabled:opacity-0 md-tablet:flex desktop:flex"
      >
        ‹
      </button>
      <button
        type="button"
        onClick={() => scrollToIndex(Math.min(totalSlides - 1, activeIndex + 1))}
        aria-label="Sonraki görsel"
        disabled={activeIndex === totalSlides - 1}
        className="absolute right-2 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center border border-light/30 bg-dark/70 text-xl text-light backdrop-blur-sm transition-colors hover:border-accent-terra disabled:opacity-0 md-tablet:flex desktop:flex"
      >
        ›
      </button>

      <div className="mt-6 flex flex-col items-center gap-2">
        <div className="relative h-9 w-9">
          <RoseIcon className="absolute inset-0 h-9 w-9 text-light/15" />
          <div
            className="absolute inset-0 overflow-hidden transition-[clip-path] duration-500 ease-out"
            style={{
              clipPath: `inset(0 ${100 - ((activeIndex + 1) / totalSlides) * 100}% 0 0)`,
            }}
          >
            <RoseIcon className="h-9 w-9 text-accent-terra" />
          </div>
        </div>
        <span className="text-[10px] font-medium uppercase tracking-[-0.1px] text-light/40">
          {String(activeIndex + 1).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")}
        </span>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </div>
  );
}
