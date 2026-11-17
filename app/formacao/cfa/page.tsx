import type { Metadata } from "next";
import SubpageShell from "../../SubpageShell";

export const metadata: Metadata = { title: "CFA - Curso de Formação de Assistentes | No Ritmo", description: "Muito além de aprender a dançar: compreenda o processo de ensinar e dê os primeiros passos no universo da formação.", alternates: { canonical: "/formacao/cfa" }, openGraph: { title: "CFA - Curso de Formação de Assistentes | No Ritmo", description: "Muito além de aprender a dançar: compreenda o processo de ensinar e dê os primeiros passos no universo da formação.", url: "/formacao/cfa", images: ["/images/editorial/formacao-em-grupo.webp"] } };

export default function CfaPage() { return <SubpageShell compactHero wideCopy heroImage="/images/servicos/cfa.webp" breadcrumbParent={{ label: "Serviços", href: "/servicos" }} kicker="Curso de formação" title="CFA - Curso de Formação de Assistentes" intro="Muito além de aprender a dançar: aprenda a compreender o processo de ensinar." sections={[
  { number: "01", title: "Muito além de aprender a dançar. Aprenda a compreender o processo de ensinar.", content: <>
    <p>O CFA - Curso de Formação de Assistentes da No Ritmo - foi desenvolvido para alunos que desejam aprofundar seus conhecimentos na dança de salão e dar os primeiros passos dentro do universo do ensino.</p>
    <p>O CFA acontece desde 2010, o ano em que a No Ritmo nasceu. A formação de assistentes não foi acrescentada depois, ela faz parte da história da escola desde o primeiro dia.</p>
    <p>Todo caminho começa pelo primeiro passo, e no ensino esse passo é aprender a servir. Antes de conduzir uma turma, é preciso saber observá-la. Antes de falar, é preciso saber escutar. O assistente ocupa esse lugar com humildade, não por estar abaixo, mas por entender que é ali que se aprende o que nenhum livro ensina.</p>
    <p>Por isso a proposta vai além de aprender novos passos e movimentações. Durante a formação, o participante começa a compreender como as pessoas aprendem, como observar uma turma, identificar dificuldades, comunicar uma orientação e colaborar com o professor durante a aula.</p>
    <p>O curso integra conhecimentos técnicos da dança com temas fundamentais para a formação humana e pedagógica:</p>
    <ul>
      <li><strong>Comunicação</strong> - escuta ativa, oratória e sistemas representacionais.</li>
      <li><strong>Corpo</strong> - fisiologia e percepção corporal.</li>
      <li><strong>Relações</strong> - acolhimento e voluntariado.</li>
      <li><strong>Ensino</strong> - responsabilidade no processo de ensino e aprendizagem.</li>
    </ul>
    <p>Nenhum desses temas está ali por acaso. Cada um prepara o assistente para o que realmente importa em sala, perceber quem precisa de ajuda, chegar no momento certo e oferecer apoio sem tirar do aluno a conquista de aprender sozinho.</p>
    <p>Quem aprende a servir aprende a ensinar.<br />E quem aprende a ensinar nunca mais olha para a dança da mesma forma.</p>
  </> },
  { number: "02", title: "Um novo olhar sobre a dança.", content: <>
    <p>Na prática, o futuro assistente aprende a olhar a dança de outra forma. Deixa de observar apenas “o que fazer” e começa a compreender “como fazer, por que fazer e como ajudar outra pessoa a aprender”.</p>
    <p>Essa mudança parece pequena, mas transforma tudo. Quem só dança olha para os próprios pés. Quem começa a ensinar aprende a olhar para fora, para o aluno que hesita, para o casal que perdeu o tempo da música, para quem sorri por fora e trava por dentro. O mesmo passo continua ali, mas já não é visto da mesma maneira.</p>
    <p>Os participantes também têm contato com diferentes turmas e situações reais de aula. A cada encontro, desenvolvem um pouco mais de segurança, percepção e capacidade de interação com os alunos.</p>
    <p>Não há atalho para isso. Segurança não se recebe, se conquista, aula após aula, diante de pessoas reais. Percepção não se decora, se treina, errando o momento de intervir e aprendendo a acertá-lo na próxima vez. O CFA respeita esse tempo porque sabe que o que se constrói com calma permanece.</p>
    <p>O passo é o mesmo.<br />O olhar é que muda.</p>
  </> },
  { number: "03", title: "Uma oportunidade de crescimento.", content: <>
    <p><strong>Você entra como aluno. Aprende a observar como assistente. E começa a enxergar a dança com os olhos de quem ensina.</strong></p>
    <p>Toda transformação verdadeira acontece por etapas. Ninguém muda de lugar de uma vez. Primeiro se aprende a receber, depois a perceber e só então a oferecer. O CFA percorre esse caminho sem pular nenhuma etapa, porque cada uma prepara a seguinte.</p>
    <p>Como aluno, você aprende a dança.<br />Como assistente, aprende a observá-la.<br />Com os olhos de quem ensina, começa a compreendê-la.</p>
    <p>O CFA é, portanto, uma oportunidade de crescimento para quem deseja dançar melhor, comunicar-se melhor, desenvolver liderança e descobrir novas possibilidades dentro da dança de salão.</p>
    <p>Nada disso depende de talento, depende de disposição. A disposição de sair do lugar confortável de quem só recebe e assumir a responsabilidade de quem também contribui. É nesse movimento que o participante descobre que, ao ajudar o outro a aprender, ele mesmo aprende mais do que imaginava.</p>
    <p>Alguns seguem para o CFP e se tornam professores. Outros continuam como alunos, mas nunca mais dançam da mesma forma. Em qualquer caso, quem passa pelo CFA leva consigo algo que permanece, um jeito mais atento, mais generoso e mais consciente de estar na dança.</p>
    <p>O caminho é seu.<br />O primeiro passo também.</p>
  </> },
]} />; }
