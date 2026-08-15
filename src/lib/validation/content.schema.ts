import { z } from "zod";
import { CONTENT_DOMAINS } from "@/lib/content";

export const contentDomainParamSchema = z.object({
  domain: z.enum(CONTENT_DOMAINS),
});
