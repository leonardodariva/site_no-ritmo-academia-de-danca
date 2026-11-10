import type { Metadata } from "next";
import SubpageShell from "../SubpageShell";
import ProjectDirectory from "./ProjectDirectory";
export const metadata: Metadata = { title: "Eventos e projetos | No Ritmo", description: "Conheça os projetos, eventos e ações da No Ritmo em Apucarana e na comunidade.", alternates: { canonical: "/projetos" }, openGraph: { title: "Eventos e projetos | No Ritmo", description: "Conheça os projetos, eventos e ações da No Ritmo em Apucarana e na comunidade.", url: "/projetos", images: ["/images/editorial/formacao-em-grupo.webp"] } };
export default function ProjetosPage() { return <SubpageShell compactHero wideCopy kicker="Eventos e projetos" title="A dança continua fora da sala." intro="Conheça as iniciativas, encontros e projetos que aproximam a No Ritmo da comunidade." sections={[{ number: "01", title: "Explore nossos projetos", fullWidth: true, content: <ProjectDirectory /> }]} />; }
