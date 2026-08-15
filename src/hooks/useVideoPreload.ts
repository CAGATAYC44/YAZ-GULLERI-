"use client";

import { useEffect, useState } from "react";

export function useVideoPreload(sources: string[]) {
  const [blobUrls, setBlobUrls] = useState<Record<string, string>>({});
  const key = sources.join("|");

  useEffect(() => {
    let cancelled = false;
    const createdUrls: string[] = [];

    async function preload() {
      const entries = await Promise.all(
        sources.map(async (src) => {
          try {
            const response = await fetch(src);
            const blob = await response.blob();
            const objectUrl = URL.createObjectURL(blob);
            createdUrls.push(objectUrl);
            return [src, objectUrl] as const;
          } catch {
            return [src, src] as const;
          }
        })
      );

      if (!cancelled) {
        setBlobUrls(Object.fromEntries(entries));
      }
    }

    preload();

    return () => {
      cancelled = true;
      createdUrls.forEach((url) => URL.revokeObjectURL(url));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return blobUrls;
}
