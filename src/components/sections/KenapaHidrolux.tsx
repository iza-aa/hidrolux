import { CheckCircle2, ShieldCheck, Zap, Cog, Users, Award } from "lucide-react"

export function KenapaHidrolux() {
  const reasons = [
    {
      title: "Standar Internasional",
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
      iconBg: "bg-brand-blue",
      description: "Mesin menggunakan komponen berkualitas yang memenuhi standar tata kelola air."
    },
    {
      title: "Lolos Uji DEPKES RI",
      icon: <CheckCircle2 className="w-6 h-6 text-white" />,
      iconBg: "bg-brand-pink",
      description: "Air yang dihasilkan sudah teruji kelayakannya dari kementerian kesehatan."
    },
    {
      title: "Stainless 304",
      icon: <Zap className="w-6 h-6 text-white" />,
      iconBg: "bg-brand-blue",
      description: "Lebih kuat, anti karat, dan dirancang khusus durabilitas jangka panjang."
    },
    {
      title: "Purna Jual Terjamin",
      icon: <Cog className="w-6 h-6 text-white" />,
      iconBg: "bg-brand-pink",
      description: "Tersertifikasi layanan perbaikan & sparepart lengkap di seluruh Indonesia."
    },
    {
      title: "Gratis Pelatihan",
      icon: <Users className="w-6 h-6 text-white" />,
      iconBg: "bg-brand-blue",
      description: "Mendapatkan bimbingan bisnis & teknis cara pengelolaan depot air."
    },
    {
      title: "Garansi Resmi",
      icon: <Award className="w-6 h-6 text-white" />,
      iconBg: "bg-brand-pink",
      description: "Setiap unit dilengkapi garansi resmi dengan dukungan teknisi berpengalaman."
    }
  ]

  return (
    <section className="py-10 bg-brand-light-bg border-t border-brand-light">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6 text-center md:text-left">
          <div className="max-w-xl mx-auto md:mx-0">
            <div className="text-brand-blue font-bold text-xs tracking-widest uppercase mb-2">MENGAPA KAMI</div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Keunggulan Hidro
            </h2>
          </div>
          <p className="text-slate-500 max-w-md text-sm leading-relaxed md:text-right hidden md:block">
            Komitmen kami untuk memberikan mesin kualitas premium dengan layanan after-sales terbaik.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-[28px] p-6 flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <div className={`${reason.iconBg} p-3 rounded-2xl`}>
                  {reason.icon}
                </div>
                <h3 className="font-bold text-slate-800 text-lg">{reason.title}</h3>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}