import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { robots: { index: false, follow: false } };
export default function NotFound() { return <main className="not-found"><p className="section-label">No Ritmo • 404</p><h1>Esta página ainda não encontrou seu ritmo.</h1><p>O endereço pode estar incorreto ou este conteúdo ainda está sendo preparado.</p><Link className="button" href="/">Voltar para o início</Link></main>; }
