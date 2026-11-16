export type DanceStyle = {
  slug: string;
  name: string;
  paragraphs: (string | { before: string; strong: string; after: string })[];
};

export const danceStyles: DanceStyle[] = [
  {
    "slug": "forro",
    "name": "Forró",
    "paragraphs": [
      "Uma das expressões mais importantes da cultura popular brasileira, o forró tem suas raízes especialmente ligadas ao Nordeste e reúne música, dança e celebração. Sua projeção nacional ganhou enorme força com artistas como Luiz Gonzaga, que ajudaram a difundir ritmos nordestinos pelo Brasil a partir da década de 1940.",
      "Dançado a dois, o forró valoriza conexão, condução, musicalidade e adaptação entre os parceiros. Ao longo do tempo, diferentes maneiras de dançá-lo surgiram e se desenvolveram, fazendo do forró uma dança extremamente rica, social e presente em todo o país."
    ]
  },
  {
    "slug": "forro-cassino",
    "name": "Forró Cassino",
    "paragraphs": [
      "O Forró Cassino é uma proposta que utiliza elementos de organização coletiva inspirados nas rodas e trocas de pares conhecidas no Casino cubano, aplicando essa dinâmica ao universo do forró.",
      "Os participantes dançam em conjunto, seguindo comandos que podem determinar movimentos, trocas de parceiros e diferentes formações. O resultado é uma experiência dinâmica e descontraída, que trabalha atenção, interação, memória e capacidade de adaptação."
    ]
  },
  {
    "slug": "vaneira",
    "name": "Vaneira",
    "paragraphs": [
      "A Vaneira é uma das danças mais representativas dos bailes do Sul do Brasil e possui forte presença na cultura gaúcha. Sua formação recebeu diferentes influências culturais e musicais ao longo do desenvolvimento das tradições regionais.",
      "É dançada a dois e pode apresentar diferentes velocidades e maneiras de interpretação. Sua movimentação característica, condução e relação com a musicalidade fazem dela presença praticamente indispensável nos tradicionais bailes gaúchos."
    ]
  },
  {
    "slug": "arrasta-pe",
    "name": "Arrasta-pé",
    "paragraphs": [
      "O Arrasta-pé está ligado ao universo das festas populares brasileiras e, especialmente, à cultura nordestina e às festas juninas. O termo também aparece historicamente associado ao próprio ato de dançar e aos espaços populares onde se realizavam bailes.",
      "É uma dança alegre e energética, marcada por movimentação ritmada e descontração. Sua identidade combina muito bem com ambientes festivos e com a espontaneidade característica das manifestações populares brasileiras."
    ]
  },
  {
    "slug": "sertanejo",
    "name": "Sertanejo",
    "paragraphs": [
      "A dança Sertaneja acompanha as transformações da própria música sertaneja brasileira. Com a expansão do gênero e o surgimento de novas vertentes, diferentes maneiras de dançar a dois também foram se desenvolvendo nos bailes, festas e casas noturnas.",
      "É uma dança social versátil, marcada pela condução, giros, deslocamentos e interação entre os parceiros. Sua proximidade com um repertório amplamente conhecido pelo público brasileiro faz dela uma excelente opção para quem deseja levar a dança para situações sociais do cotidiano.",
      {
        "before": "Uma característica curiosa, o Sertanejo não é dançado da mesma forma em todo o país. Em São Paulo, no Rio de Janeiro e em outras regiões, cada lugar desenvolveu seu próprio jeito de dançar. ",
        "strong": "Na Academia No Ritmo, ensinamos o Sertanejo como ele é mais dançado aqui no Norte do Paraná",
        "after": ", para que você se sinta em casa nos bailes e festas da nossa região."
      }
    ]
  },
  {
    "slug": "xote-gaucho",
    "name": "Xote Gaúcho",
    "paragraphs": [
      "Xote Gaúcho tem forte presença na cultura tradicionalista do Sul do Brasil. Sua história está relacionada às transformações que danças europeias, especialmente a schottische, sofreram ao serem incorporadas às culturas brasileiras.",
      "Na tradição gaúcha, ganhou características próprias de movimentação, postura e interpretação musical. É uma dança de casal marcada pela interação entre os parceiros e pela forte identidade cultural sul-brasileira."
    ]
  },
  {
    "slug": "bachata",
    "name": "Bachata",
    "paragraphs": [
      "Originária da República Dominicana, a bachata surgiu no século XX ligada inicialmente às camadas populares e, durante muito tempo, sofreu preconceito social em seu próprio país.",
      "Com sua crescente popularização internacional, transformou-se em um dos grandes fenômenos da dança social contemporânea. É conhecida pela proximidade entre os parceiros, interpretação musical e diferentes possibilidades de movimentação corporal."
    ]
  },
  {
    "slug": "chamame",
    "name": "Chamamé",
    "paragraphs": [
      "O Chamamé nasceu na região nordeste da Argentina, especialmente na província de Corrientes, e possui influências indígenas guaranis e europeias. Sua cultura também atravessou fronteiras, tornando-se bastante presente no Paraguai e no Sul do Brasil.",
      "Dançado em casal, possui uma musicalidade característica, frequentemente marcada pelo acordeão. Mais do que um gênero musical e uma dança, o chamamé representa identidade, encontro e tradição para diferentes povos da região."
    ]
  },
  {
    "slug": "salsa-l-a",
    "name": "Salsa L.A.",
    "paragraphs": [
      "A Salsa L.A., ou Los Angeles Style, desenvolveu-se principalmente nos Estados Unidos e caracteriza-se pela dança estruturada predominantemente “em linha”.",
      "É conhecida por sua estética dinâmica, giros, mudanças de direção e movimentos visualmente marcantes. O estilo recebeu influências de diferentes formas de salsa e também do ambiente artístico e performático de Los Angeles."
    ]
  },
  {
    "slug": "salsa-cubana",
    "name": "Salsa Cubana",
    "paragraphs": [
      "A Salsa Cubana está profundamente relacionada à cultura musical e dançante de Cuba e às diversas matrizes africanas e europeias que contribuíram para a formação das manifestações culturais cubanas.",
      "Sua movimentação tende a explorar trajetórias mais circulares e uma relação intensa com o ritmo e com o parceiro. É uma dança alegre, social e rica em possibilidades de expressão corporal e musical."
    ]
  },
  {
    "slug": "salsa-casino",
    "name": "Salsa Casino",
    "paragraphs": [
      "O Casino, frequentemente chamado internacionalmente de Salsa Cubana ou Salsa Casino, desenvolveu-se em Cuba e está associado aos clubes e espaços sociais onde os cubanos se reuniam para dançar.",
      "Uma de suas características marcantes é a movimentação circular do casal e a riqueza das trocas de posição. Do Casino também se desenvolveu a famosa Rueda de Casino, em que vários casais dançam em roda realizando figuras e trocas comandadas coletivamente."
    ]
  },
  {
    "slug": "valsa",
    "name": "Valsa",
    "paragraphs": [
      "A Valsa possui raízes europeias e tornou-se uma das danças de casal mais reconhecidas do mundo. Ganhou enorme projeção nos salões europeus, especialmente entre os séculos XVIII e XIX, sendo fortemente associada à tradição vienense.",
      "Seu compasso ternário cria a conhecida sensação de movimento contínuo e giratório. Até hoje, a valsa ocupa lugar especial em casamentos, bailes, festas de debutantes e outras celebrações."
    ]
  },
  {
    "slug": "soltinho",
    "name": "Soltinho",
    "paragraphs": [
      "O Soltinho é uma dança social brasileira desenvolvida a partir da maneira como brasileiros passaram a interpretar músicas de diferentes gêneros dançados a dois, especialmente aquelas relacionadas ao rock, swing e outros estilos.",
      "Caracteriza-se pela descontração, giros, trocas de posição e grande variedade musical. É justamente essa versatilidade que faz do soltinho uma dança muito divertida para situações sociais."
    ]
  },
  {
    "slug": "rock",
    "name": "Rock",
    "paragraphs": [
      "A dança associada ao Rock acompanha a própria transformação do gênero musical, que ganhou enorme projeção internacional a partir dos anos 1950. Suas formas dançadas receberam influências de manifestações anteriores, como swing, boogie-woogie, lindy hop e outras danças populares.",
      "Energia, ritmo e interação são características marcantes. Ao longo das décadas, diferentes maneiras de dançar rock surgiram em vários países, tornando seu universo tão diverso quanto a própria música."
    ]
  },
  {
    "slug": "bolero",
    "name": "Bolero",
    "paragraphs": [
      "O Bolero possui uma trajetória que atravessa diferentes países e culturas. Embora o nome também esteja relacionado a uma dança espanhola mais antiga, o bolero que influenciou fortemente a dança social latino-americana desenvolveu-se em Cuba no final do século XIX.",
      "Romântico e cadenciado, espalhou-se pela América Latina e ganhou características próprias em diferentes lugares, inclusive no Brasil. Na dança de salão brasileira, tornou-se conhecido pela elegância, condução e possibilidades de deslocamento do casal."
    ]
  },
  {
    "slug": "tango",
    "name": "Tango",
    "paragraphs": [
      "O Tango surgiu na região do Rio da Prata, especialmente entre Buenos Aires e Montevidéu, no final do século XIX. Sua formação reúne influências culturais de imigrantes europeus, populações afrodescendentes e tradições locais.",
      "Reconhecido mundialmente, o tango valoriza conexão, caminhada, improvisação e interpretação musical. Mais do que executar figuras, o casal estabelece uma comunicação corporal extremamente sofisticada durante a dança."
    ]
  },
  {
    "slug": "milonga",
    "name": "Milonga",
    "paragraphs": [
      "A Milonga possui raízes culturais no universo do Rio da Prata e está intimamente relacionada à história que posteriormente daria origem ao tango.",
      "Como gênero musical e dança, geralmente apresenta caráter mais ágil e uma interpretação rítmica particular. Dentro da cultura tanguera, “milonga” também é o nome dado aos encontros e espaços sociais onde as pessoas se reúnem para dançar tango, milonga e valsa."
    ]
  },
  {
    "slug": "kizomba",
    "name": "Kizomba",
    "paragraphs": [
      "A Kizomba desenvolveu-se em Angola, ganhando projeção principalmente a partir das últimas décadas do século XX. Sua história está relacionada às transformações da música angolana e ao diálogo com outras influências musicais africanas e caribenhas.",
      "Na dança, destaca-se pela conexão do casal, caminhada, transferência de peso e interpretação musical. Sua expansão internacional fez surgir também diferentes abordagens e estilos derivados."
    ]
  },
  {
    "slug": "samba-de-pe",
    "name": "Samba de Pé",
    "paragraphs": [
      "O Samba de Pé, frequentemente relacionado ao universo do samba no pé, está profundamente ligado à cultura brasileira e especialmente às manifestações do samba urbano carioca e do Carnaval.",
      "Dançado individualmente, trabalha ritmo, coordenação, transferência de peso, mobilidade corporal e expressão. Apesar de frequentemente associado ao Carnaval, seus fundamentos podem ser explorados como uma rica forma de compreensão da musicalidade brasileira."
    ]
  },
  {
    "slug": "samba-de-gafieira",
    "name": "Samba de Gafieira",
    "paragraphs": [
      "O Samba de Gafieira desenvolveu-se nos salões urbanos brasileiros, especialmente no Rio de Janeiro, ao longo do século XX. O próprio termo “gafieira” tornou-se associado aos espaços populares de dança.",
      "Dançado em casal, combina características do samba com uma rica linguagem de condução, deslocamentos e figuras. Elegância, malandragem, musicalidade e comunicação entre os parceiros fazem parte de sua identidade."
    ]
  },
  {
    "slug": "pagode",
    "name": "Pagode",
    "paragraphs": [
      "O Pagode está relacionado ao universo do samba e ganhou enorme projeção comercial no Brasil principalmente a partir das décadas de 1980 e 1990.",
      "Nas pistas e encontros sociais, diferentes maneiras de dançar a dois foram sendo desenvolvidas para acompanhar seu repertório. É uma dança descontraída, brasileira e fortemente conectada às músicas que fazem parte da memória afetiva de diferentes gerações."
    ]
  },
  {
    "slug": "zouk",
    "name": "Zouk",
    "paragraphs": [
      "O Zouk Brasileiro desenvolveu-se no Brasil a partir de transformações ocorridas principalmente na dança conhecida como lambada, dialogando posteriormente com músicas do gênero zouk caribenho.",
      "Ao longo das décadas, tornou-se uma dança com identidade própria e grande projeção internacional. É reconhecido pela fluidez, conexão, movimentos corporais e possibilidades de interpretação musical, incluindo técnicas específicas para movimentos de cabeça e tronco."
    ]
  }
];
