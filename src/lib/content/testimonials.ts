import "server-only";
import { testimonials, testimonialsContent, type Testimonial } from "@/data/content";
import { sanitizeRichText } from "@/lib/sanitize";

export type TestimonialsContent = {
  eyebrow: string;
  title: string;
  items: Testimonial[];
};

export async function getTestimonialsContent(): Promise<TestimonialsContent> {
  return {
    eyebrow: testimonialsContent.eyebrow,
    title: testimonialsContent.title,
    items: testimonials.map((testimonial) => ({
      ...testimonial,
      quote: sanitizeRichText(testimonial.quote),
    })),
  };
}
