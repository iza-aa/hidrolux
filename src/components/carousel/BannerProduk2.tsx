import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function BannerProduk2() {
  return (
    <div
      className="w-full h-52 md:h-64 rounded-3xl overflow-hidden relative flex items-center"
      style={{ background: "linear-gradient(135deg, #0D2035 0%, #1a3a5c 60%, #3483C2 100%)" }}
    >
      {/* Decorative */}
      <div className="absolute -right-8 -top-8 w-56 h-56 rounded-full opacity-10" style={{ backgroundColor: "#AFD8DD" }} />
      <div className="absolute left-[35%] -bottom-10 w-40 h-40 rounded-full opacity-10" style={{ backgroundColor: "#F6D2E2" }} />

      {/* Header stripe */}
      <div
        className="absolute top-0 left-0 right-0 h-10 flex items-center px-8 md:px-14 gap-3"
        style={{ backgroundColor: "rgba(52,131,194,0.35)", borderBottom: "1px solid rgba(175,216,221,0.2)" }}
      >
        <span className="text-[11px] font-bold tracking-widest uppercase text-white/80">HIDRO</span>
        <div className="h-4 w-px bg-white/20" />
        <span className="text-[11px] font-semibold text-white/60">WATER TREATMENT SYSTEM</span>
        <div className="ml-auto flex items-center gap-1 text-[11px] font-bold" style={{ color: "#AFD8DD" }}>
          LIHAT SEMUA PRODUK <ArrowRight className="w-3 h-3" />
        </div>
      </div>

      {/* Left: text */}
      <div className="relative z-10 flex-1 px-8 md:px-14 pt-10 pb-6">
        <h2 className="text-xl md:text-2xl font-extrabold text-white leading-tight mb-1">
          SOLUSI LENGKAP<br />
          <span style={{ color: "#AFD8DD" }}>BISNIS AIR MINUM</span>
        </h2>
        <p className="text-white/60 text-xs md:text-sm max-w-65 leading-relaxed mb-4">
          Dari depot isi ulang hingga water treatment plant skala industri.
        </p>
        <div className="flex gap-4 text-center">
          {[["400+", "Unit Terpasang"], ["12+", "Tahun Pengalaman"], ["100%", "Bergaransi"]].map(([val, label]) => (
            <div key={label}>
              <div className="text-base md:text-lg font-extrabold" style={{ color: "#AFD8DD" }}>{val}</div>
              <div className="text-[10px] text-white/50 leading-tight">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: product lineup image */}
      <div className="relative z-10 hidden md:flex items-end justify-end h-full pr-6 pb-0">
        <Image
          src="/hidro4.jpeg"
          alt="Lineup Produk Hidro"
          width={480}
          height={260}
          className="object-contain h-full max-h-56 w-auto"
          style={{ filter: "drop-shadow(0 4px 20px rgba(0,0,0,0.4))" }}
        />
      </div>
    </div>
  )
}
