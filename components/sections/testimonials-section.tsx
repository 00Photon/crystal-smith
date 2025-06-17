import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Dr. Amina Hassan",
    position: "CEO, TechNova Solutions",
    company: "Lagos, Nigeria",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "CrystalSmith transformed our organizational structure completely. Their change management expertise helped us navigate a complex merger while maintaining team morale and productivity. Exceptional results!",
    rating: 5,
  },
  {
    name: "Mr. Chukwuma Okafor",
    position: "HR Director, Federal Ministry of Health",
    company: "Abuja, Nigeria",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "The HR policy redesign project exceeded our expectations. CrystalSmith's team demonstrated deep understanding of both local regulations and international best practices. Highly recommended!",
    rating: 5,
  },
  {
    name: "Mrs. Fatima Al-Rashid",
    position: "Managing Director, Sahara Bank",
    company: "Kano, Nigeria",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "Their executive coaching program transformed our leadership team. The personalized approach and practical strategies have significantly improved our decision-making processes and team dynamics.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-brand-lime/10 text-brand-blue rounded-full text-sm font-medium mb-4">
            Client Testimonials
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            What Our Clients
            <span className="text-brand-blue"> Say About Us</span>
          </h2>
          <div className="w-20 h-1 bg-brand-lime mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what leaders from various organizations have to say about their
            transformation journey with CrystalSmith Consulting Limited.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="h-8 w-8 text-brand-lime" />
                </div>

                {/* Rating */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 leading-relaxed mb-6 italic">"{testimonial.content}"</p>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-brand-blue">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.position}</div>
                    <div className="text-xs text-gray-500">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-bold text-brand-blue">200+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-brand-blue">98%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-brand-blue">15+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-brand-blue">50+</div>
            <div className="text-gray-600">Expert Consultants</div>
          </div>
        </div>
      </div>
    </section>
  )
}
