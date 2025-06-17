"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { X, Mail, Phone, MessageCircle } from "lucide-react"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  if (!isVisible) return null

  const handleEmailClick = () => {
    window.location.href = "mailto:info@crystalsmith.com"
  }

  const handlePhoneClick = () => {
    window.location.href = "tel:+2348175505444"
  }

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/2348175505444?text=Hello, I'm interested in your consulting services", "_blank")
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={`fixed bottom-4 right-4 z-50 transition-all duration-300 ease-out ${
          isOpen ? "translate-y-0 opacity-100 scale-100" : "translate-y-full opacity-0 scale-95"
        }`}
      >
        <Card className="w-80 shadow-2xl border-0 bg-white">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg text-brand-blue">Get In Touch</CardTitle>
              <Button variant="ghost" size="sm" onClick={onClose} className="h-8 w-8 p-0 hover:bg-gray-100">
                <X className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm text-gray-600">Choose your preferred way to contact us</p>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button
              onClick={handleEmailClick}
              variant="outline"
              className="w-full justify-start h-12 border-brand-blue/20 hover:bg-brand-blue hover:text-white group"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-brand-blue/10 rounded-lg group-hover:bg-white/20">
                  <Mail className="h-4 w-4 text-brand-blue group-hover:text-white" />
                </div>
                <div className="text-left">
                  <div className="font-medium">Email Us</div>
                  <div className="text-xs text-gray-500 group-hover:text-white/80">info@crystalsmith.com</div>
                </div>
              </div>
            </Button>

            <Button
              onClick={handleWhatsAppClick}
              variant="outline"
              className="w-full justify-start h-12 border-green-200 hover:bg-green-500 hover:text-white group"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 rounded-lg group-hover:bg-white/20">
                  <MessageCircle className="h-4 w-4 text-green-600 group-hover:text-white" />
                </div>
                <div className="text-left">
                  <div className="font-medium">WhatsApp</div>
                  <div className="text-xs text-gray-500 group-hover:text-white/80">+234 817 550 5444</div>
                </div>
              </div>
            </Button>

            <Button
              onClick={handlePhoneClick}
              variant="outline"
              className="w-full justify-start h-12 border-blue-200 hover:bg-blue-500 hover:text-white group"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-white/20">
                  <Phone className="h-4 w-4 text-blue-600 group-hover:text-white" />
                </div>
                <div className="text-left">
                  <div className="font-medium">Call Us</div>
                  <div className="text-xs text-gray-500 group-hover:text-white/80">+234 817 550 5444</div>
                </div>
              </div>
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
