import type { Metadata } from "next";
import SubpageShell from "../SubpageShell";
import { privateLessonSections } from "../../content/private-lessons";

const title = "Aulas Particulares | No Ritmo Academia de Dança";
const description = "Aulas particulares individuais, para casais ou grupos exclusivos. Na Academia No Ritmo ou em casa, com acompanhamento personalizado e um ou mais professores.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/aulas-particulares" },
  openGraph: { title, description, url: "/aulas-particulares", images: ["/images/servicos/aulas-particulares.webp"] },
};

export default function AulasParticularesPage() {
  return (
    <SubpageShell
      wideCopy
      compactHero
      heroImage="/images/servicos/aulas-particulares.webp"
      kicker="No seu ritmo"
      title="Aulas Particulares"
      breadcrumbParent={{ label: "Serviços", href: "/servicos" }}
      intro="Se o capital tempo for o seu maior ativo, as aulas particulares são a sua melhor opção."
      sections={privateLessonSections}
      ctaIntro="Entre no Ritmo."
      ctaTitle="Fale com nossa equipe e descubra qual formato de Aula Particular combina mais com você."
    />
  );
}
