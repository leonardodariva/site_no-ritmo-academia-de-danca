import type { Metadata } from "next";
import SubpageShell from "../../SubpageShell";

const title = "Coreografias para debutantes | No Ritmo Academia de Dança";
const description = "Prepare as coreografias da festa de 15 anos com calma, segurança e tempo para aproveitar cada momento do processo.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/coreografias/debutantes" },
  openGraph: { title, description, url: "/coreografias/debutantes", images: ["/logo-fundo-claro.png"] },
};

const debutanteSections = [
  {
    number: "01",
    title: "Uma noite de 15 anos merece uma coreografia preparada sem pressa",
    content: <>
      <p>A festa de 15 anos marca uma fase única na vida da debutante e de sua família. E, entre tantos momentos especiais dessa celebração, a dança costuma ocupar um lugar de destaque: seja na tradicional valsa com o pai, em uma dança com familiares ou em uma coreografia especial preparada com amigos.</p>
      <p>Por isso, <strong>na Academia No Ritmo</strong>, recomendamos que a preparação das coreografias comece com antecedência, sempre que possível, <strong>cerca de 6 meses antes da festa</strong>.</p>
      <p>Não porque seja necessário passar meses ensaiando intensamente, mas porque <strong>ter tempo permite que tudo aconteça com muito mais tranquilidade</strong>.</p>
    </>,
  },
  {
    number: "02",
    title: "Quanto mais a festa se aproxima, maior é a correria",
    content: <>
      <p>Nos últimos meses antes dos 15 anos, a quantidade de compromissos tende a aumentar.</p>
      <p>Vestido, decoração, fotografia e filmagem, convites, confirmação de convidados, cabelo, maquiagem, cerimonial, fornecedores, escolha das músicas, últimos ajustes da festa - tudo começa a exigir atenção ao mesmo tempo.</p>
      <p>Para a debutante, ainda existe a rotina normal: escola, estudos, família, amigos e outros compromissos.</p>
      <p>E essa correria não envolve somente ela.</p>
      <p><strong>Pai e mãe também estão diretamente envolvidos na organização</strong>, tomando decisões, resolvendo detalhes e acompanhando fornecedores.</p>
      <p>Deixar a montagem coreográfica para esse período significa acrescentar mais um compromisso justamente quando a agenda da família está mais apertada.</p>
      <p>Quando começamos antes, fazemos exatamente o contrário: <strong>tiramos uma preocupação do período mais corrido.</strong></p>
    </>,
  },
  {
    number: "03",
    title: "A coreografia pode ser construída com calma",
    content: <>
      <p>Com antecedência, existe tempo para conhecer a debutante, entender suas preferências, escolher músicas, experimentar ideias e construir uma apresentação que realmente tenha a personalidade dela.</p>
      <p>A coreografia não precisa ser simplesmente bonita.</p>
      <p><strong>Ela precisa fazer sentido para quem vai dançá-la.</strong></p>
      <p>Podemos trabalhar diferentes momentos da festa: a valsa com o pai, uma dança com familiares, uma apresentação individual, uma coreografia com amigas e amigos ou até uma composição envolvendo diferentes músicas e participantes.</p>
      <p>Tudo pode ser pensado e desenvolvido gradualmente.</p>
    </>,
  },
  {
    number: "04",
    title: "Mais tempo significa mais segurança e naturalidade",
    content: <>
      <p>Existe uma grande diferença entre <strong>decorar uma coreografia</strong> e realmente <strong>sentir-se confortável dançando-a</strong>.</p>
      <p>Quando há tempo, os movimentos são assimilados aos poucos. A debutante ganha segurança, expressão e confiança, e aquilo que inicialmente exigia muita concentração começa a acontecer de maneira muito mais natural.</p>
      <p>O mesmo vale para o pai, familiares e amigos que participarão da apresentação - principalmente quando são pessoas que nunca tiveram contato com a dança.</p>
      <p>Com antecedência, podemos respeitar o ritmo de aprendizagem de cada participante, sem transformar os ensaios em uma corrida contra o calendário.</p>
    </>,
  },
  {
    number: "05",
    title: "E os ensaios também passam a fazer parte das lembranças",
    content: <>
      <p>Há algo especialmente bonito na preparação de uma festa de 15 anos: <strong>a experiência começa muito antes da noite da comemoração.</strong></p>
      <p>Os ensaios com o pai podem se transformar em momentos especiais entre pai e filha.</p>
      <p>As aulas com a mãe e familiares podem render histórias, risadas e lembranças.</p>
      <p>E preparar uma coreografia com os amigos pode se tornar uma das partes mais divertidas de toda a expectativa para a festa.</p>
      <p>Por isso, não enxergamos a montagem coreográfica apenas como uma apresentação de alguns minutos.</p>
      <p><strong>O processo também faz parte da experiência.</strong></p>
    </>,
  },
  {
    number: "06",
    title: "Se a festa está a seis meses, este pode ser o melhor momento para começar",
    content: <>
      <p>Começar cedo não significa ensaiar mais.</p>
      <p>Significa <strong>ensaiar melhor e com menos pressão</strong>.</p>
      <p>Tempo para escolher.<br />Tempo para aprender.<br />Tempo para mudar alguma coisa, se necessário.<br />Tempo para ganhar segurança.<br />Tempo para aproveitar o processo.</p>
      <p>E existe uma vantagem importante: quando os últimos meses chegarem e a debutante, o pai e a mãe estiverem envolvidos com todos os detalhes finais da festa, <strong>a dança já estará encaminhada, assimilada e segura.</strong></p>
      <p>Assim, perto do grande dia, em vez de aprender uma coreografia às pressas, será necessário apenas cuidar dos últimos detalhes e aproveitar a expectativa.</p>
      <p><strong>Porque uma noite tão esperada não deveria começar com preocupação em acertar passos. Deveria começar com a tranquilidade de saber que tudo foi preparado no tempo certo.</strong></p>
    </>,
  },
];

export default function DebutantesPage() {
  return <SubpageShell
    wideCopy
    compactHero
    heroImage="/images/servicos/debutantes.webp"
    kicker="Uma celebração única"
    title="Coreografias para debutantes"
    breadcrumbParent={{ label: "Serviços", href: "/servicos" }}
    intro="Uma noite de 15 anos merece uma coreografia preparada sem pressa."
    sections={debutanteSections}
    ctaIntro="Prepare esse momento"
    ctaTitle="Fale com nossa equipe e comece a planejar as coreografias da festa de 15 anos."
  />;
}
