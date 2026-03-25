# Hidrolux Website Implementation Plan

## 1. Product Goal
Hidrolux website is a single-page sales funnel for high-ticket water machine products and related services.
Main objective: convert visitors into qualified leads via WhatsApp and phone CTA.

## 2. Business Scope
Products:
- Mesin Depot Air Minum Isi Ulang
- Mesin RO (Reverse Osmosis)
- Mesin Air Mineral and OXY
- Water Treatment Plant (WTP)
- Mesin AMDK (Air Minum Dalam Kemasan)
- Sparepart water purifier
- Jasa service mesin

Service bundle:
- Instalasi seluruh Indonesia
- Training penggunaan mesin
- Service dan maintenance
- Konsultasi bisnis depot air minum

## 3. Primary Conversion Action
Main conversion target:
- Click WhatsApp CTA

Secondary conversion targets:
- Click phone CTA
- Submit short consultation form

## 4. Funnel Structure (Single Page)
Recommended user flow:
1. Hero: problem statement + value proposition + CTA
2. Opportunity: business potential and market demand
3. Product Portfolio: machine categories and key differences
4. Benefits: why Hidrolux is profitable and low risk
5. Trust and Credibility: factory, company proof, location, warranty
6. Service and After-sales: installation, training, maintenance
7. Promo and Urgency: limited voucher, shipping bonus, countdown
8. FAQ: objection handling before chat
9. Final CTA block: repeated WhatsApp push

## 5. Recommended Project Structure
Use feature-first architecture with clear separation for reusable and business modules.

Suggested structure:
- src/app/core
- src/app/shared
- src/app/layout
- src/app/features/home
- src/app/features/products
- src/app/features/services
- src/app/features/promo
- src/app/features/faq
- src/app/features/contact
- src/components/ui
- src/lib

## 6. shadcn-ng Component Mapping
Core components to generate first:
- button
- card
- badge
- separator
- accordion
- input
- textarea
- select
- dialog
- sheet
- toast
- tabs

Why these first:
- They cover CTA, section layout, objection handling, form capture, and mobile interaction.

Components for phase 2:
- avatar
- carousel
- table
- tooltip
- popover
- alert
- alert-dialog

Note:
- Countdown, sticky CTA, and floating WhatsApp button should be custom components.

## 7. Section to Component Blueprint
Hero section:
- badge, button, separator

Products section:
- tabs, card, button

Benefits section:
- card, badge

Trust section:
- card, avatar, carousel

Promo section:
- alert, badge, button
- custom countdown component

FAQ section:
- accordion

Final CTA section:
- button, sheet or dialog, toast

## 8. Copy and Persuasion Guideline
Use this copy order in each major section:
1. Problem
2. Consequence
3. Solution
4. Proof
5. Call to action

CTA text references:
- Gratis Konsultasi
- Survey Lokasi Gratis
- Chat WhatsApp Sekarang
- Cek Kelayakan Usaha Anda

## 9. Lead Form Minimal Fields
Lead form should be short to reduce friction.
Recommended fields:
- Nama
- Kota
- Jenis usaha (baru or existing)
- Minat produk
- Nomor WhatsApp

## 10. Tracking and KPI
Track at minimum:
- WhatsApp CTA click
- Phone CTA click
- Form submit
- Scroll depth to promo section
- FAQ interaction rate

Initial KPI target:
- CTR CTA utama >= 4%
- Conversion to WA chat >= 2%

## 11. Delivery Phases
Phase 1 (MVP funnel):
- Hero, product cards, trust block, FAQ, final CTA
- WhatsApp and phone CTA integration
- Basic tracking events

Phase 2 (conversion optimization):
- Promo countdown
- Sticky CTA on scroll
- Improved trust proof and testimonials
- A/B testing headline and CTA copy

Phase 3 (scale):
- SEO expansion pages
- Blog or edukasi content
- Advanced analytics dashboard

## 12. Build Order Checklist
1. Lock folder structure and routes
2. Generate core shadcn components
3. Build layout shell and navbar
4. Build each funnel section from top to bottom
5. Implement CTA actions and tracking
6. QA on mobile and desktop
7. Launch MVP

## 13. Commands Reference
Generate core components:

```bash
npx shadcn-ng@latest add button card badge separator accordion input textarea select dialog sheet toast tabs
```

Generate phase 2 components:

```bash
npx shadcn-ng@latest add avatar carousel table tooltip popover alert alert-dialog
```

Run app:

```bash
npm start
```

Build app:

```bash
npm run build
```
