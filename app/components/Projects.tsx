import { siteContent } from "../data/siteContent";

export function Projects() {
  const { projetos } = siteContent;

  return (
    <section id="projetos" className="fade-in-section mx-auto max-w-6xl px-6 py-20" aria-labelledby="projetos-title">
      <h2 id="projetos-title" className="text-2xl font-bold text-slate-900 md:text-3xl dark:text-slate-100">
        {projetos.titulo}
      </h2>
      <div className="mt-7 grid gap-5 md:grid-cols-3">
        {projetos.lista.map((projeto) => (
          <article
            key={projeto.titulo}
            className="rounded-xl border border-slate-200 bg-white/90 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-900/80"
          >
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{projeto.titulo}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">{projeto.descricao}</p>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
              <span className="font-semibold text-slate-800 dark:text-slate-200">Tecnologias:</span> {projeto.stack.join(", ")}
            </p>
            <a
              className="mt-5 inline-block text-sm font-semibold text-sky-700 transition hover:text-sky-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:text-sky-400 dark:hover:text-sky-300"
              href={projeto.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Abrir o repositório do projeto ${projeto.titulo} no GitHub`}
            >
              Ver no GitHub
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
