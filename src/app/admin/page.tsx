import { CONTENT_DOMAINS } from "@/lib/content";
import LogoutButton from "@/components/admin/LogoutButton";

export default function AdminDashboardPage() {
  return (
    <main className="min-h-screen bg-dark px-[15px] py-16 text-light">
      <div className="mx-auto max-w-[760px]">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[8px] font-medium uppercase leading-3 tracking-[-0.08px] text-accent-terra">
              YÖNETİM
            </span>
            <h1 className="mt-2 font-serif text-3xl font-medium uppercase text-light">
              İçerik Panosu
            </h1>
          </div>
          <LogoutButton />
        </div>

        <p className="mt-8 max-w-[500px] text-sm leading-6 text-light/70">
          Bu, gelecekte bir CMS veya Supabase paneline bağlanacak içerik
          uçlarının yer tutucusudur. Her modül şu an statik veriyi
          döndürüyor — arkasını değiştirmek yeterli olacak, uç noktaların
          şekli aynı kalacak.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 mobile:grid-cols-1">
          {CONTENT_DOMAINS.map((domain) => (
            <a
              key={domain}
              href={`/api/content/${domain}`}
              target="_blank"
              rel="noreferrer"
              className="nav-link-underline border border-light/10 px-5 py-4 text-xs font-medium uppercase tracking-[-0.08px] text-light/80"
            >
              /api/content/{domain}
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
