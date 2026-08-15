"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <button
      type="button"
      onClick={handleLogout}
      className="nav-link-underline text-xs font-medium uppercase tracking-[-0.12px] text-light"
    >
      Çıkış Yap
    </button>
  );
}
