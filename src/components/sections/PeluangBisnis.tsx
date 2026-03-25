import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Droplet, TrendingUp, ShieldCheck } from "lucide-react"

export function PeluangBisnis() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
            Peluang Bisnis Air Minum
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Bisnis yang tidak pernah mati dengan potensi pasar yang terus berkembang.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <Card className="border-t-4 border-t-blue-500 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto bg-blue-100 p-4 rounded-full mb-4 w-16 h-16 flex items-center justify-center">
                <Droplet className="w-8 h-8 text-blue-600" />
              </div>
              <CardTitle className="text-xl">KEBUTUHAN POKOK</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-slate-600 flex-1">
              Air bersih masih menjadi tantangan di banyak daerah. Masyarakat membutuhkan solusi praktis, aman, dan terjangkau untuk kebutuhan sehari-hari.
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-emerald-500 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto bg-emerald-100 p-4 rounded-full mb-4 w-16 h-16 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-emerald-600" />
              </div>
              <CardTitle className="text-xl">PERMINTAAN TINGGI</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-slate-600">
              Dengan pertumbuhan populasi dan kesadaran kesehatan yang meningkat, permintaan air bersih terus naik di berbagai daerah di Indonesia.
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-amber-500 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto bg-amber-100 p-4 rounded-full mb-4 w-16 h-16 flex items-center justify-center">
                <ShieldCheck className="w-8 h-8 text-amber-600" />
              </div>
              <CardTitle className="text-xl">INVESTASI AMAN</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-slate-600">
              Usaha depot air minum memiliki risiko rendah dengan modal yang relatif aman dan potensi keuntungan yang stabil dalam jangka panjang.
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
