import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hidrolux - One Stop Solution of Water Purifier",
  description: "Solusi terbaik mesin depot air minum. Mesin berstandar internasional, awet, dan lolos uji kelayakan DEPKES RI.",
  keywords: ["depot air minum", "mesin RO", "pabrik air minum", "water purifier", "hidrolux", "mesin AMDK", "peluang bisnis air"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        <Navbar />
        <div className="flex-grow pt-[80px]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
