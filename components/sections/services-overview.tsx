"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, TrendingUp, Target, Users, FileText, Award, BarChart3 } from "lucide-react"
import Link from "next/link"
import { ContactModal } from "@/components/ui/contact-modal"

const services = [
  {
    icon: TrendingUp,
    title: "Change Management Consulting",
    description: "Navigate complex transitions with precision and confidence through customized change strategies.",
    badge: "Core Service",
    image: "/change-management.jpg",
    href: "/services/change-management",
  },
  {
    icon: Target,
    title: "Organizational Development",
    description: "Transform structures, processes, and cultures to unlock your organization's full potential.",
    badge: "Transformation",
    image: "/organ.jpg",
    href: "/services/organizational-development",
  },
  {
    icon: Users,
    title: "Talent Management Solutions",
    description: "End-to-end solutions focusing on attracting, developing, and retaining top talent.",
    badge: "HR Solutions",
    image: "/consult3.jpg",
    href: "/services/talent-management",
  },
  {
    icon: FileText,
    title: "HR Policy Design & Compliance",
    description: "Comprehensive HR audits and policy formulation aligned with global best practices.",
    badge: "Compliance",
    image: "/consult4.jpg",
    href: "/services/hr-policy",
  },
  {
    icon: Award,
    title: "Executive Coaching",
    description: "Personalized coaching programs to equip leaders with tools for inspiration and motivation.",
    badge: "Leadership",
    image: "/consult2.jpg",
    href: "/services/executive-coaching",
  },
  {
    icon: BarChart3,
    title: "Workforce Planning & Analytics",
    description: "Data-driven workforce optimization to align human capital with strategic goals.",
    badge: "Analytics",
    image: "/last.jpg",
    href: "/services/workforce-analytics",
  },
]

export function ServicesOverview() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-brand-lime/10 text-brand-blue rounded-full text-sm font-medium mb-4">
            Our Services
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Comprehensive Solutions for
            <span className="text-brand-blue"> Organizational Excellence</span>
          </h2>
          <div className="w-20 h-1 bg-brand-lime mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            While change management consulting is our hallmark, we offer a robust suite of complementary services within
            the HR consulting sector, ensuring a comprehensive approach to organizational development.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <Badge variant="secondary" className="bg-brand-lime text-brand-blue">
                      {service.badge}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 bg-brand-lime/10 rounded-lg">
                      <IconComponent className="h-6 w-6 text-brand-blue" />
                    </div>
                  </div>
                  <CardTitle className="text-xl text-brand-blue group-hover:text-brand-blue-dark transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-brand-blue hover:text-brand-blue-dark font-medium group-hover:translate-x-1 transition-transform"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-brand-blue to-brand-blue-dark rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Organization?</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our comprehensive suite of services can help you achieve sustainable growth and
            organizational excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>

        {/* Contact Modal */}
        <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
      </div>
    </section>
  )
}
