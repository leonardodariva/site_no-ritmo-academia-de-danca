import Image from "next/image";
import Link from "next/link";
import { footerNavigation } from "../content/navigation";
import { siteContact } from "../content/site";

export default function SiteFooter() {
  return <footer className="v4-footer">
    <div className="v4-footer-intro"><Link href="/" aria-label="No Ritmo - página inicial"><Image src="/logo-fundo-escuro.webp" width={1741} height={421} alt="No Ritmo Academia de Dança" unoptimized /></Link><hr /><p>Dança, conhecimento, movimento e encontros em Apucarana.</p></div>
    <div><strong>Conhecer</strong>{footerNavigation.conhecer.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</div>
    <div><strong>Participar</strong>{footerNavigation.participar.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</div>
    <div className="v4-footer-contact"><strong>Contato</strong><a href={siteContact.phoneHref}>{siteContact.phoneDisplay}</a><a href={siteContact.emailHref}>{siteContact.email}</a><span>{siteContact.city} - {siteContact.state}</span></div>
    <div className="v4-footer-bottom"><span>© {new Date().getFullYear()} No Ritmo Academia de Dança</span><span>Conteúdo institucional e editorial</span></div>
  </footer>;
}
