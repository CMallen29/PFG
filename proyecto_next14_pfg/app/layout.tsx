import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/app.components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Unify",
  description: "Encuentra tu Pokémon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-w-full bg-teal-950">
        <header className="absolute flex  max-h-24 w-full">
          <Header />
        </header>
        <main className="pt-40">{children}</main>
        <footer className="h-20 bg-slate-500">
          <h2>Pie de página</h2>
        </footer>
      </body>
    </html>
  );
}
