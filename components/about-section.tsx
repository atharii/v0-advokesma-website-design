"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

export function AboutSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="tentang" className="py-16 sm:py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Text content */}
          <div
            ref={ref}
            className={cn(
              "transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
            )}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6 sm:mb-8 text-left">
              Tentang Bidang Advokesma
            </h2>

            <div className="space-y-4 sm:space-y-6 text-muted-foreground text-sm sm:text-base lg:text-lg leading-relaxed">
              <p className="text-justify mx-0 my-0 px-0">
                Bidang Advokasi dan Kesejahteraan Mahasiswa (ADVOKESMA) HME merupakan bidang yang berperan dalam mengawal hak, aspirasi, dan kesejahteraan mahasiswa Teknik Elektro Universitas Diponegoro, baik pada aspek akademik maupun non-akademik. ADVOKESMA menjadi penghubung antara mahasiswa dengan pihak departemen dalam menciptakan lingkungan akademik yang adil dan suportif.
              </p>
            </div>
          </div>

          {/* Right side - Image placeholder */}
          <div
            className={cn(
              "transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
            )}
          >
            <div className="w-full h-80 sm:h-96 bg-muted border border-border rounded-none flex items-center justify-center text-center">
              <p className="text-muted-foreground text-center">Gambar Placeholder</p>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width slogan banner */}
      <div className="w-full mt-20 sm:mt-24 lg:mt-32">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bagian%203-BssbwUzjTn1ryBBzGvBwUkCxZyLFzD.jpg"
          alt="#KAMIDENGAR KAMISUARAKAN"
          width={1200}
          height={250}
          className="w-full object-cover tracking-normal h-56"
        />
      </div>
    </section>
  )
}
