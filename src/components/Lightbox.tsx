"use client";

import { useEffect, useCallback } from "react";
import type { MeetingImage } from "@/data/content";

type LightboxProps = {
  images: MeetingImage[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export default function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const goPrev = useCallback(() => {
    onNavigate((index - 1 + images.length) % images.length);
  }, [index, images.length, onNavigate]);

  const goNext = useCallback(() => {
    onNavigate((index + 1) % images.length);
  }, [index, images.length, onNavigate]);

  useEffect(() => {
    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") goPrev();
      if (event.key === "ArrowRight") goNext();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, goPrev, goNext]);

  const image = images[index];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-dark/95 px-[15px] backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Kapat"
        className="absolute right-6 top-6 text-2xl text-light/70 transition-colors hover:text-light"
      >
        ✕
      </button>

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          goPrev();
        }}
        aria-label="Önceki görsel"
        className="absolute left-3 text-3xl text-light/60 transition-colors hover:text-light mobile:left-1 mobile:text-2xl"
      >
        ‹
      </button>

      <img
        src={image.src}
        alt={image.alt}
        onClick={(event) => event.stopPropagation()}
        className="imza-photo-tone max-h-[85vh] max-w-[85vw] object-contain shadow-2xl"
      />

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          goNext();
        }}
        aria-label="Sonraki görsel"
        className="absolute right-3 text-3xl text-light/60 transition-colors hover:text-light mobile:right-1 mobile:text-2xl"
      >
        ›
      </button>

      <span className="absolute bottom-6 text-xs font-medium uppercase tracking-[-0.12px] text-light/50">
        {index + 1} / {images.length}
      </span>
    </div>
  );
}
