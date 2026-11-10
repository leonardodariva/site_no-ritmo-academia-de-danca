import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renderiza a página inicial da No Ritmo", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html lang="pt-BR">/i);
  assert.match(html, /<title>No Ritmo Academia de Dança \| Apucarana<\/title>/i);
  assert.match(html, /A dança começa no movimento/i);
  assert.match(html, /aria-label="Navegação principal"/i);
  assert.match(html, /aria-label="Conversar com a No Ritmo pelo WhatsApp"/i);
});

test("todas as rotas públicas principais respondem sem erro", async () => {
  const routes = ["/sobre", "/missao-visao-valores", "/aulas", "/aulas-particulares", "/modalidades", "/servicos", "/formacao", "/formacao/cfp", "/formacao/cfa", "/coreografias/casamentos", "/coreografias/debutantes", "/coreografias/eventos", "/coreografias/gincanas", "/horarios", "/galeria", "/galeria/aulas-e-encontros", "/galeria/pratica-de-danca", "/galeria/projetos-e-comunidade", "/projetos", "/projetos/danca-de-salao-gratuita-apucarana", "/faq", "/contato"];
  for (const route of routes) { const response = await render(route); assert.equal(response.status, 200, `${route} deveria responder 200`); }
});

test("área do aluno permanece desativada", async () => {
  const response = await render("/area-do-aluno");
  assert.equal(response.status, 404);
});

test("contato e horários exibem os dados centralizados", async () => {
  const contactHtml = await (await render("/contato")).text();
  assert.match(contactHtml, /\(43\) 99921-6027/);
  assert.match(contactHtml, /noritmo@live\.com/);
  assert.doesNotMatch(contactHtml, /Lorem ipsum/i);

  const scheduleHtml = await (await render("/horarios")).text();
  assert.match(scheduleHtml, /Segunda-feira/);
  assert.match(scheduleHtml, /19h00 - 20h30/);
  assert.match(scheduleHtml, /22h00/);
});

test("modalidades e aulas apresentam conteúdo útil sem texto de preparação", async () => {
  const modalitiesHtml = await (await render("/modalidades")).text();
  assert.match(modalitiesHtml, /Samba de Gafieira/i);
  assert.doesNotMatch(modalitiesHtml, /será atualizada|terá uma explicação/i);

  const classesHtml = await (await render("/aulas")).text();
  assert.match(classesHtml, /quem está começando/i);
  assert.match(classesHtml, /Aulas em grupo/);
  assert.match(classesHtml, /Coreografias para eventos/);
  assert.doesNotMatch(classesHtml, /Aqui explicaremos/i);
});

test("sobre e FAQ usam conteúdo consolidado sem placeholders", async () => {
  const aboutHtml = await (await render("/sobre")).text();
  assert.match(aboutHtml, /Nossa forma de ensinar/);
  assert.match(aboutHtml, /Aprender no seu ritmo/);
  assert.doesNotMatch(aboutHtml, /Lorem ipsum|será ampliada|A página contará/i);

  const faqHtml = await (await render("/faq")).text();
  assert.match(faqHtml, /O que é dança de salão\?/);
  assert.match(faqHtml, /dança de salão é tudo o que se dança a dois/i);
});

test("home apresenta os três caminhos e a rede editorial da V4", async () => {
  const html = await (await render("/")).text();
  assert.match(html, /Samba de gafieira/i);
  assert.match(html, /Conhecer/);
  assert.match(html, /Aprender/);
  assert.match(html, /Participar/);
  assert.match(html, /Conheça todos os estilos/);
  assert.match(html, /instagram\.com\/noritmoacademiadedanca/i);
  assert.match(html, /facebook\.com\/NoRitmoAcademiadeDanca/i);
  assert.doesNotMatch(html, /Desde 2010|15\+.*anos de história/i);
});

test("entra diretamente na home sem tela de carregamento e sem título duplicado", async () => {
  const response = await render();
  const html = await response.text();

  assert.doesNotMatch(html, /class="intro-loader"/i);
  assert.equal((html.match(/<h1\b/gi) ?? []).length, 1);
});

test("a galeria e os projetos conectam listagens e detalhes", async () => {
  const galleryHtml = await (await render("/galeria")).text();
  assert.match(galleryHtml, /Explore nossos álbuns/i);
  assert.match(galleryHtml, /href="\/galeria\/pratica-de-danca"/i);

  const albumHtml = await (await render("/galeria/pratica-de-danca")).text();
  assert.match(albumHtml, /Cada foto, um novo olhar/i);
  assert.match(albumHtml, /Voltar a todos os álbuns/i);

  const projectsHtml = await (await render("/projetos")).text();
  assert.match(projectsHtml, /Explore nossos projetos/i);
  assert.match(projectsHtml, /danca-de-salao-gratuita-apucarana/i);
});

test("a formação apresenta CFP e CFA com responsabilidades claras", async () => {
  const html = await (await render("/formacao")).text();
  assert.match(html, /CFP - Curso de Formação Profissional em Dança de Salão/);
  assert.match(html, /CFA - Curso de Formação de Assistentes/);
  assert.match(html, /planejar e conduzir o processo de ensino/i);
  assert.match(html, /linha de frente da aprendizagem/i);
  assert.doesNotMatch(html, /duração garantida|certificação reconhecida/i);
});
