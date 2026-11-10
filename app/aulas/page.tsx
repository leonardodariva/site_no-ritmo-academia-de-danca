import type { Metadata } from "next";
import SubpageShell from "../SubpageShell";
import { groupLessonSections } from "../../content/group-lessons";

const title = "Aulas em Grupo | No Ritmo Academia de Dança";
const description = "Aprenda dança de salão em grupo na No Ritmo, em Apucarana. Turmas para diferentes níveis, mais de 20 horas semanais de atividades e oportunidades para praticar e conhecer pessoas.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/aulas" },
  openGraph: { title, description, url: "/aulas", images: ["/images/servicos/aulas-em-grupo.webp"] },
};

export default function AulasPage() {
  return (
    <SubpageShell
      wideCopy
      compactHero
      heroImage="/images/servicos/aulas-em-grupo.webp"
      kicker="Aprenda, pratique, conecte-se."
      title="Aulas em Grupo"
      breadcrumbParent={{ label: "Serviços", href: "/servicos" }}
      intro="Aprenda, pratique, conecte-se."
      sections={groupLessonSections}
      ctaIntro="Entre no Ritmo."
      ctaTitle="Conheça nossas turmas e encontre a melhor opção para começar a dançar."
    />
  );
}
