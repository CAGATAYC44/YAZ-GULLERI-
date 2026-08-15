import "server-only";
import { contactContent } from "@/data/content";
import { sanitizeRichText } from "@/lib/sanitize";

export type ContactContent = {
  eyebrow: string;
  title: string;
  description: string;
};

export async function getContactContent(): Promise<ContactContent> {
  return {
    eyebrow: contactContent.eyebrow,
    title: contactContent.title,
    description: sanitizeRichText(contactContent.description),
  };
}
