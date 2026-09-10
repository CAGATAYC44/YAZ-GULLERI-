import type { Metadata } from "next";
import Link from "next/link";
import { meetingGallery } from "@/data/content";
import RoseIcon from "@/components/RoseIcon";
import MusicToggle from "@/components/MusicToggle";
import MeetingGallery from "@/components/MeetingGallery";
import VideoCarousel from "@/components/VideoCarousel";
import SwipeHint from "@/components/SwipeHint";

export const metadata: Metadata = {
  title: "Buluşma — Yaz Gülleri",
  description: meetingGallery.intro,
};

export default function ImzaGunuPage() {
  return (
    <main className="relative min-h-screen bg-dark px-[15px] py-16 text-light mobile:py-10">
      <div className="mx-auto max-w-[1340px]">
        <div className="mb-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-accent-terra" aria-label="Yaz Gülleri">
              <RoseIcon className="h-6 w-6" />
            </Link>
            <MusicToggle />
          </div>
          <Link
            href="/#bulusma"
            className="nav-link-underline text-xs font-medium uppercase tracking-[-0.12px]"
          >
            ← Ana Sayfaya Dön
          </Link>
        </div>

        <div className="max-w-[620px]">
          <span className="text-[8px] font-medium uppercase leading-3 tracking-[-0.08px] text-accent-terra">
            {meetingGallery.eyebrow}
          </span>
          <h1 className="mt-4 font-serif text-6xl font-medium uppercase leading-[90%] tracking-[-2px] text-light mobile:text-4xl mobile:tracking-[-1px]">
            {meetingGallery.title}
          </h1>
          <p className="mt-3 text-[8px] font-medium uppercase leading-3 tracking-[-0.08px] text-light/40">
            {meetingGallery.dateline}
          </p>
          <p className="mt-6 text-base leading-6 tracking-[-0.16px] text-light/80">
            {meetingGallery.intro}
          </p>
        </div>

        <div className="mt-12">
          <SwipeHint />
          <VideoCarousel videos={meetingGallery.videos} />
        </div>

        <p className="mx-auto mt-16 max-w-[620px] text-center font-serif text-xl italic leading-8 text-accent-terra mobile:text-lg mobile:leading-7">
          {meetingGallery.interludeOne}
        </p>

        <div className="mt-16">
          <SwipeHint />
          <MeetingGallery images={meetingGallery.images} introVideo={meetingGallery.introVideo} />
        </div>

        <p className="mx-auto mt-16 max-w-[620px] text-center font-serif text-xl italic leading-8 text-light/90 mobile:text-lg mobile:leading-7">
          {meetingGallery.interludeTwo}
        </p>

        <div className="mt-16 flex justify-center">
          <Link
            href="/"
            className="cta-button border border-light/40 px-6 py-3 text-xs font-medium uppercase tracking-[-0.12px] text-light"
          >
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    </main>
  );
}
