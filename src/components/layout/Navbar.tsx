"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 max-w-6xl flex justify-between items-center">
        <div className="flex items-center gap-2">
          {/* Anda bisa ganti teks ini dengan tag <img src="/logo.png" /> nantinya */}
          <div className="text-2xl font-bold tracking-tighter text-blue-600">
            Hidrolux<span className="text-slate-900">.</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
          <a href="#peluang" className="hover:text-blue-600 transition-colors">Peluang Bisnis</a>
          <a href="#produk" className="hover:text-blue-600 transition-colors">Produk</a>
          <a href="#kenapa-kami" className="hover:text-blue-600 transition-colors">Keunggulan</a>
          <a href="#faq" className="hover:text-blue-600 transition-colors">FAQ</a>
        </nav>

        <div>
           <Button className="rounded-full bg-blue-600 hover:bg-blue-700 font-semibold shadow-sm">
             <Phone className="mr-2 h-4 w-4" /> Hubungi Kami
           </Button>
        </div>
      </div>
    </header>
  )
}
