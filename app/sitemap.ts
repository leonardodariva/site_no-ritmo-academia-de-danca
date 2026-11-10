import type { MetadataRoute } from "next";
import { galleryAlbums } from "../content/gallery";
import { siteUrl } from "../content/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/sobre", "/missao-visao-valores", "/aulas", "/aulas-particulares", "/modalidades", "/musicalidade", "/servicos", "/formacao", "/formacao/cfp", "/formacao/cfa", "/coreografias/casamentos", "/coreografias/debutantes", "/coreografias/eventos", "/coreografias/gincanas", "/horarios", "/galeria", "/faq", "/contato", "/projetos", "/projetos/danca-de-salao-gratuita-apucarana"];
  return [...routes, ...galleryAlbums.map((album) => "/galeria/" + album.slug)].map((route) => ({ url: `${siteUrl}${route}`, changeFrequency: route === "/" ? "weekly" : "monthly", priority: route === "/" ? 1 : route.split("/").length > 2 ? 0.6 : 0.7 }));
}
