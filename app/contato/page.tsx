import type { Metadata } from "next";
import SubpageShell from "../SubpageShell";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { siteContact } from "../../content/site";
import MapEmbed from "../MapEmbed";

export const metadata: Metadata = { title: "Contato | No Ritmo Academia de Dança", description: "Fale com a No Ritmo em Apucarana para conhecer aulas, modalidades e disponibilidade.", alternates: { canonical: "/contato" }, openGraph: { title: "Contato | No Ritmo Academia de Dança", description: "Fale com a No Ritmo em Apucarana para conhecer aulas, modalidades e disponibilidade.", url: "/contato", images: ["/images/galeria/aulas-e-encontros-banner.webp"] } };

export default function ContatoPage() { return <SubpageShell wideCopy compactHero hideCta kicker="Meios de contato" title="Contato e localização" intro={`Fale com a No Ritmo em ${siteContact.city}, ${siteContact.state}, ou veja como chegar até a escola.`} sections={[
  { number: "01", title: "Telefone e WhatsApp.", audio: false, content: <><p><a href={siteContact.phoneHref}>{siteContact.phoneDisplay}</a></p><a className="button contact-whatsapp-link" href={siteContact.whatsappHref} target="_blank" rel="noreferrer"><FaWhatsapp aria-hidden="true" />Conversar no WhatsApp</a></> },
  { number: "02", title: "E-mail.", audio: false, content: <><p><a href={siteContact.emailHref}>{siteContact.email}</a></p><a className="button contact-email-link" href={siteContact.emailHref}><FaEnvelope aria-hidden="true" />Enviar e-mail</a></> },
  {number:"03",title:"Onde estamos.",audio:false,content:<><p>{siteContact.street}, {siteContact.streetNumber} - {siteContact.neighborhood}, {siteContact.city} - {siteContact.state}, {siteContact.postalCode}. Anexo ao Colégio São José.</p><div className="contact-map-preview"><MapEmbed src={siteContact.mapsEmbedHref} title={`Mapa da No Ritmo em ${siteContact.city}`} address={`${siteContact.street}, ${siteContact.streetNumber} - ${siteContact.neighborhood}, ${siteContact.city} - ${siteContact.state}, ${siteContact.postalCode}`} mapsHref={siteContact.mapsHref} /></div><a className="button contact-map-link" href={siteContact.mapsHref} target="_blank" rel="noreferrer">Abrir localização no mapa</a></>},
]} />; }
