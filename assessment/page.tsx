"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function AssessmentPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showResults, setShowResults] = useState(false)

  const questions = [
    {
      id: 1,
      question: "I enjoy solving complex problems and puzzles.",
      options: [
        { value: "strongly_agree", label: "Strongly Agree" },
        { value: "agree", label: "Agree" },
        { value: "neutral", label: "Neutral" },
        { value: "disagree", label: "Disagree" },
        { value: "strongly_disagree", label: "Strongly Disagree" },
      ],
    },
    {
      id: 2,
      question: "I prefer working with people rather than working alone.",
      options: [
        { value: "strongly_agree", label: "Strongly Agree" },
        { value: "agree", label: "Agree" },
        { value: "neutral", label: "Neutral" },
        { value: "disagree", label: "Disagree" },
        { value: "strongly_disagree", label: "Strongly Disagree" },
      ],
    },
    {
      id: 3,
      question: "I enjoy creative activities like writing, art, or music.",
      options: [
        { value: "strongly_agree", label: "Strongly Agree" },
        { value: "agree", label: "Agree" },
        { value: "neutral", label: "Neutral" },
        { value: "disagree", label: "Disagree" },
        { value: "strongly_disagree", label: "Strongly Disagree" },
      ],
    },
    {
      id: 4,
      question: "I like to organize and plan things in detail.",
      options: [
        { value: "strongly_agree", label: "Strongly Agree" },
        { value: "agree", label: "Agree" },
        { value: "neutral", label: "Neutral" },
        { value: "disagree", label: "Disagree" },
        { value: "strongly_disagree", label: "Strongly Disagree" },
      ],
    },
    {
      id: 5,
      question: "I enjoy learning about how things work.",
      options: [
        { value: "strongly_agree", label: "Strongly Agree" },
        { value: "agree", label: "Agree" },
        { value: "neutral", label: "Neutral" },
        { value: "disagree", label: "Disagree" },
        { value: "strongly_disagree", label: "Strongly Disagree" },
      ],
    },
  ]

  const handleAnswer = (value: string) => {
    setAnswers({
      ...answers,
      [currentQuestion]: value,
    })
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  const careerResults = [
    {
      title: "Software Developer",
      match: "92%",
      description:
        "You have a strong analytical mind and enjoy problem-solving, which are key traits for software development.",
    },
    {
      title: "Data Analyst",
      match: "85%",
      description:
        "Your attention to detail and interest in understanding how things work align well with a career in data analysis.",
    },
    {
      title: "UX/UI Designer",
      match: "78%",
      description:
        "Your creative tendencies combined with problem-solving skills suggest you might enjoy designing user experiences.",
    },
  ]

  return (
    <div className="container max-w-2xl py-12">
      {!showResults ? (
        <Card className="border-2">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">Career Assessment</CardTitle>
            <CardDescription className="text-center">
              Answer the following questions to discover careers that match your interests and strengths
            </CardDescription>
            <Progress value={progress} className="h-2 mt-4" />
            <p className="text-center text-sm text-muted-foreground">
              Question {currentQuestion + 1} of {questions.length}
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <h3 className="text-lg font-medium">{questions[currentQuestion].question}</h3>
            <RadioGroup value={answers[currentQuestion] || ""} onValueChange={handleAnswer}>
              {questions[currentQuestion].options.map((option) => (
                <div key={option.value} className="flex items-center space-x-2 py-2">
                  <RadioGroupItem value={option.value} id={option.value} />
                  <Label htmlFor={option.value}>{option.label}</Label>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={prevQuestion} disabled={currentQuestion === 0}>
              <ChevronLeft className="mr-2 h-4 w-4" /> Previous
            </Button>
            <Button onClick={nextQuestion} disabled={!answers[currentQuestion]}>
              {currentQuestion === questions.length - 1 ? "See Results" : "Next"}
              {currentQuestion !== questions.length - 1 && <ChevronRight className="ml-2 h-4 w-4" />}
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <Card className="border-2">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">Your Career Matches</CardTitle>
            <CardDescription className="text-center">
              Based on your responses, here are careers that might be a good fit for you
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {careerResults.map((career, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-medium">{career.title}</h3>
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-sm font-medium">
                    {career.match} Match
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{career.description}</p>
                <div className="mt-4">
                  <Link href={`/careers/${career.title.toLowerCase().replace(/\s+/g, "-")}`}>
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Link href="/roadmap" className="w-full">
              <Button className="w-full">Create Career Roadmap</Button>
            </Link>
            <Link href="/assessment" className="w-full">
              <Button variant="outline" className="w-full">
                Retake Assessment
              </Button>
            </Link>
          </CardFooter>
        </Card>
      )}
    </div>
  )
}

