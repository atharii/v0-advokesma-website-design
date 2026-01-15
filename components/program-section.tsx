"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"
import { Share2, Database, BookOpen, GraduationCap, Heart, FileText, Users, ClipboardList, Award } from "lucide-react"

const programs = [
  {
    title: "Kesma Share It!",
    icon: Share2,
    description:
      "Program penyebaran informasi beasiswa, lowongan kerja, dan peluang akademik (termasuk MSIB) untuk mahasiswa dan alumni Teknik Elektro.",
  },
  {
    title: "Database Kesma",
    icon: Database,
    description:
      "Pengumpulan dan penyimpanan bank soal mata kuliah umum dan konsentrasi, serta database tempat Kerja Praktik.",
  },
  {
    title: "Electrical Guidebook",
    icon: BookOpen,
    description:
      "Panduan terintegrasi prosedur akademik dan non-akademik: IRS, pengajuan MK, alur KP, seminar, reward prestasi, dan lain-lain.",
  },
  {
    title: "CELERON",
    icon: GraduationCap,
    description:
      "Program apresiasi wisudawan Elektro UNDIP berupa arak-arakan, konten publikasi, dan dokumentasi di setiap periode wisuda.",
  },
  {
    title: "Electrical Charity (ECHA)",
    icon: Heart,
    description:
      "Program bantuan dana untuk mahasiswa Elektro yang membutuhkan, berdasarkan pendataan kondisi ekonomi.",
  },
  {
    title: "Banding & Penyesuaian UKT",
    icon: FileText,
    description:
      "Pendampingan mahasiswa dalam proses pengajuan banding serta penyesuaian UKT, termasuk pengecekan berkas dan alur administrasi.",
  },
  {
    title: "Forum Dosen Mahasiswa",
    icon: Users,
    description:
      "Forum resmi penyampaian aspirasi mahasiswa terkait pelayanan, sarpras, dan akademik kepada Departemen dan dosen.",
  },
  {
    title: "Inventarisasi Isu",
    icon: ClipboardList,
    description:
      "Pendataan berkala isu-isu mahasiswa dan kondisi sarana-prasarana di kelas, laboratorium, dan fasilitas umum Teknik Elektro.",
  },
  {
    title: "Watt A Scholarship!",
    icon: Award,
    description:
      "Keterlibatan Advokesma dalam EXPO beasiswa bagi mahasiswa baru, mengenalkan beragam beasiswa dan memperluas jaringan.",
  },
]

export function ProgramSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="proker" className="py-16 sm:py-20 lg:py-28 bg-background">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "text-center mb-8 sm:mb-12 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">Program Kerja</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {programs.map((program, index) => (
            <Card
              key={program.title}
              className={cn(
                "group border border-border hover:border-elektro-primary/50 transition-all duration-500 hover:shadow-lg hover:-translate-y-1",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
              )}
              style={{ transitionDelay: `${(index % 6) * 100}ms` }}
            >
              <CardHeader className="pb-2 sm:pb-3">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-elektro-primary/10 flex items-center justify-center group-hover:bg-elektro-primary/20 transition-colors shrink-0">
                    <program.icon className="w-4 h-4 sm:w-5 sm:h-5 text-elektro-primary" />
                  </div>
                  <CardTitle className="text-sm sm:text-base lg:text-lg font-semibold text-foreground">
                    {program.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{program.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
