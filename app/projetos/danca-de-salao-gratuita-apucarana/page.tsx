import type { Metadata } from "next";
import SubpageShell from "../../SubpageShell";
import ProjectVideos from "./ProjectVideos";

export const metadata: Metadata = { title: "Dança de salão gratuita em Apucarana | No Ritmo", description: "Projeto de acesso gratuito à dança de salão em Apucarana, realizado com apoio da Prefeitura Municipal.", alternates: { canonical: "/projetos/danca-de-salao-gratuita-apucarana" }, openGraph: { title: "Dança de salão gratuita em Apucarana | No Ritmo", description: "Projeto de acesso gratuito à dança de salão em Apucarana, realizado com apoio da Prefeitura Municipal.", url: "/projetos/danca-de-salao-gratuita-apucarana", images: ["/images/editorial/projeto-prefeitura-salao.webp"] } };

export default function ProjetoDancaGratuitaPage() {
  return <SubpageShell breadcrumbParent={{ label: "Eventos e projetos", href: "/projetos" }} compactHero wideCopy heroImage="/images/editorial/projeto-prefeitura-salao.webp" kicker="Projeto gratuito" title="Dança de salão gratuita em Apucarana" intro={<>Quem vê a dança de fora vê só uma fração. Quem entra descobre o resto.<br /><br />Com a Prefeitura de Apucarana, a No Ritmo leva a dança de salão gratuitamente a quem quiser aprender, porque cultura não é só entretenimento, é algo que transforma quem a pratica.<br /><br />Cultura viva.</>} sections={[
    { number: "01", title: "Sobre o projeto.", text: "As aulas fazem parte das ações da Escola Municipal de Artes e das oficinas descentralizadas da Prefeitura. No salão, cada participante descobre o que não se vê de fora, consciência corporal, musicalidade, a percepção de quem conduz e de quem responde, a confiança para se expressar e o prazer de conviver. Não precisa saber dançar, não precisa de par. Basta querer começar." },
    { number: "02", title: "Vídeos do projeto.", content: <ProjectVideos /> },
    { number: "03", title: "Onde e quando.", content: <><p>Confira os locais e horários das aulas:</p><div className="schedule-table-wrap"><table className="schedule-table"><thead><tr><th>Dia</th><th>Local</th><th>Horário</th></tr></thead><tbody><tr><td data-label="Dia">Segunda-feira</td><td data-label="Local">Salão Paroquial da Igreja Vila Reis</td><td data-label="Horário">19h00 às 21h00</td></tr><tr><td data-label="Dia">Terça-feira</td><td data-label="Local">Salão da Paróquia Cristo Sacerdote</td><td data-label="Horário">19h00 às 21h00</td></tr><tr><td data-label="Dia">Quarta-feira</td><td data-label="Local">Salão da Comunidade São Miguel Arcanjo - Paróquia Cristo Profeta</td><td data-label="Horário">18h15 às 20h15</td></tr><tr><td data-label="Dia">Quinta-feira</td><td data-label="Local">Academia No Ritmo</td><td data-label="Horário">14h00 às 16h00</td></tr><tr><td data-label="Dia">Sexta-feira</td><td data-label="Local">Centro da Juventude - Jardim Diamantina</td><td data-label="Horário">19h00 às 21h00</td></tr></tbody></table></div></> },
    { number: "04", title: "Como participar.", paragraphs: [
      "A participação é gratuita. Antes de vir, fale com a gente pelos canais oficiais da No Ritmo, vamos orientar você sobre turmas, horários e como começar. A inscrição é feita no próprio local da aula.",
      "Você também pode procurar a Secretaria Municipal de Cultura de Apucarana.",
    ] },
  ]} ctaIntro="Entre no Ritmo." ctaTitle="Participe das próximas turmas gratuitas e descubra a dança de salão em comunidade." />;
}
