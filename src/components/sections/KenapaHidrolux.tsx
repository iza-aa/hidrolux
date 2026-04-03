import { CheckCircle2, ShieldCheck, Zap, Cog, Users, Award } from "lucide-react"

export function KenapaHidrolux() {
  const reasons = [
    {
      title: "Standar Internasional",
      icon: <ShieldCheck className="w-5 h-5 text-white" />,
      accent: "blue",
      description: "Komponen berkualitas memenuhi standar tata kelola air internasional."
    },
    {
      title: "Lolos Uji DEPKES RI",
      icon: <CheckCircle2 className="w-5 h-5 text-white" />,
      accent: "pink",
      description: "Air yang dihasilkan teruji kelayakannya dari Kementerian Kesehatan."
    },
    {
      title: "Stainless 304",
      icon: <Zap className="w-5 h-5 text-white" />,
      accent: "blue",
      description: "Anti karat, lebih kuat, dirancang untuk durabilitas jangka panjang."
    },
    {
      title: "Purna Jual Terjamin",
      icon: <Cog className="w-5 h-5 text-white" />,
      accent: "pink",
      description: "Layanan perbaikan & sparepart lengkap tersertifikasi seluruh Indonesia."
    },
    {
      title: "Gratis Pelatihan",
      icon: <Users className="w-5 h-5 text-white" />,
      accent: "blue",
      description: "Bimbingan bisnis & teknis pengelolaan depot air langsung dari kami."
    },
    {
      title: "Garansi Resmi",
      icon: <Award className="w-5 h-5 text-white" />,
      accent: "pink",
      description: "Setiap unit bergaransi resmi dengan dukungan teknisi berpengalaman."
    }
  ]

  return (
    <section className="py-14 border-t border-white/10 overflow-hidden" style={{ background: "linear-gradient(160deg, #0D2035 0%, #1a3a5c 60%, #0D2035 100%)" }}>
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Header */}
        <div className="mb-14 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <div className="text-brand-blue font-bold text-xs tracking-widest uppercase mb-2">MENGAPA KAMI</div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Keunggulan Hidro
            </h2>
          </div>
          <p className="text-white/40 max-w-md text-sm leading-relaxed md:text-right hidden md:block">
            Komitmen kami untuk memberikan mesin kualitas premium dengan layanan after-sales terbaik.
          </p>
        </div>

        {/* Timeline */}
        <div className="overflow-x-auto no-scrollbar pb-4">
          <div className="flex min-w-max md:min-w-0 md:grid md:grid-cols-6 relative">

            {/* Gradient connector line */}
            <div className="absolute top-13 left-[calc(100%/12)] right-[calc(100%/12)] h-px hidden md:block"
              style={{ background: "linear-gradient(to right, #3483C2, #C24B53, #3483C2)" }} />

            {reasons.map((reason, index) => (
              <div key={index} className="flex flex-col items-center text-center w-45 md:w-auto px-3">

                {/* Step number */}
                <div className="text-[10px] font-bold tracking-[0.3em] text-white/30 mb-3">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Dot + icon */}
                <div className="relative z-10 mb-4">
                  <div className={`w-10.5 h-10.5 rounded-2xl flex items-center justify-center ring-4 ring-brand-navy ${
                    reason.accent === "blue" ? "bg-brand-blue" : "bg-brand-pink"
                  }`}>
                    {reason.icon}
                  </div>
                </div>

                {/* Mobile connector */}
                <div className="absolute top-13 left-0 right-0 h-px md:hidden"
                  style={{ background: index < reasons.length - 1 ? "linear-gradient(to right, #3483C2, #C24B53)" : "transparent" }} />

                {/* Text */}
                <h3 className="font-bold text-white text-sm leading-tight mb-2">{reason.title}</h3>
                <p className="text-white/40 text-xs leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  )
}
