"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setError(null);
    setLoading(true);

    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    setLoading(false);

    if (!response.ok) {
      const body = await response.json().catch(() => null);
      setError(body?.error ?? "Giriş başarısız");
      return;
    }

    router.push("/admin");
    router.refresh();
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-dark px-[15px] text-light">
      <form onSubmit={handleSubmit} className="w-full max-w-[360px]">
        <span className="text-[8px] font-medium uppercase leading-3 tracking-[-0.08px] text-accent-terra">
          YÖNETİM
        </span>
        <h1 className="mt-4 font-serif text-3xl font-medium uppercase text-light">Giriş</h1>

        <label className="mt-8 block text-xs font-medium uppercase tracking-[-0.12px] text-light/60">
          Şifre
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="mt-2 w-full border border-light/20 bg-transparent px-4 py-3 text-sm text-light outline-none focus:border-accent-terra"
            autoFocus
          />
        </label>

        {error && <p className="mt-4 text-xs text-accent-wine">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="cta-button mt-8 w-full border border-light/40 px-7 py-4 text-xs font-medium uppercase tracking-[-0.12px] text-light disabled:opacity-50"
        >
          {loading ? "Kontrol ediliyor..." : "Giriş Yap"}
        </button>
      </form>
    </main>
  );
}
