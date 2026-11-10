import Link from "next/link";
import type { Metadata } from "next";
import { ChevronRight } from "lucide-react";
import SubpageShell from "../SubpageShell";

export const metadata: Metadata = { title: "Serviços No Ritmo | Academia de Dança", description: "Conheça as aulas, coreografias e formações oferecidas pela Academia No Ritmo, em Apucarana.", alternates: { canonical: "/servicos" }, openGraph: { title: "Serviços No Ritmo | Academia de Dança", description: "Conheça as aulas, coreografias e formações oferecidas pela Academia No Ritmo, em Apucarana.", url: "/servicos", images: ["/images/galeria/aulas-e-encontros-banner.png"] } };

const services = [
  ["01", "Aulas particulares", "Aulas personalizadas para evoluir no seu ritmo e objetivo.", "/aulas-particulares"],
  ["02", "Aulas em grupo", "Aprenda, pratique e conecte-se em uma turma acolhedora.", "/aulas"],
  ["03", "Coreografias para casamento", "Prepare a dança dos noivos com calma, segurança e tempo a favor.", "/coreografias/casamentos"],
  ["04", "Coreografias para debutantes", "Uma coreografia preparada para celebrar seus 15 anos sem pressa.", "/coreografias/debutantes"],
  ["05", "Coreografias para eventos", "Projetos personalizados para escolas, empresas e grandes eventos.", "/coreografias/eventos"],
  ["06", "Coreografias para gincanas", "Uma apresentação pensada para a equipe, o regulamento e o tempo disponível.", "/coreografias/gincanas"],
  ["07", "CFP - Curso de Formação Profissional em Dança de Salão", "Conhecimento para dançar. Método para ensinar. Autonomia para continuar aprendendo.", "/formacao/cfp"],
  ["08", "CFP e CFA - Formação No Ritmo", "Caminhos de formação para ensinar, apoiar aulas e desenvolver experiência prática.", "/formacao"],
] as const;

export default function ServicosPage() {
  return <SubpageShell kicker="Serviços No Ritmo" compactHero title="Conheça os serviços da No Ritmo" intro="Aulas, coreografias e formações para aprender, ensinar e celebrar por meio da dança." wideCopy sections={[{ number: "01", title: "Selecione o que mais combina com você", content: <div className="services-directory">{services.map(([number, title, text, href]) => <Link href={href} key={number}><h2>{title}</h2><p>{text}</p><strong>Conhecer serviço <ChevronRight aria-hidden="true" size={20} strokeWidth={2} /></strong></Link>)}</div>, fullWidth: true }]} />;
}
