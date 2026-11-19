import type { Metadata } from "next";
import { FaWhatsapp } from "react-icons/fa";
import { siteContact } from "../../../content/site";
import SubpageShell from "../../SubpageShell";

export const metadata: Metadata = { title: "CFP - Curso de Formação de Professores em Dança de Salão | No Ritmo", description: "Conhecimento para dançar, método para ensinar e autonomia para continuar aprendendo.", alternates: { canonical: "/formacao/cfp" }, openGraph: { title: "CFP - Curso de Formação de Professores em Dança de Salão | No Ritmo", description: "Conhecimento para dançar, método para ensinar e autonomia para continuar aprendendo.", url: "/formacao/cfp", images: ["/images/editorial/formacao-em-grupo.webp"] } };

export default function CfpPage() { return <SubpageShell compactHero wideCopy hideCta heroImage="/images/editorial/cfp-aula-turma-hero.webp" heroImagePosition="center top" heroImagePositionMobile="center 90px" breadcrumbParent={{ label: "Serviços", href: "/servicos" }} kicker="Curso de formação" title="CFP - Curso de Formação de Professores em Dança de Salão" intro="Conhecimento para dançar, método para ensinar e autonomia para continuar aprendendo." sections={[
  { number: "01", title: "Saber dançar é uma coisa. Saber ensinar alguém a dançar é outra.", content: <>
    <p>O CFP é a formação da No Ritmo para quem quer compreender a dança de salão além dos passos e atuar profissionalmente com o seu ensino ou simplesmente, para desenvolvimento pessoal.</p>
    <p>Desde 2017, o curso parte de uma convicção: um bom professor não é quem conhece mais movimentos, é quem consegue transformar conhecimento em aprendizagem.</p>
    <p>Acumular passos é fácil. Difícil é saber o que fazer com eles diante de um aluno que trava, de uma turma dispersa ou de um corpo que ainda não entende o que a cabeça já entendeu. Nessa hora, o repertório não basta. O que sustenta o professor é a compreensão, do corpo, da música, da comunicação e de si mesmo.</p>
    <p>Por isso a formação integra conhecimentos de diferentes áreas aplicados à dança de salão:</p>
    <ul>
      <li><strong>Pedagogia e andragogia</strong> - didática, meios e recursos, métodos e estratégias, organização, avaliação, contexto sociocultural, objetivos e processos de ensino e aprendizagem.</li>
      <li><strong>Corpo</strong> - cinesiologia, fisiologia, percepção corporal, segurança e prevenção de lesões.</li>
      <li><strong>Comunicação</strong> - verbal e não verbal, oratória, escuta ativa, leitura de sala, sistemas representacionais, análise comportamental básica e canais perceptivos.</li>
      <li><strong>Música</strong> - musicalidade e universo rítmico.</li>
      <li><strong>Dança</strong> - condução e estudo técnico dos principais estilos de dança.</li>
      <li><strong>Carreira</strong> - empreendedorismo, marketing pessoal e gestão.</li>
    </ul>
    <p>Nenhuma dessas áreas existe sozinha na sala de aula. Elas se encontram no mesmo instante, no olhar que percebe a dificuldade, na palavra certa para explicá-la e no ajuste que permite ao aluno, enfim, conseguir.</p>
    <p>Dançar é um talento que se desenvolve.<br />Ensinar é uma escolha que se assume.</p>
  </> },
  { number: "02", title: "Como funciona a formação.", content: <>
    <p>O CFP tem duração aproximada de dois anos, do primeiro fundamento até o momento em que você assume uma turma com segurança.</p>
    <p>Dois anos não é pressa, e não é por acaso. Ninguém se torna professor em um fim de semana. A segurança que se vê em sala é construída devagar, com repetição, erro, correção e tempo. A formação respeita esse processo porque sabe que o que se apressa não se sustenta.</p>
    <ul>
      <li><strong>Aulas e estudo</strong> - teoria e prática integradas ao longo de toda a formação.</li>
      <li><strong>50 videoaulas detalhadas</strong> - a forma e a função de cada elemento, para revisar quando quiser.</li>
      <li><strong>Estágio totalmente supervisionado</strong> - você não assume uma turma sozinho antes de estar pronto.</li>
    </ul>
    <p>O estágio é onde tudo se encontra. É ali que o conhecimento deixa de ser seu e passa a ser do aluno. E você não atravessa esse momento sozinho, cada passo é acompanhado, observado e orientado até que a condução da turma seja natural, e não um esforço.</p>
    <p>Estar pronto não é saber tudo.<br />É saber um mínimo suficiente para ensinar com responsabilidade e continuar aprendendo diante de quem confia em você.</p>
  </> },
  { number: "03", title: "Quatro estilos de dança como base.", paragraphs: [
    <>A No Ritmo ensina mais de 20 estilos de dança, mas a formação se concentra em quatro - <strong>Arrasta-pé</strong>, <strong>Sertanejo</strong>, <strong>Vaneira</strong> e <strong>Forró</strong>.</>,
    "São os mais procurados na nossa região e a base de quem deseja construir uma carreira sólida ou um negócio sustentável, com a dança de salão.",
    "Escolher é também renunciar. Seria possível passar por vinte estilos de forma superficial. Preferimos o caminho mais exigente, ir fundo em poucos, até dominá-los de verdade. Um professor que compreende profundamente quatro estilos tem mais a oferecer do que outro que conhece vinte apenas de passagem.",
    "Essa escolha também é uma questão de realidade. Uma carreira se constrói onde existe procura, e não onde gostaríamos que existisse. Começar pelos estilos que o público da região quer aprender é dar ao novo professor um chão firme para crescer, com turmas cheias, alunos que voltam e trabalho que se sustenta.",
    "O resto vem depois. E vem melhor, porque é construído sobre uma base que não se perde.",
    <>Profundidade antes de amplitude.<br />Fundamento antes de repertório.</>,
  ] },
  { number: "04", title: "Não ensinamos apenas o que fazer. Ensinamos a compreender.", content: <>
    <p>Por que um movimento funciona? Por que um aluno não consegue executá-lo? Como saber se ele realmente aprendeu?</p>
    <p>No CFP, o participante é levado a fazer essas perguntas e a buscar respostas. Ensinar não é repetir uma sequência, é entender o que acontece entre quem ensina e quem aprende.</p>
    <p>Quando o aluno erra, é fácil apontar para ele. Dizer que falta ritmo, coordenação ou atenção. Mas a dificuldade do aluno não depende do professor, a resposta a ela, sim. O professor que compreende não culpa. Observa, investiga e ajusta o próprio caminho até encontrar aquele que o aluno consegue percorrer.</p>
    <p>Essa postura muda tudo. O erro do aluno deixa de ser um problema e passa a ser informação. A pergunta deixa de ser “o que há de errado com ele?” e passa a ser “o que eu ainda não entendi sobre como ele aprende?”.</p>
    <p>É uma responsabilidade exigente e é exatamente ela que separa quem demonstra passos de quem forma pessoas.</p>
    <p><em>“Se não houve aprendizagem, é porque não houve ensino.”</em></p>
  </> },
  { number: "05", title: "Aprender a aprender", paragraphs: [
    "O CFP não entrega um método fechado nem sequências prontas. Receitas funcionam até o dia em que aparece um aluno que não cabe nelas, e esse dia sempre chega.",
    "O que a formação desenvolve é a capacidade de pesquisar, questionar, testar e continuar evoluindo, muito depois de concluir o curso.",
    "Um professor que só repete o que recebeu depende de quem ensinou a ele. Um professor que aprendeu a aprender depende apenas da própria disciplina. Ele observa o que funciona e descarta o que não serve. Revê as próprias certezas sem se sentir ameaçado por isso. Sabe que o erro não é o fim do processo, é a matéria-prima dele.",
    "Essa é uma postura que exige humildade. Quem acredita que já sabe tudo parou de crescer. Quem reconhece o quanto ainda não sabe mantém a sala de aula viva, para os alunos e para si mesmo.",
    <>A formação termina.<br />O aprendizado, não.</>,
  ] },
  { number: "06", title: "Teoria que encontra a prática.", paragraphs: [
    "Todo conhecimento só se prova quando é posto à prova. No CFP, cada conteúdo ganha sentido na sala de aula, diante de corpos diferentes, ritmos de aprendizagem diferentes e formas diferentes de se comunicar.",
    "Saber um conceito não é o mesmo que saber ensiná-lo. A teoria mostra o caminho, e a prática revela se você realmente o percorreu. Por isso a formação não separa o estudo da experiência. O que se aprende pela manhã é testado diante de pessoas reais, com suas dúvidas, seus tempos e suas resistências.",
    <>Ao longo de todo o processo, o conhecimento técnico caminha junto com os valores que definem um bom professor, <strong>cuidado</strong>, <strong>responsabilidade</strong> e <strong>liderança</strong>.</>,
    "Cuidado, porque cada aluno confia ao professor algo frágil, o próprio corpo, a própria imagem e a coragem de errar na frente dos outros.",
    "Responsabilidade, porque o professor não controla como o aluno chega, mas responde por como ele é conduzido, é por isso nossos candidatos a professores, são exaustivamente cobrados.",
    "Liderança, porque conduzir uma turma começa por conduzir a si mesmo. Quem não governa as próprias reações e ambições não consegue guiar ninguém.",
    <>A técnica ensina o que fazer.<br />Os valores ensinam quem ser enquanto se faz.</>,
  ] },
  { number: "07", title: "Para quem é o CFP?", paragraphs: [
    "O CFP é para quem já dança e também para quem ainda não dança. O ponto de partida não depende de você, e por isso não define você. A experiência anterior ajuda, mas não é ela que diz quem está pronto para começar.",
    "O que define é o propósito. Esta formação é para quem entende que ensinar dança é cuidar de pessoas. É para quem decide entrar com compromisso, curiosidade e vontade de fazer diferença na própria vida e de quem vai aprender.",
    <>É também para quem está disposto a olhar para si com honestidade. Durante todo o treinamento, trabalhamos com cada professor a diferença entre <strong>ideal do ego</strong> e <strong>ego ideal</strong>. O ideal do ego é o que imaginamos de nós mesmos, o professor que gostaríamos de ser. O ego ideal é quem realmente somos, com nossas qualidades, limites e história. Ensinar bem começa quando reconhecemos a distância entre os dois e trabalhamos nela sem nos enganar. O professor que conhece a si mesmo ensina para o outro com mais honestidade, e isso estimula o desejo de crescimento contínuo.</>,
    <>Então, se quer trabalhar no setor, não é preciso saber dançar! Isso, nós iremos ensinar.<br />É preciso ter propósito e saber por que você quer ensinar. Se esse propósito for bom o suficiente, ele lhe dará energia para escolher ser melhor, todos os dias.</>,
  ] },
  { number: "08", title: "Uma formação para quem deseja ir além da dança", paragraphs: [
    "O CFP prepara profissionais para compreender a dança, o aluno e o processo que conecta os dois.",
    "Ensinar dança de salão envolve técnica. Envolve método. Mas, acima de tudo, envolve pessoas. Cada aluno chega com uma história, um corpo, um ritmo e um medo que o professor não escolheu. Isso não depende de quem ensina. O que depende do professor é a forma como ele recebe esse aluno, e é nisso que a formação se concentra.",
    "A técnica se aprende com repetição. O método se aprende com estudo. Compreender pessoas pede outra coisa, presença, escuta e domínio de si. Ninguém conduz bem o outro sem antes saber conduzir a si mesmo.",
    <>Por isso o CFP trabalha o professor por dentro, não apenas a sua dança. Ao longo de toda a formação, cada participante é levado a reconhecer a distância entre o seu <strong>ideal do ego</strong>, o professor que imagina ser e o seu <strong>ego ideal</strong>, quem realmente é. O professor que se orienta pela imagem que faz de si precisa que tudo dê certo e ensina para ser visto. O que conhece a si mesmo aceita os próprios limites, trabalha com eles e ensina para que o aluno cresça.</>,
    "Ir além da dança é entender que o passo é só o meio. O que se constrói em sala é confiança, autonomia e a coragem de quem aprende a se mover no mundo com mais segurança.",
    <>A dança é o caminho.<br />As pessoas são a razão.</>,
  ] },
  { number: "09", title: "Quer saber se o CFP é para você?", content: <>
    <p>Fale diretamente com a nossa equipe, vamos conversar sobre a formação, as próximas turmas e ou como começar agora mesmo.</p>
    <a className="button subpage-cta-whatsapp" href={siteContact.whatsappHref} target="_blank" rel="noreferrer"><FaWhatsapp aria-hidden="true" />Conversar no WhatsApp</a>
  </> },
]} />; }
