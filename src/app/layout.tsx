import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import './main.css';
import { ThemeProvider } from "./context/themeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "InvestSmart - Consultoria Financeira",
  description: "Maximize seus investimentos com a InvestSmart Consultoria Financeira. Nossa equipe de especialistas oferece orientação personalizada para ajudá-lo a alcançar seus objetivos financeiros. Entre em contato para uma consulta gratuita!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <html lang="pt-BR">
          <body className={inter.className}>{children}</body>
      </html>
    </ThemeProvider>
  );
}
