import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Calculator, CheckCircle2, XCircle } from "lucide-react"

export function AnalisaKeuntungan() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Banner 1: Perhitungan */}
          <div className="bg-[#f2f8fc] rounded-[32px] p-8 md:p-12 relative overflow-hidden flex flex-col justify-center min-h-[360px]">
            <div className="relative z-10">
              <div className="text-blue-600 font-bold text-xs tracking-widest uppercase mb-3">PELUANG USAHA</div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4 tracking-tight leading-tight">
                Simulasi<br/>Keuntungan Bisnis
              </h3>
              <p className="text-slate-500 mb-8 max-w-xs text-sm leading-relaxed">
                Lihat rincian modal dan estimasi balik modal yang transparan untuk depot air minum.
              </p>
              
              <Dialog>
                <DialogTrigger render={<Button className="bg-slate-900 hover:bg-blue-600 text-white rounded-full px-8 py-6 h-auto font-semibold flex items-center gap-2 w-fit transition-all shadow-md">
                    <Calculator className="w-5 h-5" />
                    Lihat Perhitungan
                  </Button>
                } />
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white border-0 shadow-2xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-slate-900 flex items-center gap-2 pb-4 border-b border-slate-100">
                       <Calculator className="w-6 h-6 text-blue-500" />
                       Simulasi Keuntungan Depot Air
                    </DialogTitle>
                  </DialogHeader>
                  <div className="mt-4 space-y-6 text-sm md:text-base">
                    <div className="bg-blue-50/50 p-5 rounded-2xl">
                      <p className="font-semibold text-slate-800 mb-1">Harga beli air baku pegunungan 1 tangki:</p>
                      <p className="text-slate-600">8000 Lt / 400 Galon = <span className="font-bold text-blue-600 text-lg">Rp 600.000,-</span></p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                      <p className="font-semibold text-slate-800 mb-4 pb-2 border-b border-slate-50">Rincian Biaya per Galon:</p>
                      <ul className="space-y-3 text-slate-600">
                        <li className="flex justify-between items-center"><span>Air Baku (Rp 600.000 / 400)</span> <span className="font-medium">Rp 1.500,-</span></li>
                        <li className="flex justify-between items-center"><span>Tutup Galon + Tissue</span> <span className="font-medium">± Rp 200,-</span></li>
                        <li className="flex justify-between items-center"><span>Listrik</span> <span className="font-medium">± Rp 50,-</span></li>
                        <li className="flex justify-between items-center font-bold text-slate-900 pt-4 border-t border-slate-100 text-lg"><span>Total Modal</span> <span className="text-red-500">Rp 1.750,-</span></li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <p className="font-semibold text-slate-800">Potensi Keuntungan:</p>
                      <p className="text-slate-600">Harga Jual Pasar: <span className="font-semibold">Rp 4.000,- s/d Rp 5.000,-</span></p>
                      <div className="bg-gradient-to-r from-emerald-500 to-teal-400 text-white p-5 rounded-2xl font-bold text-lg text-center shadow-md">
                        Keuntungan Bersih: Rp 2.250,- s/d Rp 3.250,- / Galon
                      </div>
                    </div>

                    <div className="pt-2">
                      <p className="font-bold text-slate-800 mb-4">Jika Penjualan 50 Galon / Hari:</p>
                      <div className="grid grid-cols-3 gap-3 text-center">
                        <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                          <p className="text-[10px] text-slate-400 font-bold mb-1 tracking-wider">SEHARI</p>
                          <p className="font-bold text-blue-600 text-base md:text-xl">Rp 162.500</p>
                        </div>
                        <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                          <p className="text-[10px] text-slate-400 font-bold mb-1 tracking-wider">SEMINGGU</p>
                          <p className="font-bold text-blue-600 text-base md:text-xl">Rp 1.137.500</p>
                        </div>
                        <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                          <p className="text-[10px] text-slate-400 font-bold mb-1 tracking-wider">SEBULAN</p>
                          <p className="font-bold text-blue-600 text-base md:text-xl">Rp 4.875.000</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            {/* Background elements to make it look like the reference */}
            <div className="absolute right-[-10%] top-[-10%] w-72 h-72 bg-white rounded-full opacity-60"></div>
          </div>

          {/* Banner 2: Hati-hati UV */}
          <div className="bg-[#fff0f0] rounded-[32px] p-8 md:p-12 relative overflow-hidden flex flex-col justify-center min-h-[360px]">
            <div className="absolute top-0 right-0 p-8">
              <div className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full transform rotate-12">
                PENTING!
              </div>
            </div>
            <div className="relative z-10">
              <div className="text-red-500 font-bold text-xs tracking-widest uppercase mb-3">EDUKASI KONSUMEN</div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4 tracking-tight leading-tight">
                Hati-Hati<br/>Sterilisasi UV
              </h3>
              <p className="text-slate-500 mb-8 max-w-xs text-sm leading-relaxed">
                Jangan terkecoh depot murah. Kenali perbedaan UV lokal dan UV standar medis.
              </p>
              
              <Dialog>
                <DialogTrigger render={<Button className="bg-white hover:bg-slate-50 text-slate-900 border-none rounded-full px-8 py-6 h-auto font-semibold flex items-center gap-2 w-fit shadow-md transition-all">
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                    Lihat Perbandingan
                  </Button>
                } />
                <DialogContent className="max-w-3xl rounded-3xl bg-white border-0 shadow-2xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-slate-900 flex items-center gap-2 pb-4 border-b border-slate-100">
                       <AlertTriangle className="w-6 h-6 text-red-500" />
                       Perbandingan Kualitas Lampu UV
                    </DialogTitle>
                  </DialogHeader>
                  <div className="mt-4 grid md:grid-cols-2 gap-6">
                    <div className="bg-red-50/30 p-6 rounded-2xl border border-red-50">
                      <div className="flex items-center gap-3 mb-5">
                        <XCircle className="text-red-400 w-8 h-8" />
                        <h4 className="font-bold text-slate-800 text-xl">UV Lokal</h4>
                      </div>
                      <ul className="space-y-4 text-sm text-slate-500">
                        <li className="flex items-start gap-3"><span className="text-red-400 font-bold mt-0.5">•</span> Housing UV bahan stainless 201, lebih tipis.</li>
                        <li className="flex items-start gap-3"><span className="text-red-400 font-bold mt-0.5">•</span> Menggunakan bohlam merk umum.</li>
                        <li className="flex items-start gap-3"><span className="text-red-400 font-bold mt-0.5">•</span> Tidak lolos uji kelayakan air minum.</li>
                        <li className="flex items-start gap-3"><span className="text-red-400 font-bold mt-0.5">•</span> Ballast UV biasanya kelap-kelip.</li>
                        <li className="flex items-start gap-3"><span className="text-red-400 font-bold mt-0.5">•</span> Masa pakai max 6000-8000 Jam.</li>
                      </ul>
                    </div>

                    <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100 relative">
                      <div className="absolute -top-3 -right-3 bg-emerald-500 text-white text-[10px] tracking-wider font-bold px-4 py-2 rounded-full shadow-sm">STANDAR HIDROLUX</div>
                      <div className="flex items-center gap-3 mb-5">
                        <CheckCircle2 className="text-emerald-500 w-8 h-8" />
                        <h4 className="font-bold text-slate-800 text-xl">UV Hidrolux</h4>
                      </div>
                      <ul className="space-y-4 text-sm text-slate-600">
                        <li className="flex items-start gap-3"><span className="text-emerald-500 font-bold mt-0.5">✓</span> Housing UV stainless murni 304 tebal.</li>
                        <li className="flex items-start gap-3"><span className="text-emerald-500 font-bold mt-0.5">✓</span> Bohlam UV khusus air minum internasional.</li>
                        <li className="flex items-start gap-3"><span className="text-emerald-500 font-bold mt-0.5">✓</span> Lolos uji kelayakan DEPKES RI.</li>
                        <li className="flex items-start gap-3"><span className="text-emerald-500 font-bold mt-0.5">✓</span> Ballast UV standar air minum, konstan.</li>
                        <li className="flex items-start gap-3"><span className="text-emerald-500 font-bold mt-0.5">✓</span> Masa pakai max hingga 9500 Jam.</li>
                      </ul>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <div className="absolute left-[-10%] bottom-[-10%] w-64 h-64 bg-white rounded-full opacity-50"></div>
          </div>

        </div>
      </div>
    </section>
  )
}
