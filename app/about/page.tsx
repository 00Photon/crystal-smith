import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Target, Eye, Users, Award, Lightbulb, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-blue to-brand-blue-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-brand-lime/20 text-brand-lime rounded-full text-sm font-medium mb-6">
                About CrystalSmith
              </div>
              <h1 className="text-5xl font-bold mb-6">
                Your Trusted
                <span className="text-brand-lime"> Transformation</span>
                <br />
                Partners
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed mb-8">
                Founded on the principles of innovation, integrity, and excellence, we guide organizations through
                significant changes with expertise in transformational leadership and management consulting.
              </p>
              <Button size="lg" className="bg-brand-lime text-brand-blue hover:bg-brand-lime-light">
                <Link href="/about/team" className="flex items-center">
                  Meet Our Team <ArrowRight className="ml-2 h-5 w-5" />
                </Link> 
              </Button>
            </div>
            <div className="relative">
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src="/consult1.jpg"
                  alt="CrystalSmith team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">The Company</h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
              <p>
                CrystalSmith Consulting Limited guides organizations through significant changes with expertise in
                transformational leadership and management consulting; serving as change architects and committed to
                steering companies through intricate changes to achieve sustainable growth.
              </p>
              <p>
                Founded on the principles of innovation, integrity, and excellence, our company partners with clients to
                navigate intricate business landscapes, unlock potential, and deliver tailored solutions that align
                operations, culture, and strategy with long-term objectives.
              </p>
              <p>
                With a team of seasoned experts spanning diverse areas of Human Resource (HR) consulting, we specialize
                in designing strategies that effectively manage change at every organizational level. Our services are
                crafted to meet the unique needs of all stakeholders, ensuring seamless transition while maintaining
                focus on organizational goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="h-full border-l-4 border-l-brand-lime">
              <CardHeader className="text-center">
                <Eye className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                <CardTitle className="text-2xl text-brand-blue">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 text-center">
                  To be the foremost consulting partner for organizations seeking innovative and transformative
                  strategies to excel in their industries.
                </p>
              </CardContent>
            </Card>
            <Card className="h-full border-l-4 border-l-brand-blue">
              <CardHeader className="text-center">
                <Target className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                <CardTitle className="text-2xl text-brand-blue">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 text-center">
                  To empower businesses to achieve excellence through innovative strategies, transformative leadership,
                  and long-term growth solutions. We are committed to delivering significant outcomes and fostering
                  enduring alliances that inspire success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values - CIIE</h2>
            <p className="text-lg text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-brand-lime">
              <CardHeader>
                <div className="flex items-center">
                  <Users className="h-8 w-8 text-brand-blue mr-3" />
                  <CardTitle className="text-xl text-brand-blue">Collaboration</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  We value teamwork and inclusivity, working closely with clients to create tailored solutions that
                  address their unique needs and drive transformative results.
                </p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-brand-blue">
              <CardHeader>
                <div className="flex items-center">
                  <Award className="h-8 w-8 text-brand-blue mr-3" />
                  <CardTitle className="text-xl text-brand-blue">Integrity</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  At Crystalsmith Consulting Limited, integrity is our foundational pledge. We adhere to the utmost
                  ethical principles, guaranteeing transparency, accountability, and trust in every engagement.
                </p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-yellow-500">
              <CardHeader>
                <div className="flex items-center">
                  <Lightbulb className="h-8 w-8 text-brand-blue mr-3" />
                  <CardTitle className="text-xl text-brand-blue">Innovation</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  We foster an environment that encourages forward-thinking and creativity, leveraging cutting edge
                  tools to develop actionable strategies that help businesses adapt, evolve, and succeed.
                </p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-purple-500">
              <CardHeader>
                <div className="flex items-center">
                  <CheckCircle className="h-8 w-8 text-brand-blue mr-3" />
                  <CardTitle className="text-xl text-brand-blue">Excellence</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Our commitment to excellence drives us to exceed expectations, delivering innovative solutions and
                  exceptional service that set industry benchmarks.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Bring */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Bring</h2>
            <p className="text-lg text-gray-600">The CrystalSmith Limited team brings to each project:</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-l-brand-lime">
              <h3 className="font-semibold text-brand-blue mb-2">Extensive Expertise</h3>
              <p className="text-gray-700">
                Professional experience in organizational transformation, leadership development, and management
                consulting.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-l-brand-blue">
              <h3 className="font-semibold text-brand-blue mb-2">Local and Global Insight</h3>
              <p className="text-gray-700">
                Deep understanding of business environments across Nigeria, Africa, and beyond, with tailored
                strategies.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-l-brand-lime">
              <h3 className="font-semibold text-brand-blue mb-2">Strong Stakeholder Relationships</h3>
              <p className="text-gray-700">
                Established connections with key stakeholders, ensuring seamless collaboration and alignment.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-l-brand-blue">
              <h3 className="font-semibold text-brand-blue mb-2">Industry-Specific Knowledge</h3>
              <p className="text-gray-700">
                Expertise in navigating complex industry dynamics and delivering solutions adapted to client needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-l-brand-lime">
              <h3 className="font-semibold text-brand-blue mb-2">Quality Assurance</h3>
              <p className="text-gray-700">
                Robust systems and reporting procedures to maintain transparency, cost control, and accountability.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-l-brand-blue">
              <h3 className="font-semibold text-brand-blue mb-2">Proven Results</h3>
              <p className="text-gray-700">
                Track record of delivering impactful, sustainable change for private and public organizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
