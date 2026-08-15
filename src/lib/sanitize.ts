import DOMPurify from "isomorphic-dompurify";

const RICH_TEXT_ALLOWED_TAGS = ["b", "i", "em", "strong", "br"];

/**
 * Sanitizes text/rich-text before it reaches the client. This is the single
 * chokepoint all content — static today, CMS-authored later — must pass
 * through, so a future editable field can never inject markup or scripts.
 */
export function sanitizeRichText(value: string): string {
  return DOMPurify.sanitize(value, {
    ALLOWED_TAGS: RICH_TEXT_ALLOWED_TAGS,
    ALLOWED_ATTR: [],
  }).trim();
}

export function sanitizeRichTextArray(values: string[]): string[] {
  return values.map(sanitizeRichText);
}
