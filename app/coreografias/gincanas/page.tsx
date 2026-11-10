import type { Metadata } from "next";
import SubpageShell from "../../SubpageShell";

const title = "Coreografias para gincanas escolares | No Ritmo Academia de Dança";
const description = "Criação e preparação de coreografias para gincanas escolares, respeitando o regulamento, o perfil da equipe e o tempo disponível.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/coreografias/gincanas" },
  openGraph: { title, description, url: "/coreografias/gincanas", images: ["/logo-fundo-claro.png"] },
};

const schoolCompetitionSections = [
  {
    number: "01",
    title: "Coreografias para Gincanas Escolares",
    content: <>
      <p>A gincana é um daqueles momentos do calendário escolar que os alunos esperam o ano inteiro.</p>
      <p>As equipes se organizam, surgem as ideias, começam os ensaios e, quando existe uma prova envolvendo dança ou apresentação artística, aparece também o desafio:</p>
      <p><strong>Como transformar um grupo de alunos em uma apresentação organizada, criativa e marcante?</strong></p>
      <p>É justamente nesse processo que a <strong>Academia No Ritmo</strong> pode ajudar.</p>
      <p>Atendemos alunos e equipes escolares na criação e preparação de <strong>coreografias para gincanas</strong>, desenvolvendo o trabalho de acordo com a proposta da equipe, o regulamento da prova, o número de participantes e o tempo disponível até a apresentação.</p>
    </>,
  },
  {
    number: "02",
    title: "Não é apenas aprender uma sequência de passos",
    content: <>
      <p>Em uma gincana, normalmente existe um objetivo muito claro: <strong>entregar uma boa apresentação.</strong></p>
      <p>E isso envolve muito mais do que escolher alguns movimentos.</p>
      <p>É preciso pensar na música, na proposta, no perfil dos alunos, no número de participantes, na ocupação do espaço, nas formações, nas entradas e saídas e, principalmente, naquilo que é possível executar bem dentro do período disponível para treinamento.</p>
      <p>Dependendo da prova, também podemos trabalhar elementos como interpretação, impacto visual, sincronização e momentos de destaque.</p>
      <p><strong>Uma coreografia eficiente para gincana precisa ser pensada para aquele grupo e para aquela prova.</strong></p>
    </>,
  },
  {
    number: "03",
    title: "Primeiro, queremos conhecer o desafio",
    content: <>
      <p>Antes de começarmos a montagem, é importante entender exatamente o que a escola ou a equipe precisa apresentar.</p>
      <p>Existe regulamento?<br />Qual é o tema?<br />Existe um estilo de dança obrigatório?<br />A música é livre ou determinada pela organização?<br />Qual é o tempo máximo da apresentação?<br />Quantos alunos participarão?<br />Qual a idade deles?<br />Qual é o espaço disponível?<br />Quando acontecerá a prova?<br />Quanto tempo temos para ensaiar?</p>
      <p>A partir dessas informações, conseguimos avaliar a complexidade do trabalho e definir uma estratégia de preparação.</p>
    </>,
  },
  {
    number: "04",
    title: "Quanto antes a equipe começar, maiores são as possibilidades",
    content: <>
      <p>Em Apucarana, muitas gincanas e atividades escolares desse tipo acontecem próximas aos meses de <strong>junho e julho</strong>.</p>
      <p>Por isso, recomendamos que as equipes não deixem para procurar ajuda somente quando a data da apresentação estiver próxima.</p>
      <p>Quanto maior o grupo e mais elaborada a proposta, maior tende a ser a necessidade de treinamento.</p>
      <p>Começar antecipadamente permite testar ideias, fazer alterações, organizar melhor os alunos e, principalmente, dar tempo para que a coreografia seja realmente assimilada.</p>
      <p><strong>Antecedência não significa necessariamente ensaiar mais. Significa ter tempo para ensaiar melhor.</strong></p>
    </>,
  },
  {
    number: "05",
    title: "“Mas nosso grupo não sabe dançar.”",
    content: <>
      <p>Não tem problema.</p>
      <p>Uma das funções do trabalho coreográfico é justamente compreender <strong>quem são as pessoas que estarão no palco ou na quadra</strong>.</p>
      <p>Não adianta criar uma coreografia tecnicamente impressionante se o grupo não conseguir executá-la com segurança.</p>
      <p>Na Academia No Ritmo, buscamos desenvolver a apresentação respeitando o nível dos participantes e explorando aquilo que o grupo tem de melhor.</p>
      <p>Às vezes, movimentos relativamente simples, quando bem executados por um grupo organizado, produzem um resultado visual muito mais interessante do que uma sequência extremamente difícil realizada sem segurança.</p>
      <p><strong>Complexidade não é sinônimo de qualidade.</strong></p>
    </>,
  },
  {
    number: "06",
    title: "Sincronização, organização e trabalho em equipe",
    content: <>
      <p>Existe ainda um aprendizado muito interessante durante a preparação para uma gincana.</p>
      <p>Para que a apresentação funcione, cada participante precisa compreender que faz parte de um conjunto.</p>
      <p>É necessário observar o outro, respeitar posições, memorizar referências, cumprir combinações, chegar aos ensaios e colaborar para que o grupo evolua.</p>
      <p>Nesse sentido, a preparação coreográfica também trabalha elementos como <strong>cooperação, responsabilidade, percepção espacial, atenção e trabalho em equipe.</strong></p>
      <p>E isso combina perfeitamente com o próprio espírito de uma gincana escolar.</p>
    </>,
  },
  {
    number: "07",
    title: "Sua equipe já sabe qual será o desafio?",
    content: <>
      <p>Se a escola já divulgou o regulamento ou se a equipe já sabe que haverá uma prova envolvendo dança, <strong>esse é um ótimo momento para começar a conversar conosco.</strong></p>
      <p>Não é necessário chegar com tudo definido.</p>
      <p>Tragam o regulamento, o tema, as ideias e as informações que já possuem.</p>
      <p>A partir daí, podemos entender o desafio, avaliar o número de participantes, o prazo disponível e pensar na melhor maneira de transformar aquela proposta em uma apresentação.</p>
      <p><strong>Primeiro entendemos a prova. Depois conhecemos a equipe. E então construímos a coreografia.</strong></p>
      <p>Porque em uma gincana, uma boa apresentação começa muito antes de a música tocar.</p>
    </>,
  },
];

export default function GincanasPage() {
  return <SubpageShell
    wideCopy
    compactHero
    heroImage="/images/servicos/gincanas.webp"
    kicker="Organização e trabalho em equipe"
    title="Coreografias para gincanas escolares"
    breadcrumbParent={{ label: "Serviços", href: "/servicos" }}
    intro="Uma apresentação pensada para o regulamento, o perfil da equipe e o tempo disponível."
    sections={schoolCompetitionSections}
    ctaIntro="Conheça o desafio conosco"
    ctaTitle="Traga o regulamento, o tema e suas ideias para começarmos a planejar."
  />;
}
