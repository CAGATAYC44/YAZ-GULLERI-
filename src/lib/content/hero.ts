import "server-only";
import {
  heroVideos,
  heroTitle,
  heroParagraph,
  ctaLabel,
  availabilityBadge,
  contactBadge,
  type HeroVideo,
} from "@/data/content";
import { sanitizeRichText } from "@/lib/sanitize";

export type HeroContent = {
  videos: HeroVideo[];
  title: { lines: string[]; punctuation: string };
  paragraph: string;
  ctaLabel: string;
  availabilityBadge: string;
  contactBadge: { label: string; href: string };
};

/**
 * Returns hero section content. Swap the body for a Supabase/CMS read later —
 * callers only depend on this async shape, not on where the data lives.
 */
export async function getHeroContent(): Promise<HeroContent> {
  return {
    videos: heroVideos,
    title: heroTitle,
    paragraph: sanitizeRichText(heroParagraph),
    ctaLabel,
    availabilityBadge,
    contactBadge,
  };
}
