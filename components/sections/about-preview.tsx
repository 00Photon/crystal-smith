"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight, Award } from "lucide-react"
import { ContactModal } from "@/components/ui/contact-modal"

const achievements = [
  { number: "200+", label: "Projects Completed" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "15+", label: "Years Experience" },
]

export function AboutPreview() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-brand-lime/10 text-brand-blue rounded-full text-sm font-medium">
                About CrystalSmith
              </div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
                Shaping Our
                <br />
                <span className="text-brand-lime font-medium">Tomorrow,</span>
                <br />
                Today
              </h2>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed font-light">
              Founded on the principles of innovation, integrity, and excellence, CrystalSmith Consulting Limited
              partners with clients to navigate intricate business landscapes, unlock potential, and deliver tailored
              solutions.
            </p>

            {/* Achievement Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 py-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-brand-blue mb-2">{achievement.number}</div>
                  <div className="text-xs md:text-sm text-gray-600 font-medium">{achievement.label}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-6">
              <button onClick={() => setIsContactModalOpen(true)} className="group inline-block">
                <div className="flex items-center space-x-2 text-gray-900 hover:text-brand-lime transition-colors">
                  <span className="text-lg font-medium">Learn more about us</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="w-48 h-px bg-gray-900 mt-2 group-hover:bg-brand-lime transition-colors"></div>
              </button>
            </div>
          </div>

          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-4 md:space-y-6">
                <div className="relative h-40 md:h-48 rounded-lg overflow-hidden">
                  <Image
                    src="/images/business-consultation-2.jpg"
                    alt="Team collaboration"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="relative h-24 md:h-32 rounded-lg overflow-hidden">
                  <Image
                    src="/change-management.jpg"
                    alt="Strategic planning"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 md:space-y-6 pt-8 md:pt-12">
                <div className="relative h-24 md:h-32 rounded-lg overflow-hidden">
                  <Image
                    src="/last.jpg"
                    alt="Leadership development"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="relative h-40 md:h-48 rounded-lg overflow-hidden">
                  <Image
                    src="/organ.jpg"
                    alt="Business transformation"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Floating Achievement Card */}
            <div className="absolute -bottom-4 md:-bottom-6 -left-4 md:-left-6 bg-white rounded-lg p-4 md:p-6 shadow-xl">
              <div className="flex items-center space-x-3 md:space-x-4">
                <div className="p-2 md:p-3 bg-brand-lime/10 rounded-full">
                  <Award className="h-5 w-5 md:h-6 md:w-6 text-brand-blue" />
                </div>
                <div>
                  <div className="text-lg md:text-2xl font-bold text-brand-blue">Excellence</div>
                  <div className="text-xs md:text-sm text-gray-600">Driven Results</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </section>
  )
}
