"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { backgroundMusic } from "@/data/content";

type MusicContextValue = {
  isPlaying: boolean;
  toggle: () => void;
};

const MusicContext = createContext<MusicContextValue | null>(null);

const FADE_MS = 400;
const FADE_STEPS = 20;

export function MusicProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const fadeTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    return () => {
      if (fadeTimer.current) clearInterval(fadeTimer.current);
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (fadeTimer.current) {
      clearInterval(fadeTimer.current);
      fadeTimer.current = null;
    }

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    audio.volume = 0;
    audio
      .play()
      .then(() => {
        setIsPlaying(true);
        let step = 0;
        fadeTimer.current = setInterval(() => {
          step += 1;
          audio.volume = Math.min(backgroundMusic.volume, (backgroundMusic.volume * step) / FADE_STEPS);
          if (step >= FADE_STEPS && fadeTimer.current) {
            clearInterval(fadeTimer.current);
            fadeTimer.current = null;
          }
        }, FADE_MS / FADE_STEPS);
      })
      .catch(() => {
        setIsPlaying(false);
      });
  };

  return (
    <MusicContext.Provider value={{ isPlaying, toggle }}>
      <audio ref={audioRef} src={backgroundMusic.src} loop preload="none" />
      {children}
    </MusicContext.Provider>
  );
}

export function useMusic() {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error("useMusic must be used within a MusicProvider");
  }
  return context;
}
