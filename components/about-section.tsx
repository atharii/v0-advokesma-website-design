"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

export function AboutSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="tentang" className="py-16 sm:py-20 lg:py-28 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={cn(
            "transition-all duration-700 flex flex-col gap-8",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          {/* Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground text-left">
            Tentang Bidang Advokesma
          </h2>

          {/* Image placeholder */}
          <div className="w-full h-64 sm:h-80 lg:h-96 bg-muted border border-border flex items-center justify-center text-center">
            <p className="text-muted-foreground">Gambar Placeholder</p>
          </div>

          {/* Text content */}
          <div className="space-y-4 sm:space-y-6 text-muted-foreground text-sm sm:text-base lg:text-lg leading-relaxed">
            <p className="text-justify">
              Bidang Advokasi dan Kesejahteraan Mahasiswa (ADVOKESMA) HME merupakan bidang yang berperan dalam mengawal hak, aspirasi, dan kesejahteraan mahasiswa Teknik Elektro Universitas Diponegoro, baik pada aspek akademik maupun non-akademik. ADVOKESMA menjadi penghubung antara mahasiswa dengan pihak departemen dalam menciptakan lingkungan akademik yang adil dan suportif.
            </p>
          </div>
        </div>
      </div>


    </section>
  )
}
