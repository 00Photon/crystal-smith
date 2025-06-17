"use client"

import { useState } from "react"
import { ContactModal } from "@/components/ui/contact-modal"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Search, GraduationCap, Award, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const talentServices = [
  {
    icon: Search,
    title: "Talent Acquisition",
    description:
      "Strategic recruitment and selection processes to attract top talent aligned with your organizational culture and goals",
  },
  {
    icon: GraduationCap,
    title: "Learning & Development",
    description: "Comprehensive training programs and career development pathways to enhance employee capabilities",
  },
  {
    icon: TrendingUp,
    title: "Performance Management",
    description: "Robust performance evaluation systems that drive accountability and continuous improvement",
  },
  {
    icon: Award,
    title: "Retention Strategies",
    description: "Evidence-based retention programs to keep your best talent engaged and committed",
  },
]

const talentCycle = [
  {
    phase: "Attract",
    description: "Develop compelling employer brand and recruitment strategies to attract top talent",
    color: "bg-blue-500",
  },
  {
    phase: "Develop",
    description: "Create comprehensive development programs to enhance skills and capabilities",
    color: "bg-green-500",
  },
  {
    phase: "Engage",
    description: "Foster high levels of employee engagement through meaningful work and recognition",
    color: "bg-yellow-500",
  },
  {
    phase: "Retain",
    description: "Implement retention strategies to keep valuable talent within the organization",
    color: "bg-purple-500",
  },
]

export default function TalentManagementPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-blue to-brand-blue-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-brand-lime/20 text-brand-lime border-brand-lime mb-6">HR Solutions</Badge>
              <h1 className="text-5xl font-bold mb-6">
                Talent Management
                <span className="text-brand-lime"> Solutions</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed mb-8">
                End-to-end solutions focusing on attracting, developing, and retaining top talent. Build a workforce
                that drives your organization's success and competitive advantage.
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
                  View Case Studies
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/business-consultation-1.jpg"
                  alt="Talent management"
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
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Complete Talent
              <span className="text-brand-blue"> Lifecycle Management</span>
            </h2>
            <div className="w-20 h-1 bg-brand-lime mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your people are your greatest asset. Our comprehensive talent management solutions help you maximize the
              potential of your workforce at every stage of the employee lifecycle.
            </p>
          </div>

          {/* Talent Services */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {talentServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card key={index} className="border-l-4 border-l-brand-lime shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="p-4 bg-brand-lime/10 rounded-lg">
                        <IconComponent className="h-8 w-8 text-brand-blue" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-brand-blue mb-3">{service.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Talent Cycle */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              The Talent
              <span className="text-brand-blue"> Lifecycle</span>
            </h2>
            <div className="w-20 h-1 bg-brand-lime mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our holistic approach covers every phase of the talent journey, ensuring optimal outcomes at each stage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {talentCycle.map((phase, index) => (
              <Card key={index} className="text-center shadow-lg border-0 relative overflow-hidden">
                <div className={`absolute top-0 left-0 right-0 h-2 ${phase.color}`}></div>
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-brand-blue mb-4">{phase.phase}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{phase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Invest in
                <span className="text-brand-blue"> Talent Management?</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Organizations with strong talent management practices consistently outperform their competitors. Here's
                what you can expect from our comprehensive approach:
              </p>

              <div className="space-y-4">
                {[
                  "Reduced turnover and recruitment costs",
                  "Improved employee engagement and productivity",
                  "Enhanced organizational capabilities",
                  "Stronger succession planning",
                  "Better alignment between talent and strategy",
                  "Increased competitive advantage",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-brand-lime" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <Card className="shadow-xl bg-gradient-to-br from-brand-blue to-brand-blue-dark text-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-brand-lime">Success Metrics</h3>
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-brand-lime mb-2">85%</div>
                      <div className="text-blue-100">Improvement in retention rates</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-brand-lime mb-2">60%</div>
                      <div className="text-blue-100">Faster time-to-productivity</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-brand-lime mb-2">40%</div>
                      <div className="text-blue-100">Reduction in hiring costs</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-blue to-brand-blue-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Optimize Your
            <span className="text-brand-lime"> Talent Strategy?</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's work together to build a talent management system that drives your organization's success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => setIsContactModalOpen(true)}
              className="bg-brand-lime text-brand-blue hover:bg-brand-lime-light"
            >
              Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
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
