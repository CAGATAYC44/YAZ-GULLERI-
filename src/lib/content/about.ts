import "server-only";
import { aboutContent, editorsNote } from "@/data/content";
import { sanitizeRichText, sanitizeRichTextArray } from "@/lib/sanitize";

export type AboutContent = {
  eyebrow: string;
  name: string;
  portrait: { src: string; alt: string };
  bio: string[];
  dedication: string;
  readMoreLabel: string;
  readMoreHref: string;
};

export async function getAboutContent(): Promise<AboutContent> {
  return {
    eyebrow: aboutContent.eyebrow,
    name: aboutContent.name,
    portrait: aboutContent.portrait,
    bio: sanitizeRichTextArray(aboutContent.bio),
    dedication: sanitizeRichText(aboutContent.dedication),
    readMoreLabel: aboutContent.readMoreLabel,
    readMoreHref: aboutContent.readMoreHref,
  };
}

export type EditorsNoteContent = {
  lead: string;
  paragraphs: string[];
  closing: string;
  backgroundVideo: string;
};

export async function getEditorsNoteContent(): Promise<EditorsNoteContent> {
  return {
    lead: sanitizeRichText(editorsNote.lead),
    paragraphs: sanitizeRichTextArray(editorsNote.paragraphs),
    closing: sanitizeRichText(editorsNote.closing),
    backgroundVideo: aboutContent.backgroundVideo,
  };
}
