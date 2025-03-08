"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Briefcase, TrendingUp, Users, Code, Microscope, Palette, Building } from "lucide-react"

export default function CareersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [industryFilter, setIndustryFilter] = useState("all")

  const careers = [
    {
      title: "Software Developer",
      category: "Technology",
      description:
        "Design, build and maintain software applications and systems. Work with programming languages like Java, Python, and JavaScript.",
      salary: "R25,000 - R60,000 per month",
      education: "Degree in Computer Science or related field",
      skills: ["Programming", "Problem Solving", "Logical Thinking"],
      icon: <Code className="h-5 w-5" />,
    },
    {
      title: "Data Scientist",
      category: "Technology",
      description:
        "Analyze and interpret complex data to help organizations make better decisions. Use statistical methods and machine learning.",
      salary: "R30,000 - R70,000 per month",
      education: "Degree in Statistics, Mathematics, Computer Science",
      skills: ["Statistics", "Programming", "Data Analysis"],
      icon: <TrendingUp className="h-5 w-5" />,
    },
    {
      title: "Nurse",
      category: "Healthcare",
      description:
        "Provide care for patients in hospitals, clinics, and other healthcare settings. Monitor patient health and administer treatments.",
      salary: "R20,000 - R40,000 per month",
      education: "Nursing Diploma or Degree",
      skills: ["Patient Care", "Medical Knowledge", "Communication"],
      icon: <Users className="h-5 w-5" />,
    },
    {
      title: "Mechanical Engineer",
      category: "Engineering",
      description:
        "Design, develop, and test mechanical devices and systems. Work on everything from small components to large machinery.",
      salary: "R25,000 - R55,000 per month",
      education: "Degree in Mechanical Engineering",
      skills: ["Technical Design", "Problem Solving", "Mathematics"],
      icon: <Briefcase className="h-5 w-5" />,
    },
    {
      title: "Laboratory Technician",
      category: "Science",
      description:
        "Perform laboratory tests and procedures. Collect and analyze samples in medical, research, or industrial settings.",
      salary: "R15,000 - R30,000 per month",
      education: "Diploma or Degree in Laboratory Science",
      skills: ["Attention to Detail", "Technical Skills", "Analytical Thinking"],
      icon: <Microscope className="h-5 w-5" />,
    },
    {
      title: "Graphic Designer",
      category: "Creative",
      description:
        "Create visual concepts to communicate ideas. Design layouts for websites, advertisements, brochures, and other media.",
      salary: "R15,000 - R35,000 per month",
      education: "Diploma or Degree in Graphic Design or related field",
      skills: ["Creativity", "Design Software", "Visual Communication"],
      icon: <Palette className="h-5 w-5" />,
    },
    {
      title: "Accountant",
      category: "Business",
      description:
        "Prepare and examine financial records. Ensure accuracy of financial documents and compliance with regulations.",
      salary: "R20,000 - R50,000 per month",
      education: "Degree in Accounting or Finance",
      skills: ["Numeracy", "Attention to Detail", "Analytical Thinking"],
      icon: <Building className="h-5 w-5" />,
    },
    {
      title: "Teacher",
      category: "Education",
      description:
        "Educate students in various subjects. Prepare lessons, assess progress, and provide guidance to students.",
      salary: "R15,000 - R35,000 per month",
      education: "Teaching Degree or Diploma",
      skills: ["Communication", "Patience", "Subject Knowledge"],
      icon: <Users className="h-5 w-5" />,
    },
  ]

  const filteredCareers = careers.filter((career) => {
    const matchesSearch =
      career.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      career.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesIndustry = industryFilter === "all" || career.category === industryFilter

    return matchesSearch && matchesIndustry
  })

  return (
    <div className="container py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-primary mb-2">Career Explorer</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Browse through hundreds of career options to find the perfect match for your interests and skills
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search careers..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="w-full md:w-64">
          <Select value={industryFilter} onValueChange={setIndustryFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by Industry" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Industries</SelectItem>
              <SelectItem value="Technology">Technology</SelectItem>
              <SelectItem value="Healthcare">Healthcare</SelectItem>
              <SelectItem value="Engineering">Engineering</SelectItem>
              <SelectItem value="Science">Science</SelectItem>
              <SelectItem value="Creative">Creative</SelectItem>
              <SelectItem value="Business">Business</SelectItem>
              <SelectItem value="Education">Education</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="grid" className="w-full">
        <div className="flex justify-between items-center mb-6">
          <p className="text-sm text-gray-500">
            Showing {filteredCareers.length} of {careers.length} careers
          </p>
          <TabsList>
            <TabsTrigger value="grid">Grid View</TabsTrigger>
            <TabsTrigger value="list">List View</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="grid" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredCareers.map((career, index) => (
              <Card key={index} className="border-2 border-muted hover:border-primary/20 transition-all">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      {career.icon}
                    </div>
                    <Badge variant="outline" className="bg-primary/5">
                      {career.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mt-3">{career.title}</CardTitle>
                  <CardDescription>{career.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Salary Range:</span>
                      <span className="font-medium">{career.salary}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Education:</span>
                      <span className="font-medium">{career.education}</span>
                    </div>
                    <div className="mt-3">
                      <span className="text-gray-500 block mb-1">Key Skills:</span>
                      <div className="flex flex-wrap gap-1">
                        {career.skills.map((skill, i) => (
                          <Badge key={i} variant="secondary" className="font-normal">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href={`/careers/${career.title.toLowerCase().replace(/\s+/g, "-")}`} className="w-full">
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="list" className="mt-0">
          <div className="space-y-4">
            {filteredCareers.map((career, index) => (
              <Card key={index} className="border-2 border-muted hover:border-primary/20 transition-all">
                <div className="flex flex-col md:flex-row">
                  <div className="p-6 md:w-2/3">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        {career.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{career.title}</h3>
                        <Badge variant="outline" className="bg-primary/5">
                          {career.category}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-gray-600 mt-2">{career.description}</p>
                    <div className="mt-3">
                      <span className="text-gray-500 block mb-1">Key Skills:</span>
                      <div className="flex flex-wrap gap-1">
                        {career.skills.map((skill, i) => (
                          <Badge key={i} variant="secondary" className="font-normal">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="p-6 border-t md:border-t-0 md:border-l md:w-1/3 bg-gray-50 flex flex-col">
                    <div className="space-y-2 text-sm flex-grow">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Salary Range:</span>
                        <span className="font-medium">{career.salary}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Education:</span>
                        <span className="font-medium">{career.education}</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Link href={`/careers/${career.title.toLowerCase().replace(/\s+/g, "-")}`} className="w-full">
                        <Button variant="outline" className="w-full">
                          Learn More
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

