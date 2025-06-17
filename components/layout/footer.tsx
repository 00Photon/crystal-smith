import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Phone, Mail, Facebook, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative w-10 h-10">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="CrystalSmith Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-brand-lime">CrystalSmith</h3>
                <span className="text-xs text-gray-300">Consulting Limited</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your transformation partners committed to steering companies through intricate changes to achieve
              sustainable growth.
            </p>
            <div className="flex space-x-4">
              <Button
                size="sm"
                variant="outline"
                className="border-brand-lime text-brand-lime hover:bg-brand-lime hover:text-brand-blue"
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-brand-lime text-brand-lime hover:bg-brand-lime hover:text-brand-blue"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-brand-lime text-brand-lime hover:bg-brand-lime hover:text-brand-blue"
              >
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-brand-lime mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-brand-lime transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-brand-lime transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/about/team" className="text-gray-300 hover:text-brand-lime transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-gray-300 hover:text-brand-lime transition-colors">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-brand-lime transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-brand-lime mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/change-management"
                  className="text-gray-300 hover:text-brand-lime transition-colors"
                >
                  Change Management
                </Link>
              </li>
              <li>
                <Link
                  href="/services/organizational-development"
                  className="text-gray-300 hover:text-brand-lime transition-colors"
                >
                  Organizational Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/talent-management"
                  className="text-gray-300 hover:text-brand-lime transition-colors"
                >
                  Talent Management
                </Link>
              </li>
              <li>
                <Link href="/services/hr-policy" className="text-gray-300 hover:text-brand-lime transition-colors">
                  HR Policy & Compliance
                </Link>
              </li>
              <li>
                <Link
                  href="/services/executive-coaching"
                  className="text-gray-300 hover:text-brand-lime transition-colors"
                >
                  Executive Coaching
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-brand-lime mb-6">Contact Info</h4>
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-brand-lime mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  G7, Salatu Royal Estate,
                  <br />
                  Aminu Kano Crescent, Wuse II,
                  <br />
                  Abuja, Nigeria
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-brand-lime flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  +234 817 550 5444
                  <br />
                  +234 803 550 5444
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-brand-lime flex-shrink-0" />
                <div className="text-gray-300 text-sm">info@crystalsmith.com</div>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h5 className="text-sm font-semibold text-brand-lime mb-3">Newsletter</h5>
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
                <Button size="sm" className="bg-brand-lime text-brand-blue hover:bg-brand-lime-light">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 CrystalSmith Consulting Limited. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-brand-lime text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-brand-lime text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
