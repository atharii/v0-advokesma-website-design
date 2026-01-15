"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"
import { Mail, Phone, Instagram } from "lucide-react"

export function ContactSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="kontak"
      className="py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-elektro-dark via-elektro-primary to-elektro-dark"
    >
      <div ref={ref} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "text-center mb-8 sm:mb-12 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">Contact Person Advokesma</h2>
        </div>

        <Card
          className={cn(
            "bg-white/10 backdrop-blur-sm border-white/20 transition-all duration-700 delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <CardContent className="p-4 sm:p-6 lg:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {/* Email Card */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=advokesma.hmeftundip@gmail.com"
                className="flex flex-col sm:flex-col items-center sm:items-center gap-3 p-4 sm:p-5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group text-center"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="text-center">
                  <p className="text-white/60 text-xs sm:text-sm mb-1">Email</p>
                  <p className="text-white font-medium text-xs sm:text-sm break-all text-center">
                    advokesma.hmeftundip@gmail.com
                  </p>
                </div>
              </a>

              {/* WhatsApp Card */}
              <a
                href="https://wa.me/6288212492409"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col sm:flex-col items-center sm:items-center gap-3 p-4 sm:p-5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group text-center"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="text-center">
                  <p className="text-white/60 text-xs sm:text-sm mb-1">WhatsApp (Athari)</p>
                  <p className="text-white font-medium text-xs sm:text-sm">+62 882-1249-2409</p>
                </div>
              </a>

              {/* Instagram Card */}
              <a
                href="https://www.instagram.com/advokesma.hmeftundip/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col sm:flex-col items-center sm:items-center gap-3 p-4 sm:p-5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group text-center"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors shrink-0">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
                <div className="text-center">
                  <p className="text-white/60 text-xs sm:text-sm mb-1">Instagram</p>
                  <p className="text-white font-medium text-xs sm:text-sm">@advokesma.hmeftundip</p>
                </div>
              </a>
            </div>

            <p className="text-white/70 text-center text-xs sm:text-sm">
              Saluran resmi komunikasi dan layanan Bidang Advokesma Himpunan Mahasiswa Elektro UNDIP.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
