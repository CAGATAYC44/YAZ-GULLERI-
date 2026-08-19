"use client";

import { useMusic } from "./MusicProvider";
import MusicIcon from "./MusicIcon";

export default function MusicToggle() {
  const { isPlaying, toggle } = useMusic();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={isPlaying}
      aria-label={isPlaying ? "Müziği durdur" : "Müziği çal"}
      className={`transition-colors duration-300 ${
        isPlaying ? "text-accent-terra" : "text-light/60 hover:text-light"
      }`}
    >
      <MusicIcon className={`h-5 w-5 ${isPlaying ? "music-playing" : ""}`} />
    </button>
  );
}
