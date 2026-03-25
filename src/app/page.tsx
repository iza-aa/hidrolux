import { PeluangBisnis } from "@/components/sections/PeluangBisnis"
import { AnalisaKeuntungan } from "@/components/sections/AnalisaKeuntungan"
import { KenapaHidrolux } from "@/components/sections/KenapaHidrolux"
import { DaftarProduk } from "@/components/sections/DaftarProduk"
import { FaqSection } from "@/components/sections/FaqSection"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"

export default function Home() {
  return (
    <main className="font-sans">
      <section className="relative py-24 md:py-32 bg-white overflow-hidden text-center">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-800 shadow-sm mb-8">
            One Stop Solution of Water Purifier
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl mb-6">
            Solusi Terbaik Mesin Depot Air Minum Anda
          </h1>
          <p className="text-xl leading-8 text-slate-600 max-w-2xl mx-auto mb-10">
            Mulai bisnis menjanjikan dengan mesin Hidrolux. Kualitas standar internasional, tahan lama, dan lolos uji DEPKES RI.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="rounded-full px-8 h-14 text-base font-semibold">
              <Phone className="mr-2 h-5 w-5" /> Konsultasi Gratis
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8 h-14 text-base font-semibold">
              Lihat Produk <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <div id="peluang">
        <PeluangBisnis />
      </div>
      
      <AnalisaKeuntungan />
      
      <div id="kenapa-kami">
        <KenapaHidrolux />
      </div>

      <div id="produk">
        <DaftarProduk />
      </div>

      <FaqSection />
    </main>
  )
}
