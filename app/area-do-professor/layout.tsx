import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Área do professor | No Ritmo",
  robots: { index: false, follow: false },
};

export default function TeacherAreaLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
