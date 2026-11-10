import type { Metadata } from "next";
import SubpageShell from "../SubpageShell";
import { danceStyles } from "../../content/dance-styles";

const title = "Estilos de dança | No Ritmo Academia de Dança";
const description = "Conheça os 22 estilos de dança trabalhados pela Academia No Ritmo em Apucarana, suas origens, características e possibilidades.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/modalidades" },
  openGraph: { title, description, url: "/modalidades", images: ["/images/galeria/aulas-e-encontros-banner.png"] },
};

export default function ModalidadesPage() {
  return <SubpageShell
    wideCopy
    compactHero
    kicker="Encontre seu estilo"
    title="Estilos de dança"
    breadcrumbCurrentLabel="Todos os estilos"
    intro="Um repertório com 22 estilos para conhecer diferentes culturas, musicalidades e formas de dançar."
    sections={danceStyles.map((style, index) => ({
      number: String(index + 1).padStart(2, "0"),
      title: style.name,
      paragraphs: style.paragraphs,
      id: style.slug,
    }))}
    ctaIntro="Entre no Ritmo"
    ctaTitle="Fale com nossa equipe e descubra quais estilos combinam com você."
  />;
}
