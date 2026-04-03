import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

export function FaqSection() {
  const faqs = [
    {
      question: "Apakah paket DAMIU Hidro ini sistem sewa atau beli?",
      answer: "Paket Usaha Depot Air Minum Hidro menggunakan sistem jual beli. Setelah pembayaran lunas, unit langsung menjadi milik Anda sepenuhnya — berbeda dengan model franchise yang membutuhkan modal hingga ratusan juta rupiah."
    },
    {
      question: "Apakah produk Hidro dilengkapi garansi?",
      answer: "Ya, seluruh paket usaha yang kami tawarkan dilengkapi garansi resmi selama 1 tahun, sehingga Anda tidak perlu khawatir terhadap kendala teknis di awal penggunaan."
    },
    {
      question: "Apakah Hidro merupakan perusahaan terpercaya?",
      answer: "Hidro adalah perusahaan resmi yang telah terdaftar secara legal dan menjadi salah satu distributor mesin depot air minum isi ulang terkemuka di Indonesia."
    },
    {
      question: "Apakah pemula bisa mengoperasikan mesinnya?",
      answer: "Tentu saja. Pengoperasian mesin Depot Air Minum Hidro dirancang mudah dan intuitif. Setelah pemasangan selesai, teknisi kami akan memberikan pelatihan langsung di lokasi hingga Anda benar-benar memahami pengoperasiannya."
    },
    {
      question: "Di mana lokasi kantor Hidro?",
      answer: "Kantor pusat kami beralamat di Kudus, Jawa Tengah. Meski demikian, kami melayani pengiriman dan pemasangan ke seluruh wilayah Indonesia."
    },
    {
      question: "Apakah bisa memesan dari luar Pulau Jawa?",
      answer: "Kami melayani pengiriman ke seluruh Indonesia, termasuk luar Pulau Jawa dengan jadwal pengiriman yang tersedia setiap bulan. Silakan hubungi tim marketing kami yang khusus menangani area luar Jawa untuk informasi lebih lanjut."
    },
    {
      question: "Bagaimana cara bergabung dengan Hidro?",
      answer: "Hubungi tim marketing kami melalui WhatsApp atau telepon yang tertera untuk sesi konsultasi sesuai kebutuhan Anda. Jika diperlukan, tim kami dapat hadir langsung untuk survei lokasi. Setelah kesepakatan harga tercapai, lakukan transfer DP ke rekening resmi CV Hidro Cipta Perkasa dan pesanan Anda akan segera diproses serta dipasang oleh teknisi profesional kami."
    }
  ]

  return (
    <section id="faq" className="py-10 bg-brand-light-bg border-t border-brand-light">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-brand-blue rounded-full mb-4">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Pertanyaan Seputar Hidro
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Beberapa pertanyaan yang sering diajukan oleh calon mitra usaha kami.
          </p>
        </div>

        <div className="bg-white p-6 md:p-8 rounded-2xl border border-brand-light">
          <Accordion className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold text-slate-800 hover:text-brand-blue">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
