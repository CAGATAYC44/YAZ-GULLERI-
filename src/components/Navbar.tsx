"use client";

import { useState } from "react";
import { navLinks, contactBadge } from "@/data/content";
import RoseIcon from "./RoseIcon";
import MobileMenu from "./MobileMenu";
import { useScrollParallax } from "@/hooks/useScrollParallax";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const scrollY = useScrollParallax(1);
  const scrolled = scrollY > 40;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-10 transition-colors duration-500 ${
        scrolled ? "border-b border-light/10 bg-dark/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1340px] items-center justify-between px-[15px] py-9 text-light">
        <a
          href="#"
          className="group text-accent-terra transition-colors duration-300 hover:text-light"
          aria-label="Yaz Gülleri"
        >
          <RoseIcon className="h-6 w-6 transition-transform duration-300 ease-spring group-hover:scale-110 group-hover:rotate-[10deg]" />
        </a>

        <nav className="mobile:hidden flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link-underline">
              <span className="text-xs font-medium uppercase tracking-[-0.12px]">
                {link.label}
              </span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <a
            href={contactBadge.href}
            className="cta-button mobile:hidden border border-light/40 px-5 py-2.5 text-xs font-medium uppercase tracking-[-0.12px] text-light"
          >
            {contactBadge.label}
          </a>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="hidden mobile:flex items-center text-xs font-medium uppercase tracking-[-0.12px] text-light"
            aria-expanded={isOpen}
            aria-label="Menüyü aç/kapat"
          >
            {isOpen ? "Kapat" : "Menu"}
          </button>
        </div>
      </div>

      <div className="hidden mobile:block mx-auto max-w-[1340px] px-[15px]">
        <MobileMenu isOpen={isOpen} onLinkClick={() => setIsOpen(false)} />
      </div>
    </header>
  );
}
