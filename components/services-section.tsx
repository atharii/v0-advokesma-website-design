"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"
import { FileText, Scale, BookOpenCheck, ExternalLink } from "lucide-react"

const services = [
  {
    title: "Bank Soal HME",
    icon: FileText,
    description: "Kumpulan soal dan materi dari mata kuliah umum dan konsentrasi Teknik Elektro UNDIP.",
    buttonText: "Buka Bank Soal",
    link: "https://bit.ly/IniBankSoalHME",
  },
  {
    title: "Banding & Penyesuaian UKT",
    icon: Scale,
    description: "Informasi alur, berkas, dan pendampingan banding / penyesuaian UKT.",
    buttonText: "Panduan Banding UKT",
    link: "https://bit.ly/BandingUKTHME",
  },
  {
    title: "Panduan Akademik Lainnya",
    icon: BookOpenCheck,
    description: "Guidebook akademik: IRS, KP, seminar, pengajuan MK, beasiswa, dsb.",
    buttonText: "Segera Hadir",
    link: null,
  },
]

export function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="layanan"
      className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-elektro-light/10 to-elektro-primary/10"
    >
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "text-center mb-8 sm:mb-12 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">Layanan Cepat Advokesma</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className={cn(
                "bg-card border-none shadow-lg hover:shadow-xl transition-all duration-500",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-4 sm:p-6 lg:p-8 flex flex-col items-center text-center h-full">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-elektro-primary flex items-center justify-center mb-4 sm:mb-6">
                  <service.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-foreground mb-2 sm:mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm mb-4 sm:mb-6 flex-grow">{service.description}</p>
                {service.link ? (
                  <Button
                    asChild
                    className="w-full bg-elektro-primary hover:bg-elektro-dark text-white text-xs sm:text-sm"
                  >
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      {service.buttonText}
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                    </a>
                  </Button>
                ) : (
                  <Button disabled className="w-full bg-muted text-muted-foreground text-xs sm:text-sm">
                    {service.buttonText}
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
