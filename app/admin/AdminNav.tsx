"use client";

import { Images, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminNav() {
  const pathname = usePathname();

  return (
    <nav className="admin-nav" aria-label="Módulos administrativos">
      <p>Administração</p>
      <Link className={`admin-nav-item${pathname === "/admin" ? " is-active" : ""}`} href="/admin">
        <LayoutDashboard size={19} aria-hidden="true" /><span>Dashboard</span>
      </Link>
      <Link className={`admin-nav-item${pathname.startsWith("/admin/galeria") ? " is-active" : ""}`} href="/admin/galeria">
        <Images size={19} aria-hidden="true" /><span>Galeria</span>
      </Link>
    </nav>
  );
}
