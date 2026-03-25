"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Plus, Check, MessageCircle } from "lucide-react"

type Product = {
  id: string
  name: string
  category: string
  description: string
  image?: string
}

const products: Product[] = [
  {
    id: "p1",
    name: "Paket Depot Air Minum Mineral Standard",
    category: "Depot Air",
    description: "Kapasitas 400 galon/hari. Lengkap dengan etalase dan tandon."
  },
  {
    id: "p2",
    name: "Mesin RO (Reverse Osmosis) 100 GPD",
    category: "Mesin RO",
    description: "Sistem filterisasi tingkat tinggi menghasilkan air murni."
  },
  {
    id: "p3",
    name: "Water Treatment Plant (WTP) Industri",
    category: "Industri",
    description: "Pengolahan air limbah/kotor untuk industri skala menengah."
  },
  {
    id: "p4",
    name: "Mesin AMDK (Air Minum Dalam Kemasan)",
    category: "AMDK",
    description: "Mesin cup sealer otomatis untuk produksi massal air kemasan."
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

    const waNumber = "6281234567890" // Ganti dengan nomor WhatsApp Hidrolux
    
    let message = "Halo Hidrolux, saya tertarik dan ingin konsultasi lebih lanjut terkait produk/paket berikut:\n\n"
    
    selectedProducts.forEach((p, index) => {
      message += `${index + 1}. ${p.name}\n`
    })

    message += "\nMohon info detail harga dan spesifikasinya."

    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${waNumber}?text=${encodedMessage}`, "_blank")
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
            Daftar Produk & Paket
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Pilih produk yang Anda butuhkan dan diskusikan langsung dengan tim ahli kami via WhatsApp tanpa ribet belanja online.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {products.map((product) => {
            const isSelected = selectedProducts.some((p) => p.id === product.id)
            return (
              <Card key={product.id} className={`flex flex-col h-full transition-all ${isSelected ? 'border-blue-500 ring-2 ring-blue-200' : 'border-slate-200'}`}>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant={isSelected ? "default" : "secondary"}>
                      {product.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg leading-tight">{product.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-slate-600">
                    {product.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button 
                    variant={isSelected ? "outline" : "default"}
                    className={`w-full ${isSelected ? "text-blue-600 border-blue-200 bg-blue-50 hover:bg-blue-100" : ""}`}
                    onClick={() => toggleProduct(product)}
                  >
                    {isSelected ? (
                      <><Check className="mr-2 h-4 w-4" /> Terpilih</>
                    ) : (
                      <><Plus className="mr-2 h-4 w-4" /> Pilih Produk</>
                    )}
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>

        {/* Floating Checkout Summary */}
        {selectedProducts.length > 0 && (
          <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 shadow-[0_-4px_6px_-1px_rgb(0,0,0,0.1)] z-50 animate-in slide-in-from-bottom-10">
            <div className="container mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-3 rounded-full relative">
                  <ShoppingCart className="text-blue-600 h-6 w-6" />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                    {selectedProducts.length}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">
                    {selectedProducts.length} Produk Terpilih
                  </p>
                  <p className="text-sm text-slate-500 hidden sm:block">
                    Lanjutkan ke WhatsApp untuk negosiasi & konsultasi
                  </p>
                </div>
              </div>
              
              <Button 
                onClick={handleWhatsAppCheckout} 
                className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-semibold py-6 px-8 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                Lanjutkan via WhatsApp
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}