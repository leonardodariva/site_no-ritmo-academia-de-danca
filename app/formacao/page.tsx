import type { Metadata } from "next";
import Link from "next/link";
import SubpageShell from "../SubpageShell";

export const metadata: Metadata = {
  title: "Formação de professores e assistentes | No Ritmo",
  description: "Conheça o CFP e o CFA, programas de formação da No Ritmo para quem deseja ensinar, apoiar aulas e desenvolver experiência em dança.",
  alternates: { canonical: "/formacao" },
  openGraph: { title: "Formação de professores e assistentes | No Ritmo", description: "Conheça o CFP e o CFA, programas de formação da No Ritmo para quem deseja ensinar, apoiar aulas e desenvolver experiência em dança.", url: "/formacao", images: ["/images/editorial/formacao-em-grupo.png"] },
};

export default function FormacaoPage() {
  return <SubpageShell
    wideCopy
    compactHero
    breadcrumbParent={{ label: "A No Ritmo", href: "/sobre" }}
    kicker="Cursos No Ritmo"
    title="Formação para ensinar e apoiar a dança."
    intro="A Academia No Ritmo oferece dois caminhos de formação: o CFP prepara professores para planejar e conduzir o processo de ensino; já o CFA forma assistentes para atuar ao lado dos professores e na linha de frente da aprendizagem, mantendo contato direto com os alunos em sala de aula, auxiliando, acolhendo, observando dificuldades e contribuindo ativamente para o desenvolvimento de cada aluno."
    sections={[
      {
        number: "00",
        title: "Escolha seu caminho de formação",
        content: <div className="formation-shortcuts"><Link href="/formacao/cfp"><strong>CFP - Curso de Formação Profissional</strong><span>Planejamento e condução do processo de ensino.</span><b>Conhecer o CFP →</b></Link><Link href="/formacao/cfa"><strong>CFA - Curso de Formação de Assistentes</strong><span>Apoio à equipe e aos alunos na linha de frente da aprendizagem.</span><b>Conhecer o CFA →</b></Link></div>,
        fullWidth: true,
      },
      {
        number: "01",
        title: "CFP - Curso de Formação Profissional em Dança de Salão",
        content: <>
          <p><strong>Saber dançar é uma coisa. Saber ensinar alguém a dançar é outra.</strong></p>
          <p>O <strong>CFP - Curso de Formação Profissional da No Ritmo</strong> é uma formação voltada para quem deseja compreender a dança de salão para além dos passos e desenvolver conhecimentos para atuar profissionalmente com o seu ensino.</p>
          <p><strong>Desde 2014, o CFP acontece nesses mesmos moldes na No Ritmo</strong>, integrando conhecimentos técnicos, pedagógicos e humanos à formação profissional em dança de salão.</p>
          <p>A proposta nasceu da percepção de que um bom professor não é necessariamente aquele que possui o maior repertório de movimentos, mas aquele que consegue <strong>transformar conhecimento em aprendizagem</strong>.</p>
          <p>Por isso, desde suas primeiras edições, o CFP reúne conhecimentos de diferentes áreas aplicados à dança de salão, abordando conteúdos como <strong>didática, andragogia, cinesiologia, comunicação verbal e não verbal, análise comportamental, musicalidade, universo rítmico, oratória, empreendedorismo e marketing pessoal</strong>, além do estudo técnico dos principais estilos de dança.</p>
          <p>Com o passar dos anos e a evolução da metodologia No Ritmo, a formação ganhou ainda mais profundidade.</p>
          <p>Hoje, o participante também é levado a compreender aspectos relacionados à <strong>fisiologia, percepção corporal, sistemas representacionais, canais perceptivos, escuta ativa, leitura de sala, comunicação, condução, segurança, prevenção de lesões e diferentes processos de ensino e aprendizagem</strong>.</p>
          <h3>Não ensinamos apenas o que fazer. Ensinamos a compreender.</h3>
          <p>Durante o CFP, cada conhecimento técnico é acompanhado de perguntas fundamentais:</p>
          <p><strong>O que estou fazendo? Por que esse movimento funciona? Como posso explicá-lo? Como diferentes pessoas podem compreendê-lo? E como posso identificar se realmente houve aprendizagem?</strong></p>
          <p>Essa forma de pensar transforma a relação do futuro professor com a dança.</p>
          <p>Em vez de simplesmente reproduzir aquilo que aprendeu, ele começa a desenvolver capacidade de <strong>observar, analisar, experimentar, adaptar e construir estratégias de ensino</strong> de acordo com as necessidades de cada aluno.</p>
          <p>É daí que nasce um dos princípios que orientam nossa formação:</p>
          <blockquote>“Se não houve aprendizagem, é porque não houve ensino.”</blockquote>
          <h3>Aprender a aprender</h3>
          <p>Outro pilar fundamental do CFP é o desenvolvimento da autonomia.</p>
          <p>Acreditamos que uma formação profissional não deve criar professores dependentes de sequências prontas ou de um único método de explicação. Por isso, estimulamos aquilo que chamamos de <strong>“aprender a aprender”</strong>.</p>
          <p>O participante é incentivado a pesquisar, questionar, observar, testar, compreender fundamentos e construir conhecimento continuamente.</p>
          <p>Porque a formação de um professor não termina quando termina um curso.</p>
          <h3>Teoria que encontra a prática</h3>
          <p>O CFP aproxima o conhecimento teórico das situações reais encontradas dentro de uma sala de aula.</p>
          <p>O participante desenvolve sua capacidade de observar diferentes corpos, dificuldades, ritmos de aprendizagem e formas de comunicação, entendendo que <strong>pessoas diferentes podem precisar de caminhos diferentes para chegar ao mesmo aprendizado</strong>.</p>
          <p>Nesse processo, técnica e conhecimento caminham junto com <strong>comunicação, acolhimento, responsabilidade, liderança e desenvolvimento humano</strong>.</p>
          <h3>Uma formação para quem deseja ir além da dança</h3>
          <p>O CFP não foi criado apenas para formar pessoas que saibam demonstrar movimentos.</p>
          <p>Foi criado para desenvolver profissionais capazes de <strong>compreender a dança, compreender o aluno e compreender o processo que conecta os dois.</strong></p>
          <p>Porque ensinar dança de salão envolve muito mais do que passos.</p>
          <p>Envolve pessoas.</p>
        </>,
        closing: "CFP No Ritmo - Conhecimento para dançar. Método para ensinar. Autonomia para continuar aprendendo.",
        id: "cfp",
      },
      {
        number: "02",
        title: "CFA - Curso de Formação de Assistentes",
        content: <h3>Muito além de aprender a dançar. Aprenda a compreender o processo de ensinar.</h3>,
        paragraphs: [
          <>O <strong>CFA - Curso de Formação de Assistentes da No Ritmo</strong> foi desenvolvido para alunos que desejam aprofundar seus conhecimentos na dança de salão e dar os primeiros passos dentro do universo do ensino.</>,
          <><strong>O CFA acontece desde 2010, ano em que a Academia No Ritmo nasceu.</strong> A formação de assistentes faz parte da história da escola desde o seu início.</>,
          <>A proposta vai além de aprender novos passos e movimentações. Durante a formação, o participante começa a compreender <strong>como as pessoas aprendem</strong>, como observar uma turma, identificar dificuldades, comunicar uma orientação e colaborar com o professor durante uma aula.</>,
          <>O curso integra conhecimentos técnicos da dança com temas fundamentais para a formação humana e pedagógica, como <strong>comunicação, escuta ativa, sistemas representacionais, fisiologia, percepção corporal, acolhimento, voluntariado, oratória e responsabilidade no processo de ensino-aprendizagem</strong>.</>,
          <>Na prática, o futuro assistente aprende a desenvolver um olhar diferente sobre a dança: deixa de observar apenas <strong>“o que fazer”</strong> e começa a compreender <strong>“como fazer, por que fazer e como ajudar outra pessoa a aprender”</strong>.</>,
          "Os participantes também têm contato com diferentes turmas e situações reais de aula, desenvolvendo progressivamente segurança, percepção e capacidade de interação com os alunos.",
          <>O CFA é, portanto, uma oportunidade de crescimento para quem deseja <strong>dançar melhor, comunicar-se melhor, desenvolver liderança e descobrir novas possibilidades dentro da dança de salão</strong>.</>,
        ],
        closing: "Você entra como aluno. Aprende a observar como assistente. E começa a enxergar a dança com os olhos de quem ensina.",
        id: "cfa",
      },
      {
        number: "03",
        title: "Uma formação ligada à prática",
        text: "Os programas fazem parte da cultura de aprendizagem contínua da No Ritmo. Conteúdos, critérios de participação, calendário e etapas serão apresentados pela equipe de acordo com cada turma e edição.",
      },
      {
        number: "04",
        title: "Quer saber como participar?",
        text: "Entre em contato com a No Ritmo e conte se você procura o CFP, o CFA ou quer entender qual caminho combina com seu momento.",
      },
    ]}
    ctaIntro="Entre em contato"
    ctaTitle="Converse com a equipe sobre os próximos passos da sua formação."
  />;
}
