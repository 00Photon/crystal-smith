"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X, Menu, ChevronDown } from "lucide-react"
import { ContactModal } from "@/components/ui/contact-modal"

interface HeaderProps {
  transparent?: boolean
}

export function Header({ transparent = false }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const headerClass = transparent
    ? `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`
    : "bg-white shadow-sm border-b sticky top-0 z-50"

  const textClass = transparent && !isScrolled ? "text-white" : "text-gray-900"
  const logoTextClass = transparent && !isScrolled ? "text-brand-lime" : "text-brand-blue"

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    setActiveDropdown(null)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    setActiveDropdown(null)
  }

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const aboutLinks = [
    { href: "/about", label: "Our Story" },
    { href: "/about/team", label: "Our Team" },
    { href: "/about/values", label: "Our Values" },
  ]

  const serviceLinks = [
    { href: "/services/change-management", label: "Change Management" },
    { href: "/services/organizational-development", label: "Organizational Development" },
    { href: "/services/talent-management", label: "Talent Management" },
    { href: "/services", label: "View All Services" },
  ]

  return (
    <>
      <header className={headerClass}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3" onClick={closeMenu}>
              <div className="w-8 h-8 bg-brand-lime rounded-sm flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <div>
                <h1 className={`text-xl font-medium ${logoTextClass}`}>crystalsmith</h1>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {/* About Dropdown */}
              <div className="relative group">
                <button
                  className={`flex items-center space-x-1 text-sm font-medium transition-colors hover:text-brand-lime ${textClass}`}
                  onMouseEnter={() => setActiveDropdown("about")}
                >
                  <span>about</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div
                  className={`absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 transition-all duration-200 ${
                    activeDropdown === "about" ? "opacity-100 visible" : "opacity-0 invisible"
                  }`}
                  onMouseEnter={() => setActiveDropdown("about")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {aboutLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-lime/10 hover:text-brand-blue transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Services Dropdown */}
              <div className="relative group">
                <button
                  className={`flex items-center space-x-1 text-sm font-medium transition-colors hover:text-brand-lime ${textClass}`}
                  onMouseEnter={() => setActiveDropdown("services")}
                >
                  <span>our services</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div
                  className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 transition-all duration-200 ${
                    activeDropdown === "services" ? "opacity-100 visible" : "opacity-0 invisible"
                  }`}
                  onMouseEnter={() => setActiveDropdown("services")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {serviceLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-lime/10 hover:text-brand-blue transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/insights"
                className={`text-sm font-medium transition-colors hover:text-brand-lime ${textClass}`}
              >
                insights
              </Link>
              <Link
                href="/contact"
                className={`text-sm font-medium transition-colors hover:text-brand-lime ${textClass}`}
              >
                contact
              </Link>
            </nav>

            {/* Mobile Hamburger Menu */}
            <button
              className="lg:hidden p-2 rounded-md transition-colors hover:bg-white/10"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className={`h-6 w-6 ${textClass}`} /> : <Menu className={`h-6 w-6 ${textClass}`} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="flex flex-col space-y-4">
                {/* About Section */}
                <div>
                  <button
                    onClick={() => toggleDropdown("about")}
                    className="flex items-center justify-between w-full text-gray-900 hover:text-brand-lime text-lg font-medium py-2 transition-colors"
                  >
                    <span>about</span>
                    <ChevronDown
                      className={`h-5 w-5 transition-transform ${activeDropdown === "about" ? "rotate-180" : ""}`}
                    />
                  </button>
                  {activeDropdown === "about" && (
                    <div className="pl-4 mt-2 space-y-2">
                      {aboutLinks.map((link, index) => (
                        <Link
                          key={index}
                          href={link.href}
                          className="block text-gray-600 hover:text-brand-blue py-1 transition-colors"
                          onClick={closeMenu}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Services Section */}
                <div>
                  <button
                    onClick={() => toggleDropdown("services")}
                    className="flex items-center justify-between w-full text-gray-900 hover:text-brand-lime text-lg font-medium py-2 transition-colors"
                  >
                    <span>our services</span>
                    <ChevronDown
                      className={`h-5 w-5 transition-transform ${activeDropdown === "services" ? "rotate-180" : ""}`}
                    />
                  </button>
                  {activeDropdown === "services" && (
                    <div className="pl-4 mt-2 space-y-2">
                      {serviceLinks.map((link, index) => (
                        <Link
                          key={index}
                          href={link.href}
                          className="block text-gray-600 hover:text-brand-blue py-1 transition-colors"
                          onClick={closeMenu}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href="/insights"
                  className="text-gray-900 hover:text-brand-lime text-lg font-medium py-2 transition-colors"
                  onClick={closeMenu}
                >
                  insights
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-900 hover:text-brand-lime text-lg font-medium py-2 transition-colors"
                  onClick={closeMenu}
                >
                  contact
                </Link>
                <div className="pt-4 border-t border-gray-200">
                  <button
                    onClick={() => {
                      setIsContactModalOpen(true)
                      closeMenu()
                    }}
                    className="w-full text-left bg-brand-lime text-gray-900 px-4 py-3 rounded-lg font-medium hover:bg-brand-lime-light transition-colors"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Contact Modal */}
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </>
  )
}
