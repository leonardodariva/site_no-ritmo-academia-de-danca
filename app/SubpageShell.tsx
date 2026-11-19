import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { House } from "lucide-react";
import { siteContact } from "../content/site";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import SectionAudioButton from "./SectionAudioButton";

type Section = {
  number: string;
  title: string;
  text?: string;
  content?: ReactNode;
  paragraphs?: ReactNode[];
  quote?: string;
  closing?: string;
  id?: string;
  fullWidth?: boolean;
  titleAddon?: ReactNode;
  hideTitle?: boolean;
  audio?: boolean;
  audioId?: string;
};

export default function SubpageShell({ kicker, title, intro, sections, wideCopy = false, compactHero = false, hideHeroSummary = false, hideCta = false, ctaTitle, ctaIntro, breadcrumbParent, heroImage, heroImagePosition, heroImagePositionMobile, breadcrumbCurrentLabel }: { kicker: string; title: string; intro: ReactNode; sections: Section[]; wideCopy?: boolean; compactHero?: boolean; hideHeroSummary?: boolean; hideCta?: boolean; ctaTitle?: string; ctaIntro?: string; breadcrumbParent?: { label: string; href: string }; heroImage?: string; heroImagePosition?: string; heroImagePositionMobile?: string; breadcrumbCurrentLabel?: string }) {
  return (
    <main className="subpage">
      <SiteHeader />
      <section className={compactHero ? "subpage-hero subpage-hero-photo" : "subpage-hero"} id="main-content" style={heroImage ? ({ "--subpage-hero-image": `url('${heroImage}')`, "--subpage-hero-image-position": heroImagePosition, "--subpage-hero-image-position-mobile": heroImagePositionMobile } as CSSProperties) : undefined}>
        <p>{kicker}</p><h1>{title}</h1>{!hideHeroSummary && <div><span>No Ritmo • Apucarana</span><p>{intro}</p></div>}
      </section>
      <nav className="subpage-breadcrumb" aria-label="Navegação estrutural"><Link className="breadcrumb-home-link" href="/" aria-label="Voltar para a página inicial"><House className="breadcrumb-home-icon" size={16} strokeWidth={2} aria-hidden="true" /><span>Página inicial</span></Link>{breadcrumbParent && <><span aria-hidden="true">/</span><Link href={breadcrumbParent.href}>{breadcrumbParent.label}</Link></>}<span aria-hidden="true">/</span><strong aria-current="page">{breadcrumbCurrentLabel ?? title}</strong></nav>
      <section className={wideCopy ? "subpage-sections subpage-sections-wide" : "subpage-sections"}>
        {sections.map((section) => {
          const paragraphs = section.paragraphs ?? (section.text ? [section.text] : []);
          const hasReadableText = !section.fullWidth || Boolean(section.text || section.paragraphs?.length || section.quote || section.closing);
          return <article key={section.number} id={section.id} className={section.fullWidth ? "subpage-section-full" : undefined}>{!section.hideTitle && <div className="subpage-section-title"><h2>{section.title}</h2>{section.audio !== false && hasReadableText && <SectionAudioButton sectionKey={section.audioId ?? section.id ?? section.number} title={section.title} />}{section.titleAddon}</div>}<div className="subpage-section-copy">{section.content}{paragraphs.map((paragraph, index) => <p key={`${section.number}-${index}`}>{paragraph}</p>)}{section.quote && <blockquote>{section.quote}</blockquote>}{section.closing && <p className="subpage-section-closing">{section.closing}</p>}</div></article>;
        })}
      </section>
      {!hideCta && <section className={wideCopy ? "subpage-cta subpage-cta-about" : "subpage-cta"}><p>{ctaIntro ?? "Fale diretamente com a equipe"}</p><h2>{ctaTitle ?? (wideCopy ? "Para dar o seu primeiro passo na dança de salão, clique no botão abaixo." : "Vamos encontrar a melhor experiência para você?")}</h2><a className="button subpage-cta-whatsapp" href={siteContact.whatsappHref} target="_blank" rel="noreferrer"><FaWhatsapp aria-hidden="true" />Conversar no WhatsApp</a></section>}
      <SiteFooter />
    </main>
  );
}
