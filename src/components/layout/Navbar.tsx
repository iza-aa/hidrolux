"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, ChevronDown } from "lucide-react"
import Link from "next/link"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md py-4 border-b border-brand-light" : "bg-white/50 backdrop-blur-sm py-6"
      }`}
    >
      <div className="container mx-auto px-4 max-w-7xl flex justify-between items-center">
        
        <Link href="/" className="flex flex-col leading-none w-fit group">
          <div className="flex items-baseline">
            <span className="text-2xl font-black tracking-tight text-slate-900">HID</span>
            <span className="text-2xl font-black tracking-tight" style={{ color: "#C24B53" }}>RO</span>
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

        <div className="relative" ref={dropdownRef}>
          <Button
            onClick={() => setDropdownOpen((v) => !v)}
            className="rounded-full bg-brand-pink hover:bg-brand-pink/90 text-white font-bold px-6 transition-all"
          >
            <Phone className="mr-2 h-4 w-4" /> Hubungi Kami
            <ChevronDown className={`ml-2 h-3.5 w-3.5 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
          </Button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-52 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50">
              <a
                href="https://wa.me/628985919009"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setDropdownOpen(false)}
                className="flex items-center gap-3 px-5 py-3.5 hover:bg-green-50 transition-colors text-sm font-semibold text-slate-700 hover:text-green-700"
              >
                <MessageCircle className="w-4 h-4 text-green-500 shrink-0" />
                WhatsApp
              </a>
              <div className="h-px bg-gray-100" />
              <a
                href="tel:+628985919009"
                onClick={() => setDropdownOpen(false)}
                className="flex items-center gap-3 px-5 py-3.5 hover:bg-blue-50 transition-colors text-sm font-semibold text-slate-700 hover:text-brand-blue"
              >
                <Phone className="w-4 h-4 text-brand-blue shrink-0" />
                Telepon Langsung
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}