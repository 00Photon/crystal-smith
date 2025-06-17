import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Mail } from "lucide-react"
import Image from "next/image"

const teamMembers = [
  {
    name: "Dr. Sarah Adebayo",
    position: "Managing Director & Lead Consultant",
    specialization: "Change Management & Organizational Development",
    image: "/placeholder.svg?height=300&width=300",
    bio: "With over 15 years of experience in organizational transformation, Dr. Adebayo leads our strategic initiatives and client relationships.",
    expertise: ["Change Management", "Strategic Planning", "Leadership Development"],
  },
  {
    name: "Mr. Ibrahim Musa",
    position: "Senior HR Consultant",
    specialization: "Talent Management & HR Policy",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Ibrahim specializes in talent acquisition, performance management, and HR compliance across various industries.",
    expertise: ["Talent Management", "HR Policy", "Compliance"],
  },
  {
    name: "Mrs. Grace Okonkwo",
    position: "Executive Coach & Leadership Specialist",
    specialization: "Leadership Development & Executive Coaching",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Grace brings extensive experience in executive coaching and leadership development programs for C-suite executives.",
    expertise: ["Executive Coaching", "Leadership Training", "Team Development"],
  },
  {
    name: "Mr. Ahmed Hassan",
    position: "Organizational Development Consultant",
    specialization: "Process Optimization & Culture Transformation",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Ahmed focuses on organizational restructuring, process improvement, and culture change initiatives.",
    expertise: ["Process Optimization", "Culture Change", "Organizational Design"],
  },
]

export default function TeamPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-blue to-brand-blue-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Meet Our
            <span className="text-brand-lime"> Expert Team</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Our team of seasoned consultants brings diverse expertise and proven track records in organizational
            transformation and human resource consulting.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-brand-lime font-medium">{member.position}</p>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="mb-4">
                    <Badge variant="secondary" className="bg-brand-lime/10 text-brand-blue mb-3">
                      {member.specialization}
                    </Badge>
                    <p className="text-gray-700 leading-relaxed">{member.bio}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-brand-blue mb-3">Areas of Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="border-brand-blue text-brand-blue">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <button className="p-2 bg-brand-lime/10 text-brand-blue rounded-lg hover:bg-brand-lime hover:text-white transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </button>
                    <button className="p-2 bg-brand-lime/10 text-brand-blue rounded-lg hover:bg-brand-lime hover:text-white transition-colors">
                      <Mail className="h-5 w-5" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
