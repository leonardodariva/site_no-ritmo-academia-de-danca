import type { Metadata } from "next";
import SubpageShell from "../SubpageShell";
import { institutionalSections } from "../../content/about";

export const metadata: Metadata = { title: "Sobre a No Ritmo | Academia de Dança", description: "Fundada em 15 de junho de 2010, em Apucarana, a No Ritmo combina dança de salão, aprendizagem e desenvolvimento humano.", alternates: { canonical: "/sobre" }, openGraph: { title: "Sobre a No Ritmo | Academia de Dança", description: "Fundada em 15 de junho de 2010, em Apucarana, a No Ritmo combina dança de salão, aprendizagem e desenvolvimento humano.", url: "/sobre", images: ["/images/galeria/aulas-e-encontros-banner.png"] } };

export default function SobrePage() { return <SubpageShell wideCopy compactHero kicker="Conheça a academia" title="Sobre a No Ritmo" intro="Fundada em 15 de junho de 2010, em Apucarana-PR, a No Ritmo entende a dança de salão como aprendizagem, desenvolvimento humano e convivência." sections={institutionalSections.map((section, index) => ({
  number: String(index + 1).padStart(2, "0"),
  title: section.title,
  paragraphs: section.paragraphs,
  quote: section.quote,
  closing: section.closing,
  id: section.id,
}))} />; }
