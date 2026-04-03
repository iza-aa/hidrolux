import { Clock, HeadphonesIcon, CheckCircle2, MessageCircle } from "lucide-react"

export function BannerLayanan() {
  return (
    <div className="w-full min-h-52 md:h-64 rounded-3xl overflow-hidden relative flex items-center" style={{ backgroundColor: "#EFF7F9" }}>
      {/* Background decorative circles */}
      <div className="absolute right-[-40px] top-[-60px] w-64 h-64 rounded-full opacity-40" style={{ backgroundColor: "#AFD8DD" }}></div>
      <div className="absolute right-[15%] bottom-[-40px] w-40 h-40 rounded-full opacity-20" style={{ backgroundColor: "#3483C2" }}></div>
      <div className="absolute left-[40%] top-[-20px] w-20 h-20 rounded-full opacity-30" style={{ backgroundColor: "#D8D7DC" }}></div>

      {/* Left content */}
      <div className="relative z-10 px-6 md:px-14 py-6 flex-1">
        <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase" style={{ backgroundColor: "#3483C2", color: "white" }}>
          HIDRO WATER PURIFIER
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold leading-tight mb-2" style={{ color: "#0D2035" }}>
          KAMI SIAP <span className="px-2 py-0.5 rounded-lg" style={{ backgroundColor: "#3483C2", color: "white" }}>SETIAP SAAT</span>
        </h2>
        <p className="text-sm font-semibold mb-4" style={{ color: "#3483C2" }}>
          Solusi Terpercaya untuk Kebutuhan Bisnis Depot Air Anda
        </p>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "#3483C2" }}>
              <Clock className="w-4 h-4 text-white" />
            </div>
            <span className="text-xs font-semibold" style={{ color: "#0D2035" }}>
              Buka 365 Hari<br/>dalam Setahun
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "#C24B53" }}>
              <HeadphonesIcon className="w-4 h-4 text-white" />
            </div>
            <span className="text-xs font-semibold" style={{ color: "#0D2035" }}>
              Layanan Pelanggan<br/>Tanpa Henti
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "#AFD8DD" }}>
              <CheckCircle2 className="w-4 h-4 text-white" />
            </div>
            <span className="text-xs font-semibold" style={{ color: "#0D2035" }}>
              Purna Jual<br/>Terjamin
            </span>
          </div>
        </div>
      </div>

      {/* Right content */}
      <div className="hidden md:flex relative z-10 pr-14 flex-col items-center gap-4">
        <div className="w-28 h-28 rounded-full flex items-center justify-center" style={{ backgroundColor: "#3483C2" }}>
          <MessageCircle className="w-14 h-14 text-white" />
        </div>
        <div className="text-center">
          <div className="text-4xl font-black" style={{ color: "#3483C2" }}>24/7</div>
          <div className="text-xs font-bold tracking-widest uppercase" style={{ color: "#AFD8DD" }}>Support</div>
        </div>
      </div>
    </div>
  )
}
