import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ServicesOverview } from "@/components/sections/services-overview"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-blue to-brand-blue-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Our
            <span className="text-brand-lime"> Services</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive HR consulting and organizational transformation services tailored to meet your unique business
            needs and drive sustainable growth.
          </p>
        </div>
      </section>

      <ServicesOverview />
      <Footer />
    </div>
  )
}
