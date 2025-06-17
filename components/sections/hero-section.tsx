"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ContactModal } from "@/components/ui/contact-modal"
import { ArrowRight, TrendingUp, Users, Target } from "lucide-react"

const floatingServices = [
  {
    icon: TrendingUp,
    title: "Change Management",
    description: "Strategic transformation guidance",
  },
  {
    icon: Users,
    title: "Talent Solutions",
    description: "End-to-end HR consulting",
  },
  {
    icon: Target,
    title: "Organizational Development",
    description: "Structure optimization",
  },
]

export function HeroSection() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <>
      <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fillRule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%239ACD32&quot; fillOpacity=&quot;0.1&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;1&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-4 h-4 bg-brand-lime rounded-sm transform rotate-45 hidden lg:block"></div>
        <div className="absolute bottom-32 left-16 w-6 h-6 bg-brand-lime rounded-sm transform rotate-45 hidden lg:block"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-200px)]">
            {/* Left Content */}
            <div className="text-white space-y-8 relative z-10">
              {/* Badge */}
              <div className="inline-block px-4 py-2 bg-brand-lime/20 text-brand-lime rounded-full text-sm font-medium">
                Your Transformation Partners
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Guiding Organizations Through
                  <span className="text-brand-lime"> Transformative Change</span>
                </h1>
              </div>

              {/* Description */}
              <p className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-lg">
                CrystalSmith Consulting Limited specializes in change management, organizational development, and HR
                consulting. We help businesses navigate complex transitions and achieve sustainable growth.
              </p>

              {/* Key Points */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-brand-lime rounded-full"></div>
                  <span className="text-blue-100">Expert change management consulting</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-brand-lime rounded-full"></div>
                  <span className="text-blue-100">Comprehensive HR solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-brand-lime rounded-full"></div>
                  <span className="text-blue-100">Proven transformation strategies</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  onClick={() => setIsContactModalOpen(true)}
                  className="bg-brand-lime text-brand-blue hover:bg-brand-lime-light font-semibold"
                >
                  Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-brand-lime text-brand-lime hover:bg-brand-lime hover:text-brand-blue"
                >
                  Learn More About Us
                </Button>
              </div>
            </div>

            {/* Right Image with Floating Cards */}
            <div className="relative">
              <div className="relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/business-consultation-1.jpg"
                  alt="Business transformation consultation"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/20 to-transparent"></div>

                {/* Floating Service Cards */}
                <div className="absolute top-16 right-4 md:right-8">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-xl border border-white/20 w-56 group hover:bg-white transition-all duration-300">
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-brand-lime/10 rounded-lg">
                        <TrendingUp className="h-5 w-5 text-brand-blue" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1 flex items-center">
                          Change Management
                          <span className="ml-2 text-brand-lime text-lg">+</span>
                        </h3>
                        <p className="text-sm text-gray-600">Strategic transformation guidance</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-20 right-12 md:right-16">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-xl border border-white/20 w-56 group hover:bg-white transition-all duration-300">
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-brand-lime/10 rounded-lg">
                        <Users className="h-5 w-5 text-brand-blue" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1 flex items-center">
                          Talent Solutions
                          <span className="ml-2 text-brand-lime text-lg">+</span>
                        </h3>
                        <p className="text-sm text-gray-600">End-to-end HR consulting</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-1/2 left-4 md:left-8 transform -translate-y-1/2">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-xl border border-white/20 w-56 group hover:bg-white transition-all duration-300">
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-brand-lime/10 rounded-lg">
                        <Target className="h-5 w-5 text-brand-blue" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1 flex items-center">
                          Organizational Development
                          <span className="ml-2 text-brand-lime text-lg">+</span>
                        </h3>
                        <p className="text-sm text-gray-600">Structure optimization</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-6 shadow-xl hidden md:block">
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-blue mb-1">200+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <div className="absolute bottom-0 left-0 right-0 bg-brand-blue-dark/50 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="text-center mb-4">
              <p className="text-xs text-blue-200 uppercase tracking-wider">Trusted by Leading Organizations</p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 opacity-80">
              <div className="text-blue-200 font-medium text-sm">Federal Ministry of Health</div>
              <div className="text-blue-200 font-medium text-sm">TechNova Solutions</div>
              <div className="text-blue-200 font-medium text-sm">Sahara Bank</div>
              <div className="text-blue-200 font-medium text-sm hidden md:block">NNPC Limited</div>
              <div className="text-blue-200 font-medium text-sm hidden md:block">Dangote Group</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </>
  )
}
