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
    title: "A dança do casamento também merece ser preparada com calma",
    content: <>
      <p>A dança dos noivos é um dos momentos mais simbólicos da celebração. É quando, por alguns minutos, tudo parece parar: os convidados voltam a atenção para o casal e a música, a história e o movimento se encontram para criar uma lembrança que ficará registrada para sempre.</p>
      <p>Por isso, <strong>na Academia No Ritmo</strong>, recomendamos que a preparação da coreografia comece, sempre que possível, <strong>com pelo menos 6 meses de antecedência</strong>.</p>
      <p>E existe uma razão importante para isso.</p>
    </>,
  },
  {
    number: "02",
    title: "Quanto mais perto do casamento, mais coisas disputam a atenção dos noivos",
    content: <>
      <p>Nos últimos dois meses antes da cerimônia, normalmente começam a se acumular decisões, confirmações e compromissos: fornecedores, decoração, convidados, roupas, ensaios, documentação, detalhes da cerimônia, ajustes da festa e inúmeros imprevistos.</p>
      <p>Começar a dança justamente nesse período pode transformar algo que deveria ser prazeroso em mais uma tarefa com prazo para cumprir.</p>
      <p>Quando começamos com antecedência, acontece o contrário.</p>
      <p>Há tempo para aprender com tranquilidade, desenvolver segurança, experimentar músicas e movimentos, ajustar a coreografia ao perfil do casal e, principalmente, <strong>dançar sem a sensação de estar correndo contra o relógio</strong>.</p>
    </>,
  },
  {
    number: "03",
    title: "Não queremos apenas ensinar passos. Queremos preparar o casal para viver aquele momento.",
    content: <>
      <p>Uma boa montagem coreográfica não precisa ser difícil para impressionar.</p>
      <p>Ela precisa combinar com os noivos.</p>
      <p>Por isso, o trabalho pode envolver desde a escolha e edição da música até a construção da entrada, posicionamentos, movimentações, momentos de destaque, finalização e adaptação da coreografia ao espaço disponível no evento.</p>
      <p>Com mais tempo de preparação, também podemos trabalhar algo ainda mais importante: <strong>a naturalidade</strong>.</p>
      <p>A repetição ao longo dos meses permite que os movimentos deixem de parecer uma sequência que precisa ser lembrada e passem a ser executados com muito mais segurança. Assim, no grande dia, os noivos podem dedicar menos atenção a pensar <em>“qual é o próximo passo?”</em> e muito mais a <strong>olhar um para o outro e aproveitar o momento</strong>.</p>
    </>,
  },
  {
    number: "04",
    title: "E as aulas podem se tornar um momento do casal",
    content: <>
      <p>Existe ainda uma vantagem que vai além da apresentação.</p>
      <p>Em meio a tantos compromissos da preparação do casamento, as aulas podem se transformar em um espaço reservado aos dois: um momento para aprender, rir dos erros, evoluir juntos e construir uma experiência que começa muito antes da festa.</p>
      <p>A coreografia deixa, então, de ser apenas alguns minutos de apresentação.</p>
      <p><strong>Ela passa a fazer parte da própria história do casamento.</strong></p>
    </>,
  },
  {
    number: "05",
    title: "Se o casamento está a seis meses, talvez este seja exatamente o momento de começar.",
    content: <>
      <p>Começar cedo não significa fazer mais aulas ou tornar a coreografia mais complicada.</p>
      <p>Significa ter <strong>tempo a seu favor</strong>.</p>
      <p>Tempo para aprender.<br />Tempo para ajustar.<br />Tempo para ganhar confiança.<br />Tempo para aproveitar.</p>
      <p>E, quando o casamento se aproximar e tantas outras decisões estiverem exigindo a atenção dos noivos, a dança já estará construída, amadurecida e segura.</p>
      <p><strong>No grande dia, vocês não precisarão se preocupar em aprender a dança. Só precisarão vivê-la.</strong></p>
    </>,
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
