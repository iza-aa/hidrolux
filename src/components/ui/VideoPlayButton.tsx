"use client"

import { Play } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function VideoPlayButton() {
  return (
    <Dialog>
      <DialogTrigger className="group inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white border border-gray-100 hover:border-brand-pink/40 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer">
        {/* Pulsing play icon */}
        <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-brand-pink shrink-0">
          <span className="absolute animate-ping h-full w-full rounded-full bg-brand-pink opacity-50"></span>
          <Play className="relative w-4 h-4 text-white fill-white translate-x-px" />
        </span>
        {/* Text */}
        <span className="flex flex-col items-start leading-none gap-0.5">
          <span className="text-[10px] font-bold tracking-widest uppercase text-brand-pink">
            DOKUMENTASI
          </span>
          <span className="text-sm font-bold text-slate-800 group-hover:text-brand-pink transition-colors whitespace-nowrap">
            Video Pemasangan
          </span>
        </span>
        {/* Duration tag */}
        <span className="ml-1 text-[10px] font-semibold text-slate-400 bg-gray-100 rounded-full px-2 py-0.5 whitespace-nowrap">
          Proses Nyata
        </span>
      </DialogTrigger>

      <DialogContent
        className="max-w-3xl p-0 overflow-hidden rounded-2xl"
        showCloseButton={true}
      >
        <DialogTitle className="sr-only">Video Pemasangan Hidro</DialogTitle>
        {/* Taruh video di public/videos/pemasangan.mp4 */}
        <video
          src="/videos/pemasangan.mp4"
          controls
          autoPlay
          muted
          playsInline
          className="w-full aspect-video bg-black"
        />
      </DialogContent>
    </Dialog>
  )
}
