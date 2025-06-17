"use client"

import { useState } from "react"
import { ContactModal } from "@/components/ui/contact-modal"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, ArrowRight, CheckCircle, Users, Target, BarChart3, Lightbulb } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const keyFeatures = [
  {
    icon: Target,
    title: "Strategic Planning",
    description: "Comprehensive change strategy development aligned with organizational goals",
  },
  {
    icon: Users,
    title: "Stakeholder Engagement",
    description: "Multi-level engagement ensuring buy-in across all organizational levels",
  },
  {
    icon: BarChart3,
    title: "Impact Assessment",
    description: "Detailed analysis of change impact on processes, people, and performance",
  },
  {
    icon: Lightbulb,
    title: "Innovation Integration",
    description: "Seamless integration of innovative solutions within change initiatives",
  },
]

const processSteps = [
  {
    step: "01",
    title: "Assessment & Analysis",
    description: "Comprehensive evaluation of current state, readiness for change, and potential challenges",
  },
  {
    step: "02",
    title: "Strategy Development",
    description: "Creation of customized change management strategy with clear roadmap and milestones",
  },
  {
    step: "03",
    title: "Implementation Planning",
    description: "Detailed planning of change activities, resource allocation, and timeline management",
  },
  {
    step: "04",
    title: "Execution & Support",
    description: "Active implementation support with continuous monitoring and adjustment",
  },
  {
    step: "05",
    title: "Evaluation & Optimization",
    description: "Post-implementation review and optimization for sustained change adoption",
  },
]

export default function ChangeManagementPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-blue to-brand-blue-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-brand-lime/20 text-brand-lime border-brand-lime mb-6">Core Service</Badge>
              <h1 className="text-5xl font-bold mb-6">
                Change Management
                <span className="text-brand-lime"> Consulting</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed mb-8">
                Navigate complex transitions with precision and confidence through our customized change management
                strategies. We help organizations transform challenges into opportunities for sustainable growth.
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
                  Download Brochure
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/business-consultation-1.jpg"
                  alt="Change management consultation"
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
                  Transforming Organizations Through
                  <span className="text-brand-blue"> Strategic Change</span>
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Change is inevitable in today's dynamic business environment. Our change management consulting
                  services help organizations navigate transitions smoothly, minimize disruption, and maximize the
                  benefits of change initiatives.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We work closely with leadership teams to develop comprehensive change strategies that address both the
                  technical and human aspects of transformation. Our proven methodologies ensure that changes are not
                  only implemented successfully but also sustained over time.
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-2xl font-bold text-brand-blue mb-6">What We Offer</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {keyFeatures.map((feature, index) => {
                    const IconComponent = feature.icon
                    return (
                      <Card key={index} className="border-l-4 border-l-brand-lime">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="p-3 bg-brand-lime/10 rounded-lg">
                              <IconComponent className="h-6 w-6 text-brand-blue" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-brand-blue mb-2">{feature.title}</h4>
                              <p className="text-gray-600 text-sm">{feature.description}</p>
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
                    <TrendingUp className="h-6 w-6 mr-2" />
                    Service Highlights
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-brand-lime" />
                    <span className="text-sm">Proven methodologies</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-brand-lime" />
                    <span className="text-sm">Stakeholder alignment</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-brand-lime" />
                    <span className="text-sm">Risk mitigation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-brand-lime" />
                    <span className="text-sm">Sustainable adoption</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-brand-lime" />
                    <span className="text-sm">Continuous support</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-xl bg-brand-blue text-white">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-4 text-brand-lime">Ready to Start?</h3>
                  <p className="text-blue-100 mb-6">
                    Let's discuss your change management needs and develop a customized strategy.
                  </p>
                  <Button className="w-full bg-brand-lime text-brand-blue hover:bg-brand-lime-light">
                    <Link href="/contact">Schedule Consultation</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Change Management
              <span className="text-brand-blue"> Process</span>
            </h2>
            <div className="w-20 h-1 bg-brand-lime mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our structured approach ensures successful change implementation from initial assessment to sustained
              adoption.
            </p>
          </div>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="shadow-lg border-0">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center text-xl font-bold">
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-brand-blue mb-3">{step.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{step.description}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <ArrowRight className="h-6 w-6 text-brand-lime" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-blue to-brand-blue-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your
            <span className="text-brand-lime"> Organization?</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Our change management experts are ready to help you navigate your transformation journey with confidence and
            success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => setIsContactModalOpen(true)}
              className="bg-brand-lime text-brand-blue hover:bg-brand-lime-light"
            >
              Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-brand-lime text-brand-lime hover:bg-brand-lime hover:text-brand-blue"
            >
              <Link href="/services">View All Services</Link>
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
