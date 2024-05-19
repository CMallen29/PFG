import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/app.components/Header";
import Footer from "@/components/app.components/Footer";

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
      <body className="min-w-full bg-[url('/image/bgWide.jpg')] bg-no-repeat bg-contain bg-top bg-green-800 flex flex-col min-h-screen">
        <header className="absolute flex max-h-24 w-full">
          <Header />
        </header>
        <main className="flex-grow pt-40">{children}</main>
        <footer className="mt-auto">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
