import { PeluangBisnis } from "@/components/sections/PeluangBisnis"
import { AnalisaKeuntungan } from "@/components/sections/AnalisaKeuntungan"
import { KenapaHidrolux } from "@/components/sections/KenapaHidrolux"
import { DaftarProduk } from "@/components/sections/DaftarProduk"
import { FaqSection } from "@/components/sections/FaqSection"
import { Button } from "@/components/ui/button"
import { Phone, Droplet } from "lucide-react"

export default function Home() {
  return (
    <main className="font-sans pt-12">
      {/* Hero Section Redesigned */}
      <section className="relative bg-white overflow-hidden py-16">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="bg-[#f0f8fd] rounded-[40px] p-8 md:p-16 lg:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between min-h-[500px]">
            
            {/* Background vector rings mimicking Borjomi template */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 md:w-[600px] md:h-[600px] border-[40px] border-white/40 rounded-full blur-[2px]"></div>

            {/* Left Content */}
            <div className="md:w-1/2 relative z-20 space-y-6">
              <div className="text-blue-500 font-bold text-xs tracking-widest uppercase">
                HIDROLUX TEPAT UNTUK BISNIS ANDA
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-800 leading-tight tracking-tight">
                Pusat Alat <br/>
                Mesin Depot Air <br/>
                Kualitas Medis.
              </h1>
              <p className="text-slate-500 text-sm md:text-base max-w-md leading-relaxed flex items-center gap-2">
                <span className="w-1.5 h-6 bg-blue-500 rounded-full block"></span>
                Sistem filtrasi mutakhir, awet, lulus uji DEPKES RI, siap rakit seluruh Indonesia.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-6 pt-6">
                <div className="text-blue-600 font-extrabold text-3xl">
                  {/* Harga dummy seperti template */}
                  Rp 15<span className="text-lg">Jt-an</span>
                </div>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 h-auto text-sm font-bold shadow-lg shadow-blue-600/30 flex items-center gap-2">
                  <Phone className="w-4 h-4" /> Hubungi Sales
                </Button>
              </div>
            </div>

            {/* Right Graphic */}
            <div className="md:w-1/2 relative z-20 flex justify-center mt-12 md:mt-0">
               <div className="relative">
                  {/* Huge "O" shape mask behind product */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full shadow-2xl z-0"></div>
                  
                  {/* Placeholder for the main machine image */}
                  <div className="relative z-10 w-48 h-[350px] bg-gradient-to-b from-blue-200 to-blue-400 rounded-full flex items-center justify-center shadow-xl border-4 border-white">
                      <Droplet className="w-20 h-20 text-white drop-shadow-md" />
                      <div className="absolute bottom-10 bg-white/90 backdrop-blur text-blue-900 text-[10px] font-bold px-4 py-1 rounded-full">
                        Premium Quality
                      </div>
                  </div>
               </div>
            </div>
            
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
