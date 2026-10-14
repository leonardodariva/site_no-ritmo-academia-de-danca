import type { Metadata } from "next";
import AdminLayoutShell from "./AdminLayoutShell";

import "../globals.css";

export const metadata: Metadata = {
  title: "Dashboard | No Ritmo Academia de Dança",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <AdminLayoutShell>{children}</AdminLayoutShell>
  );
}
