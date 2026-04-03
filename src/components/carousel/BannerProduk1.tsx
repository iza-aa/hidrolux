import Image from "next/image"
import { BadgeCheck, Zap, Shield } from "lucide-react"

export function BannerProduk1() {
  return (
    <div
      className="w-full min-h-52 md:h-64 rounded-3xl overflow-hidden relative flex items-center"
      style={{ backgroundColor: "#EFF7F9" }}
    >
      {/* Decorative circles */}
      <div className="absolute -right-10 -top-10 w-64 h-64 rounded-full opacity-30" style={{ backgroundColor: "#AFD8DD" }} />
      <div className="absolute -left-6 -bottom-10 w-48 h-48 rounded-full opacity-20" style={{ backgroundColor: "#3483C2" }} />

      {/* Left: text content */}
      <div className="relative z-10 flex-1 px-6 md:px-14 py-6">
        <div
          className="inline-block text-[10px] font-bold tracking-widest uppercase mb-3 px-3 py-1 rounded-full"
          style={{ backgroundColor: "#3483C2", color: "white" }}
        >
          PRODUK UNGGULAN
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold leading-tight mb-2" style={{ color: "#0D2035" }}>
          DEPOT AIR MINUM<br />
          <span style={{ color: "#3483C2" }}>HIDRO ZERO</span>
        </h2>
        <p className="text-slate-500 text-xs md:text-sm mb-4 max-w-xs leading-relaxed">
          Sistem purifikasi all-in-one berteknologi UV stainless 304, lolos uji DEPKES RI.
        </p>
        <div className="flex flex-wrap gap-2">
          {[
            { icon: <BadgeCheck className="w-3 h-3" />, label: "Sertifikat DEPKES" },
            { icon: <Shield className="w-3 h-3" />, label: "Garansi Resmi" },
            { icon: <Zap className="w-3 h-3" />, label: "Siap Operasi" },
          ].map(({ icon, label }) => (
            <span
              key={label}
              className="flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-full"
              style={{ backgroundColor: "rgba(52,131,194,0.12)", color: "#3483C2" }}
            >
              {icon}{label}
            </span>
          ))}
        </div>
      </div>

      {/* Right: product image */}
      <div className="relative z-10 hidden md:flex items-end justify-center h-full pr-8 pt-4">
        <Image
          src="/hidro5.jpeg"
          alt="Hidro Zero Depot"
          width={220}
          height={260}
          className="object-contain h-full max-h-56 w-auto drop-shadow-xl"
          style={{ filter: "drop-shadow(0 8px 24px rgba(52,131,194,0.25))" }}
        />
      </div>
    </div>
  )
}
