"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { primaryNavigation } from "../content/navigation";

const navDescriptions: Record<string, string> = {
  "Música e musicalidade": "Compreenda a música para dançar com ela.",
  "Início": "Voltar ao começo da Home.", "Sobre a No Ritmo": "Conheça a escola e sua visão.", "Missão, visão e valores": "Princípios que orientam nossa escola.", "Serviços No Ritmo": "Experiências para cada objetivo.", "Estilos": "Ritmos para descobrir e praticar.", "Biblioteca de conhecimento": "Conceitos para consultar e aprofundar.", "Artigos recentes": "Ideias, histórias e práticas em movimento.", "Professores e equipe": "Pessoas que fazem a No Ritmo.", "Depoimentos": "Experiências de quem dança com a gente.", "Eventos e projetos": "Encontros e ações da comunidade.", "Galeria": "Aulas, encontros e momentos especiais.", "Perguntas frequentes": "Respostas para começar com segurança.", "Informações práticas": "Horários, contato e localização.",
};

export default function SiteHeader({ floating = false }: { floating?: boolean }) {
  const headerRef = useRef<HTMLElement | null>(null);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  useEffect(() => {
    const closeOnOutsideClick = (event: PointerEvent) => {
      const target = event.target as Node;
      const openDetails = Array.from(headerRef.current?.querySelectorAll("details[open]") ?? []);
      if (openDetails.some((menu) => menu.contains(target))) return;
      setOpenMenu(null);
      openDetails.forEach((menu) => menu.removeAttribute("open"));
    };
    document.addEventListener("pointerdown", closeOnOutsideClick);
    return () => document.removeEventListener("pointerdown", closeOnOutsideClick);
  }, []);
  const closeMenuOnNavigate = (event: MouseEvent<HTMLAnchorElement>) => {
    setOpenMenu(null);
    event.currentTarget.closest("details")?.removeAttribute("open");
  };
  const toggleMenu = (event: MouseEvent<HTMLElement>, menuHref: string) => {
    event.preventDefault();
    event.stopPropagation();
    setOpenMenu((current) => current === menuHref ? null : menuHref);
  };

  return <>{!floating && <a className="skip-link" href="#main-content">Pular para o conteúdo</a>}<header ref={headerRef} className="site-header">
    <Link className="brand" href="/" aria-label="No Ritmo - página inicial"><Image className="brand-logo" src="/logo-fundo-claro-header.webp" width={500} height={121} alt="No Ritmo Academia de Dança" priority unoptimized /></Link>
    <nav className="desktop-nav" aria-label="Navegação principal">{primaryNavigation.map((item) => "children" in item ? <details className="nav-group" name="desktop-navigation" key={item.href} open={openMenu === item.href}><summary onClick={(event) => toggleMenu(event, item.href)}>{item.label}</summary><div className="nav-dropdown"><div className="nav-menu-links">{item.children.map((child) => <Link key={child.href} href={child.href} onClick={closeMenuOnNavigate}><span className="nav-item-copy"><strong>{child.label}</strong><small>{navDescriptions[child.label] ?? "Explore este conteúdo da No Ritmo."}</small></span></Link>)}</div><div className="nav-menu-promo"><div className="nav-menu-promo-image" role="img" aria-label="Aula de dança na No Ritmo" /><strong>Dance no seu ritmo.</strong><small>Conheça as experiências da No Ritmo.</small></div></div></details> : <Link key={item.href} href={item.href} onClick={closeMenuOnNavigate}>{item.label}</Link>)}</nav>
    <div className="header-socials" aria-label="Redes sociais da No Ritmo">
      <a className="social-link" href="https://www.instagram.com/noritmoacademiadedanca/" target="_blank" rel="noreferrer" aria-label="Instagram da No Ritmo"><FaInstagram aria-hidden="true" /></a>
      <a className="social-link" href="https://www.facebook.com/NoRitmoAcademiadeDanca?locale=pt_BR" target="_blank" rel="noreferrer" aria-label="Facebook da No Ritmo"><FaFacebookF aria-hidden="true" /></a>
    </div>
    <details className="mobile-menu"><summary aria-label="Abrir menu">Menu</summary><nav aria-label="Navegação mobile">{primaryNavigation.map((item) => "children" in item ? <div className="mobile-nav-section" key={item.href}><strong>{item.label}</strong>{item.children.map((child) => <Link key={child.href} href={child.href} onClick={closeMenuOnNavigate}>{child.label}</Link>)}</div> : <Link key={item.href} href={item.href} onClick={closeMenuOnNavigate}>{item.label}</Link>)}</nav></details>
  </header></>;
}
