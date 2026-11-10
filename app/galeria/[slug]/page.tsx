import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { galleryAlbums } from "../../../content/gallery";
import SubpageShell from "../../SubpageShell";
import AlbumPhotos from "../AlbumPhotos";

export function generateStaticParams() { return galleryAlbums.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const album = galleryAlbums.find((item) => item.slug === slug);
  return album ? { title: album.title + " | Galeria No Ritmo", description: album.description, alternates: { canonical: "/galeria/" + slug }, openGraph: { title: album.title + " | Galeria No Ritmo", description: album.description, url: "/galeria/" + slug, images: [album.photos[0].src] } } : {};
}
export default async function AlbumPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const album = galleryAlbums.find((item) => item.slug === slug);
  if (!album) notFound();
  return <SubpageShell breadcrumbParent={{ label: "Álbuns", href: "/galeria" }} compactHero wideCopy kicker="Galeria" title={album.title} intro={album.description} sections={[{ number: "01", title: "Cada foto, um novo olhar", titleAddon: <><Link className="album-back-link" href="/galeria"><ArrowLeft size={15} aria-hidden="true" />Voltar a todos os álbuns</Link><span className="album-photo-count">{album.category} · <strong>{album.photos.length} fotos</strong></span></>, fullWidth: true, content: <>
    <AlbumPhotos album={album} />
  </> }]} />;
}
