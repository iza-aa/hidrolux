"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, ChevronDown, Menu, X } from "lucide-react"
import Link from "next/link"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md py-3 md:py-4 border-b border-brand-light" : "bg-white/50 backdrop-blur-sm py-4 md:py-6"
      }`}
    >
      <div className="container mx-auto px-4 max-w-7xl flex justify-between items-center gap-2 md:gap-4">
        
        <Link href="/" className="flex flex-col leading-none w-fit group">
          <div className="flex items-baseline">
            <span className="text-xl md:text-2xl font-black tracking-tight text-slate-900">HID</span>
            <span className="text-xl md:text-2xl font-black tracking-tight" style={{ color: "#C24B53" }}>RO</span>
          </div>
          <div className="h-0.5 w-full rounded-full bg-slate-900 my-0.5"></div>
          <span className="hidden md:block text-[8px] font-bold text-slate-900 tracking-widest uppercase">WATER TREATMENT SYSTEM</span>
        </Link>

        {/* UPDATE: 
          1. Menggunakan <Link> bawaan Next.js
          2. Menambahkan "/" sebelum "#" agar bisa kembali ke Home dari halaman lain
          3. Menambahkan menu "Artikel Bisnis" untuk halaman SEO
        */}
        <nav className="hidden md:flex items-center gap-8 font-bold text-[14px] text-slate-600">
          <Link href="/#peluang" className="hover:text-brand-blue transition-colors">Peluang Bisnis</Link>
          <Link href="/#kenapa-kami" className="hover:text-brand-blue transition-colors">Keunggulan</Link>
          <Link href="/#produk" className="hover:text-brand-blue transition-colors">Produk</Link>
          <Link href="/#faq" className="hover:text-brand-blue transition-colors">FAQ</Link>
          
          {/* Menu baru untuk halaman SEO kita */}
          <Link href="/peluang-usaha" className="hover:text-brand-blue transition-colors">
            Artikel Bisnis
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <div className="relative" ref={dropdownRef}>
            <Button
              onClick={() => {
                setDropdownOpen((v) => !v)
                setMobileMenuOpen(false)
              }}
              className="rounded-full bg-brand-pink hover:bg-brand-pink/90 text-white font-bold h-10 px-3 sm:px-6 transition-all"
            >
              <Phone className="h-4 w-4 sm:mr-2" />
              <span className="hidden sm:inline">Hubungi Kami</span>
              <ChevronDown className={`hidden sm:block ml-2 h-3.5 w-3.5 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
            </Button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-52 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50">
                <a
                  href="https://wa.me/6282234547707"
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
                  href="tel:+6282234547707"
                  onClick={() => setDropdownOpen(false)}
                  className="flex items-center gap-3 px-5 py-3.5 hover:bg-blue-50 transition-colors text-sm font-semibold text-slate-700 hover:text-brand-blue"
                >
                  <Phone className="w-4 h-4 text-brand-blue shrink-0" />
                  Telepon Langsung
                </a>
              </div>
            )}
          </div>

          <Button
            onClick={() => {
              setMobileMenuOpen((v) => !v)
              setDropdownOpen(false)
            }}
            className="md:hidden rounded-full h-10 w-10 p-0 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
            aria-label={mobileMenuOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>

      </div>

      {mobileMenuOpen && (
        <div className="md:hidden container mx-auto px-4 max-w-7xl mt-3">
          <nav className="bg-white/95 backdrop-blur-md border border-slate-200 rounded-2xl p-4 shadow-sm flex flex-col gap-1 font-bold text-sm text-slate-700">
            <Link href="/#peluang" onClick={() => setMobileMenuOpen(false)} className="rounded-xl px-3 py-2 hover:bg-slate-50 transition-colors">Peluang Bisnis</Link>
            <Link href="/#kenapa-kami" onClick={() => setMobileMenuOpen(false)} className="rounded-xl px-3 py-2 hover:bg-slate-50 transition-colors">Keunggulan</Link>
            <Link href="/#produk" onClick={() => setMobileMenuOpen(false)} className="rounded-xl px-3 py-2 hover:bg-slate-50 transition-colors">Produk</Link>
            <Link href="/#faq" onClick={() => setMobileMenuOpen(false)} className="rounded-xl px-3 py-2 hover:bg-slate-50 transition-colors">FAQ</Link>
            <Link href="/peluang-usaha" onClick={() => setMobileMenuOpen(false)} className="rounded-xl px-3 py-2 hover:bg-slate-50 transition-colors">Artikel Bisnis</Link>
          </nav>
        </div>
      )}
    </header>
  )
}