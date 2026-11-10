import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Área do aluno",
  robots: { index: false, follow: false },
};

export default function StudentAreaLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
