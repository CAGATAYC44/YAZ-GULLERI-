import { NextRequest, NextResponse } from "next/server";
import { CONTENT_DOMAINS, contentGetters } from "@/lib/content";
import { contentDomainParamSchema } from "@/lib/validation/content.schema";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ domain: string }> },
) {
  const parsed = contentDomainParamSchema.safeParse(await params);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Unknown content domain", validDomains: CONTENT_DOMAINS },
      { status: 400 },
    );
  }

  const data = await contentGetters[parsed.data.domain]();

  return NextResponse.json(
    { domain: parsed.data.domain, data },
    { headers: { "Cache-Control": "public, max-age=60, stale-while-revalidate=300" } },
  );
}
