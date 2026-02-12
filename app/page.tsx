import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { DivisionSection } from "@/components/division-section"
import { ProgramSection } from "@/components/program-section"
import { ServicesSection } from "@/components/services-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <DivisionSection />
      <ProgramSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
