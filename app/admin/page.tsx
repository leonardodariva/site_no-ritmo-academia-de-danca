import { ArrowUpRight, Images, LayoutDashboard, LockKeyhole } from "lucide-react";
import Link from "next/link";

const modules = [
  { title: "Galeria", description: "Organize álbuns, fotos e capas da No Ritmo.", href: "/admin/galeria", icon: Images, status: "Próximo módulo" },
  { title: "Conteúdo", description: "Prepare futuras áreas para textos e informações institucionais.", href: "#", icon: LayoutDashboard, status: "Planejado" },
];

export default function AdminDashboardPage() {
  return (
    <div className="admin-page">
      <header className="admin-page-header">
        <div>
          <p className="admin-eyebrow">No Ritmo · Administração</p>
          <h1>Dashboard</h1>
          <p className="admin-intro">Um espaço central para cuidar do conteúdo do site.</p>
        </div>
        <div className="admin-header-status"><LockKeyhole size={16} aria-hidden="true" /> Área restrita</div>
      </header>

      <section className="admin-welcome" aria-labelledby="admin-welcome-title">
        <div>
          <p className="admin-section-label">Estrutura inicial</p>
          <h2 id="admin-welcome-title">O painel está pronto para crescer com a No Ritmo.</h2>
          <p>Começaremos pela galeria e, depois, poderemos adicionar outros módulos sem misturar a administração com o site público.</p>
        </div>
        <div className="admin-welcome-mark" aria-hidden="true"><LayoutDashboard size={42} strokeWidth={1.4} /></div>
      </section>

      <section className="admin-modules" aria-labelledby="admin-modules-title">
        <div className="admin-section-heading"><div><p className="admin-section-label">Módulos</p><h2 id="admin-modules-title">Áreas de trabalho</h2></div><span>2 áreas planejadas</span></div>
        <div className="admin-module-grid">
          {modules.map(({ title, description, href, icon: Icon, status }) => {
            const content = <><div className="admin-module-icon"><Icon size={22} aria-hidden="true" /></div><div><span className="admin-module-status">{status}</span><h3>{title}</h3><p>{description}</p></div>{href !== "#" && <ArrowUpRight className="admin-module-arrow" size={21} aria-hidden="true" />}</>;
            return href === "#" ? (
              <div className="admin-module-card is-disabled" key={title} aria-disabled="true">{content}</div>
            ) : (
              <Link className="admin-module-card" href={href} key={title}>{content}</Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
