import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Briefcase, GraduationCap, TrendingUp, Award, ChevronRight } from "lucide-react"
import HeroSection from "@/components/hero-section"
import FeaturedCareers from "@/components/featured-careers"
import TestimonialSection from "@/components/testimonial-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      <section className="py-12 bg-white">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-primary mb-2">Discover Your Path</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore career options, develop skills, and plan your future with personalized guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-2 border-muted hover:border-primary/20 transition-all">
              <CardHeader className="space-y-1">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Career Assessment</CardTitle>
                <CardDescription>Discover careers that match your interests and strengths</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-gray-600">
                Take our comprehensive assessment to identify your skills, interests, and values. Get personalized
                career recommendations based on your unique profile.
              </CardContent>
              <CardFooter>
                <Link href="/assessment" className="w-full">
                  <Button className="w-full">Start Assessment</Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="border-2 border-muted hover:border-primary/20 transition-all">
              <CardHeader className="space-y-1">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Career Explorer</CardTitle>
                <CardDescription>Browse through hundreds of career options</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-gray-600">
                Explore detailed information about various careers including job descriptions, salary ranges, required
                education, and growth prospects.
              </CardContent>
              <CardFooter>
                <Link href="/careers" className="w-full">
                  <Button className="w-full">Explore Careers</Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="border-2 border-muted hover:border-primary/20 transition-all">
              <CardHeader className="space-y-1">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Career Roadmap</CardTitle>
                <CardDescription>Plan your journey step by step</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-gray-600">
                Create a personalized roadmap with actionable steps to achieve your career goals. Track your progress
                and stay on course.
              </CardContent>
              <CardFooter>
                <Link href="/roadmap" className="w-full">
                  <Button className="w-full">Create Roadmap</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-primary mb-2">Explore Resources</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Access a wide range of educational resources to help you succeed
            </p>
          </div>

          <Tabs defaultValue="courses" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="courses">Courses</TabsTrigger>
              <TabsTrigger value="bursaries">Bursaries</TabsTrigger>
              <TabsTrigger value="articles">Articles</TabsTrigger>
            </TabsList>

            <TabsContent value="courses">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Introduction to Digital Skills",
                    description: "Learn the fundamentals of digital literacy and essential computer skills",
                    icon: <BookOpen className="h-5 w-5" />,
                    duration: "4 weeks",
                  },
                  {
                    title: "Financial Literacy Basics",
                    description: "Understand personal finance, budgeting, and making smart financial decisions",
                    icon: <Award className="h-5 w-5" />,
                    duration: "3 weeks",
                  },
                  {
                    title: "Career Readiness",
                    description: "Develop essential skills for job searching, interviews, and workplace success",
                    icon: <Briefcase className="h-5 w-5" />,
                    duration: "6 weeks",
                  },
                ].map((course, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{course.title}</CardTitle>
                        {course.icon}
                      </div>
                      <CardDescription>{course.description}</CardDescription>
                    </CardHeader>
                    <CardFooter className="flex justify-between">
                      <span className="text-sm text-gray-500">Duration: {course.duration}</span>
                      <Button variant="outline" size="sm">
                        View Course
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Link href="/courses">
                  <Button variant="outline" className="gap-1">
                    View All Courses <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </TabsContent>

            <TabsContent value="bursaries">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "National Student Financial Aid Scheme",
                    provider: "NSFAS",
                    field: "Various Fields",
                    deadline: "30 November 2023",
                  },
                  {
                    title: "Sasol Bursary Programme",
                    provider: "Sasol",
                    field: "Engineering & Science",
                    deadline: "31 March 2023",
                  },
                  {
                    title: "Allan Gray Orbis Foundation Fellowship",
                    provider: "Allan Gray",
                    field: "Entrepreneurship",
                    deadline: "15 May 2023",
                  },
                ].map((bursary, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{bursary.title}</CardTitle>
                      <CardDescription>Provider: {bursary.provider}</CardDescription>
                    </CardHeader>
                    <CardContent className="text-sm">
                      <p>Field of Study: {bursary.field}</p>
                      <p className="text-red-500 mt-2">Application Deadline: {bursary.deadline}</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full">
                        View Details
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Link href="/bursaries">
                  <Button variant="outline" className="gap-1">
                    View All Bursaries <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </TabsContent>

            <TabsContent value="articles">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "How to Choose the Right Career Path",
                    excerpt:
                      "Tips and strategies to help you make informed career decisions based on your interests and strengths.",
                    date: "June 15, 2023",
                  },
                  {
                    title: "Top In-Demand Skills for 2023",
                    excerpt: "Discover the most sought-after skills in today's job market and how to develop them.",
                    date: "July 22, 2023",
                  },
                  {
                    title: "Navigating University Applications",
                    excerpt:
                      "A step-by-step guide to applying for universities in South Africa, including important deadlines.",
                    date: "August 5, 2023",
                  },
                ].map((article, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{article.title}</CardTitle>
                      <CardDescription className="text-xs">Published: {article.date}</CardDescription>
                    </CardHeader>
                    <CardContent className="text-sm">
                      <p>{article.excerpt}</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full">
                        Read Article
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Link href="/articles">
                  <Button variant="outline" className="gap-1">
                    View All Articles <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <FeaturedCareers />
      <TestimonialSection />
    </div>
  )
}

