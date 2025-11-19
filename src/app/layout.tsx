import type { Metadata } from "next";
// Fuente estándar de Next.js (referenciada en globals.css)
// import { GeistSans } from "geist/font/sans";

// Fuentes de Google para el tema "Coquette"
import { Pinyon_Script, Playfair_Display } from "next/font/google";

import "./globals.css";

// Configuración de Pinyon Script (para "Mis", "Naomy")
const pinyonScript = Pinyon_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pinyon", // Coincide con @theme en globals.css
});

// Configuración de Playfair Display (para "XV")
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair", // Coincide con @theme en globals.css
  weight: ["400", "700"], // Usaremos 700 para que se vea bien
});

export const metadata: Metadata = {
  title: "Mis XV Naomy",
  description: "Invitación para mis XV años",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      {/*
        Inyectamos todas las variables de fuentes en el body.
        Tailwind (via globals.css) las recogerá desde aquí.
      */}
      <body
        className={`${pinyonScript.variable} ${playfair.variable}`}
      >
        {children}
      </body>
    </html>
  );
}