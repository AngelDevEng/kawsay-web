import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KAWSAY - Superfood Snacks | Energía Andina para tu Ritmo Chileno",
  description: "KAWSAY es un snack proteico natural elaborado con ingredientes andinos. Descubre nuestra energía auténtica con avena integral, proteína whey, panela y cacao 70%.",
  keywords: "snack proteico, superfood, cacao, energía natural, snack saludable, KAWSAY",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
