"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { House } from "lucide-react";

export default function StudentAreaPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fieldError, setFieldError] = useState<"email" | "password" | "">("");
  const showInvalidCredentials = () => setIsModalOpen(true);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("student-email") ?? "").trim();
    const password = String(formData.get("student-password") ?? "");
    if (!email) { setFieldError("email"); return; }
    if (!password) { setFieldError("password"); return; }
    setFieldError("");
    showInvalidCredentials();
  };

  return <main className="student-area-page teacher-area-page">
    <section className="student-area-login" aria-labelledby="student-area-title">
      <img className="student-login-logo" src="/logo-fundo-claro.webp" alt="No Ritmo Academia de Dança" width="190" height="64" fetchPriority="high" decoding="async" />
      <h1 id="student-area-title">Área do aluno</h1>
      <div className="teacher-area-links" aria-label="Recursos para alunos">
        <div><strong>Método No Ritmo</strong><span>Orientações e princípios para aproveitar cada aula.</span></div>
        <div><strong>Cronogramas de aula</strong><span>Organização das turmas, horários e encontros.</span></div>
      </div>
      <form noValidate onSubmit={handleSubmit}>
        <label className={fieldError === "email" ? "teacher-field-label-error" : undefined} htmlFor="student-email">E-mail</label>
        <input className={fieldError === "email" ? "teacher-field-input-error" : undefined} aria-invalid={fieldError === "email"} id="student-email" name="student-email" type="email" autoComplete="username" placeholder="Seu e-mail" required onChange={() => setFieldError("")} />
        {fieldError === "email" && <span className="teacher-inline-error" role="alert">Digite seu e-mail no campo acima.</span>}
        <div className="student-password-label">
          <label className={fieldError === "password" ? "teacher-field-label-error" : undefined} htmlFor="student-password">Senha</label>
        </div>
        <input className={fieldError === "password" ? "teacher-field-input-error" : undefined} aria-invalid={fieldError === "password"} id="student-password" name="student-password" type="password" autoComplete="current-password" placeholder="Digite sua senha" required onChange={() => setFieldError("")} />
        {fieldError === "password" && <span className="teacher-inline-error" role="alert">Digite sua senha no campo acima.</span>}
        <button type="submit">Entrar</button>
      </form>
    </section>
    <Link className="student-area-home" href="/"><House size={18} aria-hidden="true" />Voltar para a página inicial</Link>
    {isModalOpen && <div className="teacher-login-modal-backdrop" role="presentation" onClick={() => setIsModalOpen(false)}>
      <section className="teacher-login-modal" role="alertdialog" aria-modal="true" aria-labelledby="student-login-modal-title" onClick={(event) => event.stopPropagation()}>
        <p className="teacher-login-modal-kicker">Área do aluno</p>
        <h2 id="student-login-modal-title">Não foi possível acessar</h2>
        <p>Verifique suas credenciais ou entre em contato com o administrador para corrigir as informações de acesso.</p>
        <button type="button" onClick={() => setIsModalOpen(false)}>OK</button>
      </section>
    </div>}
  </main>;
}
