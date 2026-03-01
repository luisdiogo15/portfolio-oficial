import { siteContent } from "../data/siteContent";
import { ThemeToggle } from "./ThemeToggle";

export function NavBar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-md dark:border-slate-800/70 dark:bg-slate-950/80">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4" aria-label="Navegação principal">
        <a
          href="#home"
          className="text-sm font-semibold tracking-wide text-slate-900 transition hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:text-slate-100 dark:hover:text-slate-300"
        >
          Luís Sousa
        </a>

        <div className="flex items-center gap-3">
          <ul className="flex flex-wrap items-center justify-end gap-4 text-sm">
            {siteContent.nav.map((item) => (
              <li key={item.href}>
                <a
                  className="text-slate-700 transition hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:text-slate-300 dark:hover:text-white"
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
