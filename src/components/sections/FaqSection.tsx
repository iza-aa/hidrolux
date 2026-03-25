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
      question: "Apakah melayani pemasangan di luar wilayah/pulau?",
      answer: "Ya, kami melayani pengiriman dan instalasi mesin depot air minum ke seluruh wilayah di Indonesia. Tim teknisi kami siap diberangkatkan ke lokasi Anda untuk perakitan hingga mesin siap beroperasi."
    },
    {
      question: "Berapa lama masa garansi mesin?",
      answer: "Kami memberikan garansi resmi untuk komponen mesin (seperti pompa dan ballast UV) selama 1 hingga 2 tahun tergantung jenis paket yang Anda ambil."
    },
    {
      question: "Bagaimana jika ada kerusakan atau butuh sparepart di kemudian hari?",
      answer: "Anda tidak perlu khawatir. Kami menjamin ketersediaan sparepart secara lengkap dan layanan purna jual (after-sales service) yang responsif. Anda dapat langsung menghubungi layanan pelanggan kami."
    },
    {
      question: "Apakah saya diajarkan cara mengoperasikan mesinnya?",
      answer: "Tentu. Setiap pembelian paket mesin Hidrolux sudah termasuk pelatihan (training) operasional gratis dari teknisi kami di lokasi, mulai dari cara menyalakan mesin, mengganti filter, hingga perawatan rutin."
    },
    {
      question: "Apakah UV Hidrolux benar-benar lolos standar kesehatan?",
      answer: "Ya, UV Hidrolux menggunakan material stainless murni 304 yang tebal dan bohlam khusus standar air minum internasional, sehingga terbukti lolos uji kelayakan air minum dari DEPKES RI, berbeda dengan lampu UV lokal yang murah dan kelap-kelip."
    }
  ]

  return (
    <section id="faq" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-4">
            <HelpCircle className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Pertanyaan Seputar Hidrolux
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Beberapa pertanyaan yang sering diajukan oleh calon mitra usaha kami.
          </p>
        </div>

        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100">
          <Accordion className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold text-slate-800 hover:text-blue-600">
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
