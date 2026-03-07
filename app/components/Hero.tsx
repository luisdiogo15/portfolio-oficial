import { siteContent } from "../data/siteContent";

export function Hero() {
  const { hero } = siteContent;

  return (
    <section
      id="home"
      className="fade-in-section mx-auto max-w-6xl px-6 pb-24 pt-32"
      aria-labelledby="home-title"
    >
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-sky-700 dark:text-sky-400">
        {hero.saudacao}
      </p>

      <h1
        id="home-title"
        className="max-w-3xl text-4xl font-bold leading-tight text-slate-900 md:text-6xl dark:text-slate-100"
      >
        {hero.titulo}
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-700 dark:text-slate-300">
        {hero.descricao}
      </p>

      <div className="mt-10 flex flex-wrap gap-3">
        <a
          className="rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:bg-sky-500 dark:text-slate-950 dark:hover:bg-sky-400"
          href={hero.ctaPrincipal.href}
        >
          {hero.ctaPrincipal.label}
        </a>

        <a
          className="rounded-lg border border-slate-300 bg-white/90 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:border-slate-500"
          href={hero.ctaSecundario.href}
        >
          {hero.ctaSecundario.label}
        </a>
      </div>

      {/* Social links */}
      <div className="mt-6 flex gap-6 text-sm">
        <a
          href="https://github.com/luisdiogo15"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-700 hover:underline dark:text-sky-400"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/lu%C3%ADs-sousa-a10a863b5/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-700 hover:underline dark:text-sky-400"
        >
          LinkedIn
        </a>

        <a
          href="mailto:skytek634@gmail.com"
          className="text-sky-700 hover:underline dark:text-sky-400"
        >
          Email
        </a>
      </div>
    </section>
  );
}