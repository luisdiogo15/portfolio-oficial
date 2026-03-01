import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portefólio Pessoal",
  description: "Site de portefólio pessoal em português de Portugal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT">
      <body className="antialiased">{children}</body>
    </html>
  );
}
