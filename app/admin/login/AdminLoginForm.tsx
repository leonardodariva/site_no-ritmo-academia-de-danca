"use client";

import { ArrowRight, House } from "lucide-react";
import Link from "next/link";
import { FormEvent, useState } from "react";

const DEMO_EMAIL = "admin@noritmo.local";
const DEMO_PASSWORD = "NoRitmo2026!";

export default function AdminLoginForm({ returnTo }: { returnTo: string }) {
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = String(form.get("email") || "").trim().toLowerCase();
    const password = String(form.get("password") || "").trim();
    if (email !== DEMO_EMAIL || password !== DEMO_PASSWORD) {
      setError("Confira o e-mail e a senha de demonstração.");
      return;
    }
    sessionStorage.setItem("nr-admin-demo", "authenticated");
    window.location.assign(returnTo.startsWith("/admin") ? returnTo : "/admin");
  }

  return <main className="admin-login-page">
    <Link className="admin-login-home" href="/"><House size={17} aria-hidden="true" /> Voltar para o site</Link>
    <section className="admin-login-card" aria-labelledby="admin-login-title">
      <Link className="admin-login-brand" href="/" aria-label="Voltar para a página inicial"><img src="/logo-fundo-claro.png" alt="No Ritmo Academia de Dança" width="190" height="64" /></Link>
      <p className="admin-eyebrow admin-login-title" id="admin-login-title">Painel de controle No Ritmo</p>
      <form className="admin-login-form" onSubmit={handleSubmit} noValidate>
        <label htmlFor="admin-email">E-mail</label><input id="admin-email" name="email" type="email" autoComplete="username" placeholder="Seu e-mail" required />
        <label htmlFor="admin-password">Senha</label><input id="admin-password" name="password" type="password" autoComplete="current-password" placeholder="Digite sua senha" required />
        {error && <p className="admin-login-error" role="alert">{error}</p>}
        <button type="submit">Entrar <ArrowRight size={18} aria-hidden="true" /></button>
      </form>
      <p className="admin-demo-note"><strong>Prévia local:</strong> use <code>{DEMO_EMAIL}</code> e <code>{DEMO_PASSWORD}</code>.</p>
    </section>
  </main>;
}
