"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"
import {
  Scale,
  Heart,
  GraduationCap,
  Share2,
  Database,
  BookOpen,
  Award,
  Users,
  ClipboardList,
  FileText,
} from "lucide-react"

const divisions = [
  {
    id: "advokasi",
    title: "Divisi Kastrat",
    icon: Scale,
    description:
      "Divisi Kastrat bertugas menampung, mengkaji, dan mengadvokasikan aspirasi mahasiswa Teknik Elektro kepada pihak Departemen dan fakultas. Fokus pada isu-isu akademik, sarana prasarana, serta kebijakan kampus.",
    programs: [
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
    ],
  },
  {
    id: "akademik",
    title: "Divisi Akademik",
    icon: GraduationCap,
    description:
      "Divisi Akademik bertanggung jawab menyediakan dukungan akademik seperti bank soal, panduan akademik, informasi Kerja Praktik (KP), MSIB, serta program-program yang membantu mahasiswa meningkatkan performa akademik.",
    programs: [
      {
        title: "KABEL",
        icon: Award,
        description:
          "Merupakan pengembangan dari dua program sebelumnya yaitu Kesma Share It dan Watt a Scholarship yang digabungkan menjadi satu pusat layanan informasi beasiswa. Program ini bertujuan menyediakan informasi pembukaan beasiswa secara terjadwal setiap tiga bulan, baik beasiswa internal maupun eksternal.",
      },
      {
        title: "Data Base ADVOKESMA",
        icon: Database,
        description:
          "Program Database ADVOKESMA bertujuan menyediakan pusat data terintegrasi yang memuat kebutuhan akademik dan kesejahteraan mahasiswa, berupa bank soal, bahan ajar, serta data Kerja Praktik (KP).",
      },
      {
        title: "CERTIPASS",
        icon: BookOpen,
        description:
          "Career Enhancement & Readiness Training Initiative – PASS Certification. Program ini secara spesifik bertujuan menyediakan layanan sertifikasi resmi bagi mahasiswa tingkat akhir sebagai bentuk peningkatan kesiapan karier dan daya saing lulusan Teknik Elektro.",
      },
    ],
  },
  {
    id: "pelayanan",
    title: "Divisi Pelayanan",
    icon: Heart,
    description:
      "Divisi Pelayanan berfokus pada pemenuhan kebutuhan keseharian mahasiswa Elektro, mulai dari pendataan kondisi sosial, bantuan dana atau fasilitas, hingga program apresiasi dan dukungan lain yang menunjang kenyamanan perkuliahan.",
    programs: [
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
        title: "Banding dan Penyesuaian UKT",
        icon: FileText,
        description:
          "Program Banding & Penyesuaian UKT bertujuan membantu mahasiswa Elektro dalam proses pengajuan banding dengan menyediakan fasilitas Pengecekan kelengkapan dokumen, serta penyediaan informasi mengenai alur dan tips banding.",
      },
    ],
  },
]

export function DivisionSection() {
  const { ref, isVisible } = useScrollAnimation()
  const [expandedDivision, setExpandedDivision] = useState<string | null>(null)
  const [editableDivisions, setEditableDivisions] = useState(divisions)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editingDescription, setEditingDescription] = useState("")

  const handleEditDescription = (divisionId: string) => {
    const division = editableDivisions.find((d) => d.id === divisionId)
    if (division) {
      setEditingId(divisionId)
      setEditingDescription(division.description)
    }
  }

  const handleSaveDescription = (divisionId: string) => {
    setEditableDivisions((prev) =>
      prev.map((d) => (d.id === divisionId ? { ...d, description: editingDescription } : d)),
    )
    setEditingId(null)
  }

  return (
    <section id="divisi" className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-elektro-light/5 to-background">
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "text-center mb-8 sm:mb-12 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">Struktur Divisi Advokesma</h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3 sm:space-y-4" onValueChange={setExpandedDivision}>
          {editableDivisions.map((division, index) => (
            <AccordionItem
              key={division.id}
              value={division.id}
              className={cn(
                "bg-card border border-border rounded-xl overflow-hidden shadow-sm transition-all duration-500 hover:shadow-md",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <AccordionTrigger className="px-4 sm:px-6 py-4 sm:py-5 hover:no-underline hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-elektro-primary/10 flex items-center justify-center shrink-0">
                    <division.icon className="w-5 h-5 sm:w-6 sm:h-6 text-elektro-primary" />
                  </div>
                  <span className="text-base sm:text-lg font-semibold text-foreground text-left">{division.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 sm:px-6 pb-4 sm:pb-6 pt-2">
                <div className="mb-6 pl-0 sm:pl-16">
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    {division.description}
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <h4 className="text-sm font-semibold text-foreground mb-4 pl-0 sm:pl-16">Program Kerja</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pl-0 sm:pl-16">
                    {division.programs.map((program) => (
                      <Card
                        key={program.title}
                        className="border border-border hover:border-elektro-primary/50 transition-all duration-300 hover:shadow-md"
                      >
                        <CardHeader className="pb-2 sm:pb-3">
                          <div className="flex items-center gap-2 sm:gap-3">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-elektro-primary/10 flex items-center justify-center shrink-0">
                              <program.icon className="w-4 h-4 sm:w-5 sm:h-5 text-elektro-primary" />
                            </div>
                            <CardTitle className="text-sm sm:text-base font-semibold text-foreground">
                              {program.title}
                            </CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed text-justify">
                            {program.description}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
