"use client"

import { useState } from "react"
import React from "react"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Check, MessageCircle, Droplets, FlaskConical, Home, Filter, Factory, Package, Wrench, Headphones } from "lucide-react"

type Product = {
  id: string
  name: string
  tag: string
  category: string
  description: string
  icon: React.ReactNode
  gradient: string
}

const products: Product[] = [
  {
    id: "p1",
    tag: "BEST SELLER",
    name: "Depot Air Minum Isi Ulang",
    category: "Mineral Standard",
    description: "Kapasitas 400 galon/hari. Lengkap etalase dan tandon.",
    icon: <Droplets className="w-14 h-14 text-white/90" />,
    gradient: "from-[#3483C2] to-[#AFD8DD]"
  },
  {
    id: "p2",
    tag: "POPULAR",
    name: "Depot Mineral, RO & OXY",
    category: "Hexagonal",
    description: "Teknologi hexagonal water dengan oksigenasi tinggi untuk kualitas air premium.",
    icon: <FlaskConical className="w-14 h-14 text-white/90" />,
    gradient: "from-[#1a5fa0] to-[#3483C2]"
  },
  {
    id: "p3",
    tag: "NEW",
    name: "Mesin Air Minum Rumah Tangga",
    category: "Residential",
    description: "Sistem purifikasi ringkas untuk kebutuhan air minum keluarga sehari-hari.",
    icon: <Home className="w-14 h-14 text-white/90" />,
    gradient: "from-[#AFD8DD] to-[#3483C2]"
  },
  {
    id: "p4",
    tag: "POPULAR",
    name: "Mesin RO",
    category: "Reverse Osmosis",
    description: "Sistem filterisasi tingkat tinggi menghasilkan air murni bebas kontaminan.",
    icon: <Filter className="w-14 h-14 text-white/90" />,
    gradient: "from-[#3483C2] to-[#1a5fa0]"
  },
  {
    id: "p5",
    tag: "INDUSTRI",
    name: "Water Treatment Plant",
    category: "WTP",
    description: "Solusi pengolahan air skala industri dan perumahan besar.",
    icon: <Factory className="w-14 h-14 text-white/90" />,
    gradient: "from-[#0D2035] to-[#3483C2]"
  },
  {
    id: "p6",
    tag: "NEW ARRIVAL",
    name: "Mesin Pabrik AMDK",
    category: "Air Minum Dalam Kemasan",
    description: "Mesin cup sealer otomatis untuk produksi air minum kemasan massal.",
    icon: <Package className="w-14 h-14 text-white/90" />,
    gradient: "from-[#E93468] to-[#3483C2]"
  },
  {
    id: "p7",
    tag: "SPAREPART",
    name: "Sparepart Water Purifier",
    category: "Aksesoris & Komponen",
    description: "Tersedia lengkap: filter, membrane, pompa, ballast UV, dan komponen lainnya.",
    icon: <Wrench className="w-14 h-14 text-white/90" />,
    gradient: "from-[#AFD8DD] to-[#0D2035]"
  },
  {
    id: "p8",
    tag: "SERVICE",
    name: "Jasa Service Mesin",
    category: "After-Sales",
    description: "Teknisi berpengalaman siap menangani perawatan dan perbaikan mesin water purifier.",
    icon: <Headphones className="w-14 h-14 text-white/90" />,
    gradient: "from-[#E93468] to-[#F6D2E2]"
  }
]

export function DaftarProduk() {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([])

  const toggleProduct = (product: Product) => {
    setSelectedProducts((prev) => 
      prev.some((p) => p.id === product.id)
        ? prev.filter((p) => p.id !== product.id)
        : [...prev, product]
    )
  }

  const handleWhatsAppCheckout = () => {
    if (selectedProducts.length === 0) return
    const waNumber = "628985919009"
    let message = "Halo Hidro, saya tertarik dan ingin konsultasi lebih lanjut terkait produk/paket berikut:\n\n"
    selectedProducts.forEach((p, index) => {
      message += `${index + 1}. ${p.name} - ${p.category}\n`
    })
    message += "\nMohon info detail harga dan spesifikasinya."
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${waNumber}?text=${encodedMessage}`, "_blank")
  }

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4 max-w-7xl relative">
        <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6 text-center md:text-left">
          <div>
            <div className="text-brand-blue font-bold text-xs tracking-widest uppercase mb-2">PRODUK KAMI</div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Pilihan Terbaik Untuk Anda
            </h2>
          </div>
          <p className="text-slate-500 max-w-md text-sm leading-relaxed">
            Dapatkan mesin water purifier dengan kualitas internasional untuk berbagai kebutuhan bisnis dan rumah tangga.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-24">
          {products.map((product) => {
            const isSelected = selectedProducts.some((p) => p.id === product.id)
            return (
              <div 
                key={product.id} 
                className={`bg-brand-light-bg rounded-3xl p-6 flex flex-col relative transition-all group border ${
                  isSelected ? 'ring-2 ring-brand-blue border-brand-blue' : 'border-brand-light'
                }`}
              >
                <div className="mb-3">
                  <span className={`text-[10px] font-bold tracking-wider ${
                    product.tag === 'SERVICE' || product.tag === 'SPAREPART' ? 'text-brand-pink' : 'text-brand-blue'
                  }`}>{product.tag}</span>
                </div>

                <div className={`h-44 w-full rounded-2xl mb-4 bg-linear-to-br ${product.gradient} flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-500`}>
                  {product.icon}
                </div>

                <div className="flex flex-col grow">
                  <div className="text-xs text-slate-400 mb-1">{product.category}</div>
                  <h3 className="font-bold text-slate-800 text-lg leading-tight mb-2">{product.name}</h3>
                  <p className="text-slate-500 text-xs mb-6 grow">{product.description}</p>
                  
                  <Button 
                    size="sm"
                    variant={isSelected ? "default" : "outline"}
                    className={`w-full rounded-xl py-5 font-semibold text-xs transition-colors mt-auto ${
                      isSelected ? "bg-brand-blue text-white hover:bg-brand-blue/90" : "bg-white text-slate-700 border border-gray-200 hover:text-brand-blue"
                    }`}
                    onClick={() => toggleProduct(product)}
                  >
                    {isSelected ? <Check className="w-4 h-4 mr-1" /> : <ShoppingCart className="w-4 h-4 mr-1" />}
                    {isSelected ? "TERPILIH" : "PILIH PRODUK"}
                  </Button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Floating Checkout */}
        {selectedProducts.length > 0 && (
          <div className="fixed bottom-0 left-0 right-0 p-4 bg-[#0D2035]/95 backdrop-blur-md border-t border-brand-blue/30 z-50 animate-in slide-in-from-bottom-10">
            <div className="container mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-brand-blue/30 p-3 rounded-full relative">
                  <ShoppingCart className="text-brand-light h-6 w-6" />
                  <span className="absolute -top-1 -right-1 bg-brand-pink text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-[#0D2035]">
                    {selectedProducts.length}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-white">
                    {selectedProducts.length} Mesin/Paket Dipilih
                  </p>
                  <p className="text-xs text-brand-light hidden sm:block">
                    Siap untuk dikonsultasikan via WhatsApp
                  </p>
                </div>
              </div>
              
              <Button 
                onClick={handleWhatsAppCheckout} 
                className="w-full sm:w-auto bg-brand-pink hover:bg-brand-pink/90 text-white font-bold py-6 px-8 rounded-full transition-all flex items-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                Lanjutkan ke WhatsApp
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
