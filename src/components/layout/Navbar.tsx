"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import Link from "next/link"

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
        isScrolled ? "bg-white/95 backdrop-blur-md py-4 border-b border-brand-light" : "bg-white/50 backdrop-blur-sm py-6"
      }`}
    >
      <div className="container mx-auto px-4 max-w-7xl flex justify-between items-center">
        
        <Link href="/" className="flex flex-col leading-none group">
          <div className="flex items-baseline">
            <span className="text-2xl font-black tracking-tight text-slate-900">HID</span>
            <span className="text-2xl font-black tracking-tight" style={{ color: "#E93468" }}>RO</span>
          </div>
          <div className="h-0.5 w-full rounded-full bg-slate-900 my-0.5"></div>
          <span className="text-[8px] font-bold text-slate-900 tracking-widest uppercase">WATER TREATMENT SYSTEM</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-bold text-[14px] text-slate-600">
          <a href="#peluang" className="hover:text-brand-blue transition-colors">Peluang Bisnis</a>
          <a href="#produk" className="hover:text-brand-blue transition-colors">Produk</a>
          <a href="#kenapa-kami" className="hover:text-brand-blue transition-colors">Keunggulan</a>
          <a href="#faq" className="hover:text-brand-blue transition-colors">FAQ</a>
        </nav>

        <div>
           <Button className="rounded-full bg-brand-pink hover:bg-brand-pink/90 text-white font-bold px-6 transition-all">
             <Phone className="mr-2 h-4 w-4" /> Hubungi Kami
           </Button>
        </div>
      </div>
    </header>
  )
}