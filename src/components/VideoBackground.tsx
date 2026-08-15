"use client";

import { useVideoPreload } from "@/hooks/useVideoPreload";
import type { HeroVideo } from "@/data/content";

type VideoBackgroundProps = {
  videos: HeroVideo[];
  activeId: string;
};

export default function VideoBackground({ videos, activeId }: VideoBackgroundProps) {
  const sources = videos.map((video) => video.src);
  const blobUrls = useVideoPreload(sources);

  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden" aria-hidden="true">
      {videos.map((video) => (
        <video
          key={video.id}
          src={blobUrls[video.src] ?? video.src}
          className={`video-layer absolute inset-0 h-full w-full object-cover ${
            video.id === activeId ? "opacity-100" : "opacity-0"
          }`}
          autoPlay
          muted
          loop
          playsInline
        />
      ))}
      <div className="absolute inset-0 z-[1] bg-[#1F1D1C]/30" />
    </div>
  );
}
