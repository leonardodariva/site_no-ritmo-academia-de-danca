"use client";

import Link from "next/link";
import { useState } from "react";
import { House } from "lucide-react";

export default function TeacherAreaPage() {
  const [error, setError] = useState("");
  const showInvalidCredentials = () => setError("As credenciais informadas estão incorretas. Tente novamente.");

  return <main className="student-area-page teacher-area-page">
    <section className="student-area-login" aria-labelledby="teacher-area-title">
      <img className="student-login-logo" src="/logo-fundo-claro.webp" alt="No Ritmo Academia de Dança" width="190" height="64" fetchPriority="high" decoding="async" />
      <h1 id="teacher-area-title">Área do professor</h1>
      <p className="student-area-subtitle">Digite suas credenciais para acessar sua conta</p>
      <form noValidate onSubmit={(event) => { event.preventDefault(); showInvalidCredentials(); }}>
        <label htmlFor="teacher-email">E-mail</label>
        <input id="teacher-email" type="email" autoComplete="username" placeholder="Seu e-mail" required />
        <div className="student-password-label">
          <label htmlFor="teacher-password">Senha</label>
          <button className="student-password-help" type="button" onClick={showInvalidCredentials}>Esqueceu a senha?</button>
        </div>
        <input id="teacher-password" type="password" autoComplete="current-password" placeholder="Digite sua senha" required />
        {error && <p className="teacher-login-error" role="alert">{error}</p>}
        <button type="submit">Entrar</button>
      </form>
    </section>
    <Link className="student-area-home" href="/"><House size={18} aria-hidden="true" />Voltar para a página inicial</Link>
  </main>;
}
