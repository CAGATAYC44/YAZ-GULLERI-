import { bookMockup, footerBadge } from "@/data/content";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-light/10 bg-dark px-[15px] py-20 mobile:py-14">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-terra/20 blur-[100px]" />
      <div className="relative mx-auto flex max-w-[1340px] flex-col items-center gap-6">
        <img
          src={bookMockup.src}
          alt={bookMockup.alt}
          className="footer-float w-[100px] drop-shadow-2xl"
        />
        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-light/60">
          {footerBadge}
        </span>
      </div>
    </footer>
  );
}
