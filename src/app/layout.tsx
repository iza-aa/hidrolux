import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Hidro Water Treatment System | Mesin Depot Air Minum Terpercaya",
  description: "Hidro menyediakan mesin depot air minum isi ulang, RO, AMDK, dan WTP berstandar internasional. Peluang usaha bisnis air minum modal kecil profit besar.",
  keywords: [
    // Keywords Utama & Lama
    "mesin depot air minum", "depot air minum isi ulang", "mesin RO reverse osmosis", 
    "mesin AMDK", "water treatment plant", "mesin water purifier", "hidro water treatment", 
    "jual mesin depot air", "harga mesin depot air minum", "mesin WTP", "mesin hexagonal water",
    // Keywords Baru dari Tim Anda
    "peluang usaha", "bisnis air minum", "profit besar", "modal kecil", "untung besar", 
    "tidak musiman", "pelayanan memuaskan", "seluruh indonesia", "depot isi ulang", "isul", 
    "reverse osmosis", "RO", "water treatment plan", "WTP", "air minum dalam kemasan", "AMDK", 
    "ice cube", "ice tube", "mineral", "alkali", "heksagonal", "pembunuh bakteri", "higienis", 
    "kesehatan", "kebutuhan dasar", "bahan baku gratis", "profesional", "memuaskan", "terjangkau"
  ],
  authors: [{ name: "Hidro Water Treatment System" }],
  creator: "Hidro Water Treatment System",
  publisher: "Hidro Water Treatment System",
  metadataBase: new URL("https://hidro.co.id"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Hidro Water Treatment System | Mesin Depot Air Minum Terpercaya",
    description: "Peluang usaha bisnis air minum dengan profit besar. Solusi mesin depot air minum, RO, AMDK, dan WTP berstandar internasional.",
    url: "https://hidro.co.id",
    siteName: "Hidro Water Treatment System",
    images: [
      {
        url: "/icon.jpeg",
        width: 800,
        height: 600,
        alt: "Hidro Water Treatment System - Mesin Depot Air Minum",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hidro Water Treatment System | Mesin Depot Air Minum Terpercaya",
    description: "Peluang usaha bisnis air minum modal kecil untung besar. Solusi mesin depot air minum, RO, AMDK, dan WTP berstandar internasional.",
    images: ["/logo.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Hidro Water Treatment System",
              description: "Produsen dan distributor mesin depot air minum, RO, AMDK, dan WTP berstandar internasional. Melayani seluruh Indonesia.",
              url: "https://hidro.co.id",
              telephone: "+628985919009",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+628985919009",
                contactType: "customer service",
                areaServed: "ID",
                availableLanguage: "Indonesian",
              },
              image: "https://hidro.co.id/logo.jpeg",
              logo: "https://hidro.co.id/logo.jpeg",
              sameAs: ["https://wa.me/628985919009"],
            }),
          }}
        />
        <Navbar />
        <div className="grow pt-20">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}