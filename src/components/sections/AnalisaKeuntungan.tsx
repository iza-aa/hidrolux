import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, Calculator, CheckCircle2, XCircle } from "lucide-react"

export function AnalisaKeuntungan() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Bagian Perhitungan */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-blue-100 p-3 rounded-xl">
                <Calculator className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">
                Berapa Keuntungan Bisnis Depot Air Minum?
              </h2>
            </div>
            
            <Card className="border-blue-100 shadow-md overflow-hidden bg-slate-50">
              <div className="bg-blue-600 text-white p-4 font-semibold text-center">
                Yuk Kita Hitung!
              </div>
              <CardContent className="p-8 space-y-6 text-sm md:text-base">
                <div className="space-y-2">
                  <p className="font-semibold text-slate-800">Harga beli air baku pegunungan 1 tangki:</p>
                  <p className="text-slate-600">8000 Lt / 400 Galon = <span className="font-bold text-blue-600">Rp 600.000,-</span></p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-slate-200">
                  <p className="font-semibold text-slate-800 mb-2">Biaya per Galon:</p>
                  <ul className="space-y-1 text-slate-600">
                    <li className="flex justify-between"><span>Air Baku (Rp 600.000 / 400)</span> <span>Rp 1.500,-</span></li>
                    <li className="flex justify-between"><span>Tutup Galon + Tissue</span> <span>± Rp 200,-</span></li>
                    <li className="flex justify-between"><span>Listrik</span> <span>± Rp 50,-</span></li>
                    <li className="flex justify-between font-bold text-red-600 pt-2 border-t"><span>Total Modal</span> <span>Rp 1.750,- / Galon</span></li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <p className="font-semibold text-slate-800">Potensi Keuntungan:</p>
                  <p className="text-slate-600">Harga Jual Pasar: <span className="font-semibold">Rp 4.000,- s/d Rp 5.000,-</span></p>
                  <p className="bg-emerald-100 text-emerald-800 p-3 rounded-lg font-bold">
                    Keuntungan Bersih: Rp 2.250,- s/d Rp 3.250,- / Galon
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <p className="font-bold text-slate-800 mb-3">Jika Penjualan 50 Galon / Hari:</p>
                  <div className="grid grid-cols-3 gap-2 text-center text-xs sm:text-sm">
                    <div className="bg-white p-2 rounded border border-slate-200 shadow-sm">
                      <p className="font-semibold text-slate-600">Sehari</p>
                      <p className="font-bold text-blue-600">Rp 162.500</p>
                    </div>
                    <div className="bg-white p-2 rounded border border-slate-200 shadow-sm">
                      <p className="font-semibold text-slate-600">Seminggu</p>
                      <p className="font-bold text-blue-600">Rp 1.137.500</p>
                    </div>
                    <div className="bg-white p-2 rounded border border-slate-200 shadow-sm">
                      <p className="font-semibold text-slate-600">Sebulan</p>
                      <p className="font-bold text-blue-600">Rp 4.875.000</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bagian Hati-Hati UV */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-red-100 p-3 rounded-xl">
                <AlertTriangle className="w-8 h-8 text-red-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">
                HATI-HATI Sterilisasi Ultraviolet!
              </h2>
            </div>
            
            <p className="text-red-600 font-semibold mb-6 text-lg">
              Biasanya depot air minum lainnya masih menggunakan lampu UV kelap-kelip.
            </p>

            <div className="space-y-6">
              <Card className="border-red-200">
                <div className="bg-red-50 p-4 border-b border-red-100 flex items-center gap-3">
                  <XCircle className="text-red-500 w-6 h-6" />
                  <h3 className="font-bold text-red-900">UV Lokal (Biasa Dipakai Depot Lain)</h3>
                </div>
                <CardContent className="p-4 space-y-2">
                  <ul className="list-disc list-inside space-y-1 text-slate-600">
                    <li>Housing UV bahan stainless 201, lebih tipis.</li>
                    <li>Biasanya menggunakan bohlam merk umum.</li>
                    <li><strong className="text-red-600">Tidak lolos</strong> uji kelayakan air minum.</li>
                    <li>Ballast UV biasanya ada lampunya (kelap kelip).</li>
                    <li>Masa pakai max 6000-8000 Jam.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-emerald-200 shadow-md relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-emerald-500"></div>
                <div className="bg-emerald-50 p-4 border-b border-emerald-100 flex items-center gap-3 pl-6">
                  <CheckCircle2 className="text-emerald-600 w-6 h-6" />
                  <h3 className="font-bold text-emerald-900">UV HIDROLUX (Standar Internasional)</h3>
                </div>
                <CardContent className="p-4 pl-6 space-y-2">
                  <ul className="list-disc list-inside space-y-1 text-slate-700">
                    <li>Housing UV bahan <strong>stainless murni 304</strong>, lebih tebal & awet.</li>
                    <li>Menggunakan bohlam UV <strong>khusus air minum</strong>.</li>
                    <li><strong className="text-emerald-600">Lolos uji kelayakan</strong> air minum dari DEPKES RI.</li>
                    <li>Ballast UV berstandar air minum, lebih awet.</li>
                    <li>Masa pakai max hingga <strong>9500 Jam</strong>.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
