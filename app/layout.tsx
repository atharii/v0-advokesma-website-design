import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Advokesma HME Elektro UNDIP 2025",
  description:
    "Bidang Advokesma Himpunan Mahasiswa Elektro UNDIP - Pusat informasi advokasi, pelayanan, dan akademik untuk seluruh mahasiswa Teknik Elektro UNDIP.",
  keywords: ["Advokesma", "HME", "Elektro", "UNDIP", "Bank Soal", "UKT", "Mahasiswa"],
  authors: [{ name: "Bidang Advokesma HME Elektro UNDIP" }],
  openGraph: {
    title: "Advokesma HME Elektro UNDIP 2025",
    description: "Pusat informasi advokasi, pelayanan, dan akademik untuk seluruh mahasiswa Teknik Elektro UNDIP",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className={`${poppins.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
