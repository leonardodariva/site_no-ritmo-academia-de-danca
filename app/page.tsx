import type { Metadata } from "next";
import Link from "next/link";
import { FaFacebookF, FaGoogle, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { AtSign, MapPin, Phone } from "lucide-react";

import { danceModalities } from "../content/classes";
import { siteContact, weeklySchedule } from "../content/site";
import MapEmbed from "./MapEmbed";
import { frequentlyAskedQuestions } from "../content/faq";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import HeroCarousel from "./HeroCarousel";
import TestimonialRotator from "./TestimonialRotator";
import { galleryAlbums } from "../content/gallery";
import ProjectCards from "./projetos/ProjectCards";

export const metadata: Metadata = { title: "No Ritmo Academia de Dança | Apucarana", description: "Academia de dança de salão em Apucarana com aulas, estilos, projetos e experiências para todos os ritmos.", alternates: { canonical: "/" }, openGraph: { title: "No Ritmo Academia de Dança | Apucarana", description: "Academia de dança de salão em Apucarana com aulas, estilos, projetos e experiências para todos os ritmos.", url: "/", images: ["/images/galeria/aulas-e-encontros-banner.webp"] } };


export default function Home() {
  return <main className="v4-home">
    <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <SiteHeader floating />

    <section className="v4-hero" id="conteudo">
      <div className="v4-hero-copy">
        <p>Dança, conexão e conhecimento</p>
        <h1>A dança começa no movimento.<br /><em>E continua nas relações.</em></h1>
        <span>Fundada em 2010, em Apucarana, a No Ritmo já recebeu mais de 10 mil pessoas e acredita que dançar é aprender, conviver e desenvolver-se para além dos passos.</span>
        <div><Link className="button" href="#produtos">Conheça nossos serviços</Link><Link className="text-link" href="#sobre">Clique para conhecer a No Ritmo</Link></div>
      </div>
      <HeroCarousel />
    </section>

    <section className="v4-statement" id="sobre">
      <p className="statement-eyebrow">Sobre a No Ritmo</p>
      <div className="statement-visual" role="img" aria-label="Turma em formação na No Ritmo" />
      <div className="statement-copy"><p className="statement-eyebrow">Sobre a No Ritmo</p><h2>Muito além de aprender a dançar</h2><p>Desde&nbsp;2010, a No Ritmo Academia de Dança conecta pessoas por meio da dança de salão. Em Apucarana, mais de 10 mil pessoas já fizeram parte dessa história.<br />Nosso ensino integra técnica, consciência corporal, comunicação e convivência, respeitando o ritmo de cada pessoa e desenvolvendo autonomia para aprender e dançar.<br />Acreditamos que dançar é perceber a si mesmo, compreender o outro e aprender juntos.</p><Link className="statement-button" href="/sobre">Saiba mais sobre a No Ritmo</Link></div>
    </section>

    <section className="home-music-section" id="musicalidade" aria-labelledby="home-music-title">
      <div className="home-music-heading"><p>Música aplicada à dança</p><h2 id="home-music-title">O espaço entre ouvir e compreender</h2></div>
      <div className="home-music-copy"><p>Na dança de salão, aprender passos é apenas parte do caminho. Também é preciso compreender o que a música está dizendo ao corpo.</p><p>Nosso ensino aproxima música e movimento, trabalhando pulsação, frases, acentos, pausas e interpretação para que cada escolha de dança aconteça com mais consciência e intenção.</p><Link className="home-music-link" href="/musicalidade">Conheça o curso de música aplicada à dança</Link></div>
      <div className="home-music-visual"><img src="/images/musica-aplicada-a-danca-ajustada.webp" alt="Professor conduzindo uma prática de ritmo com alunos na No Ritmo" width="1536" height="1024" loading="lazy" decoding="async" /></div>
    </section>

<section className="home-classes home-services" id="produtos">
      <div className="v4-section-heading light"><p>Serviços No Ritmo</p><h2>Nossos serviços</h2><Link className="services-all-button" href="/servicos">Acessar todos os serviços</Link></div>
      <div className="home-services-grid">
        <article>
          <Link className="service-card-hitarea" href="/aulas-particulares" aria-label="Abrir serviço de aulas particulares" />
          <img src="/images/servicos/aulas-particulares.webp" alt="Duas pessoas praticando dança a dois no estúdio" width="1536" height="1024" loading="lazy" decoding="async" />
          <div><h3>Aulas particulares</h3><p className="private-lessons-summary">Se o capital tempo for o seu maior ativo, as aulas particulares são a sua melhor opção.</p><Link href="/aulas-particulares" aria-label="Saiba mais sobre aulas particulares">Saiba mais sobre o serviço</Link></div>
        </article>
        <article>
          <Link className="service-card-hitarea" href="/aulas" aria-label="Abrir serviço de aulas em grupo" />
          <img src="/images/servicos/aulas-em-grupo.webp" alt="Turma praticando dança de salão em pares" width="1536" height="1024" loading="lazy" decoding="async" />
          <div><h3>Aulas em grupo</h3><p className="group-lessons-summary">Aprenda a dançar, pratique e conheça pessoas. Você não precisa ter um par.</p><Link href="/aulas" aria-label="Saiba mais sobre aulas em grupo">Saiba mais sobre o serviço</Link></div>
        </article>
        <article>
          <Link className="service-card-hitarea" href="/coreografias/casamentos" aria-label="Abrir serviço de coreografias para casamento" />
          <img src="/images/servicos/casamentos.webp" alt="Casal ensaiando um giro com acompanhamento da professora" width="1536" height="1024" loading="lazy" decoding="async" />
          <div><h3>Coreografias para casamento</h3><p>Uma dança que celebra a história do casal, com coreografia e ensaios personalizados.</p><Link href="/coreografias/casamentos" aria-label="Saiba mais sobre coreografias para casamento">Saiba mais sobre o serviço</Link></div>
        </article>
        <article>
          <Link className="service-card-hitarea" href="/coreografias/debutantes" aria-label="Abrir serviço de coreografias para debutantes" />
          <img src="/images/servicos/debutantes.webp" alt="Jovem de saia lilás ensaiando um giro com a professora" width="1536" height="1024" loading="lazy" decoding="async" />
          <div><h3>Coreografias para debutantes</h3><p>Celebre seus 15 anos com uma coreografia especial, feita para expressar sua personalidade.</p><Link href="/coreografias/debutantes" aria-label="Saiba mais sobre coreografias para debutantes">Saiba mais sobre o serviço</Link></div>
        </article>
      </div>
      <div className="home-services-grid home-services-extra">
        <article>
          <Link className="service-card-hitarea" href="/coreografias/eventos" aria-label="Abrir serviço de coreografias para eventos" />
          <img src="/images/servicos/eventos.webp" alt="Grupo ensaiando movimentos sincronizados no estúdio" width="1536" height="1024" loading="lazy" decoding="async" />
          <div><h3>Coreografias para eventos em geral</h3><p>Projetos personalizados para escolas, empresas e eventos, de pequenos grupos a mais de mil participantes.</p><Link href="/coreografias/eventos" aria-label="Saiba mais sobre coreografias para eventos em geral">Saiba mais sobre o serviço</Link></div>
        </article>
        <article>
          <Link className="service-card-hitarea" href="/coreografias/gincanas" aria-label="Abrir serviço de coreografias para gincanas" />
          <img src="/images/servicos/gincanas.webp" alt="Equipe ensaiando uma coreografia em grupo com o instrutor" width="1536" height="1024" loading="lazy" decoding="async" />
          <div><h3>Coreografias para gincanas</h3><p>Uma apresentação pensada para o regulamento, o perfil da equipe e o tempo disponível.</p><Link href="/coreografias/gincanas" aria-label="Saiba mais sobre coreografias para gincanas">Saiba mais sobre o serviço</Link></div>
        </article>
        <article>
          <Link className="service-card-hitarea" href="/formacao/cfp" aria-label="Abrir serviço CFP" />
          <img src="/images/servicos/cfp.webp" alt="Professor demonstra a postura de dança de salão para a turma" width="1536" height="1024" loading="lazy" decoding="async" />
          <div><h3>CFP - Curso de Formação Profissional em Dança de Salão</h3><p>Conhecimento para dançar. Método para ensinar. Autonomia para continuar aprendendo.</p><Link href="/formacao/cfp" aria-label="Saiba mais sobre o CFP">Saiba mais sobre o serviço</Link></div>
        </article>
        <article>
          <Link className="service-card-hitarea" href="/formacao/cfa" aria-label="Abrir serviço CFA" />
          <img src="/images/servicos/cfa.webp" alt="Assistente orienta a posição das mãos de uma dupla" width="1536" height="1024" loading="lazy" decoding="async" />
          <div><h3>CFA - Curso de Formação de Assistentes</h3><p>Muito além de aprender a dançar: compreenda como as pessoas aprendem e prepare-se para apoiar o professor e acolher os alunos.</p><Link href="/formacao/cfa" aria-label="Saiba mais sobre o CFA">Saiba mais sobre o serviço</Link></div>
        </article>
      </div>
    </section>

    <section className="home-modalities" id="estilos">
      <div className="v4-section-heading"><p>Estilos</p><h2><span>Diferentes estilos, novas formas</span><span>de compreender a dança.</span></h2></div>
      <div className="home-modality-grid">{danceModalities.filter((item) => ["forro", "zouk", "samba-de-gafieira", "tango", "sertanejo", "vaneira", "bachata"].includes(item.slug)).map((item) => <Link href={`/modalidades#${item.slug}`} key={item.name}><h3>{item.name}</h3><p>{item.summary}</p><strong>Conhecer estilo</strong></Link>)}<Link className="home-modality-all" href="/modalidades"><h3>Conheça todos os estilos</h3><p>Explore os 22 estilos trabalhados pela Academia No Ritmo.</p><strong className="home-modality-arrow" aria-hidden="true">→</strong></Link></div>
    </section>

    <section className="home-team" id="equipe" aria-labelledby="home-team-title">
      <div className="home-team-heading"><p>Professores da Academia</p><h2 id="home-team-title">Ensino que transforma movimento em aprendizado.</h2></div>
      <div className="home-team-grid">{[
        { role: "Luciano Silva", initials: "L", image: "/images/equipe/luciano.webp", imageAlt: "Luciano Silva dançando na No Ritmo", subtitle: "Proprietário e professor", bio: "Luciano é proprietário e professor da Academia No Ritmo. À frente da escola, participa da construção de uma metodologia que entende a dança de salão como aprendizagem, desenvolvimento humano e convivência. Seu trabalho valoriza a técnica, a musicalidade, a comunicação e a consciência corporal, sempre buscando compreender as necessidades de cada aluno. Na No Ritmo, acredita que ensinar não é apenas demonstrar movimentos, mas criar caminhos para que cada pessoa aprenda com segurança, autonomia e confiança." },
        { role: "Leonardo Dariva", initials: "L", image: "/images/equipe/leonardo.webp", imageAlt: "Leonardo Dariva conduzindo uma aula de dança na No Ritmo", subtitle: "Professor de dança de salão", bio: "Leonardo Dariva é aluno de dança de salão há 14 anos e atua há quase 4 anos como professor na No Ritmo Academia de Dança. Ao longo dessa trajetória, construiu sua experiência tanto pela vivência contínua como aluno quanto pela prática em sala de aula, acompanhando pessoas com diferentes níveis de experiência e objetivos." },
        { role: "Lilian Paschoal", initials: "L", image: "/images/equipe/lilian.webp", imageAlt: "Lilian Paschoal em uma aula de dança na No Ritmo", subtitle: "Professora e aluna do CFA", bio: "Eu conheci a No Ritmo em 2023, através de um projeto da Prefeitura que chegou até o Pirapó. O que era apenas um desejo de aprender a dançar se transformou em algo muito maior: hoje, minha profissão. Logo recebi o convite para participar do curso de formação de professores e, a princípio, duvidei da minha capacidade. Mas, com o apoio da escola, que proporciona um ensino técnico excelente e um cuidado com cada pessoa, superei minhas travas e medos durante o curso e me formei. Atualmente, como professora e aluna do curso de assistente, sinto que aprender nunca é demais. A dança me transformou e ainda está me transformando. Foi aqui, na No Ritmo, que descobri o ritmo da minha vida." },
        { role: "Paulo Menossi", initials: "P", image: "/images/equipe/paulo.webp", imageAlt: "Paulo Menossi em uma aula de dança na No Ritmo", subtitle: "Formado pelo CFP da No Ritmo", bio: "Aluno da No Ritmo há três anos, Paulo decidiu aprofundar sua trajetória na dança e se preparar para ensinar. Concluiu o Curso de Formação de Professores (CFP) da academia com muito estudo, dedicação e empenho em cada etapa, incluindo o estágio e a prática de aulas assistidas." },
        { role: "Hélen Agonilha", initials: "H", image: "/images/equipe/helen-agonilha.webp", imageAlt: "Hélen Agonilha em uma aula de dança na No Ritmo", subtitle: "Professora", bio: "Iniciei meu contato com a dança de salão em 2016 como aluna. Ao longo da minha jornada, participei de diversos cursos de assistente de dança, atuando diretamente no suporte e desenvolvimento de novos alunos. Em abril de 2018, finalizei o curso de formação de professores, habilitando-me oficialmente a ministrar aulas na área. Após a formação, passei a atuar com aulas particulares, turmas coletivas e montagens coreográficas. Ao longo de seis anos de dedicação contínua, venho contribuindo para o crescimento pessoal dos alunos e o fortalecimento de seus vínculos sociais por meio da dança." },
      ].map((profile, index) => <div className={`home-team-card home-team-card-${index + 1}`} key={profile.role}><div className="home-team-card-image">{profile.image ? <img src={profile.image} alt={profile.imageAlt || profile.role} width="1536" height="1024" loading="lazy" decoding="async" /> : <span className="home-team-card-initials" aria-hidden="true">{profile.initials}</span>}</div><div className="home-team-card-content"><strong>{profile.role}</strong><small>{profile.subtitle}</small>{profile.bio && <p>{profile.bio}</p>}</div></div>)}</div>
    </section>


    <section className="home-testimonials" id="depoimentos" aria-labelledby="home-testimonials-title"><div className="home-testimonial-layout"><div className="home-testimonial-copy"><div className="v4-section-heading"><p>Depoimentos</p><h2 id="home-testimonials-title"><span className="testimonial-title-line">Quem dança</span><span className="testimonial-title-line">também <span className="testimonial-title-quote">“conta”</span></span></h2><span>Relatos de alunos que encontraram na No Ritmo muito mais do que aulas de dança. São experiências de aprendizagem, superação, acolhimento e novas amizades.</span><a className="google-review-button" href="https://www.google.com/maps?cid=11367344094392465475" target="_blank" rel="noopener noreferrer"><FaGoogle aria-hidden="true" />Deixe sua avaliação no Google</a></div></div><TestimonialRotator /></div></section>

    <section className="home-events" id="projetos" aria-labelledby="home-projects-title"><div className="v4-section-heading"><p>Projetos e comunidade</p><h2 id="home-projects-title">A dança continua fora da sala.</h2><Link className="section-action" href="/projetos">Conheça nossos projetos</Link></div><ProjectCards /></section>

    <section className="gallery home-gallery" id="galeria" aria-labelledby="home-gallery-title">
      <div className="gallery-heading-row"><div className="gallery-heading"><p>Galeria</p><h2 id="home-gallery-title">Momentos em movimento.</h2><p>Entre no clima da No Ritmo: sorrisos, novos passos e encontros que dão vontade de viver tudo de novo.</p></div><Link className="button gallery-all-button" href="/galeria">Ver todos os álbuns</Link></div>
      <div className="gallery-grid">{galleryAlbums.slice(0, 3).map((album, index) => <Link className={"gallery-item home-album" + (index === 0 ? " gallery-large" : "")} href={"/galeria/" + album.slug} key={album.slug}><img src={album.photos[0].src} alt={album.photos[0].alt} width="1536" height="1024" loading="lazy" decoding="async" /><div className="home-album-copy"><small>{album.category} · {album.photos.length} fotos</small><h3>{album.title}</h3><span>Ver álbum</span></div></Link>)}</div>
    </section>

    <section className="home-practical home-schedule-section" id="horarios" aria-labelledby="home-schedule-section-title">
      <div className="v4-section-heading"><p>Aulas em turma</p><h2 id="home-schedule-section-title">Programação Semanal de Aulas em Turma</h2><Link className="button schedule-action" href="/contato">Agende sua aula</Link></div>
      <article className="home-schedule" aria-labelledby="home-schedule-section-title">{weeklySchedule.filter((day) => day.sessions.length).map((day) => <div key={day.day}><span className="home-schedule-day-label"><strong>{day.day}</strong><small>{day.teacher}</small></span><span>{day.sessions.map((session) => <span key={`${day.day}-${session.level}`}><b>{session.level}</b>: {session.time}</span>)}</span></div>)}</article>
    </section>

    <section className="home-practical home-contact-section" id="pratico" aria-labelledby="home-contact-section-title">
      <div className="v4-section-heading"><p>Contato</p><h2 id="home-contact-section-title">Fale com a No Ritmo.</h2></div>
      <div className="home-contact-split"><article className="home-contact-channels" aria-labelledby="home-contact-channels-title"><p id="home-contact-channels-title">Canais de contato</p><a className="contact-with-icon" href={siteContact.phoneHref}><Phone aria-hidden="true" />{siteContact.phoneDisplay}</a><a className="contact-with-icon" href={siteContact.whatsappHref} target="_blank" rel="noreferrer"><FaWhatsapp aria-hidden="true" />Conversar pelo WhatsApp</a><a className="contact-with-icon" href={siteContact.emailHref}><AtSign aria-hidden="true" />{siteContact.email}</a><a className="contact-with-icon" href="https://www.instagram.com/noritmoacademiadedanca/" target="_blank" rel="noreferrer"><FaInstagram aria-hidden="true" />Instagram</a><a className="contact-with-icon" href="https://www.facebook.com/NoRitmoAcademiadeDanca?locale=pt_BR" target="_blank" rel="noreferrer"><FaFacebookF aria-hidden="true" />Facebook</a></article><article className="home-contact-card" aria-labelledby="home-contact-map-title"><p id="home-contact-map-title">Onde estamos</p><div className="home-contact-map"><MapEmbed src={siteContact.mapsEmbedHref} title="Mapa da No Ritmo em Apucarana" address={`${siteContact.street}, ${siteContact.streetNumber} - ${siteContact.neighborhood}, ${siteContact.city} - ${siteContact.state}, ${siteContact.postalCode}`} mapsHref={siteContact.mapsHref} /></div><a className="home-map-link" href={siteContact.mapsHref} target="_blank" rel="noreferrer"><MapPin size={18} aria-hidden="true" />Abrir localização no mapa</a></article></div>
    </section>

    <section className="home-faq" id="faq" aria-labelledby="home-faq-title">
      <div className="v4-section-heading faq-heading"><p>Perguntas frequentes</p><div className="faq-heading-row"><div><h2 id="home-faq-title">Antes de começar, tire suas dúvidas.</h2></div><Link className="button faq-all-button" href="/faq">Ver perguntas frequentes</Link></div></div>
      <div className="home-faq-list">{frequentlyAskedQuestions.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div>
    </section>

    <SiteFooter />
    <a className="whatsapp-float" href={siteContact.whatsappGeneralHref} target="_blank" rel="noreferrer" aria-label="Conversar com a No Ritmo pelo WhatsApp"><span className="whatsapp-icon" aria-hidden="true"><FaWhatsapp /></span><span className="whatsapp-label"><strong>Conversar</strong><small>com a equipe</small></span></a>
  </main>;
}
