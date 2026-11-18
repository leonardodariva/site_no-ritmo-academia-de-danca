import type { Metadata } from "next";
import SubpageShell from "../SubpageShell";
import { danceStyles } from "../../content/dance-styles";

const title = "Estilos de dança | No Ritmo Academia de Dança";
const description = "Conheça os 22 estilos de dança trabalhados pela Academia No Ritmo em Apucarana, suas origens, características e possibilidades.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/modalidades" },
  openGraph: { title, description, url: "/modalidades", images: ["/images/galeria/aulas-e-encontros-banner.webp"] },
};

export default function ModalidadesPage() {
  return <SubpageShell
    wideCopy
    compactHero
    kicker="Encontre seu estilo"
    title="Estilos de dança"
    breadcrumbCurrentLabel="Todos os estilos"
    intro={<>Um repertório com 22 estilos de dança para conhecer diferentes culturas, musicalidades e formas de dançar.<br /><br />A seguir, uma breve apresentação de cada um, apenas um ponto de partida, porque cada estilo carrega uma história muito mais rica e interessante — seria impossível descrevê-las em poucas linhas.</>}
    sections={danceStyles.map((style, index) => ({
      number: String(index + 1).padStart(2, "0"),
      title: style.name,
      paragraphs: style.paragraphs.map((paragraph) => typeof paragraph === "string"
        ? paragraph
        : <>{paragraph.before}<strong>{paragraph.strong}</strong>{paragraph.after}</>),
      id: style.slug,
    }))}
    ctaIntro="Entre no Ritmo"
    ctaTitle="Fale com nossa equipe e descubra quais estilos combinam com você."
  />;
}
