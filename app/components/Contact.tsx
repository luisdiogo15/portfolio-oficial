"use client";

import { FormEvent, useState } from "react";
import { API_BASE_URL } from "../data/env";
import { siteContent } from "../data/siteContent";

type FormState = {
  nome: string;
  email: string;
  mensagem: string;
};

type FormErrors = {
  nome?: string;
  email?: string;
  mensagem?: string;
};

const initialState: FormState = {
  nome: "",
  email: "",
  mensagem: "",
};

export function Contact() {
  const [formData, setFormData] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [success, setSuccess] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const nextErrors: FormErrors = {};

    if (!formData.nome.trim()) {
      nextErrors.nome = "O nome é obrigatório.";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "O email é obrigatório.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = "Introduz um email válido.";
    }

    if (!formData.mensagem.trim()) {
      nextErrors.mensagem = "A mensagem é obrigatória.";
    }

    return nextErrors;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSuccess("");
    setSubmitError("");

    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch(`${API_BASE_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: formData.nome.trim(),
          email: formData.email.trim(),
          mensagem: formData.mensagem.trim(),
        }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => ({}))) as { detail?: string };
        throw new Error(data.detail || "Falha ao enviar a mensagem.");
      }

      setSuccess("Mensagem enviada com sucesso.");
      setFormData(initialState);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Erro inesperado ao enviar.";
      setSubmitError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="fade-in-section mx-auto max-w-6xl px-6 py-20" aria-labelledby="contacto-title">
      <div className="rounded-2xl border border-slate-200/80 bg-white/85 p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900/80">
        <h2 id="contacto-title" className="text-2xl font-bold text-slate-900 md:text-3xl dark:text-slate-100">
          {siteContent.contacto.titulo}
        </h2>
        <p className="mt-4 max-w-2xl text-base text-slate-700 dark:text-slate-300">{siteContent.contacto.descricao}</p>

        <form className="mt-8 max-w-2xl space-y-4" noValidate onSubmit={handleSubmit}>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-800 dark:text-slate-200" htmlFor="nome">
              Nome
            </label>
            <input
              id="nome"
              name="nome"
              type="text"
              value={formData.nome}
              onChange={(event) => setFormData({ ...formData, nome: event.target.value })}
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
              aria-invalid={Boolean(errors.nome)}
              aria-describedby={errors.nome ? "erro-nome" : undefined}
              disabled={isSubmitting}
            />
            {errors.nome ? (
              <p id="erro-nome" className="mt-2 text-sm text-red-700 dark:text-red-400">
                {errors.nome}
              </p>
            ) : null}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-800 dark:text-slate-200" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={(event) => setFormData({ ...formData, email: event.target.value })}
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "erro-email" : undefined}
              disabled={isSubmitting}
            />
            {errors.email ? (
              <p id="erro-email" className="mt-2 text-sm text-red-700 dark:text-red-400">
                {errors.email}
              </p>
            ) : null}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-800 dark:text-slate-200" htmlFor="mensagem">
              Mensagem
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              value={formData.mensagem}
              onChange={(event) => setFormData({ ...formData, mensagem: event.target.value })}
              rows={5}
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
              aria-invalid={Boolean(errors.mensagem)}
              aria-describedby={errors.mensagem ? "erro-mensagem" : undefined}
              disabled={isSubmitting}
            />
            {errors.mensagem ? (
              <p id="erro-mensagem" className="mt-2 text-sm text-red-700 dark:text-red-400">
                {errors.mensagem}
              </p>
            ) : null}
          </div>

          <button
            type="submit"
            className="rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-sky-500 dark:text-slate-950 dark:hover:bg-sky-400"
            disabled={isSubmitting}
          >
            {isSubmitting ? "A enviar..." : "Enviar mensagem"}
          </button>

          {success ? (
            <p className="text-sm font-medium text-green-700 dark:text-green-400" role="status" aria-live="polite">
              {success}
            </p>
          ) : null}

          {submitError ? (
            <p className="text-sm font-medium text-red-700 dark:text-red-400" role="alert" aria-live="assertive">
              {submitError}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
