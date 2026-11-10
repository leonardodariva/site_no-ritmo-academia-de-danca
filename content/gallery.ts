const images = [
  ["modelo-aula-dinamica.webp", "Dança em grupo no salão"],
  ["modelo-aula-orientada.webp", "Orientação durante uma aula de dança"],
  ["modelo-aula-espelho.webp", "Prática de dança junto ao espelho"],
  ["modelo-casal-maduro.webp", "Casal compartilhando um momento de dança"],
  ["modelo-casal-proximo.webp", "Conexão entre um casal de dançarinos"],
] as const;

export type GalleryPhoto = { src: string; alt: string };
export type GalleryAlbum = { slug: string; title: string; category: string; description: string; photos: GalleryPhoto[] };

export const galleryAlbums = [
  { slug: "aulas-e-encontros", title: "Aulas e encontros", category: "Aulas", description: "Aprender novos passos, encontrar pessoas e descobrir o prazer de dançar juntos.", order: [0, 1, 2, 3, 4] },
  { slug: "pratica-de-danca", title: "Prática de dança", category: "Festas", description: "Um convite para experimentar os passos e aproveitar a dança em boa companhia.", order: [4, 3, 0, 2, 1] },
  { slug: "projetos-e-comunidade", title: "Projetos e comunidade", category: "Projetos", description: "Encontros que aproximam pessoas e levam a experiência da dança para além das aulas.", order: [3, 2, 1, 0, 4] },
].map(({ order, ...album }): GalleryAlbum => {
  const photos: GalleryPhoto[] = order.map((index) => ({ src: "/images/propostas/" + images[index][0], alt: images[index][1] }));

  if (album.slug === "aulas-e-encontros") {
    photos[0] = { src: "/images/galeria/aulas-e-encontros-banner.webp", alt: "Alunos praticando dança de salão em aula" };
  }

  if (album.slug === "pratica-de-danca") {
    photos[0] = { src: "/images/galeria/pratica-de-danca-banner.webp", alt: "Alunos praticando dança de salão no estúdio" };
  }

  if (album.slug === "projetos-e-comunidade") {
    photos.splice(0, photos.length,
      { src: "/images/editorial/dupla-de-costas.webp", alt: "Dupla praticando dança de salão" },
      { src: "/images/editorial/turma-em-pratica.webp", alt: "Turma reunida para uma prática de dança" },
      { src: "/images/editorial/formacao-em-grupo.webp", alt: "Professor conduzindo uma atividade com a turma" },
      { src: "/images/editorial/turma-em-linha.webp", alt: "Turma durante uma atividade coletiva de dança" },
      { src: "/images/editorial/roda-de-conversa.webp", alt: "Grupo reunido em uma atividade da No Ritmo" },
    );
  }

  return { ...album, photos };
});
