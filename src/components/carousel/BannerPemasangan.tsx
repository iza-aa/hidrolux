import Image from "next/image"
import { MapPin, Truck, Wrench } from "lucide-react"

export function BannerPemasangan() {
  return (
    <div className="w-full min-h-44 md:h-64 rounded-3xl overflow-hidden relative flex items-center" style={{ backgroundColor: "#EFF7F9" }}>
      {/* Decorative */}
      <div className="absolute -right-5 -top-5 w-40 h-40 rounded-full opacity-20" style={{ backgroundColor: "#3483C2" }}></div>

      {/* Left content */}
      <div className="relative z-10 px-6 md:px-14 py-4 md:py-6 flex-1 min-w-0">
        <div className="inline-flex items-center gap-2 mb-2 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase" style={{ backgroundColor: "#D8D7DC", color: "#C24B53" }}>
          JASA PEMASANGAN
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold leading-tight mb-2" style={{ color: "#0D2035" }}>
          Pengiriman &amp; Instalasi<br/>
          <span style={{ color: "#3483C2" }}>Seluruh Indonesia</span>
        </h2>
        <p className="text-xs text-slate-500 mb-3 max-w-xs leading-relaxed">
          Dari Sabang sampai Merauke — tim teknisi profesional kami siap hadir langsung ke lokasi Anda.
        </p>
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "#3483C2" }}>
              <Truck className="w-4 h-4 text-white" />
            </div>
            <span className="text-xs font-semibold text-slate-700">Pengiriman Aman</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "#C24B53" }}>
              <Wrench className="w-4 h-4 text-white" />
            </div>
            <span className="text-xs font-semibold text-slate-700">Pasang di Lokasi</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "#AFD8DD" }}>
              <MapPin className="w-4 h-4 text-white" />
            </div>
            <span className="text-xs font-semibold text-slate-700">Seluruh Indonesia</span>
          </div>
        </div>
      </div>

      {/* Right: photo collage */}
      <div className="hidden md:flex relative z-10 pr-8 gap-2 shrink-0">
        <div className="flex flex-col gap-2">
          <div className="w-28 h-28 rounded-2xl overflow-hidden relative">
            <Image src="/hidro1.jpeg" alt="Pengiriman depot" fill sizes="112px" className="object-cover" />
          </div>
          <div className="w-28 h-20 rounded-2xl overflow-hidden relative">
            <Image src="/hidro3.jpeg" alt="Pemasangan etalase" fill sizes="112px" className="object-cover" />
          </div>
        </div>
        <div className="w-32 h-52 rounded-2xl overflow-hidden relative self-center">
          <Image src="/hidro2.jpeg" alt="Tim teknisi" fill sizes="128px" className="object-cover" />
        </div>
      </div>
    </div>
  )
}
