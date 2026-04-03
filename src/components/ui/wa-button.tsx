"use client"

import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export function WAButton() {
  return (
    <Button
      size="lg"
      className="bg-brand-pink hover:bg-brand-pink/90 text-white rounded-full px-8 py-6 h-auto text-sm font-bold flex items-center gap-2"
      onClick={() =>
        window.open(
          `https://wa.me/628985919009?text=${encodeURIComponent(
            "Halo Hidro, saya ingin bertanya lebih lanjut mengenai produk mesin depot air. Boleh minta info detail harga dan spesifikasinya?"
          )}`,
          "_blank"
        )
      }
    >
      <Phone className="w-4 h-4" /> Hubungi Sales
    </Button>
  )
}
