"use client";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryAlbum } from "../../content/gallery";

export default function AlbumPhotos({ album }: { album: GalleryAlbum }) {
  const hasMultiplePhotos = album.photos.length > 1;
  const [active, setActive] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  const touchStart = useRef<number | null>(null);
  const previousOverflow = useRef("");
  const step = (direction: number) => {
    if (hasMultiplePhotos) setActive((index) => (index + direction + album.photos.length) % album.photos.length);
  };
  const restore = () => { document.body.style.overflow = previousOverflow.current; opener.current?.focus(); };
  useEffect(() => {
    const element = dialog.current;
    return () => { if (element?.open) document.body.style.overflow = previousOverflow.current; };
  }, []);
  return <>
    <div className="album-photo-grid">{album.photos.map((photo, index) => <button type="button" key={photo.src} aria-label={"Ampliar a foto " + (index + 1) + ": " + photo.alt} onClick={(event) => { opener.current = event.currentTarget; setActive(index); previousOverflow.current = document.body.style.overflow; dialog.current?.showModal(); document.body.style.overflow = "hidden"; }}><img src={photo.src} alt={photo.alt} width="1536" height="1024" loading="lazy" decoding="async" /><span>Ampliar foto</span></button>)}</div>
    <dialog ref={dialog} className="album-lightbox" aria-label={"Fotos de " + album.title} onClose={restore} onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close(); }} onKeyDown={(event) => { if (event.key === "ArrowRight" || event.key === "ArrowLeft") { event.preventDefault(); step(event.key === "ArrowRight" ? 1 : -1); } }}>
      <div className="album-lightbox-bar"><span>{album.title} · <span aria-live="polite">{active + 1} / {album.photos.length}</span></span><button type="button" aria-label="Fechar foto ampliada" onClick={() => dialog.current?.close()}><X aria-hidden="true" /></button></div>
      <div className="album-lightbox-stage" onTouchStart={(event) => { touchStart.current = event.touches[0].clientX; }} onTouchEnd={(event) => { if (touchStart.current !== null) { const distance = event.changedTouches[0].clientX - touchStart.current; if (Math.abs(distance) > 50) step(distance < 0 ? 1 : -1); } touchStart.current = null; }}>
        {hasMultiplePhotos && <button type="button" aria-label="Foto anterior" onClick={() => step(-1)}><ChevronLeft aria-hidden="true" /></button>}
        <img src={album.photos[active].src} alt={album.photos[active].alt} width="1536" height="1024" decoding="async" style={!hasMultiplePhotos ? { maxWidth: "100%" } : undefined} />
        {hasMultiplePhotos && <button type="button" aria-label="Próxima foto" onClick={() => step(1)}><ChevronRight aria-hidden="true" /></button>}
      </div>
      {hasMultiplePhotos && <p className="album-lightbox-caption">Use as setas ou deslize para navegar.</p>}
    </dialog>
  </>;
}
