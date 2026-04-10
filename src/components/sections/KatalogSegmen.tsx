import Image from "next/image"
import { MessageCircle, ChevronRight } from "lucide-react"

const WA_NUMBER = "628985919009"

function waLink(segmen: string) {
  const msg = encodeURIComponent(
    `Halo Hidro, saya tertarik dengan produk segmen *${segmen}*. Bisa info lebih lanjut?`
  )
  return `https://wa.me/${WA_NUMBER}?text=${msg}`
}

// ─── Tipe ────────────────────────────────────────────────────────────────────
type ProductCard = {
  src: string
  alt: string
  name: string
  desc: string
}

// ─── Data ────────────────────────────────────────────────────────────────────
const segmenDepot = {
  label: "SEGMEN 1",
  title: "Depot Air Minum",
  accent: "#3483C2",
  tagline: "Bisnis air isi ulang siap operasi, lengkap & bergaransi.",
  description:
    "Paket depot all-in-one dengan teknologi UV Stainless 304, lolos uji DEPKES RI. Cocok untuk Anda yang ingin memulai usaha depot air dari nol maupun upgrade unit lama. Tim kami merakit, menginstalasi, dan melatih langsung di lokasi Anda.",
  heroImage: {
    src: "/images/depot web.png",
    alt: "Depot Air Minum Hidro Zero",
  },
  pills: ["Paket Lengkap", "Lolos DEPKES RI", "Garansi Resmi", "Siap Operasi"],
  waSegmen: "Depot Air Minum",
}

const segmenRoWtp: ProductCard[] = [
  {
    src: "/images/Screenshot_2026-01-14_220058-removebg-preview.png",
    alt: "Mesin RO Compact",
    name: "Mesin RO Compact",
    desc: "Filter berteknologi reverse osmosis skala rumah tangga & usaha kecil.",
  },
  {
    src: "/images/Screenshot_2026-01-14_220019-removebg-preview.png",
    alt: "Mesin RO Medium",
    name: "Mesin RO Medium",
    desc: "Kapasitas menengah, ideal untuk depot & bisnis skala menengah.",
  },
  {
    src: "/images/mesin ro web.png",
    alt: "Mesin RO Industri",
    name: "Mesin RO Industri",
    desc: "Output tinggi untuk kebutuhan produksi air besar secara kontinyu.",
  },
  {
    src: "/images/gcgc-removebg-preview.png",
    alt: "Sistem RO + UF + Profil Tank",
    name: "Sistem RO + UF",
    desc: "Kombinasi reverse osmosis & ultrafiltration dengan tangki penampung.",
  },
  {
    src: "/images/wtp web.png",
    alt: "Water Treatment Plant",
    name: "Water Treatment Plant",
    desc: "Solusi pengolahan air bersih skala perumahan & industri menengah.",
  },
  {
    src: "/images/hvjnb-removebg-preview.png",
    alt: "WTP Skala Industri",
    name: "WTP Skala Industri",
    desc: "Kapasitas besar untuk kawasan industri, hotel, dan properti komersial.",
  },
  {
    src: "/images/2538-202108031500433030-removebg-preview.png",
    alt: "Tangki FRP",
    name: "Tangki Filter FRP",
    desc: "Vessel pressure grade tinggi untuk media filter sand, carbon, dan softener.",
  },
]

