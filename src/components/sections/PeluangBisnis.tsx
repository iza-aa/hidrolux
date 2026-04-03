import { Droplet, TrendingUp, ShieldCheck } from "lucide-react"

export function PeluangBisnis() {
  return (
    <section className="pt-10 pb-0 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <div className="text-brand-blue font-bold text-xs tracking-widest uppercase mb-2">POTENSI PASAR</div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Kenapa Membuka Depot Air?
            </h2>
          </div>
          <p className="text-slate-500 max-w-md text-sm leading-relaxed md:text-right">
            Bisnis yang tidak pernah mati dengan potensi pasar yang terus berkembang seiring dengan kebutuhan dasar manusia.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Card 1 */}
          <div className="bg-brand-light-bg border border-brand-light rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300">
            <div className="bg-brand-blue w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
              <Droplet className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-bold text-slate-800 text-xl mb-3">Kebutuhan Pokok</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Air bersih masih menjadi tantangan di banyak daerah. Masyarakat membutuhkan solusi praktis, aman, dan terjangkau setiap hari.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300">
            <div className="bg-brand-blue w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
              <TrendingUp className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-bold text-slate-800 text-xl mb-3">Permintaan Tinggi</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Dengan pertumbuhan populasi dan pola hidup sehat, permintaan air bersih minum terus naik stabil di berbagai daerah Indonesia.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300" style={{ backgroundColor: "#FBF6F8", border: "1.5px solid #F6D2E2" }}>
            <div className="bg-brand-pink w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
              <ShieldCheck className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-bold text-slate-800 text-xl mb-3">Investasi Aman</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Resiko sangat rendah. Modal yang dikeluarkan relatif aman dengan potensi perputaran profit dan keuntungan yang cepat (ROI).
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
