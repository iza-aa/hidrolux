"use client"

import { useState } from "react"
import { TrendingUp, AlertTriangle, Lightbulb, CheckCircle, XCircle } from "lucide-react"

type TabId = "kelebihan" | "tantangan" | "tips"

// ─── Content Data ─────────────────────────────────────────────────────────────

const kelebihanData = {
  intro:
    "Usaha air isi ulang marak tumbuh dimana-mana. Bisnis ini menguntungkan bila dijalankan serius — konsumen memilihnya karena praktis tanpa harus merebus air. Namun, setiap usaha pasti memiliki sisi positif dan negatifnya.",
  kelebihan: [
    "Harga jualnya cukup murah sehingga mudah dijangkau semua kalangan",
    "Tidak sulit untuk mendapatkan konsumen karena kebutuhan air minum bersifat rutin",
    "Kualitas air isi ulang telah memenuhi standar Departemen Kesehatan, meskipun tergantung kualitas bahan baku, mesin, dan sanitasinya",
  ],
  kekurangan: [
    "Pengawasan dan pembinaan yang lemah pada pengusaha depo menjadikan mutu air tidak konsisten, sehingga perlu uji kualitas rutin",
    "Kemungkinan salah produksi cukup tinggi, khususnya soal pemilihan alat, sanitasi, dan pemilihan bahan baku air",
    "Aturan tentang usaha depo air isi ulang masih belum jelas secara hukum, sehingga perlindungan terhadap konsumen kurang kuat",
    "Proses pengemasan mengandalkan teknologi sederhana sehingga rentan pencemaran bakteri jika tidak dijaga kebersihannya",
  ],
}

const tantanganData = [
  {
    num: 1,
    title: "Masyarakat Peka Kualitas Akhir",
    desc: "Konsumen semakin selektif terhadap kualitas air. Anda harus memastikan kualitas air selalu terjaga, bebas kontaminan, dan aman dikonsumsi melalui uji berkala.",
  },
  {
    num: 2,
    title: "Kualitas Galon",
    desc: "Galon yang tidak bersih atau berkualitas rendah dapat memengaruhi rasa dan keamanan air minum. Pastikan galon selalu bersih dan dalam kondisi baik sebelum digunakan kembali.",
  },
  {
    num: 3,
    title: "Proses Pengiriman",
    desc: "Keterlambatan atau masalah pengiriman bisa menurunkan kepercayaan pelanggan. Investasikan pada sistem pengiriman yang efisien dan kendaraan yang memadai.",
  },
  {
    num: 4,
    title: "Persaingan yang Ketat",
    desc: "Bisnis ini cukup diminati sehingga persaingan bisa sangat ketat. Fokus pada kualitas, pelayanan, dan inovasi agar bisnis Anda berbeda dari yang sejenis.",
  },
  {
    num: 5,
    title: "Menjaga Kepuasan Pelanggan",
    desc: "Pelanggan yang puas akan loyal dan merekomendasikan bisnis Anda. Tanggap terhadap keluhan dan berikan solusi yang cepat serta tepat.",
  },
]

