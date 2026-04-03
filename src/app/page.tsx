import { PeluangBisnis } from "@/components/sections/PeluangBisnis"
import { AnalisaKeuntungan } from "@/components/sections/AnalisaKeuntungan"
import { KenapaHidrolux } from "@/components/sections/KenapaHidrolux"
import { DaftarProduk } from "@/components/sections/DaftarProduk"
import { FaqSection } from "@/components/sections/FaqSection"
import { HeroCarousel } from "@/components/carousel/HeroCarousel"

export default function Home() {
  return (
    <main className="font-sans pt-4">
      <HeroCarousel />

      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden py-3">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="bg-brand-light-bg rounded-[32px] px-8 py-4 md:px-14 md:py-6 relative overflow-hidden">

            {/* Decorative rings */}
            <div className="absolute right-[-15%] md:right-[-4%] top-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 rounded-full pointer-events-none border-28 border-brand-light/30"></div>
            <div className="absolute right-[-2%] md:right-[8%] top-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 rounded-full pointer-events-none border-16 border-brand-light/20"></div>

            {/* Top row: headline + stats */}
            <div className="flex flex-col md:flex-row items-start justify-between gap-6 mb-8">
              {/* Left: headline */}
              <div className="relative z-20 flex-1">
                <div className="inline-flex items-center gap-2 bg-white/70 text-brand-blue font-bold text-[11px] tracking-widest uppercase px-3 py-1.5 rounded-full border border-brand-light mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue block"></span>
                  HIDRO — ONE STOP SOLUTION
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight mb-3">
                  Pusat Mesin<br />
                  Depot Air Minum<br />
                  <span className="text-brand-blue">Terpercaya &amp; Bergaransi.</span>
                </h1>
                <p className="text-slate-500 text-sm md:text-base max-w-md leading-relaxed">
                  Dari depot isi ulang hingga water treatment plant — kami sediakan mesin berkualitas, bergaransi resmi, dan siap rakit di seluruh Indonesia.
                </p>
              </div>

              {/* Right: stat cards */}
              <div className="relative z-20 shrink-0 grid grid-cols-2 gap-3 w-full md:w-60">
                {[
                  { value: "400+", label: "Unit Terpasang", color: "#3483C2" },
                  { value: "12+", label: "Tahun Pengalaman", color: "#3483C2" },
                  { value: "100%", label: "Produk Bergaransi", color: "#C24B53" },
                  { value: "34 Prov", label: "Jangkauan Pengiriman", color: "#3483C2" },
                ].map(({ value, label, color }) => (
                  <div key={label} className="bg-white rounded-2xl px-4 py-3 flex flex-col gap-0.5 border border-gray-100 shadow-sm">
                    <span className="text-xl font-extrabold leading-none" style={{ color }}>{value}</span>
                    <span className="text-[11px] text-slate-400 leading-tight">{label}</span>
                  </div>
                ))}
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
