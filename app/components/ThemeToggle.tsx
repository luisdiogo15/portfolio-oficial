"use client";

import { useEffect, useState } from "react";

type Theme = "claro" | "escuro";

const storageKey = "tema-portefolio";

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "escuro");
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("claro");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(storageKey) as Theme | null;

    if (saved === "escuro" || saved === "claro") {
      setTheme(saved);
      applyTheme(saved);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const preferredTheme: Theme = prefersDark ? "escuro" : "claro";
      setTheme(preferredTheme);
      applyTheme(preferredTheme);
    }

    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "escuro" ? "claro" : "escuro";
    setTheme(nextTheme);
    window.localStorage.setItem(storageKey, nextTheme);
    applyTheme(nextTheme);
  };

  if (!mounted) {
    return (
      <button
        type="button"
        className="h-9 w-9 rounded-full border border-slate-300/80 bg-white/80"
        aria-label="Alternar tema"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="h-9 w-9 rounded-full border border-slate-300 bg-white/90 text-lg leading-none text-slate-800 transition hover:border-slate-500 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-slate-500"
      aria-label="Alternar entre tema claro e escuro"
      aria-pressed={theme === "escuro"}
      title={theme === "escuro" ? "Ativar tema claro" : "Ativar tema escuro"}
    >
      {theme === "escuro" ? "☀" : "☾"}
    </button>
  );
}
