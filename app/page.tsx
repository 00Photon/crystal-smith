import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutPreview } from "@/components/sections/about-preview"
import { ServicesOverview } from "@/components/sections/services-overview"
import { ValuesSection } from "@/components/sections/values-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { CTASection } from "@/components/sections/cta-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header transparent={true} />
      <main>
        <HeroSection />
        <AboutPreview />
        <ServicesOverview />
        <ValuesSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
