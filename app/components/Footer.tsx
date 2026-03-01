import { siteContent } from "../data/siteContent";

export function Footer() {
  return (
    <footer className="border-t border-slate-200/80 dark:border-slate-800">
      <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-slate-600 dark:text-slate-400">{siteContent.footer.texto}</div>
    </footer>
  );
}
