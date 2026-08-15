"use client";

import { navLinks, contactBadge } from "@/data/content";

type MobileMenuProps = {
  isOpen: boolean;
  onLinkClick: () => void;
};

export default function MobileMenu({ isOpen, onLinkClick }: MobileMenuProps) {
  return (
    <div className={`mobile-menu-grid ${isOpen ? "is-open" : ""}`}>
      <div>
        <nav className="flex flex-col gap-5 border-t border-light/15 py-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={onLinkClick}
              className="text-[28px] font-medium uppercase leading-8 tracking-[-0.84px] text-light"
            >
              {link.label}
            </a>
          ))}
          <a
            href={contactBadge.href}
            onClick={onLinkClick}
            className="mt-4 inline-flex w-fit items-center border border-light/30 px-5 py-3 text-xs font-medium uppercase tracking-[-0.12px] text-light"
          >
            {contactBadge.label}
          </a>
        </nav>
      </div>
    </div>
  );
}
