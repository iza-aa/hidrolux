"use client"

import { useState, useEffect, useRef, startTransition } from "react"
import { MapPin, Phone, MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const [modal, setModal] = useState<"privacy" | null>(null)
  const [showConsent, setShowConsent] = useState(false)
  const hasMounted = useRef(false)

  useEffect(() => {
    if (hasMounted.current) return
    hasMounted.current = true
    if (!localStorage.getItem("hidro-consent")) {
      startTransition(() => setShowConsent(true))
    }
  }, [])

  useEffect(() => {
    if (showConsent) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [showConsent])

  function handleAccept() {
    localStorage.setItem("hidro-consent", "accepted")
    setShowConsent(false)
  }

  function handleDecline() {
    window.location.href = "https://www.google.com"
  }

  return (
    <>
    <footer className="bg-brand-navy text-slate-300 py-8 border-t border-brand-blue/30 pb-16 md:pb-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div className="space-y-6">
            <div className="flex flex-col leading-none w-fit">
              <div className="flex items-baseline">
                <span className="text-2xl font-black tracking-tight text-white">HID</span>
                <span className="text-2xl font-black tracking-tight" style={{ color: "#C24B53" }}>RO</span>
              </div>
              <div className="h-0.5 w-full rounded-full bg-white/60 my-0.5"></div>
              <span className="text-[8px] font-bold text-white/60 tracking-widest uppercase">WATER TREATMENT SYSTEM</span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed font-medium">
              Solusi One-Stop Water Purifier. Menyediakan mesin depot air minum isi ulang, RO, AMDK, dan WTP dengan standar internasional berkualitas tinggi dan tahan lama.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white tracking-wide">Hubungi Kami</h4>
            <ul className="space-y-4 text-sm text-slate-400 font-medium">
              <li className="flex items-center gap-4 hover:text-white transition-colors cursor-pointer group">
                <div className="bg-brand-blue/20 p-2 rounded-lg group-hover:bg-brand-blue transition-colors">
                  <Phone className="w-4 h-4 text-brand-light" />
                </div>
                <span>+62 898-5919-009</span>
              </li>
              <li className="flex items-center gap-4 hover:text-white transition-colors cursor-pointer group">
                <a href="https://wa.me/628985919009" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 w-full">
                  <div className="bg-[#25D366]/20 p-2 rounded-lg group-hover:bg-[#25D366] transition-colors">
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  </div>
                  <span>WhatsApp Hidro</span>
                </a>
              </li>
              <li className="flex items-center gap-4 hover:text-white transition-colors cursor-pointer group">
                <div className="bg-brand-blue/20 p-2 rounded-lg group-hover:bg-brand-blue transition-colors">
                  <MapPin className="w-4 h-4 text-brand-light shrink-0" />
                </div>
                <span className="leading-relaxed">Jl. Raya Kudus - Jepara No.KM 5, Kedungdowo, Mijen, Kec. Kaliwungu, Kabupaten Kudus, Jawa Tengah 59332</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white tracking-wide">Layanan Purna Jual</h4>
            <ul className="space-y-4 text-sm text-slate-400 font-medium">
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-light"></div> 
                Instalasi Seluruh Indonesia
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-light"></div> 
                Service & Maintenance
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-light"></div> 
                Ketersediaan Sparepart
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-pink"></div> 
                <span className="text-brand-pink font-semibold">Gratis Konsultasi & Training</span>
              </li>
            </ul>
          </div>
          
        </div>

        <div className="border-t border-brand-blue/20 pt-8 text-center text-xs font-bold tracking-wider text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4 uppercase">
          <p>&copy; {new Date().getFullYear()} HIDRO WATER TREATMENT SYSTEM.</p>
          <div className="flex gap-6">
            <button onClick={() => setModal("privacy")} className="hover:text-brand-light transition-colors">PRIVACY POLICY</button>
          </div>
        </div>
      </div>
    </footer>

    {/* Privacy Policy Bottom Sheet */}
    {modal === "privacy" && (
      <div className="fixed inset-0 z-60 flex flex-col justify-start" onClick={() => setModal(null)}>
        <div className={`absolute inset-0 ${showConsent ? "bg-transparent" : "bg-black/30"}`} />
        <div
          className="relative bg-white w-full animate-in slide-in-from-top-4 duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="max-w-4xl mx-auto px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-bold text-slate-900 uppercase tracking-widest">Kebijakan Privasi</h2>
              <button onClick={() => setModal(null)} className="text-slate-400 hover:text-slate-700 transition-colors p-1">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="text-xs text-slate-500 leading-relaxed grid md:grid-cols-3 gap-4">
              <div>
                <p className="font-semibold text-slate-700 mb-1">Data yang Dikumpulkan</p>
                <p>Kami hanya mengumpulkan nama, nomor telepon, dan alamat yang Anda berikan sukarela melalui WhatsApp.</p>
              </div>
              <div>
                <p className="font-semibold text-slate-700 mb-1">Penggunaan Data</p>
                <p>Data digunakan untuk memproses pesanan, koordinasi pengiriman, pemasangan, dan layanan purna jual.</p>
              </div>
              <div>
                <p className="font-semibold text-slate-700 mb-1">Hak Anda</p>
                <p>Anda berhak meminta penghapusan data kapan saja. Hubungi kami via WhatsApp +62 898-5919-009.</p>
              </div>
            </div>
            <p className="text-[10px] text-slate-400 mt-3">Terakhir diperbarui: April 2026 &middot; Hidro Water Treatment System</p>
          </div>
        </div>
      </div>
    )}

    {/* Consent Banner */}
    {showConsent && (
      <div className="fixed inset-0 z-50 flex items-end justify-center p-4 md:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300" aria-modal="true">
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 flex flex-col md:flex-row items-start md:items-center gap-4 animate-in slide-in-from-bottom-4 duration-500">
          <div className="flex-1 text-sm text-slate-600 leading-relaxed">
            <p className="font-semibold text-slate-800 mb-1">Kami menggunakan data Anda</p>
            <p>Website ini menggunakan data kunjungan untuk keperluan analitik dan iklan. Dengan melanjutkan, Anda menyetujui{" "}
              <button onClick={() => setModal("privacy")} className="text-brand-blue underline hover:no-underline font-medium">Kebijakan Privasi</button>
            {" "}kami.</p>
          </div>
          <div className="flex gap-3 shrink-0 w-full md:w-auto">
            <Button
              onClick={handleDecline}
              variant="outline"
              className="flex-1 md:flex-none rounded-full border-gray-200 text-slate-500 hover:text-slate-700"
            >
              Tolak
            </Button>
            <Button
              onClick={handleAccept}
              className="flex-1 md:flex-none rounded-full bg-brand-blue hover:bg-brand-blue/90 text-white"
            >
              Terima
            </Button>
          </div>
        </div>
      </div>
    )}
    </>
  )
}