const tipsData = [
  {
    num: 1,
    title: "Cari Supplier Air Bersih atau Sumber Mata Air",
    desc: "Kualitas air adalah faktor utama. Bekerjasama dengan PDAM atau cari sumber mata air yang memenuhi standar kesehatan, dan lakukan uji kualitas secara berkala.",
  },
  {
    num: 2,
    title: "Urus Perizinan Usaha",
    desc: "Pastikan semua perizinan terpenuhi: izin usaha, izin dari Dinas Kesehatan, dan izin lingkungan. Izin resmi meningkatkan kepercayaan konsumen.",
  },
  {
    num: 3,
    title: "Siapkan Peralatan yang Lengkap",
    desc: "Investasikan pada mesin filter, galon, dispenser, dan alat sterilisasi berkualitas. Rawat peralatan secara rutin untuk menjaga kualitas air.",
  },
  {
    num: 4,
    title: "Promosi ke Warga Sekitar",
    desc: "Gunakan media sosial, brosur, dan iklan lokal. Promosi dari mulut ke mulut sangat efektif — berikan pelayanan terbaik agar pelanggan merekomendasikan bisnis Anda.",
  },
  {
    num: 5,
    title: "Jaga Kebersihan dan Higienitas Tempat",
    desc: "Kebersihan adalah hal yang tidak bisa ditawar. Pastikan tempat usaha selalu bersih dan steril agar konsumen percaya dan loyal.",
  },
  {
    num: 6,
    title: "Berikan Harga yang Kompetitif",
    desc: "Tawarkan harga yang sebanding dengan kualitas air. Pelanggan lebih loyal jika merasa mendapatkan produk berkualitas dengan harga yang wajar.",
  },
  {
    num: 7,
    title: "Jalin Kerjasama dengan Toko Sekitar",
    desc: "Jadikan toko dan warung di sekitar sebagai agen atau reseller. Perluasan jaringan distribusi memungkinkan Anda menjangkau lebih banyak pelanggan.",
  },
  {
    num: 8,
    title: "Utamakan Pelayanan Terbaik",
    desc: "Layanan ramah, responsif, dan antar galon gratis untuk pelanggan terdekat akan meningkatkan kepuasan dan loyalitas. Layanan online memudahkan pemesanan.",
  },
]

// ─── Tab Config ───────────────────────────────────────────────────────────────

const tabs: {
  id: TabId
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>
  label: string
  sublabel: string
  count: string
  accentColor: string
  accentBg: string
}[] = [
  {
    id: "kelebihan",
    icon: TrendingUp,
    label: "Kelebihan & Kekurangan",
    sublabel: "Analisis Pro & Kontra",
    count: "3 + 4 poin",
    accentColor: "#3483C2",
    accentBg: "#EFF7F9",
  },
  {
    id: "tantangan",
    icon: AlertTriangle,
    label: "Tantangan Usaha",
    sublabel: "Yang Perlu Diantisipasi",
    count: "5 tantangan",
    accentColor: "#C24B53",
    accentBg: "#FDF2F3",
  },
  {
    id: "tips",
    icon: Lightbulb,
    label: "Tips Sukses",
    sublabel: "Langkah Memulai Usaha",
    count: "8 langkah",
    accentColor: "#2a9d6a",
    accentBg: "#F0FBF6",
  },
]

// ─── Content Renderers ────────────────────────────────────────────────────────

