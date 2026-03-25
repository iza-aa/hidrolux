import { MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800 pb-28 md:pb-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Hidrolux<span className="text-blue-500">.</span>
            </h3>
            <p className="text-sm text-slate-400 max-w-xs leading-relaxed">
              Solusi One-Stop Water Purifier. Menyediakan mesin depot air minum isi ulang, RO, AMDK, dan WTP dengan standar internasional berkualitas tinggi.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Hubungi Kami</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <span>info@hidrolux.id</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                <span>Jl. Contoh Alamat Pabrik No. 123, Kota, Provinsi, Indonesia</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Layanan</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Instalasi Seluruh Indonesia</li>
              <li>Service & Maintenance</li>
              <li>Sparepart Lengkap</li>
              <li>Konsultasi Bisnis Depot Air</li>
            </ul>
          </div>
          
        </div>

        <div className="border-t border-slate-800 pt-8 mt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Hidrolux. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
