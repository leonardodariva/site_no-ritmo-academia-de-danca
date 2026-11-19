"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Search } from "lucide-react";
import { galleryAlbums } from "../../content/gallery";

const constructionAlbums = [
  {
    title: "Em construção",
    description: "Estamos preparando novos registros das aulas e dos encontros da No Ritmo.",
    variant: "aulas",
  },
  {
    title: "Em construção",
    description: "Mais momentos especiais e projetos chegam em breve por aqui.",
    variant: "projetos",
  },
] as const;

function ConstructionIllustration({ variant }: { variant: "aulas" | "projetos" }) {
  return <div className={`gallery-construction-illustration gallery-construction-illustration-${variant}`} aria-hidden="true">
    <svg viewBox="0 0 360 180" role="presentation">
      <path className="construction-spark" d="M64 48v14m-7-7h14M286 37v12m-6-6h12" />
      <rect className="construction-board" x="72" y="22" width="216" height="136" rx="22" />
      <path className="construction-board-line" d="M99 47h52m-52 10h35" />
      <g className="construction-worker">
        <path className="construction-leg" d="m157 119-8 23m36-23 10 23" />
        <path className="construction-boot" d="m147 142-9 3m56-3 9 3" />
        <path className="construction-shirt" d="m151 82 12-7h13l13 8 8 34h-62l8-29z" />
        <circle className="construction-face" cx="169" cy="62" r="14" />
        <path className="construction-hair" d="M155 60a14 14 0 0 1 28-1c-4-3-8-4-13-3-4 1-9 3-15 4" />
        <path className="construction-helmet" d="M153 55a16 16 0 0 1 32 0h-32zm-3 2h38v5h-38z" />
        <g className="construction-arm"><path d="m154 88-25 13-15-12" /><circle cx="113" cy="89" r="4" /></g>
        <path className="construction-arm-static" d="m188 88 23 9 14-10" />
      </g>
      {variant === "aulas" ? <g className="construction-prop"><path d="M104 82v-17h12v17m-15-18h18m-10 18-5 9" /></g> : <g className="construction-prop"><path d="M225 86v-17h15m-4-7h12v7m-7 0v17m-8 0h16" /></g>}
      <path className="construction-ground" d="M98 146h164" />
    </svg>
  </div>;
}

export default function GalleryDirectory() {
  const [query, setQuery] = useState("");
  const normalize = (value: string) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  const terms = normalize(query).trim().split(/\s+/).filter(Boolean);
  const albums = galleryAlbums.filter((album) => terms.every((term) => normalize(album.title + " " + album.category + " " + album.description).includes(term)));
  const construction = constructionAlbums.filter((album) => terms.every((term) => normalize(album.title + " " + album.description).includes(term)));
  return <div className="album-directory">
    <div className="album-directory-controls album-directory-heading">
      <h2>Explore nossos álbuns.</h2>
      <label className="album-search"><Search size={18} aria-hidden="true" /><input type="search" aria-label="Pesquisar álbuns" placeholder="Pesquisar álbuns…" value={query} onChange={(event) => setQuery(event.target.value)} /></label>
    </div>
    {albums.length + construction.length === 0 && <p className="album-empty">Nenhum álbum encontrado. Tente outro termo.</p>}
    <div className="album-directory-grid">{albums.map((album) => <Link className="album-card" key={album.slug} href={"/galeria/" + album.slug}>
      <div className="album-cover"><img src={album.photos[0].src} alt={album.photos[0].alt} width="1536" height="1024" loading="lazy" decoding="async" /></div>
      <div className="album-card-copy"><h3>{album.title}</h3><p>{album.description}</p><div className="album-card-footer"><small>{album.category} · {album.photos.length} {album.photos.length === 1 ? "foto" : "fotos"}</small><strong>Ver álbum <ChevronRight size={18} aria-hidden="true" /></strong></div></div>
    </Link>)}{construction.map((album) => <article className="album-card album-card-construction" key={album.variant}>
      <div className="album-cover album-cover-construction"><ConstructionIllustration variant={album.variant} /><span>Em construção</span></div>
      <div className="album-card-copy"><h3>{album.title}</h3><p>{album.description}</p><div className="album-card-footer"><small>Novidades em breve</small></div></div>
    </article>)}</div>
  </div>;
}
