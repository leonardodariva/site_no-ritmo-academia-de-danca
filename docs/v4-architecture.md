# No Ritmo V4 — arquitetura institucional e editorial

## Direção do produto

A V4 organiza o site em três intenções claras: **conhecer**, **aprender** e **participar**. A conversão permanece disponível, mas não interrompe a leitura nem domina a navegação.

## Sitemap proposto

- `/`: capa, apresentação e portas de entrada.
- `/sobre`: identidade, história, filosofia e metodologia.
- `/professores`: equipe e perfis profissionais.
- `/conhecimento`: biblioteca permanente de conceitos.
- `/conhecimento/[slug]`: documento de referência.
- `/artigos`: publicações editoriais, categorias e autores.
- `/artigos/[slug]`: leitura individual.
- `/autores`: autoria, revisão e conteúdos publicados.
- `/aulas`: formatos, funcionamento e orientação para iniciantes.
- `/estilos-de-danca`: ritmos e experiências confirmadas.
- `/servicos`: diretório de serviços da academia.
- `/formacao`: apresentação dos programas CFP e CFA.
- `/coreografias/casamentos`, `/coreografias/debutantes`, `/coreografias/eventos`, `/coreografias/gincanas`: páginas específicas de coreografias.
- `/horarios`: grade sujeita a confirmação.
- `/eventos`: próximos eventos e memória da comunidade.
- `/projetos`: projetos e ações da comunidade.
- `/galeria`: registros autorizados.
- `/contato`: canais, localização e orientações.
- `/area-do-aluno`: acesso à área reservada do aluno.

Páginas específicas de serviços continuam acessíveis, mas ficam subordinadas à área **Participar** para evitar um menu principal excessivo.

## Tipos de conteúdo

### Página de conhecimento

Documento permanente com definição, aplicação na dança, perspectiva da No Ritmo, relações semânticas, autoria/revisão e data de atualização.

### Artigo

Publicação datada com título, resumo, corpo, autor, categoria, tags, tempo de leitura, referências, conteúdos relacionados, metadados sociais e estado editorial.

### Autor

Pessoa ou equipe identificada por nome, função, biografia, especialidades, fotografia e conteúdos relacionados. Credenciais somente entram após confirmação.

### Modalidade, evento e página institucional

Conteúdos factuais separados da apresentação visual. Isso permite trocar a origem dos dados futuramente sem reescrever as páginas.

## Relações semânticas

Artigos apontam para conceitos; conceitos apontam para outros conceitos e artigos. Categorias organizam o acervo editorial e tags descrevem assuntos específicos. Breadcrumbs registram a posição de cada página.

## Estratégia técnica

- Vinext/React e a hospedagem atual são preservados.
- O conteúdo deixa de ficar duplicado dentro das páginas e passa a usar uma camada tipada em `content/`.
- Componentes editoriais leem essa camada sem conhecer a futura origem dos dados.
- O CMS será conectado por um adaptador após definir responsáveis, orçamento, permissões e frequência de publicação.
- Não será criado banco de dados apenas para armazenar conteúdo editorial se um CMS gerenciado resolver o problema com menor manutenção.

## CMS — alternativas em avaliação

### Sanity

Boa experiência editorial, conteúdo estruturado, relacionamentos fortes, imagens e prévia. Exige serviço externo, configuração de permissões e acompanhamento do plano contratado.

### Decap CMS com Git

Baixo custo e conteúdo versionado junto ao projeto. A autenticação e a publicação em hospedagens sem painel próprio exigem configuração adicional; a experiência para relações complexas é menos confortável.

### Conteúdo local tipado

É simples, rápido e já funciona na V4, mas ainda depende de alteração no projeto para publicar. Serve como camada de transição e contrato de dados, não como solução editorial final.

Recomendação preliminar: **Sanity** quando mais de uma pessoa publicar ou quando o painel visual for prioridade; **Decap/Git** quando houver um único responsável técnico e custo mínimo for determinante.

## Conteúdo real ainda necessário

- história, datas e marcos confirmados;
- nomes, funções, biografias e fotos dos professores;
- formulação oficial da metodologia;
- endereço completo, redes sociais e horários confirmados;
- fotografias e autorizações de uso;
- autores e responsáveis por revisão;
- eventos, depoimentos e números somente quando verificáveis.
