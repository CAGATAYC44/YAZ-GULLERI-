import "server-only";
import { getHeroContent } from "./hero";
import { getBookContent } from "./book";
import { getAboutContent, getEditorsNoteContent } from "./about";
import { getTestimonialsContent } from "./testimonials";
import { getContactContent } from "./contact";
import { getSiteContent } from "./site";

export const CONTENT_DOMAINS = [
  "hero",
  "book",
  "about",
  "editors-note",
  "testimonials",
  "contact",
  "site",
] as const;

export type ContentDomain = (typeof CONTENT_DOMAINS)[number];

/**
 * Single lookup table from a domain key to its getter. This is the seam a
 * future admin panel or Supabase-backed CMS plugs into: each getter's return
 * shape is the contract, its body is the only thing that has to change.
 */
export const contentGetters: Record<ContentDomain, () => Promise<unknown>> = {
  hero: getHeroContent,
  book: getBookContent,
  about: getAboutContent,
  "editors-note": getEditorsNoteContent,
  testimonials: getTestimonialsContent,
  contact: getContactContent,
  site: getSiteContent,
};

export {
  getHeroContent,
  getBookContent,
  getAboutContent,
  getEditorsNoteContent,
  getTestimonialsContent,
  getContactContent,
  getSiteContent,
};
