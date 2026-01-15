import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FeaturedNewsSection } from "@/components/featured-news-section"
import { AboutSection } from "@/components/about-section"
import { DivisionSection } from "@/components/division-section"
import { ServicesSection } from "@/components/services-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturedNewsSection />
      <AboutSection />
      <DivisionSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
