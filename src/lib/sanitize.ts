import sanitizeHtml from "sanitize-html";

const RICH_TEXT_ALLOWED_TAGS = ["b", "i", "em", "strong", "br"];

/**
 * Sanitizes text/rich-text before it reaches the client. This is the single
 * chokepoint all content — static today, CMS-authored later — must pass
 * through, so a future editable field can never inject markup or scripts.
 *
 * Uses sanitize-html (pure JS, no jsdom) rather than isomorphic-dompurify —
 * the latter pulls in jsdom, which doesn't bundle reliably into Vercel's
 * serverless functions and caused a 500 there.
 */
export function sanitizeRichText(value: string): string {
  return sanitizeHtml(value, {
    allowedTags: RICH_TEXT_ALLOWED_TAGS,
    allowedAttributes: {},
  }).trim();
}

export function sanitizeRichTextArray(values: string[]): string[] {
  return values.map(sanitizeRichText);
}
