import type { Metadata } from "next";
import Link from "next/link";
import { editorsNote, aboutContent } from "@/data/content";
import RoseIcon from "@/components/RoseIcon";

export const metadata: Metadata = {
  title: "Editörden — Yaz Gülleri",
  description: editorsNote.lead,
};

export default function HakkindaPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-dark px-[15px] py-16 text-light mobile:py-10">
      <video
        src={aboutContent.backgroundVideo}
        className="absolute inset-0 z-0 h-full w-full object-cover opacity-25"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <div className="absolute inset-0 z-[1] bg-dark/80" />

      <div className="relative z-[2] mx-auto max-w-[760px]">
        <div className="mb-16 flex items-center justify-between">
          <Link href="/" className="text-accent-terra" aria-label="Yaz Gülleri">
            <RoseIcon className="h-6 w-6" />
          </Link>
          <Link
            href="/#hakkinda"
            className="nav-link-underline text-xs font-medium uppercase tracking-[-0.12px]"
          >
            ← Ana Sayfaya Dön
          </Link>
        </div>

        <p className="font-serif text-2xl italic leading-9 text-accent-terra mobile:text-xl mobile:leading-8">
          {editorsNote.lead}
        </p>

        <div className="mt-10 flex flex-col gap-6">
          {editorsNote.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-base font-light leading-relaxed text-light/80">
              {paragraph}
            </p>
          ))}
        </div>

        <p className="mt-10 font-serif text-xl italic leading-8 text-light/90">
          {editorsNote.closing}
        </p>
      </div>
    </main>
  );
}
