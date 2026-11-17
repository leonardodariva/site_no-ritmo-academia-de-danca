export type ScheduleDay = {
  day: string;
  teacher: string;
  sessions: { level: string; time: string }[];
};

export const siteContact = {
  city: "Apucarana",
  state: "PR",
  street: "Rua Arthur Bernardes",
  streetNumber: "680",
  neighborhood: "Vila do Colégio",
  postalCode: "86808-060",
  phoneDisplay: "(43) 99921-6027",
  phoneHref: "tel:+5543999216027",
  whatsappHref: "https://wa.me/5543999216027",
  whatsappGeneralHref: "https://wa.me/5543999216027?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20No%20Ritmo%20e%20quero%20conhecer%20as%20aulas.",
  experimentalHref: "https://wa.me/5543999216027?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20aula%20experimental.",
  email: "noritmo@live.com",
  emailHref: "mailto:noritmo@live.com",
  mapsHref: "https://www.google.com/maps?cid=11367344094392465475",
  mapsEmbedHref: "https://maps.google.com/maps?cid=11367344094392465475&output=embed",
  latitude: -23.5470848,
  longitude: -51.4490368,
} as const;

export const weeklySchedule: ScheduleDay[] = [
  { day: "Segunda-feira", teacher: "Professora Lilian", sessions: [{ level: "Nível iniciante", time: "19:00 às 20:30" }, { level: "Nível iniciados", time: "20:30 às 22:00" }] },
  { day: "Terça-feira", teacher: "Professor Leonardo", sessions: [{ level: "Nível iniciante", time: "19:30 às 21:00" }] },
  { day: "Quarta-feira", teacher: "Professora Lilian", sessions: [{ level: "Nível iniciante", time: "20:00 às 21:30" }] },
  { day: "Quinta-feira", teacher: "Professor Luciano", sessions: [{ level: "Nível 2", time: "20:00 às 21:30" }] },
  { day: "Sexta-feira", teacher: "", sessions: [] },
  { day: "Sábado", teacher: "Professor Luciano", sessions: [{ level: "Nível iniciante", time: "13:30 às 15:00" }, { level: "Nível iniciados", time: "15:00 às 16:30" }] },
];
