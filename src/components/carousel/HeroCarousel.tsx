"use client"

import { useEffect, useState, useCallback } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { BannerLayanan } from "./BannerLayanan"
import { BannerProduk1 } from "./BannerProduk1"
import { BannerProduk2 } from "./BannerProduk2"
import { BannerPemasangan } from "./BannerPemasangan"

const SLIDES = [
  { id: 0, component: <BannerLayanan /> },
  { id: 1, component: <BannerProduk1 /> },
  { id: 2, component: <BannerProduk2 /> },
  { id: 3, component: <BannerPemasangan /> },
]

const AUTO_SLIDE_INTERVAL = 4000

export function HeroCarousel() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  const onSelect = useCallback(() => {
    if (!api) return
    setCurrent(api.selectedScrollSnap())
  }, [api])

  useEffect(() => {
    if (!api) return
    api.on("select", onSelect)
    return () => { api.off("select", onSelect) }
  }, [api, onSelect])

  // Auto-slide
  useEffect(() => {
    if (!api) return
    const timer = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext()
      } else {
        api.scrollTo(0)
      }
    }, AUTO_SLIDE_INTERVAL)
    return () => clearInterval(timer)
  }, [api])

  return (
    <section className="py-2 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <Carousel setApi={setApi} opts={{ loop: true, align: "start" }} className="w-full">
          <CarouselContent className="ml-0">
            {SLIDES.map((slide) => (
              <CarouselItem key={slide.id} className="pl-0">
                {slide.component}
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-2">
          {SLIDES.map((slide) => (
            <button
              key={slide.id}
              onClick={() => api?.scrollTo(slide.id)}
              className="transition-all duration-300 rounded-full"
              style={{
                width: current === slide.id ? "24px" : "8px",
                height: "8px",
                backgroundColor: current === slide.id ? "#3483C2" : "#AFD8DD",
              }}
              aria-label={`Slide ${slide.id + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
