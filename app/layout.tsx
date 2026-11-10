import type { Metadata } from "next";
import "./globals.css";
import { siteContact } from "../content/site";
import { defaultSocialImage, siteName, siteUrl } from "../content/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "No Ritmo Academia de Dança | Apucarana",
  description: "No Ritmo é uma academia de dança em Apucarana, com aulas, estilos, projetos e experiências para todos os ritmos.",
  applicationName: siteName,
  category: "Dança e educação",
  icons: {
    icon: [{ url: "/icon_nr.webp", type: "image/webp" }],
    shortcut: "/icon_nr.webp",
    apple: "/icon_nr.webp",
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "No Ritmo Academia de Dança | Apucarana",
    description: "Dança, conhecimento, movimento e encontros em Apucarana.",
    url: siteUrl,
    siteName,
    type: "website",
    locale: "pt_BR",
    images: [{ url: defaultSocialImage, width: 1672, height: 941, alt: "Aulas e encontros na No Ritmo Academia de Dança" }],
  },
  twitter: { card: "summary_large_image", title: "No Ritmo Academia de Dança | Apucarana", description: "Dança, conhecimento, movimento e encontros em Apucarana.", images: [defaultSocialImage] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "DanceSchool",
        "@id": `${siteUrl}/#organization`,
        name: siteName,
        description: "Academia de dança de salão em Apucarana, Paraná.",
        url: siteUrl,
        logo: `${siteUrl}/logo-fundo-claro.webp`,
        image: `${siteUrl}${defaultSocialImage}`,
        telephone: "+55 43 99921-6027",
        email: siteContact.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: `${siteContact.street}, ${siteContact.streetNumber}`,
          postalCode: siteContact.postalCode,
          addressCountry: "BR",
          addressLocality: siteContact.city,
          addressRegion: siteContact.state,
        },
        geo: { "@type": "GeoCoordinates", latitude: siteContact.latitude, longitude: siteContact.longitude },
        hasMap: siteContact.mapsHref,
        areaServed: { "@type": "City", name: `${siteContact.city}, ${siteContact.state}` },
        openingHoursSpecification: [
          { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "07:30", closes: "22:00" },
          { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "07:30", closes: "18:00" },
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+55 43 99921-6027",
          contactType: "customer service",
          areaServed: "BR",
          availableLanguage: "pt-BR",
        },
        sameAs: [
          "https://www.instagram.com/noritmoacademiadedanca/",
          "https://www.facebook.com/NoRitmoAcademiadeDanca?locale=pt_BR",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: siteName,
        inLanguage: "pt-BR",
        publisher: { "@id": `${siteUrl}/#organization` },
      },
    ],
  };
  return <html lang="pt-BR"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /></body></html>;
}
