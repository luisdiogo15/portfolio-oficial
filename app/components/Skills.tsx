import { siteContent } from "../data/siteContent";

export function Skills() {
  const { skills } = siteContent;

  return (
    <section id="skills" className="fade-in-section mx-auto max-w-6xl px-6 py-20" aria-labelledby="skills-title">
      <h2 id="skills-title" className="text-2xl font-bold text-slate-900 md:text-3xl dark:text-slate-100">
        {skills.titulo}
      </h2>
      <ul className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4" aria-label="Lista de competências">
        {skills.lista.map((skill) => (
          <li
            key={skill}
            className="rounded-lg border border-slate-200 bg-white/90 px-4 py-3 text-sm font-medium text-slate-700 shadow-sm transition hover:-translate-y-0.5 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
