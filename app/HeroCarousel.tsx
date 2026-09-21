"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight, FaPause, FaPlay } from "react-icons/fa";

const slides = [
  { title: "Conhecer", description: "História, pessoas e visão da No Ritmo.", image: "hero-carousel-media-1", src: "/images/hero/aula-coletiva.png", href: "/sobre" },
  { title: "Aprender", description: "Aulas e estilos para descobrir a dança.", image: "hero-carousel-media-2", src: "/images/hero/aula-casal.png", href: "/modalidades" },
  { title: "Participar", description: "Aulas, estilos e experiências para cada objetivo.", image: "hero-carousel-media-3", src: "/images/hero/encontro-danca.jpg", href: "/aulas" },
  { title: "Conviver", description: "Encontros e projetos em comunidade.", image: "hero-carousel-media-4", src: "/images/propostas/modelo-casal-maduro.png", href: "/projetos" },
] as const;

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isUserPaused, setIsUserPaused] = useState(false);
  const [isPointerInside, setIsPointerInside] = useState(false);
  const [isFocusInside, setIsFocusInside] = useState(false);
  const [isInteractionDismissed, setIsInteractionDismissed] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const activeSlide = slides[activeIndex];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setIsReducedMotion(mediaQuery.matches);
    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);
    return () => mediaQuery.removeEventListener("change", updateMotionPreference);
  }, []);

  const isPaused = isUserPaused || ((isPointerInside || isFocusInside) && !isInteractionDismissed) || isReducedMotion;

  const togglePlayback = () => {
    if (isPaused) {
      setIsUserPaused(false);
      setIsInteractionDismissed(true);
      return;
    }
    setIsUserPaused(true);
    setIsInteractionDismissed(false);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5600);
    return () => window.clearTimeout(timer);
  }, [activeIndex, isPaused]);

  const showPrevious = () => setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  const showNext = () => setActiveIndex((current) => (current + 1) % slides.length);

  return <div className="hero-carousel" role="region" aria-roledescription="carrossel" aria-label="Caminhos principais da No Ritmo" onMouseEnter={() => { setIsPointerInside(true); setIsInteractionDismissed(false); }} onMouseLeave={() => { setIsPointerInside(false); setIsInteractionDismissed(false); }} onFocus={() => { setIsFocusInside(true); setIsInteractionDismissed(false); }} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) { setIsFocusInside(false); setIsInteractionDismissed(false); } }}>
    <span className="sr-only" aria-live="polite" aria-atomic="true">Slide {activeIndex + 1} de {slides.length}: {activeSlide.title}. {activeSlide.description}</span>
    <Link id="hero-carousel-slide" className="hero-carousel-card" href={activeSlide.href} aria-label={`Slide ${activeIndex + 1} de ${slides.length}: ${activeSlide.title}. ${activeSlide.description}`}>
      <img className={`hero-carousel-media ${activeSlide.image}`} src={activeSlide.src} alt="" aria-hidden="true" loading={activeIndex === 0 ? "eager" : "lazy"} fetchPriority={activeIndex === 0 ? "high" : "auto"} decoding={activeIndex === 0 ? "sync" : "async"} />
      <div className="hero-carousel-shade" aria-hidden="true" />
      <div className="hero-carousel-caption"><span>0{activeIndex + 1} / 04</span><strong>{activeSlide.title}</strong><small>{activeSlide.description}</small></div>
    </Link>
    <div className="hero-carousel-controls" aria-label="Controles do carrossel">
      <button type="button" onClick={showPrevious} aria-label="Item anterior"><FaChevronLeft aria-hidden="true" /></button>
      <div className="hero-carousel-dots" aria-label="Slides do carrossel">{slides.map((slide, index) => <button key={slide.title} type="button" className={index === activeIndex ? "is-active" : ""} onClick={() => setActiveIndex(index)} aria-label={`Mostrar slide ${index + 1} de ${slides.length}: ${slide.title}`} aria-current={index === activeIndex ? "true" : undefined} aria-controls="hero-carousel-slide" />)}</div>
      <button type="button" onClick={showNext} aria-label="Próximo item"><FaChevronRight aria-hidden="true" /></button>
      <button className="hero-carousel-toggle" type="button" onClick={togglePlayback} aria-label={isPaused ? "Reproduzir carrossel" : "Pausar carrossel"} aria-pressed={isPaused} title={isPaused ? "Reproduzir carrossel" : "Pausar carrossel"} disabled={isReducedMotion}>{isPaused ? <FaPlay aria-hidden="true" /> : <FaPause aria-hidden="true" />}</button>
    </div>
  </div>;
}
