import { MapPin, Phone, MessageCircle, Droplet } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#0D2035] text-slate-300 py-8 border-t border-brand-blue/30 pb-16 md:pb-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-brand-blue p-2.5 rounded-xl">
                <Droplet className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight text-white leading-none">Hidro</span>
                <span className="text-[9px] font-bold text-brand-light tracking-widest uppercase mt-1">One Stop Solution</span>
              </div>
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
          <p>&copy; {new Date().getFullYear()} HIDRO WATER PURIFIER.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-light transition-colors">PRIVACY POLICY</a>
            <a href="#" className="hover:text-brand-light transition-colors">TERMS OF SERVICE</a>
          </div>
        </div>
      </div>
    </footer>
  )
}