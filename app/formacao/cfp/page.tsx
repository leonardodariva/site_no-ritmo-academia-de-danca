import type { Metadata } from "next";
import { FaWhatsapp } from "react-icons/fa";
import { siteContact } from "../../../content/site";
import SubpageShell from "../../SubpageShell";

export const metadata: Metadata = { title: "CFP - Curso de Formação de Professores em Dança de Salão | No Ritmo", description: "Conhecimento para dançar, método para ensinar e autonomia para continuar aprendendo.", alternates: { canonical: "/formacao/cfp" }, openGraph: { title: "CFP - Curso de Formação de Professores em Dança de Salão | No Ritmo", description: "Conhecimento para dançar, método para ensinar e autonomia para continuar aprendendo.", url: "/formacao/cfp", images: ["/images/editorial/formacao-em-grupo.webp"] } };

export default function CfpPage() { return <SubpageShell compactHero wideCopy hideCta heroImage="/images/servicos/cfp.webp" breadcrumbParent={{ label: "Serviços", href: "/servicos" }} kicker="Curso de formação" title="CFP - Curso de Formação de Professores em Dança de Salão" intro="Conhecimento para dançar, método para ensinar e autonomia para continuar aprendendo." sections={[
  { number: "01", title: "Saber dançar é uma coisa. Saber ensinar alguém a dançar é outra.", content: <>
    <p>O CFP é a formação da No Ritmo para quem quer compreender a dança de salão para além dos passos e atuar profissionalmente com o seu ensino.</p>
    <p>Desde 2017, o curso parte de uma convicção: um bom professor não é quem conhece mais movimentos, mas quem consegue transformar conhecimento em aprendizagem.</p>
    <p>Por isso, a formação integra conhecimentos de diferentes áreas aplicados à dança de salão:</p>
    <ul>
      <li><strong>Pedagogia</strong> - didática, andragogia e processos de ensino e aprendizagem</li>
      <li><strong>Corpo</strong> - cinesiologia, fisiologia, percepção corporal, segurança e prevenção de lesões</li>
      <li><strong>Comunicação</strong> - verbal e não verbal, oratória, escuta ativa, leitura de sala, sistemas representacionais, análise comportamental básica e canais perceptivos</li>
      <li><strong>Música</strong> - musicalidade e universo rítmico</li>
      <li><strong>Dança</strong> - condução e estudo técnico dos principais estilos de dança</li>
      <li><strong>Carreira</strong> - empreendedorismo e marketing pessoal, gestão.</li>
    </ul>
  </> },
  { number: "02", title: "Como funciona a formação.", content: <>
    <p>O CFP tem duração aproximada de dois anos, do primeiro fundamento até o momento em que você assume uma turma com segurança.</p>
    <ul>
      <li><strong>Aulas e estudo</strong> - teoria e prática integradas ao longo de toda a formação.</li>
      <li><strong>50 videoaulas detalhadas</strong> - a forma e a função de cada elemento, para revisar quando quiser.</li>
      <li><strong>Estágio totalmente supervisionado</strong> - você não assume uma turma sozinho antes de estar pronto.</li>
    </ul>
  </> },
  { number: "03", title: "Quatro estilos de dança como base.", paragraphs: [
    <>A No Ritmo ensina mais de 20 estilos de dança, mas a formação se concentra em quatro - <strong>Arrasta-pé, Sertanejo, Vaneira e Forró</strong>.</>,
    "São os mais procurados na nossa região e a base de quem deseja construir uma carreira sólida, ou um negócio sustentável com a dança de salão.",
  ] },
  { number: "04", title: "Não ensinamos apenas o que fazer. Ensinamos a compreender.", content: <>
    <p>Por que um movimento funciona? Por que um aluno não consegue executá-lo? Como saber se ele realmente aprendeu?</p>
    <p>No CFP, o participante é levado a fazer essas perguntas e a buscar respostas. Porque ensinar não é repetir uma sequência, é entender o que acontece entre quem ensina e quem aprende.</p>
    <blockquote style={{ fontWeight: 400, fontStyle: "italic" }}>“Se não houve aprendizagem, é porque não houve ensino.”</blockquote>
  </> },
  { number: "05", title: "Aprender a aprender", paragraphs: ["Não entregamos um método fechado ou sequências prontas. Formamos professores capazes de pesquisar, questionar, testar e continuar evoluindo, muito depois de concluir o curso."] },
  { number: "06", title: "Teoria que encontra a prática.", paragraphs: [
    "Cada conteúdo ganha sentido na sala de aula, diante de corpos diferentes, ritmos de aprendizagem diferentes e formas diferentes de se comunicar.",
    "Ao longo da formação, o conhecimento técnico caminha junto com valores que definem um bom professor, cuidado, responsabilidade e liderança.",
  ] },
  { number: "07", title: "Para quem é o CFP?", paragraphs: [
    "O CFP é para quem já dança e também para quem ainda não dança. A experiência anterior ajuda, mas não é o que define quem está pronto para começar.",
    "O que realmente importa é o propósito. Esta é uma formação para quem entende que ensinar dança é cuidar de pessoas e que decide entrar com compromisso, curiosidade e vontade de fazer diferença na vida de quem vai aprender.",
    <strong key="cfp-purpose">Não é preciso saber dançar. É preciso saber por que você quer ensinar.</strong>,
  ] },
  { number: "08", title: "Uma formação para quem deseja ir além da dança", paragraphs: [
    "O CFP prepara profissionais para compreender a dança, o aluno e o processo que conecta os dois.",
    "Porque ensinar dança de salão envolve técnica. Envolve método. Mas, acima de tudo, envolve pessoas.",
  ] },
  { number: "09", title: "Quer saber se o CFP é para você?", content: <>
    <p>Fale diretamente com a nossa equipe, vamos conversar sobre a formação, as próximas turmas e/ou como começar agora mesmo.</p>
    <a className="button subpage-cta-whatsapp" href={siteContact.whatsappHref} target="_blank" rel="noreferrer"><FaWhatsapp aria-hidden="true" />Conversar no WhatsApp</a>
  </> },
]} />; }
