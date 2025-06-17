import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Lightbulb, Target } from "lucide-react"

const values = [
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We value teamwork and inclusivity, working closely with clients to create tailored solutions that address their unique needs and drive transformative results.",
    color: "bg-blue-50 text-brand-blue",
  },
  {
    icon: Award,
    title: "Integrity",
    description:
      "At CrystalSmith Consulting Limited, integrity is our foundational pledge. We adhere to the utmost ethical principles, guaranteeing transparency, accountability, and trust in every engagement.",
    color: "bg-green-50 text-brand-lime-dark",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We foster an environment that encourages forward-thinking and creativity, leveraging cutting-edge tools to develop actionable strategies that help businesses adapt, evolve, and succeed.",
    color: "bg-yellow-50 text-yellow-600",
  },
  {
    icon: Target,
    title: "Excellence",
    description:
      "Our commitment to excellence drives us to exceed expectations, delivering innovative solutions and exceptional service that set industry benchmarks.",
    color: "bg-purple-50 text-purple-600",
  },
]

export function ValuesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-brand-lime/10 text-brand-blue rounded-full text-sm font-medium mb-4">
            Our Core Values
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            CIIE - The Principles That
            <span className="text-brand-blue"> Guide Us</span>
          </h2>
          <div className="w-20 h-1 bg-brand-lime mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our core values form the foundation of everything we do. They guide our decisions, shape our culture, and
            define how we serve our clients and communities.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className={`p-4 rounded-xl ${value.color}`}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-brand-blue group-hover:text-brand-blue-dark transition-colors">
                        {value.title}
                      </CardTitle>
                      <div className="w-12 h-1 bg-brand-lime mt-2"></div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Philosophy Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-brand-blue to-brand-blue-dark rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-6 text-brand-lime">Corporate Philosophy</h3>
            <blockquote className="text-2xl font-semibold mb-4">"Shaping Our Tomorrow, Today"</blockquote>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              A philosophy that underscores our dedication to driving meaningful change through actionable strategies.
              We strive to instill resilience, adaptability, and excellence in every client we serve, empowering them to
              thrive in an ever-evolving business landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
