import type { Metadata } from "next";
import SubpageShell from "../SubpageShell";
import { mission, vision, values } from "../../content/principles";

export const metadata: Metadata = {
  title: "Missão, visão e valores | No Ritmo Academia de Dança",
  description: "Conheça a missão, a visão e os valores que orientam o ensino e o desenvolvimento humano na No Ritmo Academia de Dança.",
  alternates: { canonical: "/missao-visao-valores" },
  openGraph: { title: "Missão, visão e valores | No Ritmo Academia de Dança", description: "Conheça a missão, a visão e os valores que orientam o ensino e o desenvolvimento humano na No Ritmo Academia de Dança.", url: "/missao-visao-valores", images: ["/images/galeria/aulas-e-encontros-banner.webp"] },
};

export default function PrinciplesPage() {
  return <SubpageShell wideCopy compactHero kicker="Nossos princípios" title="Missão, visão e valores" intro="Os princípios que orientam nossa forma de ensinar, conviver e promover o desenvolvimento humano por meio da dança de salão." sections={[
    { number: "missao", id: "missao", title: "Missão", paragraphs: [mission] },
    { number: "visao", id: "visao", title: "Visão", paragraphs: [vision] },
    { number: "valores", id: "valores", title: "Valores", paragraphs: values.map(value => <><strong>{value.title}</strong><br />{value.text}</>) },
  ]} />;
}
