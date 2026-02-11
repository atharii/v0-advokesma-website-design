"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

const leaders = [
  {
    name: "Athari Rafli R",
    position: "Kepala Bidang Advokesma",
    image: "/images/athari-20foto.png",
  },
  {
    name: "Mega Adinda",
    position: "Wakil Kepala Bidang Advokesma",
    image: "/images/foto-20mega.png",
  },
]

export function HeroSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 sm:pt-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-11%20at%2008.51.09%20%281%29-u4LSlSoTfen6imJzRuNL9gWaRcQNUt.jpeg"
          alt="Teknik Elektro Building"
          fill
          className="object-cover object-right"
          priority
        />
      </div>
      
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12 lg:py-20 text-xs">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center tracking-normal">
          {/* Left Content */}
          <div
            className={cn(
              "space-y-3 sm:space-y-6 text-center lg:text-left transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
            )}
          >
            <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-snug sm:leading-tight text-balance text-center lg:text-left">
              {"Bidang Advokesma Himpunan Mahasiswa Elektro UNDIP"}
            </h1>

            <p className="text-base sm:text-xl lg:text-2xl font-bold text-center lg:text-left text-destructive-foreground">
              #KamiDengarKamiSuarakan
            </p>

            <p className="text-white/80 text-xs sm:text-base lg:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
              Pusat layanan advokasi dan kesejahteraan mahasiswa Teknik Elektro Universitas Diponegoro.
            </p>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 pt-2 sm:pt-4 justify-center lg:justify-start">
              <Button
                asChild
                size="default"
                className="bg-white text-elektro-primary hover:bg-white/90 font-semibold text-xs sm:text-base h-9 sm:h-11"
              >
                <a href="https://bit.ly/IniBankSoalHME" target="_blank" rel="noopener noreferrer">
                  Akses Bank Soal
                </a>
              </Button>
              <Button
                asChild
                size="default"
                variant="outline"
                className="border-white text-white hover:bg-white/10 font-semibold bg-transparent text-xs sm:text-base h-9 sm:h-11"
              >
                <a href="https://bit.ly/BandingUKTHME" target="_blank" rel="noopener noreferrer">
                  Banding & Penyesuaian UKT
                </a>
              </Button>
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}
