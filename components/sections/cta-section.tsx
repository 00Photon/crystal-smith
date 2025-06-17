import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Mail } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-blue-light to-brand-blue-dark"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-4 h-4 bg-brand-lime rounded-sm transform rotate-45"></div>
      <div className="absolute bottom-32 left-16 w-6 h-6 bg-brand-lime rounded-sm transform rotate-45"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Ready to Transform
                <span className="text-brand-lime"> Your Organization?</span>
              </h2>
              <div className="w-20 h-1 bg-brand-lime"></div>
            </div>

            <p className="text-xl text-blue-100 leading-relaxed">
              Let's discuss how CrystalSmith Consulting Limited can help you navigate change, develop leadership, and
              achieve sustainable growth. Our team of experts is ready to partner with you on your transformation
              journey.
            </p>

            {/* Benefits List */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-brand-lime rounded-full"></div>
                <span className="text-blue-100">Free initial consultation</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-brand-lime rounded-full"></div>
                <span className="text-blue-100">Customized transformation roadmap</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-brand-lime rounded-full"></div>
                <span className="text-blue-100">Expert guidance throughout the process</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-brand-lime text-brand-blue hover:bg-brand-lime-light font-semibold">
                <Link href="/contact" className="flex items-center">
                  Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-brand-lime text-brand-lime hover:bg-brand-lime hover:text-brand-blue"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Us Now
              </Button>
            </div>

            {/* Contact Info */}
            <div className="pt-8 border-t border-white/20">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-brand-lime" />
                  <div>
                    <div className="text-sm text-blue-200">Call us directly</div>
                    <div className="font-semibold">+234 817 550 5444</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-brand-lime" />
                  <div>
                    <div className="text-sm text-blue-200">Email us</div>
                    <div className="font-semibold">info@crystalsmith.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Business consultation meeting"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/20 to-transparent"></div>
            </div>

            {/* Floating Contact Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-6 shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-blue mb-1">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
