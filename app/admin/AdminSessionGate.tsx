"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function AdminSessionGate({ children }: Readonly<{ children: React.ReactNode }>) {
  const router = useRouter();
  const pathname = usePathname();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (pathname === "/admin/login") {
      setReady(true);
      return;
    }
    if (sessionStorage.getItem("nr-admin-demo") !== "authenticated") {
      router.replace(`/admin/login?returnTo=${encodeURIComponent(pathname)}`);
      return;
    }
    setReady(true);
  }, [pathname, router]);

  if (!ready) return <div className="admin-loading" role="status">Verificando acesso…</div>;
  return <>{children}</>;
}
