import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// Mengganti font bawaan (Geist) menjadi Plus Jakarta Sans yang sangat elegan, geometris, dan profesional
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Hidro - One Stop Solution of Water Purifier",
  description: "Solusi terbaik mesin depot air minum. Mesin berstandar internasional, awet, dan lolos uji kelayakan DEPKES RI.",
  keywords: ["depot air minum", "mesin RO", "pabrik air minum", "water purifier", "hidro", "mesin AMDK", "peluang bisnis air"],
  icons: {
    icon: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${jakarta.className} antialiased flex flex-col min-h-screen text-slate-800`}>
        <Navbar />
        <div className="grow pt-20">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
