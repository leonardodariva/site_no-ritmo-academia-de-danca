"use client";

import { ArrowLeft, LockKeyhole } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AdminNav from "./AdminNav";
import AdminSessionGate from "./AdminSessionGate";

export default function AdminLayoutShell({ children }: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  if (pathname === "/admin/login") return <>{children}</>;

  return <main className="admin-app">
    <aside className="admin-sidebar" aria-label="Navegação administrativa">
      <Link className="admin-brand" href="/" aria-label="Voltar para a página inicial"><img src="/logo-fundo-claro.png" alt="No Ritmo Academia de Dança" width="190" height="64" /></Link>
      <div className="admin-sidebar-divider" />
      <AdminNav />
      <div className="admin-sidebar-bottom"><div className="admin-restricted-note"><LockKeyhole size={16} aria-hidden="true" /><span>Acesso administrativo</span></div><Link className="admin-back-link" href="/"><ArrowLeft size={16} aria-hidden="true" />Voltar ao site</Link></div>
    </aside>
    <section className="admin-content"><AdminSessionGate>{children}</AdminSessionGate></section>
  </main>;
}
