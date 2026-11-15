export type InstitutionalSection = {
  title: string;
  paragraphs: string[];
  quote?: string;
  closing?: string;
  id?: string;
};

export const institutionalSections: InstitutionalSection[] = [
  {
    title: "Muito além de aprender a dançar.",
    paragraphs: [
      "Fundada em 15 de junho de 2010, em Apucarana (PR), a No Ritmo Academia de Dança nasceu com um propósito claro, usar a dança de salão para desenvolver muito mais do que passos.",
      "Aprender passos é parte do processo. Não é tudo.",
      "Essa habilidade exige escuta, percepção, consciência corporal, adaptação, confiança, ética e convivência. Por isso, entendemos a dança de salão como uma ferramenta poderosa de aprendizagem e desenvolvimento humano.",
      "Em 16 anos, milhares de pessoas fizeram parte dessa história, crianças, jovens, adultos e idosos, em aulas particulares, turmas regulares, projetos sociais, ações culturais, eventos e parcerias com instituições públicas e privadas.",
    ],
  },
  {
    id: "metodologia",
    title: "Nossa forma de ensinar.",
    paragraphs: [
      "Na Academia No Ritmo, acreditamos que ensinar não é simplesmente demonstrar um movimento e esperar que o aluno consiga reproduzi-lo.",
      "Cada pessoa aprende de uma maneira, possui experiências diferentes e responde de forma particular aos estímulos recebidos.",
      "Por isso, nossa metodologia procura integrar o conhecimento técnico da dança a conceitos relacionados à aprendizagem motora, comunicação, percepção, fisiologia, sistemas representacionais, escuta ativa e autonomia do aluno.",
      "Existe uma frase que orienta a formação de nossos professores:",
      "Ela representa a responsabilidade que assumimos como educadores. Se o aluno encontra dificuldade, nosso papel é buscar outras formas de explicar, demonstrar, comunicar e criar experiências que facilitem sua aprendizagem.",
      "Nosso objetivo não é formar alunos dependentes de professores, mas pessoas que progressivamente desenvolvam a capacidade de aprender a aprender.",
    ],
    quote: "Se não houve aprendizagem, é porque não houve ensino.",
  },
  {
    title: "Dança é relação.",
    paragraphs: [
      "Na dança de salão, ninguém dança sozinho.",
      "É necessário perceber o próprio corpo e, ao mesmo tempo, perceber o outro. Comunicar uma intenção, interpretar uma informação, ajustar força, espaço, direção, tempo e movimento.",
      "Por isso, muitas competências desenvolvidas dentro de uma aula ultrapassam naturalmente os limites da pista de dança.",
      "Ao aprender a dançar, uma pessoa pode também desenvolver sua capacidade de escutar, comunicar-se, relacionar-se, tomar decisões, lidar com erros, adaptar-se e participar de ambientes sociais com maior segurança e autonomia.",
      "Não tratamos esses resultados como promessas mágicas da dança. Eles são consequências possíveis de um ambiente pedagógico construído intencionalmente para favorecer experiências, relações e aprendizagem.",
    ],
  },
  {
    title: "Técnica com propósito.",
    paragraphs: [
      "Valorizamos profundamente a técnica.",
      "Postura, equilíbrio, transferência de peso, eixos, rotações, conexão, condução, resposta, musicalidade e organização do movimento fazem parte da formação de nossos alunos.",
      "Mas técnica, para nós, não é um fim em si mesma.",
      "Ela deve proporcionar segurança, conforto, liberdade e possibilidades para que cada pessoa possa realmente dançar.",
      "Por isso, buscamos ensinar não apenas o que fazer, mas também como fazer, por que fazer e como perceber o próprio movimento.",
    ],
  },
  {
    title: "Formação de quem ensina.",
    paragraphs: [
      "Nossa preocupação com a qualidade do ensino também está presente na formação contínua de nossa equipe.",
      "Professores e assistentes são estimulados a estudar não apenas repertório e técnica, mas também processos de aprendizagem, comunicação, leitura de sala, acolhimento, fisiologia do movimento, escuta e responsabilidade pedagógica.",
      "Essa cultura deu origem também ao nosso processo interno de formação de novos profissionais e assistentes, criando um ambiente no qual quem ensina continua sendo, permanentemente, alguém que aprende.",
    ],
  },
  {
    title: "Uma escola conectada à comunidade.",
    paragraphs: [
      "A história da No Ritmo também foi construída fora de nossas salas.",
      "Desde nossa fundação, participamos de projetos culturais, educacionais e sociais, levando a dança para diferentes públicos e contextos.",
      "Ao longo dessa trajetória, desenvolvemos trabalhos junto a secretarias municipais, projetos públicos, instituições, empresas, escolas e comunidades, além de ações voltadas a crianças, adultos, idosos e pessoas com diferentes necessidades de aprendizagem.",
      "Desde 2023, mantemos também atuação contínua em projetos desenvolvidos em parceria com a Secretaria de Cultura de Apucarana.",
      "Essa experiência reforçou uma convicção que acompanha nossa história: a dança pode ocupar um espaço muito maior na sociedade do que apenas o entretenimento. Ela pode ser cultura, educação, convivência, inclusão, lazer, saúde social e desenvolvimento humano.",
    ],
  },
  {
    title: "Nosso propósito.",
    paragraphs: [
      "Queremos que cada pessoa que entre na No Ritmo encontre um ambiente onde seja possível aprender sem medo de errar, desenvolver-se no próprio ritmo e compreender que dançar não significa apenas executar movimentos.",
      "Significa perceber.",
      "Escutar.",
      "Comunicar.",
      "Adaptar.",
      "Compartilhar.",
      "E continuar aprendendo.",
      "Aprender no seu ritmo é parte desse propósito: cada pessoa pode avançar com segurança, autonomia e espaço para errar.",
    ],
    closing: "No Ritmo Academia de Dança - Dança de salão, aprendizagem e desenvolvimento humano desde 2010.",
  },
];
