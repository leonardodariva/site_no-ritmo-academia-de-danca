import type { Metadata } from "next";
import SubpageShell from "../../SubpageShell";

const title = "Coreografia para casamentos | No Ritmo Academia de Dança";
const description = "Prepare a dança do casamento com calma, segurança e uma coreografia personalizada para a história do casal.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/coreografias/casamentos" },
  openGraph: { title, description, url: "/coreografias/casamentos", images: ["/images/servicos/casamentos.webp"] },
};

const weddingSections = [
  {
    number: "01",
    title: "A dança do casamento também merece ser preparada com calma.",
    content: <>
      <p>A dança dos noivos é um dos momentos mais simbólicos da celebração. Por alguns minutos, tudo parece parar, os convidados se voltam para o casal, e a música, a história e o movimento se encontram para criar uma lembrança que fica para sempre.</p>
      <p>Por isso, recomendamos começar a preparação com cerca de seis meses de antecedência, sempre que possível.</p>
      <p>E existe uma razão importante para isso.</p>
    </>,
  },
  {
    number: "02",
    title: "Quanto mais perto do casamento, mais coisas disputam a atenção dos noivos.",
    content: <>
      <p>Nos últimos dois meses, tudo se acumula, fornecedores, decoração, convidados, roupas, documentação, detalhes da cerimônia e os inevitáveis imprevistos.</p>
      <p>Começar a dança nesse período pode transformar algo que deveria ser prazeroso em mais uma tarefa com prazo.</p>
      <p>Com antecedência, acontece o contrário. Há tempo para aprender com tranquilidade, experimentar músicas e movimentos, ajustar a coreografia ao jeito do casal e principalmente, dançar sem correr contra o relógio.</p>
    </>,
  },
  {
    number: "03",
    title: "Não queremos apenas ensinar passos. Queremos preparar o casal para viver aquele momento.",
    content: <>
      <p>Uma boa coreografia não precisa ser difícil para impressionar, precisa combinar com os noivos.</p>
      <p>Por isso, o trabalho pode envolver desde a escolha e edição da música até a entrada, os posicionamentos, os momentos de destaque, o final e a adaptação ao espaço do evento.</p>
      <p>Com mais tempo, trabalhamos também algo ainda mais importante, a naturalidade. A repetição ao longo dos meses faz com que os movimentos deixem de ser uma sequência para lembrar e passem a fluir com segurança.</p>
      <p>Assim, no grande dia, os noivos pensam menos em <em>“qual é o próximo passo?”</em>, e muito mais em olhar um para o outro e aproveitar o momento.</p>
    </>,
  },
  {
    number: "04",
    title: "Mas vocês não sabem dançar?",
    content: <>
      <p>Não tem problema, a maioria dos casais chega exatamente assim.</p>
      <p>A coreografia é criada a partir de uma conversa sobre vocês, do nível, do estilo e da personalidade do casal. Não é preciso nenhuma experiência anterior. O que impressiona no grande dia não é a dificuldade dos passos, é ver os noivos dançando juntos, com naturalidade e alegria.</p>
    </>,
  },
  {
    number: "05",
    title: "E as aulas podem se tornar um momento do casal.",
    content: <>
      <p>Na correria dos preparativos, quase todo encontro tem uma pauta, orçamento, fornecedor, lista de convidados. A aula de dança pode ser diferente.</p>
      <p>É uma pausa na semana, um tempo só de vocês dois, para rir dos erros, comemorar cada avanço e se reconectar no meio de tantas decisões.</p>
      <p>Muitos casais contam que esses encontros se tornaram uma das melhores lembranças de todo o processo. Assim, a dança deixa de ser apenas um momento da festa.</p>
      <p><strong>Ela passa a fazer parte da própria história do casamento.</strong></p>
    </>,
  },
  {
    number: "06",
    title: "Seu casamento está chegando? talvez esteja exatamente o momento de começar.",
    content: <>
      <p>Começar cedo não significa fazer mais aulas ou tornar a coreografia mais complicada.</p>
      <p>Significa ter <strong>tempo a seu favor</strong>.</p>
      <p>Tempo para aprender.<br />Tempo para ajustar.<br />Tempo para ganhar confiança.<br />Tempo para aproveitar.</p>
      <p>E, quando o casamento se aproximar e tantas outras decisões estiverem exigindo a atenção dos noivos, a dança já estará construída, amadurecida e segura.</p>
      <p><strong>No grande dia, vocês não precisarão se preocupar em aprender a dança. Só precisarão vivê-la.</strong></p>
    </>,
  },
  {
    number: "07",
    title: "Faltam poucas semanas?",
    content: <p><strong>Também é possível. Adaptamos a proposta ao tempo disponível, com uma coreografia pensada para ser aprendida com segurança.</strong></p>,
  },
];

export default function CoreografiasPage() {
  return <SubpageShell
    wideCopy
    compactHero
    heroImage="/images/servicos/casamentos.webp"
    kicker="Um momento para recordar"
    title="Coreografia para casamentos"
    breadcrumbParent={{ label: "Serviços", href: "/servicos" }}
    intro="Prepare a dança dos noivos com calma, segurança e tempo a favor de vocês."
    sections={weddingSections}
    ctaIntro="Comecem a viver esse momento"
    ctaTitle="Falem com nossa equipe e preparem a dança do casamento com tranquilidade."
  />;
}
