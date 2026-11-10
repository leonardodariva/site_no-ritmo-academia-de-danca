import type { Metadata } from "next";
import SubpageShell from "../SubpageShell";
import { frequentlyAskedQuestions } from "../../content/faq";
import { siteUrl } from "../../content/seo";

export const metadata: Metadata = { title: "Perguntas frequentes | No Ritmo", description: "Respostas para começar na dança de salão com mais segurança e clareza.", alternates: { canonical: "/faq" }, openGraph: { title: "Perguntas frequentes | No Ritmo", description: "Respostas para começar na dança de salão com mais segurança e clareza.", url: "/faq", images: ["/images/galeria/aulas-e-encontros-banner.png"] } };

export default function FaqPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteUrl}/faq/#faq`,
    mainEntity: frequentlyAskedQuestions.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return <><SubpageShell compactHero kicker="Antes do primeiro passo" title="Perguntas frequentes" intro="Respostas rápidas para quem está conhecendo a No Ritmo e quer começar com mais segurança." sections={frequentlyAskedQuestions.map((item, index) => ({
    number: String(index + 1).padStart(2, "0"),
    title: item.question,
    text: item.answer,
  }))} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /></>;
}
