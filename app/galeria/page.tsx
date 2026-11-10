import type { Metadata } from "next";
import SubpageShell from "../SubpageShell";
import GalleryDirectory from "./GalleryDirectory";

export const metadata: Metadata = { title: "Galeria | No Ritmo", description: "Explore os álbuns de aulas, festas e projetos da No Ritmo.", alternates: { canonical: "/galeria" }, openGraph: { title: "Galeria | No Ritmo", description: "Explore os álbuns de aulas, festas e projetos da No Ritmo.", url: "/galeria", images: ["/images/galeria/aulas-e-encontros-banner.webp"] } };

export default function GaleriaPage() {
  return <SubpageShell compactHero wideCopy kicker="Galeria" title="Momentos que merecem ser revividos" intro="Aulas, encontros e projetos: escolha um álbum e explore a No Ritmo em movimento." sections={[{ number: "01", title: "Explore nossos álbuns", fullWidth: true, content: <GalleryDirectory /> }]} />;
}
