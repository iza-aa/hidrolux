import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { CheckCircle2, ShieldCheck, Zap, Cog, Users } from "lucide-react"

export function KenapaHidrolux() {
  const reasons = [
    {
      title: "Standar Internasional",
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      description: "Mesin menggunakan komponen berkualitas tinggi yang memenuhi standar pengolahan air minum global."
    },
    {
      title: "Lolos Uji DEPKES RI",
      icon: <CheckCircle2 className="w-8 h-8 text-emerald-600" />,
      description: "Air yang dihasilkan sudah teruji kelayakannya dari Departemen Kesehatan Republik Indonesia."
    },
    {
      title: "Material Stainless 304",
      icon: <Zap className="w-8 h-8 text-amber-500" />,
      description: "Lebih kuat, anti karat, dan dirancang khusus untuk durabilitas jangka panjang dalam bisnis."
    },
    {
      title: "Purna Jual Terjamin",
      icon: <Cog className="w-8 h-8 text-indigo-500" />,
      description: "Tersertifikasi dalam pelayanan, perbaikan mesin, serta ketersediaan sparepart yang lengkap di seluruh Indonesia."
    },
    {
      title: "Gratis Pelatihan",
      icon: <Users className="w-8 h-8 text-pink-500" />,
      description: "Mendapatkan bimbingan bisnis & teknis cara pengelolaan depot air minum sampai bisa dan beroperasi penuh."
    }
  ]

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
            Kenapa Memilih Hidrolux?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Komitmen kami untuk memberikan mesin berkualitas premium dengan layanan after-sales terbaik.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <Card key={index} className="shadow-sm border-slate-200 hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="bg-slate-100 p-3 rounded-xl">
                  {reason.icon}
                </div>
                <CardTitle className="text-xl">
                  {reason.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600 leading-relaxed pt-2">
                {reason.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}