# Hidrolux Website Implementation Plan

## 1. Product Goal
Hidrolux website is a single-page sales funnel for high-ticket water machine products and related services.
Main objective: convert visitors into qualified leads via WhatsApp with a pre-filled product selection message.

## 2. Business Scope & Features
Based on the defined requirements, the landing page will consist of the following key sections:

### Section 1: Peluang Bisnis (Business Opportunity)
Highlight the market potential for water business:
- **KEBUTUHAN POKOK**: Air bersih masih menjadi tantangan di banyak daerah. Masyarakat membutuhkan solusi praktis, aman, dan terjangkau untuk kebutuhan sehari-hari.
- **PERMINTAAN TINGGI**: Dengan pertumbuhan populasi dan kesadaran kesehatan yang meningkat, permintaan air bersih terus naik di berbagai daerah di Indonesia.
- **INVESTASI AMAN**: Usaha depot air minum memiliki risiko rendah dengan modal yang relatif aman dan potensi keuntungan yang stabil dalam jangka panjang.

### Section 2: Edukasi & Potensi Keuntungan (Education & Profit Potential)
A layout displaying:
- **Perhitungan Keuntungan**: Breakdown profit analysis for a refilling water depot (from attached calculation image).
- **Hati-Hati Sterilisasi UV**: Educational comparison between Standard UV (kelap-kelip, lokal) vs Hidrolux UV (Internasional, stainless 304, awet).

### Section 3: Kenapa Hidrolux (Why Choose Hidrolux?)
Unique selling propositions (USPs) of Hidrolux:
- Standar kualitas internasional
- Material awet (Stainless 304)
- Lolos uji kelayakan DEPKES RI
- Layanan purna jual & instalasi seluruh Indonesia
- (Further details to be added as provided)

### Section 4: Daftar Produk & WhatsApp Checkout (Product Catalog & WA Cart)
- **Daftar Produk**: Display catalog of Hidrolux machines & bundles.
- **Tambahkan Produk (Add to List)**: Users can add multiple products to a "Cart" list.
- **WhatsApp Checkout**: Users will click a button that redirects them to WhatsApp, with the message pre-filled with their selected products for easier consultation and purchasing.

## 3. Project Architecture (Next.js App Router)
Directory structure for the new Next.js project:
- `src/app/page.tsx` (Main Landing Page)
- `src/components/ui/` (shadcn/ui components)
- `src/components/sections/` (Hero, PeluangBisnis, AnalisaKeuntungan, KenapaHidrolux, DaftarProduk)
- `src/lib/store.ts` (Simple Zustand or React Context for the WA cart functionality)
- `src/lib/utils.ts` (Utility functions)