const segmenIceAmdk: ProductCard[] = [
  {
    src: "/images/861dd16ca7ada12d235d76be6753b16e-removebg-preview.png",
    alt: "Mesin Ice Tube",
    name: "Mesin Ice Tube",
    desc: "Produksi es batu tabung higienis, kapasitas hingga ratusan kg per hari.",
  },
  {
    src: "/images/ice amdk web.png",
    alt: "Paket Mesin AMDK",
    name: "Paket Mesin AMDK",
    desc: "Lini produksi air minum dalam kemasan lengkap — dari filtrasi hingga pengemasan.",
  },
  {
    src: "/images/2.-Automatic-Cup-Filling-And-Sealing-Machine-atau-Mesin-Cup-Filling-and-Sealing-Otomatis-removebg-preview.png",
    alt: "Mesin Cup Filling & Sealing",
    name: "Mesin Cup Sealing Otomatis",
    desc: "Pengisian & penutupan cup otomatis, higienis, kecepatan produksi tinggi.",
  },
  {
    src: "/images/pt37815531-high_speed_10000bph_edible_cooking_oil_plastic_bottle_filling_capping_machine-removebg-preview.png",
    alt: "Mesin Bottle Filling",
    name: "Mesin Bottle Filling",
    desc: "Pengisian & capping botol plastik berkecepatan tinggi hingga 10.000 BPH.",
  },
]

// ─── Sub-komponen ─────────────────────────────────────────────────────────────

function SectionLabel({
  label,
  accent,
}: {
  label: string
  accent: string
}) {
  return (
    <span
      className="inline-block text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-3"
      style={{ backgroundColor: accent + "1A", color: accent, border: `1px solid ${accent}40` }}
    >
      {label}
    </span>
  )
}

