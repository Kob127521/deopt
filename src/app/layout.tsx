import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aurélien Photographe — Photographe de mariage fine art",
  description:
    "Photographe de mariage haut de gamme en France et à l'international. Style fine art, éditorial et intemporel. Reportages, elopements et séances engagement.",
  openGraph: {
    title: "Aurélien Photographe — Photographe de mariage fine art",
    description:
      "Photographe de mariage haut de gamme en France et à l'international. Style fine art, éditorial et intemporel.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
