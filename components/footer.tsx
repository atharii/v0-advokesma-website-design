import Image from "next/image"
import { Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-elektro-dark py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <Image src="/images/logo-20hme-201.png" alt="Logo HME" width={48} height={48} className="w-12 h-12" />
            <div>
              <p className="text-white font-semibold text-sm sm:text-base">
                Bidang Advokesma Himpunan Mahasiswa Elektro UNDIP 2026
              </p>
              <p className="text-white/70 text-xs sm:text-sm mt-1">#KAMIDENGARKAMISUARAKAN</p>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-white font-semibold text-sm sm:text-base">
              Departemen Teknik Elektro Universitas Diponegoro
            </p>
            <p className="text-white/60 text-xs sm:text-sm mt-1">Jl. Prof. Soedarto, SH, Tembalang, Semarang. Jawa Tengah, Indonesia. 50275.</p>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/10 text-center">
          <p className="text-white/40 text-xs">© 2026 Advokesma HME Elektro UNDIP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