function WaButton({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
      style={{ backgroundColor: "#3483C2", color: "#fff" }}
    >
      <MessageCircle className="w-4 h-4" />
      {label}
      <ChevronRight className="w-3.5 h-3.5" />
    </a>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function KatalogSegmen() {
  return (
    <>
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl space-y-24">

        {/* ── Header ── */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-brand-blue font-bold text-xs tracking-widest uppercase mb-3">
            KATALOG PRODUK
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-4">
            Solusi untuk Setiap<br />
            <span className="text-brand-blue">Segmen Bisnis Air</span>
          </h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed">
            Tiga lini produk kami dirancang menjawab kebutuhan berbeda — dari depot isi ulang,
            sistem filtrasi & pengolahan air, hingga produksi air minum dalam kemasan.
          </p>
        </div>

        {/* ══════════════════════════════════════════════
            SEGMEN 1 — DEPOT
        ══════════════════════════════════════════════ */}
        <div
          id="segmen-depot"
          className="rounded-[32px] overflow-hidden relative"
          style={{ background: "linear-gradient(135deg, #EFF7F9 0%, #ffffff 60%)" }}
        >
          {/* decorative */}
          <div
            className="absolute -right-16 -top-16 w-80 h-80 rounded-full opacity-20 pointer-events-none"
            style={{ backgroundColor: "#3483C2" }}
          />
          <div
            className="absolute left-[40%] -bottom-10 w-56 h-56 rounded-full opacity-10 pointer-events-none"
            style={{ backgroundColor: "#AFD8DD" }}
          />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 p-8 md:p-12">
            {/* Text */}
            <div className="flex-1 min-w-0">
              <SectionLabel label={segmenDepot.label} accent={segmenDepot.accent} />
              <h3
                className="text-3xl md:text-4xl font-extrabold leading-tight mb-2"
                style={{ color: "#0D2035" }}
              >
                {segmenDepot.title}
              </h3>
              <p
                className="text-base font-semibold mb-3"
                style={{ color: segmenDepot.accent }}
              >
                {segmenDepot.tagline}
              </p>
              <p className="text-slate-500 text-sm leading-relaxed mb-5 max-w-md">
                {segmenDepot.description}
              </p>

              {/* Pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {segmenDepot.pills.map((p) => (
                  <span
                    key={p}
                    className="text-[11px] font-semibold px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: "rgba(52,131,194,0.10)",
                      color: "#3483C2",
                    }}
                  >
                    ✓ {p}
                  </span>
                ))}
              </div>

              <WaButton
                href={waLink(segmenDepot.waSegmen)}
                label="Konsultasi Depot"
              />
            </div>

            {/* Hero image */}
            <div className="relative shrink-0 w-full md:w-95 flex items-center justify-center">
              <Image
                src={segmenDepot.heroImage.src}
                alt={segmenDepot.heroImage.alt}
                width={380}
                height={380}
                className="object-contain w-full max-h-80 drop-shadow-xl"
                style={{ filter: "drop-shadow(0 12px 32px rgba(52,131,194,0.20))" }}
              />
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════
            SEGMEN 2 — RO & WTP
        ══════════════════════════════════════════════ */}
        <div id="segmen-ro-wtp">
          {/* Header row */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
            <div>
              <SectionLabel label="SEGMEN 2" accent="#1a5fa0" />
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                Mesin RO &amp;{" "}
                <span className="text-brand-blue">Water Treatment Plant</span>
              </h3>
              <p className="text-slate-500 text-sm mt-2 max-w-lg leading-relaxed">
                Dari unit compact rumah tangga hingga WTP skala industri — kami menyediakan
                solusi lengkap filtrasi dan pengolahan air bersih yang terukur dan terpercaya.
              </p>
            </div>
            <div className="shrink-0">
              <WaButton
                href={waLink("RO & Water Treatment Plant")}
                label="Konsultasi RO & WTP"
              />
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {segmenRoWtp.map((item) => (
              <div
                key={item.name}
                className="group rounded-2xl overflow-hidden border border-gray-100 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className="relative h-44 flex items-center justify-center p-4"
                  style={{ backgroundColor: "#F4FBFD" }}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={200}
                    height={160}
                    className="object-contain max-h-36 w-auto group-hover:scale-105 transition-transform duration-300"
                    style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.10))" }}
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-slate-800 text-sm mb-1">{item.name}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}

            {/* Spacer / CTA card */}
            <div
              className="rounded-2xl flex flex-col items-center justify-center p-6 text-center gap-3 border"
              style={{
                background: "linear-gradient(135deg, #0D2035 0%, #1a3a5c 100%)",
                borderColor: "#3483C240",
              }}
            >
              <p className="text-white text-sm font-semibold leading-snug">
                Butuh kapasitas khusus atau konfigurasi custom?
              </p>
              <a
                href={waLink("RO & WTP custom")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold px-4 py-2 rounded-full flex items-center gap-1.5 transition hover:opacity-90"
                style={{ backgroundColor: "#3483C2", color: "#fff" }}
              >
                <MessageCircle className="w-3.5 h-3.5" />
                Tanya Sekarang
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>

        {/* ══════════════════════════════════════════════
            SEGMEN 3 — ICE & AMDK (full-bleed section)
        ══════════════════════════════════════════════ */}
    <section
      id="segmen-ice-amdk"
      className="py-16 border-t border-white/10"
      style={{ background: "linear-gradient(160deg, #0D2035 0%, #1a3a5c 60%, #0D2035 100%)" }}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
          <div>
            <SectionLabel label="SEGMEN 3" accent="#AFD8DD" />
            <h3 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Mesin Ice &amp;{" "}
              <span style={{ color: "#AFD8DD" }}>Pabrik AMDK</span>
            </h3>
            <p className="text-white/50 text-sm mt-2 max-w-lg leading-relaxed">
              Lini produksi es batu dan air minum dalam kemasan — cup, botol, maupun galon —
              dengan mesin otomatis berkapasitas komersial hingga industri.
            </p>
          </div>
          <div className="shrink-0">
            <WaButton
              href={waLink("Mesin Ice & AMDK")}
              label="Konsultasi Ice & AMDK"
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {segmenIceAmdk.map((item) => (
            <div
              key={item.name}
              className="group rounded-2xl overflow-hidden border hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              style={{ backgroundColor: "rgba(255,255,255,0.06)", borderColor: "rgba(175,216,221,0.15)" }}
            >
              <div
                className="relative h-48 flex items-center justify-center p-4"
                style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={220}
                  height={180}
                  className="object-contain max-h-40 w-auto group-hover:scale-105 transition-transform duration-300"
                  style={{ filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.30))" }}
                />
              </div>
              <div className="p-4 border-t" style={{ borderColor: "rgba(175,216,221,0.10)" }}>
                <h4 className="font-bold text-white text-sm mb-1">{item.name}</h4>
                <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}
