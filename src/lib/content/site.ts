import "server-only";
import { navLinks, footerBadge, siteMeta, type NavLink } from "@/data/content";

export type SiteContent = {
  navLinks: NavLink[];
  footerBadge: string;
  meta: { title: string; description: string };
};

export async function getSiteContent(): Promise<SiteContent> {
  return {
    navLinks,
    footerBadge,
    meta: siteMeta,
  };
}
