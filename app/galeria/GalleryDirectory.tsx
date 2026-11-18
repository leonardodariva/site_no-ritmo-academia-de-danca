"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Search } from "lucide-react";
import { galleryAlbums } from "../../content/gallery";

export default function GalleryDirectory() {
  const [query, setQuery] = useState("");
  const normalize = (value: string) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  const terms = normalize(query).trim().split(/\s+/).filter(Boolean);
  const albums = galleryAlbums.filter((album) => terms.every((term) => normalize(album.title + " " + album.category + " " + album.description).includes(term)));
  return <div className="album-directory">
    <p className="album-filter-label">Explore por categoria</p>
    <div className="album-directory-controls">
      <div className="album-filters" role="group" aria-label="Categoria dos álbuns"><button type="button" aria-pressed="true">Aulas</button></div>
      <label className="album-search"><Search size={18} aria-hidden="true" /><input type="search" aria-label="Pesquisar álbuns" placeholder="Pesquisar álbuns…" value={query} onChange={(event) => setQuery(event.target.value)} /></label>
    </div>
    {albums.length === 0 && <p className="album-empty">Nenhum álbum encontrado. Tente outro termo ou escolha outra categoria.</p>}
    <div className="album-directory-grid">{albums.map((album) => <Link className="album-card" key={album.slug} href={"/galeria/" + album.slug}>
      <div className="album-cover"><img src={album.photos[0].src} alt={album.photos[0].alt} width="1536" height="1024" loading="lazy" decoding="async" /></div>
      <div className="album-card-copy"><h3>{album.title}</h3><p>{album.description}</p><div className="album-card-footer"><small>{album.category} · {album.photos.length} {album.photos.length === 1 ? "foto" : "fotos"}</small><strong>Ver álbum <ChevronRight size={18} aria-hidden="true" /></strong></div></div>
    </Link>)}</div>
  </div>;
}
