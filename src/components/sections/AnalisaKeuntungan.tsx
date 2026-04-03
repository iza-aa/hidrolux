"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Calculator, CheckCircle2, XCircle, X } from "lucide-react"

type ActiveCard = "perhitungan" | "perbandingan" | null

export function AnalisaKeuntungan() {
  const [activeCard, setActiveCard] = useState<ActiveCard>(null)

  const toggle = (card: ActiveCard) => {
    setActiveCard((prev) => (prev === card ? null : card))
  }

  return (
    <section className="pt-8 pb-10 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8">

          {/* Banner 1: Simulasi Keuntungan */}
          <div className={`bg-brand-light-bg rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col justify-center min-h-90 transition-all border ${activeCard === "perhitungan" ? "border-brand-blue" : "border-brand-light"}`}>
            <div className="relative z-10">
              <div className="text-brand-blue font-bold text-xs tracking-widest uppercase mb-3">PELUANG USAHA</div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight">
                Simulasi<br/>Keuntungan Bisnis
              </h3>
              <p className="text-slate-500 mb-8 max-w-xs text-sm leading-relaxed">
                Lihat rincian modal dan estimasi balik modal yang transparan untuk depot air minum.
              </p>
              <Button
                onClick={() => toggle("perhitungan")}
                className="bg-brand-blue hover:bg-brand-blue/90 text-white rounded-full px-8 py-6 h-auto font-semibold flex items-center gap-2 w-fit transition-all"
              >
                <Calculator className="w-5 h-5" />
                {activeCard === "perhitungan" ? "Tutup" : "Lihat Perhitungan"}
              </Button>
            </div>
            <div className="absolute right-[-10%] top-[-10%] w-72 h-72 bg-brand-light/40 rounded-full"></div>
          </div>

          {/* Banner 2: Edukasi UV */}
          <div className={`bg-brand-pink-light rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col justify-center min-h-90 transition-all border ${activeCard === "perbandingan" ? "border-brand-pink" : "border-brand-pink-light"}`}>
            <div className="absolute top-0 right-0 p-8">
              <div className="bg-brand-pink text-white text-xs font-bold px-3 py-1 rounded-full transform rotate-12">
                PENTING!
              </div>
            </div>
            <div className="relative z-10">
              <div className="text-brand-pink font-bold text-xs tracking-widest uppercase mb-3">EDUKASI KONSUMEN</div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight">
                Hati-Hati<br/>Sterilisasi UV
              </h3>
              <p className="text-slate-500 mb-8 max-w-xs text-sm leading-relaxed">
                Jangan terkecoh depot murah. Kenali perbedaan UV lokal dan UV standar medis.
              </p>
              <Button
                onClick={() => toggle("perbandingan")}
                className="bg-brand-pink hover:bg-brand-pink/90 text-white rounded-full px-8 py-6 h-auto font-semibold flex items-center gap-2 w-fit transition-all"
              >
                <AlertTriangle className="w-5 h-5" />
                {activeCard === "perbandingan" ? "Tutup" : "Lihat Perbandingan"}
              </Button>
            </div>
            <div className="absolute left-[-10%] bottom-[-10%] w-64 h-64 bg-brand-pink/10 rounded-full"></div>
          </div>
        </div>

        {/* Detail Card */}
        {activeCard && (
          <div className="mt-6 bg-white rounded-3xl border border-brand-light p-8 md:p-10 animate-in fade-in slide-in-from-top-4 duration-300">

            {/* PERHITUNGAN */}
            {activeCard === "perhitungan" && (
              <>
                <div className="flex items-center justify-between pb-5 border-b border-brand-light mb-8">
                  <div className="flex items-center gap-3">
                    <div className="bg-brand-blue p-2.5 rounded-xl">
                      <Calculator className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900">Simulasi Keuntungan Depot Air</h4>
                  </div>
                  <button onClick={() => setActiveCard(null)} className="text-slate-400 hover:text-slate-700 transition-colors p-1">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex items-center justify-between bg-brand-light-bg border border-brand-light rounded-2xl px-6 py-4 mb-6">
                  <div>
                    <p className="text-xs font-bold text-brand-blue uppercase tracking-wider mb-1">Air Baku — 1 Tangki</p>
                    <p className="text-slate-500 text-sm">8.000 Lt / 400 Galon</p>
                  </div>
                  <p className="font-extrabold text-brand-blue text-xl">Rp 600.000</p>
                </div>

                <div className="border border-gray-200 rounded-2xl overflow-hidden mb-6">
                  <div className="bg-slate-50 px-6 py-3 border-b border-gray-200">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Biaya per Galon</p>
                  </div>
                  <div className="divide-y divide-gray-100">
                    <div className="flex justify-between items-center px-6 py-3 text-sm text-slate-600">
                      <span>Air Baku (Rp 600.000 / 400)</span>
                      <span className="font-semibold">Rp 1.500</span>
                    </div>
                    <div className="flex justify-between items-center px-6 py-3 text-sm text-slate-600">
                      <span>Tutup Galon + Tissue</span>
                      <span className="font-semibold">+/- Rp 200</span>
                    </div>
                    <div className="flex justify-between items-center px-6 py-3 text-sm text-slate-600">
                      <span>Listrik</span>
                      <span className="font-semibold">+/- Rp 50</span>
                    </div>
                    <div className="flex justify-between items-center px-6 py-4 bg-brand-light-bg">
                      <span className="font-bold text-slate-900">Total Modal / Galon</span>
                      <span className="font-extrabold text-brand-pink text-lg">Rp 1.750</span>
                    </div>
                  </div>
                </div>

                <div className="bg-brand-blue rounded-2xl px-6 py-5 mb-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <p className="text-brand-light/70 text-xs font-bold uppercase tracking-wider mb-1">Harga Jual Pasar</p>
                      <p className="text-white font-bold text-lg">Rp 4.000 - Rp 5.000 / Galon</p>
                    </div>
                    <div className="sm:text-right">
                      <p className="text-brand-light/70 text-xs font-bold uppercase tracking-wider mb-1">Keuntungan Bersih</p>
                      <p className="text-brand-light font-extrabold text-xl">Rp 2.250 - Rp 3.250</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Proyeksi @ 50 Galon / Hari</p>
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="bg-brand-light-bg border border-brand-light rounded-2xl py-4 px-2">
                      <p className="text-[10px] font-bold text-brand-blue uppercase tracking-wider mb-2">Sehari</p>
                      <p className="font-extrabold text-brand-blue text-lg">Rp 162.500</p>
                    </div>
                    <div className="bg-brand-light-bg border border-brand-light rounded-2xl py-4 px-2">
                      <p className="text-[10px] font-bold text-brand-blue uppercase tracking-wider mb-2">Seminggu</p>
                      <p className="font-extrabold text-brand-blue text-lg">Rp 1.137.500</p>
                    </div>
                    <div className="bg-brand-pink rounded-2xl py-4 px-2">
                      <p className="text-[10px] font-bold text-white/80 uppercase tracking-wider mb-2">Sebulan</p>
                      <p className="font-extrabold text-white text-lg">Rp 4.875.000</p>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* PERBANDINGAN */}
            {activeCard === "perbandingan" && (
              <>
                <div className="flex items-center justify-between pb-5 border-b border-brand-light mb-8">
                  <div className="flex items-center gap-3">
                    <div className="bg-brand-pink p-2.5 rounded-xl">
                      <AlertTriangle className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900">Perbandingan Kualitas Lampu UV</h4>
                  </div>
                  <button onClick={() => setActiveCard(null)} className="text-slate-400 hover:text-slate-700 transition-colors p-1">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-gray-200 rounded-2xl overflow-hidden">
                    <div className="bg-slate-50 px-5 py-4 flex items-center gap-3 border-b border-gray-200">
                      <XCircle className="text-slate-400 w-6 h-6" />
                      <h4 className="font-bold text-slate-700 text-base">UV Lokal</h4>
                    </div>
                    <ul className="divide-y divide-gray-100">
                      <li className="flex items-start gap-3 px-5 py-3 text-sm text-slate-500"><span className="text-slate-300 mt-0.5 shrink-0">x</span> Housing UV bahan stainless 201, lebih tipis.</li>
                      <li className="flex items-start gap-3 px-5 py-3 text-sm text-slate-500"><span className="text-slate-300 mt-0.5 shrink-0">x</span> Menggunakan bohlam merk umum.</li>
                      <li className="flex items-start gap-3 px-5 py-3 text-sm text-slate-500"><span className="text-slate-300 mt-0.5 shrink-0">x</span> Tidak lolos uji kelayakan air minum.</li>
                      <li className="flex items-start gap-3 px-5 py-3 text-sm text-slate-500"><span className="text-slate-300 mt-0.5 shrink-0">x</span> Ballast UV biasanya kelap-kelip.</li>
                      <li className="flex items-start gap-3 px-5 py-3 text-sm text-slate-500"><span className="text-slate-300 mt-0.5 shrink-0">x</span> Masa pakai max 6.000-8.000 Jam.</li>
                    </ul>
                  </div>

                  <div className="border border-brand-blue rounded-2xl overflow-hidden relative">
                    <div className="absolute -top-3 -right-3 bg-brand-pink text-white text-[10px] font-bold px-3 py-1 rounded-full">STANDAR HIDRO</div>
                    <div className="bg-brand-blue px-5 py-4 flex items-center gap-3">
                      <CheckCircle2 className="text-brand-light w-6 h-6" />
                      <h4 className="font-bold text-white text-base">UV Hidro</h4>
                    </div>
                    <ul className="divide-y divide-brand-light/30">
                      <li className="flex items-start gap-3 px-5 py-3 text-sm text-slate-700 bg-brand-light-bg"><span className="text-brand-blue font-bold mt-0.5 shrink-0">v</span> Housing UV stainless murni 304 tebal.</li>
                      <li className="flex items-start gap-3 px-5 py-3 text-sm text-slate-700 bg-brand-light-bg"><span className="text-brand-blue font-bold mt-0.5 shrink-0">v</span> Bohlam UV khusus air minum internasional.</li>
                      <li className="flex items-start gap-3 px-5 py-3 text-sm text-slate-700 bg-brand-light-bg"><span className="text-brand-blue font-bold mt-0.5 shrink-0">v</span> Lolos uji kelayakan DEPKES RI.</li>
                      <li className="flex items-start gap-3 px-5 py-3 text-sm text-slate-700 bg-brand-light-bg"><span className="text-brand-blue font-bold mt-0.5 shrink-0">v</span> Ballast UV standar air minum, konstan.</li>
                      <li className="flex items-start gap-3 px-5 py-3 text-sm text-slate-700 bg-brand-light-bg"><span className="text-brand-blue font-bold mt-0.5 shrink-0">v</span> Masa pakai max hingga 9.500 Jam.</li>
                    </ul>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
