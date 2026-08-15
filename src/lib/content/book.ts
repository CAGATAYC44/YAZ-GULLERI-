import "server-only";
import { bookShowcase, bookMockup, authorName, bookYear } from "@/data/content";
import { sanitizeRichText } from "@/lib/sanitize";

export type BookDetail = { label: string; value: string };

export type BookContent = {
  eyebrow: string;
  title: string;
  description: string;
  poemExcerpt: string;
  details: BookDetail[];
  ctaLabel: string;
  mockup: { src: string; alt: string };
  author: string;
  year: string;
};

export async function getBookContent(): Promise<BookContent> {
  return {
    eyebrow: bookShowcase.eyebrow,
    title: bookShowcase.title,
    description: sanitizeRichText(bookShowcase.description),
    poemExcerpt: sanitizeRichText(bookShowcase.poemExcerpt),
    details: bookShowcase.details,
    ctaLabel: bookShowcase.ctaLabel,
    mockup: bookMockup,
    author: authorName,
    year: bookYear,
  };
}
