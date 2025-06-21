import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Mail } from "lucide-react"
import Image from "next/image"

const teamMembers = [
  {
    name: "Dr. Nnenna Onwuzo",
    position: "Principal Parner",
    specialization: "Change Management & Organizational Development",
    image: "/IMAGE2.JPEG",
    bio: "Dr. Nnenna Onwuzo is a dynamic, entrepreneurial leader with over two decades of cross-industry experience in global business strategies, leadership dynamics, and business development. As a Certified Change Management Specialist and Certified Neuro-Linguistic Programming Practitioner, she excels at guiding organizations through transformative change, coaching teams to think strategically, and shaping mindsets for sustainable growth. Her distinct combination of financial acumen, entrepreneurial foresight, and people-centered coaching consistently elevates performance and positions organizations for lasting competitive advantage.Serving as principal partner at Crystalsmith Consulting Limited and CrystalSmith Services & Retailers, Dr. Onwuzo demonstrates exceptional business insight. She devises operational frameworks that improve efficiency, orchestrates market-expansion initiatives, and designs tailored training programs focused on leadership, communication, and strategic planning. By embedding change-management principles into every intervention, she ensures that teams remain agile, motivated, and aligned with long-term objectives.Prior to founding her own firms, Dr. Onwuzo held leadership roles at leading financial institutions, where she led business-development efforts, optimized customer-relationship management, and drove operational-efficiency enhancements. Her track record in banking and business underscores her ability to balance rigorous financial discipline with a commitment to mentoring nascent leaders, instilling the skills and mindset required to navigate complex, fast-evolving markets.Passionate about nurturing tomorrow’s executives, Dr. Onwuzo is building a portfolio of engaging workshops on leadership, communication, and strategic planning. Her coaching philosophy centers on empowering individuals to embrace change, unlock their full potential, and cultivate high-performance teams. By combining insights from change management and neuro-linguistic programming, she creates learning experiences that shift mindsets, reinforce resilience, and sustain growth long after the workshop ends.",
    expertise: ["Change Management & Organizational Transformation", "Leadership Coaching & Team Development", "Entrepreneurship, Business Development & Market Expansion","Client Relationship Management & Stakeholder Engagement","Training Design & Communication Strategy"],
  },
  {
    name: "Nwajideobi Lucy",
    position: "Management Consultant, Administrator, and Human Resource Development Expert",
    specialization: "Talent Management & HR Policy",
    image: "/IMAGE1.JPEG",
    bio: "Nwajideobi Lucy is a Management Consultant, Administrator, and Human Resource Development Expert with multiple international certifications and a Bachelor’s degree from the renowned Imo State University, Nigeria.As a seasoned Human Resource Personnel (HRP), she has been able to spread her tentacles of professional influence across many organizations both nationally and internationally.As a Management Consultant, Writer, and Speaker, coupled with her background in Human Capacity Development, Lucy is extremely passionate about strategically helping individuals achieve upward growth in their career path, leadership development, capacity building, youth empowerment, and strategies.Lucy has a personal mission of facilitating the transformation of individuals, organizations, and nations through her Volunteerism with NGOs and Charity foundations that aims at empowering women and children across Africa and beyond.",
    expertise: ["Management", "HR Policy", "Compliance"],
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
                <div className="relative h-96 overflow-hidden">
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

                  {/* <div className="flex space-x-3">
                    <button className="p-2 bg-brand-lime/10 text-brand-blue rounded-lg hover:bg-brand-lime hover:text-white transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </button>
                    <button className="p-2 bg-brand-lime/10 text-brand-blue rounded-lg hover:bg-brand-lime hover:text-white transition-colors">
                      <Mail className="h-5 w-5" />
                    </button>
                  </div> */}
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
