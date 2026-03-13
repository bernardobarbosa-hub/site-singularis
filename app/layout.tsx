import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  // Note: Google Fonts loaded via <link> in RootLayout to avoid CSS @import order issues with Tailwind v4
  title: "Singularis Travel — Pure. Travel. Emotion.",
  description:
    "Agência de viagens boutique brasileira com mais de 30 anos de experiência. Viagens educacionais, lazer de luxo, MICE e corporate. Atendimento 100% personalizado.",
  keywords: [
    "agência de viagens",
    "viagens de luxo",
    "intercâmbio",
    "viagens educacionais",
    "MICE",
    "viagens corporativas",
    "turismo boutique",
    "Singularis Travel",
  ],
  authors: [{ name: "Singularis Travel" }],
  openGraph: {
    title: "Singularis Travel — Pure. Travel. Emotion.",
    description:
      "Mais de 30 anos criando experiências de viagem únicas e personalizadas.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
