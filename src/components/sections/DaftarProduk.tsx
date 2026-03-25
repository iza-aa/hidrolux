"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Check, MessageCircle, Droplet } from "lucide-react"

type Product = {
  id: string
  name: string
  tag: string
  category: string
  price: string
  description: string
  imageColor: string
}

const products: Product[] = [
  {
    id: "p1",
    tag: "BEST SELLER",
    name: "Paket Depot Air Minum",
    category: "Mineral Standard",
    price: "Mulai Rp 15 Jt",
    description: "Kapasitas 400 galon/hari. Lengkap etalase dan tandon.",
    imageColor: "bg-blue-100/50"
  },
  {
    id: "p2",
    tag: "POPULAR",
    name: "Mesin RO 100 GPD",
    category: "Reverse Osmosis",
    price: "Rp 3.5 Jt",
    description: "Sistem filterisasi tingkat tinggi menghasilkan air murni.",
    imageColor: "bg-emerald-100/50"
  },
  {
    id: "p3",
    tag: "DISCOUNT",
    name: "Water Treatment Plant",
    category: "Industri Menengah",
    price: "Konsultasi",
    description: "Pengolahan khusus untuk air industri & perumahan.",
    imageColor: "bg-amber-100/50"
  },
  {
    id: "p4",
    tag: "NEW ARRIVAL",
    name: "Mesin Pabrik AMDK",
    category: "Air Minum Kemasan",
    price: "Konsultasi",
    description: "Mesin cup sealer otomatis produksi massal.",
    imageColor: "bg-purple-100/50"
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
    const waNumber = "6281234567890" 
    let message = "Halo Hidrolux, saya tertarik dan ingin konsultasi lebih lanjut terkait produk/paket berikut:\n\n"
    selectedProducts.forEach((p, index) => {
      message += `${index + 1}. ${p.name} - ${p.category}\n`
    })
    message += "\nMohon info detail harga dan spesifikasinya."
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${waNumber}?text=${encodedMessage}`, "_blank")
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl relative">
        <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6 text-center md:text-left">
          <div>
            <div className="text-blue-500 font-bold text-xs tracking-widest uppercase mb-2">PRODUK KAMI</div>
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
                className={`bg-[#f8f9fa] rounded-3xl p-6 flex flex-col relative transition-all group hover:shadow-lg ${
                  isSelected ? 'ring-2 ring-blue-500 shadow-md' : 'border border-transparent'
                }`}
              >
                <div className="absolute top-6 left-6 z-10">
                   <span className={`text-[10px] font-bold tracking-wider ${
                      product.tag === 'DISCOUNT' ? 'text-red-500' : 'text-blue-500'
                   }`}>{product.tag}</span>
                </div>

                <div className="h-48 w-full flex items-center justify-center my-6 relative">
                  <div className={`w-36 h-36 rounded-full absolute ${product.imageColor} group-hover:scale-110 transition-transform duration-500`}></div>
                  {/* Placeholder icon since we don't have real images yet */}
                  <Droplet className="w-16 h-16 text-blue-400 relative z-10 opacity-80" />
                </div>

                <div className="flex flex-col flex-grow">
                  <div className="text-xs text-slate-400 mb-1">{product.category}</div>
                  <h3 className="font-bold text-slate-800 text-lg leading-tight mb-2">{product.name}</h3>
                  <p className="text-slate-500 text-xs mb-6 flex-grow">{product.description}</p>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <div className="font-bold text-slate-800 text-lg">{product.price}</div>
                    <Button 
                      size="sm"
                      variant={isSelected ? "default" : "outline"}
                      className={`rounded-xl px-4 py-5 font-semibold text-xs transition-colors ${
                        isSelected ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-white text-slate-700 border-none shadow-sm hover:text-blue-600"
                      }`}
                      onClick={() => toggleProduct(product)}
                    >
                      {isSelected ? <Check className="w-4 h-4 mr-1" /> : <ShoppingCart className="w-4 h-4 mr-1" />}
                      {isSelected ? "TERPILIH" : "PILIH"}
                    </Button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Floating Checkout */}
        {selectedProducts.length > 0 && (
          <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t border-slate-200 shadow-[0_-10px_20px_-5px_rgba(0,0,0,0.05)] z-50 animate-in slide-in-from-bottom-10">
            <div className="container mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-blue-50 p-3 rounded-full relative">
                  <ShoppingCart className="text-blue-600 h-6 w-6" />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                    {selectedProducts.length}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-slate-800">
                    {selectedProducts.length} Mesin/Paket Dipilih
                  </p>
                  <p className="text-xs text-slate-500 hidden sm:block">
                    Siap untuk dikonsultasikan via WhatsApp
                  </p>
                </div>
              </div>
              
              <Button 
                onClick={handleWhatsAppCheckout} 
                className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-bold py-6 px-8 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
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