function KelebihanContent() {
  return (
    <div>
      <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-2xl">
        {kelebihanData.intro}
      </p>
      <div className="grid md:grid-cols-2 gap-4">
        {/* Kelebihan */}
        <div className="rounded-2xl bg-white border border-green-100 p-5">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-7 h-7 rounded-full bg-[#2a9d6a] flex items-center justify-center shrink-0">
              <CheckCircle className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-[#2a9d6a] text-sm tracking-wide uppercase">
              Kelebihan
            </span>
          </div>
          <ul className="space-y-3">
            {kelebihanData.kelebihan.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-0.5 w-5 h-5 rounded-full bg-[#2a9d6a]/15 text-[#2a9d6a] text-xs font-bold flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <span className="text-slate-700 text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Kekurangan */}
        <div className="rounded-2xl bg-white border border-red-100 p-5">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-7 h-7 rounded-full bg-brand-pink flex items-center justify-center shrink-0">
              <XCircle className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-brand-pink text-sm tracking-wide uppercase">
              Kekurangan
            </span>
          </div>
          <ul className="space-y-3">
            {kelebihanData.kekurangan.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-0.5 w-5 h-5 rounded-full bg-brand-pink/15 text-brand-pink text-xs font-bold flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <span className="text-slate-700 text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

function TantanganContent() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {tantanganData.map((item) => (
        <div
          key={item.num}
          className="rounded-2xl border border-red-100 bg-white p-5 hover:shadow-md transition-shadow duration-200"
        >
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center font-extrabold text-white text-sm mb-3"
            style={{ backgroundColor: "#C24B53" }}
          >
            {item.num}
          </div>
          <h4 className="font-bold text-slate-800 text-sm mb-2 leading-snug">
            {item.title}
          </h4>
          <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  )
}

function TipsContent() {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {tipsData.map((item) => (
        <div
          key={item.num}
          className="flex items-start gap-4 rounded-2xl border border-green-100 bg-white p-5 hover:shadow-md transition-shadow duration-200"
        >
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center font-extrabold text-white text-sm shrink-0 mt-0.5"
            style={{ backgroundColor: "#2a9d6a" }}
          >
            {item.num}
          </div>
          <div>
            <h4 className="font-bold text-slate-800 text-sm mb-1 leading-snug">
              {item.title}
            </h4>
            <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function PanduanUsaha() {
  const [active, setActive] = useState<TabId>("kelebihan")

  const activeTab = tabs.find((t) => t.id === active)!

  return (
    <section className="py-16 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* ── Section Header ── */}
        <div className="mb-10">
          <div className="text-brand-blue font-bold text-xs tracking-widest uppercase mb-3">
            PANDUAN USAHA
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-3">
            Sebelum Memulai,{" "}
            <span className="text-brand-blue">Kenali Bisnisnya</span>
          </h2>
          <p className="text-slate-500 text-sm max-w-xl leading-relaxed">
            Panduan lengkap untuk calon pengusaha depot air minum — dari analisis
            usaha, tantangan nyata, hingga tips sukses dari para pelaku bisnis.
          </p>
        </div>

        {/* ── Top Tabs ── */}
        <div className="grid grid-cols-3 gap-2 md:gap-3 mb-6">
          {tabs.map((tab) => {
            const Icon = tab.icon
            const isActive = active === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`group flex flex-col sm:flex-row items-center sm:items-center gap-2 rounded-2xl px-3 sm:px-5 py-3 sm:py-3 text-center sm:text-left transition-all duration-200 border w-full ${
                  isActive
                    ? "shadow-md border-transparent"
                    : "bg-white border-gray-100 hover:shadow-sm hover:border-gray-200"
                }`}
                style={
                  isActive
                    ? { backgroundColor: tab.accentBg, borderColor: "transparent" }
                    : {}
                }
              >
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: isActive ? tab.accentColor : "#F1F5F9" }}
                >
                  <Icon
                    className="w-4 h-4"
                    style={{ color: isActive ? "#fff" : tab.accentColor }}
                  />
                </div>
                <div className="min-w-0">
                  <div
                    className="font-bold text-xs sm:text-sm leading-tight"
                    style={{ color: isActive ? tab.accentColor : "#1e293b" }}
                  >
                    {tab.label}
                  </div>
                  <div className="hidden sm:block text-[11px] text-slate-400">{tab.sublabel}</div>
                </div>
              </button>
            )
          })}
        </div>

        {/* ── Content Panel ── */}
        <div
          key={active}
          className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-8 animate-in fade-in-0 slide-in-from-bottom-4 duration-300"
        >
          {/* Content header */}
          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
              style={{ backgroundColor: activeTab.accentBg }}
            >
              <activeTab.icon
                  className="w-5 h-5"
                  style={{ color: activeTab.accentColor }}
                />
            </div>
            <div>
              <h3
                className="font-extrabold text-lg leading-tight"
                style={{ color: activeTab.accentColor }}
              >
                {activeTab.label}
              </h3>
              <p className="text-xs text-slate-400">{activeTab.sublabel}</p>
            </div>
            <span
              className="ml-auto text-[11px] font-bold px-3 py-1 rounded-full shrink-0 whitespace-nowrap"
              style={{
                backgroundColor: `${activeTab.accentColor}15`,
                color: activeTab.accentColor,
              }}
            >
              {activeTab.count}
            </span>
          </div>

          {/* Dynamic content */}
          {active === "kelebihan" && <KelebihanContent />}
          {active === "tantangan" && <TantanganContent />}
          {active === "tips" && <TipsContent />}
        </div>
      </div>
    </section>
  )
}
