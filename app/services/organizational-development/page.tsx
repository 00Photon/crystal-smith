"use client"

import { useState } from "react"
import { ContactModal } from "@/components/ui/contact-modal"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Target, ArrowRight, CheckCircle, Building, Users, Cog, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const serviceAreas = [
  {
    icon: Building,
    title: "Organizational Structure Design",
    description:
      "Optimize reporting relationships, spans of control, and organizational hierarchy for maximum efficiency",
  },
  {
    icon: Cog,
    title: "Process Optimization",
    description: "Streamline workflows, eliminate redundancies, and improve operational effectiveness",
  },
  {
    icon: Users,
    title: "Culture Transformation",
    description: "Shape organizational culture to align with strategic objectives and values",
  },
  {
    icon: TrendingUp,
    title: "Performance Enhancement",
    description: "Implement systems and practices that drive sustainable performance improvements",
  },
]

const benefits = [
  "Improved operational efficiency",
  "Enhanced employee engagement",
  "Better decision-making processes",
  "Increased organizational agility",
  "Stronger competitive advantage",
  "Sustainable growth foundation",
]

export default function OrganizationalDevelopmentPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-blue to-brand-blue-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-brand-lime/20 text-brand-lime border-brand-lime mb-6">Transformation</Badge>
              <h1 className="text-5xl font-bold mb-6">
                Organizational
                <span className="text-brand-lime"> Development</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed mb-8">
                Transform structures, processes, and cultures to unlock your organization's full potential. We help you
                build adaptive, high-performing organizations ready for future challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={() => setIsContactModalOpen(true)}
                  className="bg-brand-lime text-brand-blue hover:bg-brand-lime-light"
                >
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-brand-lime text-brand-lime hover:bg-brand-lime hover:text-brand-blue"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/business-consultation-2.jpg"
                  alt="Organizational development"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Building Organizations for
                  <span className="text-brand-blue"> Tomorrow</span>
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Organizational development is about creating sustainable change that enhances your organization's
                  capacity to adapt, grow, and thrive. We work with you to design and implement comprehensive
                  transformation initiatives that address structure, processes, culture, and capabilities.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our approach combines proven methodologies with innovative thinking to create organizations that are
                  not only efficient today but also resilient and adaptable for the future.
                </p>
              </div>

              {/* Service Areas */}
              <div>
                <h3 className="text-2xl font-bold text-brand-blue mb-6">Our Service Areas</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {serviceAreas.map((area, index) => {
                    const IconComponent = area.icon
                    return (
                      <Card key={index} className="border-l-4 border-l-brand-blue">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="p-3 bg-brand-blue/10 rounded-lg">
                              <IconComponent className="h-6 w-6 text-brand-blue" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-brand-blue mb-2">{area.title}</h4>
                              <p className="text-gray-600 text-sm">{area.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-brand-blue flex items-center">
                    <Target className="h-6 w-6 mr-2" />
                    Key Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-brand-lime" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="shadow-xl bg-gradient-to-br from-brand-blue to-brand-blue-dark text-white">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-4 text-brand-lime">Free Assessment</h3>
                  <p className="text-blue-100 mb-6">
                    Get a complimentary organizational assessment to identify improvement opportunities.
                  </p>
                  <Button className="w-full bg-brand-lime text-brand-blue hover:bg-brand-lime-light">
                    <Link href="/contact">Request Assessment</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Development
              <span className="text-brand-blue"> Methodology</span>
            </h2>
            <div className="w-20 h-1 bg-brand-lime mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach to organizational development that ensures sustainable transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center shadow-lg border-0">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  1
                </div>
                <h3 className="text-xl font-bold text-brand-blue mb-4">Diagnose</h3>
                <p className="text-gray-600">
                  Comprehensive assessment of current organizational state, challenges, and opportunities for
                  improvement.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg border-0">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-brand-lime text-brand-blue rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  2
                </div>
                <h3 className="text-xl font-bold text-brand-blue mb-4">Design</h3>
                <p className="text-gray-600">
                  Development of tailored solutions and implementation roadmap aligned with strategic objectives.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg border-0">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  3
                </div>
                <h3 className="text-xl font-bold text-brand-blue mb-4">Deploy</h3>
                <p className="text-gray-600">
                  Systematic implementation with continuous monitoring, adjustment, and support for sustainable change.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-blue to-brand-blue-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Transform Your
            <span className="text-brand-lime"> Organization Today</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Ready to unlock your organization's potential? Let's work together to create lasting transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => setIsContactModalOpen(true)}
              className="bg-brand-lime text-brand-blue hover:bg-brand-lime-light"
            >
              Start Transformation <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-brand-lime text-brand-lime hover:bg-brand-lime hover:text-brand-blue"
            >
              <Link href="/services">Explore Other Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />

      {/* Contact Modal */}
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  )
}
