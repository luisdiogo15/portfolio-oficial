import { siteContent } from "../data/siteContent";

export function About() {
  const { sobre } = siteContent;

  return (
    <section id="sobre" className="fade-in-section mx-auto max-w-6xl px-6 py-20" aria-labelledby="sobre-title">
      <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-8 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
        <h2 id="sobre-title" className="text-2xl font-bold text-slate-900 md:text-3xl dark:text-slate-100">
          {sobre.titulo}
        </h2>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-700 dark:text-slate-300">{sobre.conteudo}</p>
      </div>
    </section>
  );
}
