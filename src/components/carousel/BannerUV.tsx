import { XCircle, CheckCircle2, AlertTriangle } from "lucide-react"

export function BannerUV() {
  return (
    <div className="w-full h-[220px] md:h-[280px] rounded-3xl overflow-hidden relative flex items-center" style={{ backgroundColor: "#0D2035" }}>
      {/* Decorative */}
      <div className="absolute left-[-30px] bottom-[-30px] w-48 h-48 rounded-full opacity-10" style={{ backgroundColor: "#AFD8DD" }}></div>
      <div className="absolute right-[30%] top-[-20px] w-32 h-32 rounded-full opacity-10" style={{ backgroundColor: "#F6D2E2" }}></div>

      {/* Left: warning title */}
      <div className="relative z-10 px-8 md:px-14 py-8 w-full">
        <div className="flex items-center gap-2 mb-3">
          <AlertTriangle className="w-5 h-5" style={{ color: "#E93468" }} />
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#E93468" }}>PENTING — EDUKASI KONSUMEN</span>
        </div>
        <h2 className="text-xl md:text-3xl font-extrabold text-white mb-4 leading-tight">
          Hati-Hati Sterilisasi UV!<br/>
          <span className="text-base md:text-lg font-semibold" style={{ color: "#AFD8DD" }}>
            Jangan terkecoh depot murah yang pakai lampu UV kelap-kelip
          </span>
        </h2>

        <div className="grid grid-cols-2 gap-3 max-w-2xl">
          {/* UV Lokal */}
          <div className="rounded-2xl p-4" style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
            <div className="flex items-center gap-2 mb-2">
              <XCircle className="w-4 h-4 text-slate-400 shrink-0" />
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">UV Lokal</span>
            </div>
            <ul className="space-y-1">
              {["Stainless 201, lebih tipis", "Bohlam merk umum", "Tidak lolos uji DEPKES RI", "Max 6.000–8.000 Jam"].map((item) => (
                <li key={item} className="text-[11px] text-slate-500 flex items-start gap-1.5">
                  <span className="shrink-0 mt-0.5">✕</span>{item}
                </li>
              ))}
            </ul>
          </div>

          {/* UV Hidro */}
          <div className="rounded-2xl p-4 relative" style={{ backgroundColor: "rgba(52,131,194,0.2)", border: "1px solid #3483C2" }}>
            <div className="absolute -top-2 -right-2 text-[9px] font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: "#E93468", color: "white" }}>
              STANDAR HIDRO
            </div>
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: "#AFD8DD" }} />
              <span className="text-xs font-bold uppercase tracking-wide" style={{ color: "#AFD8DD" }}>UV Hidro</span>
            </div>
            <ul className="space-y-1">
              {["Stainless murni 304, tebal", "Bohlam khusus air minum", "Lolos uji DEPKES RI", "Max hingga 9.500 Jam"].map((item) => (
                <li key={item} className="text-[11px] text-white flex items-start gap-1.5">
                  <span className="shrink-0 mt-0.5" style={{ color: "#AFD8DD" }}>✓</span>{item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
