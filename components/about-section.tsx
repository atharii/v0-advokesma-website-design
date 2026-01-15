"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

export function AboutSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="tentang" className="py-16 sm:py-20 lg:py-28 bg-background">
      <div ref={ref} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={cn(
            "transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6 sm:mb-8">
            Tentang Bidang Advokesma
          </h2>

          <div className="space-y-4 sm:space-y-6 text-muted-foreground text-sm sm:text-base lg:text-lg leading-relaxed">
            <p className="text-center">
              Bidang Advokesma Himpunan Mahasiswa Elektro UNDIP berfokus pada pemenuhan kesejahteraan mahasiswa, baik
              akademik maupun non-akademik. Advokesma menjadi jembatan antara mahasiswa dan pihak Departemen untuk
              memastikan hak, kebutuhan, dan aspirasi mahasiswa tersalurkan dengan tepat.
            </p>
            <p className="text-center">
              Melalui tiga divisi Advokasi, Pelayanan, dan Akademik, Advokesma menyediakan berbagai layanan, mulai dari pendampingan banding UKT, inventarisasi isu, dan pelayanan sosial, hingga penyediaan bank soal serta dukungan akademik lainnya.
            </p>
          </div>

          <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-border">
            <Image
              src="/images/slogan.png"
              alt="#KAMIDENGAR KAMISUARAKAN"
              width={600}
              height={150}
              className="mx-auto w-full max-w-md sm:max-w-lg lg:max-w-xl h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
