import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/app.components/Header";
import Footer from "@/components/app.components/Footer";
import SessionProvider from "@/components/app.components/SessionProvider";

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
      <body className="min-w-full bg-[url('/image/bgWide.jpg')] bg-no-repeat bg-contain bg-top bg-greenUnify-800 flex flex-col min-h-screen">
        <SessionProvider>
          <header className="absolute flex max-h-24 w-full">
            <Header />
          </header>
          <main className="flex-grow pt-40 my-32">{children}</main>
          <footer className="mt-auto">
            <Footer />
          </footer>
        </SessionProvider>
      </body>
    </html>
  );
}
