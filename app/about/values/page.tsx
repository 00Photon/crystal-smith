"use client"

import { useState } from "react"
import { ContactModal } from "@/components/ui/contact-modal"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Award, Lightbulb, Target, ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"

const values = [
  {
    icon: Users,
    title: "Collaboration",
    subtitle: "Working Together for Success",
    description:
      "We value teamwork and inclusivity, working closely with clients to create tailored solutions that address their unique needs and drive transformative results.",
    details: [
      "Cross-functional team integration",
      "Stakeholder engagement at all levels",
      "Inclusive decision-making processes",
      "Knowledge sharing and best practices",
      "Building lasting partnerships",
    ],
    color: "bg-blue-50 text-brand-blue",
    borderColor: "border-l-brand-blue",
  },
  {
    icon: Award,
    title: "Integrity",
    subtitle: "Our Foundational Pledge",
    description:
      "At CrystalSmith Consulting Limited, integrity is our foundational pledge. We adhere to the utmost ethical principles, guaranteeing transparency, accountability, and trust in every engagement.",
    details: [
      "Transparent communication and reporting",
      "Ethical business practices",
      "Confidentiality and data protection",
      "Honest assessments and recommendations",
      "Accountability for outcomes",
    ],
    color: "bg-green-50 text-brand-lime-dark",
    borderColor: "border-l-brand-lime",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    subtitle: "Forward-Thinking Solutions",
    description:
      "We foster an environment that encourages forward-thinking and creativity, leveraging cutting-edge tools to develop actionable strategies that help businesses adapt, evolve, and succeed.",
    details: [
      "Creative problem-solving approaches",
      "Technology-enabled solutions",
      "Continuous learning and development",
      "Adaptive methodologies",
      "Future-focused strategies",
    ],
    color: "bg-yellow-50 text-yellow-600",
    borderColor: "border-l-yellow-500",
  },
  {
    icon: Target,
    title: "Excellence",
    subtitle: "Setting Industry Benchmarks",
    description:
      "Our commitment to excellence drives us to exceed expectations, delivering innovative solutions and exceptional service that set industry benchmarks.",
    details: [
      "Quality assurance processes",
      "Continuous improvement mindset",
      "Best-in-class service delivery",
      "Performance measurement and optimization",
      "Client satisfaction focus",
    ],
    color: "bg-purple-50 text-purple-600",
    borderColor: "border-l-purple-500",
  },
]

export default function ValuesPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-blue to-brand-blue-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-brand-lime/20 text-brand-lime rounded-full text-sm font-medium mb-6">
                Our Core Values
              </div>
              <h1 className="text-5xl font-bold mb-6">
                CIIE - The Principles
                <span className="text-brand-lime"> That Guide Us</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed mb-8">
                Our core values form the foundation of everything we do. They guide our decisions, shape our culture,
                and define how we serve our clients and communities.
              </p>
              <Button
                size="lg"
                onClick={() => setIsContactModalOpen(true)}
                className="bg-brand-lime text-brand-blue hover:bg-brand-lime-light"
              >
                Work With Us <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="relative">
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/business-consultation-1.jpg"
                  alt="Team collaboration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Understanding
              <span className="text-brand-blue"> CIIE</span>
            </h2>
            <div className="w-20 h-1 bg-brand-lime mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Each letter in CIIE represents a fundamental value that drives our approach to consulting and client
              relationships. These values are not just words on a wall—they are lived principles that shape every
              interaction and decision.
            </p>
          </div>

          {/* Values Grid */}
          <div className="space-y-16">
            {values.map((value, index) => {
              const IconComponent = value.icon
              const isEven = index % 2 === 0

              return (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? "lg:grid-flow-col-dense" : ""}`}
                >
                  {/* Content */}
                  <div className={`space-y-6 ${!isEven ? "lg:col-start-2" : ""}`}>
                    <div className="flex items-center space-x-4">
                      <div className={`p-4 rounded-xl ${value.color}`}>
                        <IconComponent className="h-10 w-10" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-brand-blue">{value.title}</h3>
                        <p className="text-lg text-gray-600">{value.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed">{value.description}</p>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-brand-blue">How we demonstrate {value.title.toLowerCase()}:</h4>
                      <ul className="space-y-2">
                        {value.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-brand-lime mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Visual Card */}
                  <div className={!isEven ? "lg:col-start-1 lg:row-start-1" : ""}>
                    <Card className={`h-full border-l-4 ${value.borderColor} shadow-xl`}>
                      <CardHeader className="text-center pb-8">
                        <div
                          className={`w-20 h-20 mx-auto rounded-full ${value.color} flex items-center justify-center mb-4`}
                        >
                          <IconComponent className="h-10 w-10" />
                        </div>
                        <CardTitle className="text-2xl text-brand-blue">{value.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="text-center">
                        <div className="relative w-full h-48 rounded-lg overflow-hidden mb-6">
                          <Image
                            src="/images/business-consultation-2.jpg"
                            alt={`${value.title} in action`}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <blockquote className="text-lg font-medium text-gray-700 italic">
                          "{value.description.split(".")[0]}."
                        </blockquote>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-brand-blue to-brand-blue-dark rounded-2xl p-12 text-white text-center">
            <h3 className="text-4xl font-bold mb-6 text-brand-lime">Corporate Philosophy</h3>
            <blockquote className="text-3xl font-semibold mb-6">"Shaping Our Tomorrow, Today"</blockquote>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
              A philosophy that underscores our dedication to driving meaningful change through actionable strategies.
              We strive to instill resilience, adaptability, and excellence in every client we serve, empowering them to
              thrive in an ever-evolving business landscape.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-lime mb-2">Resilience</div>
                <p className="text-blue-100">Building organizations that can withstand and adapt to challenges</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-lime mb-2">Adaptability</div>
                <p className="text-blue-100">Fostering flexibility and responsiveness to change</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-lime mb-2">Excellence</div>
                <p className="text-blue-100">Pursuing the highest standards in everything we do</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Contact Modal */}
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  )
}
