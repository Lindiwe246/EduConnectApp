"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"

export default function RegisterPage() {
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const totalSteps = 3

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1)
    }
  }

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  return (
    <div className="container max-w-md py-12">
      <Card className="border-2">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">Create an Account</CardTitle>
          <CardDescription className="text-center">Join EduConnectSA to discover your career path</CardDescription>
          <Progress value={(step / totalSteps) * 100} className="h-2 mt-4" />
          <p className="text-center text-sm text-muted-foreground">
            Step {step} of {totalSteps}
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          {step === 1 && (
            <>
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Enter your full name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Create a password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input id="confirm-password" type="password" placeholder="Confirm your password" />
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div className="space-y-2">
                <Label htmlFor="age">Age</Label>
                <Input id="age" type="number" placeholder="Enter your age" />
              </div>
              <div className="space-y-2">
                <Label>Gender</Label>
                <RadioGroup defaultValue="female">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="female" id="female" />
                    <Label htmlFor="female">Female</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="male" id="male" />
                    <Label htmlFor="male">Male</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other" id="other" />
                    <Label htmlFor="other">Other</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="space-y-2">
                <Label htmlFor="education">Current Education Level</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your education level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="grade8-9">Grade 8-9</SelectItem>
                    <SelectItem value="grade10-11">Grade 10-11</SelectItem>
                    <SelectItem value="grade12">Grade 12</SelectItem>
                    <SelectItem value="college">College</SelectItem>
                    <SelectItem value="university">University</SelectItem>
                    <SelectItem value="working">Working</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="province">Province</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your province" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gauteng">Gauteng</SelectItem>
                    <SelectItem value="western-cape">Western Cape</SelectItem>
                    <SelectItem value="eastern-cape">Eastern Cape</SelectItem>
                    <SelectItem value="kwazulu-natal">KwaZulu-Natal</SelectItem>
                    <SelectItem value="free-state">Free State</SelectItem>
                    <SelectItem value="north-west">North West</SelectItem>
                    <SelectItem value="mpumalanga">Mpumalanga</SelectItem>
                    <SelectItem value="limpopo">Limpopo</SelectItem>
                    <SelectItem value="northern-cape">Northern Cape</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <div className="space-y-2">
                <Label>What are your main interests? (Select all that apply)</Label>
                <div className="grid grid-cols-2 gap-2">
                  {["Technology", "Science", "Arts", "Business", "Healthcare", "Education", "Engineering", "Media"].map(
                    (interest) => (
                      <div key={interest} className="flex items-center space-x-2">
                        <Checkbox id={interest.toLowerCase()} />
                        <Label htmlFor={interest.toLowerCase()}>{interest}</Label>
                      </div>
                    ),
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <Label>What are your career goals?</Label>
                <RadioGroup defaultValue="job">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="job" id="job" />
                    <Label htmlFor="job">Find a job after school/university</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="university" id="university" />
                    <Label htmlFor="university">Get into university</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="skills" id="skills" />
                    <Label htmlFor="skills">Develop specific skills</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="explore" id="explore" />
                    <Label htmlFor="explore">Explore career options</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="flex items-center space-x-2 pt-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="text-sm">
                  I agree to the{" "}
                  <Link href="/terms" className="text-primary hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                </Label>
              </div>
            </>
          )}
        </CardContent>
        {step === 3 && isSuccess && (
          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-md">
            <p className="text-green-800 font-medium">Account created successfully!</p>
            <p className="text-green-600 text-sm mt-1">You can now access all features of EduConnectSA.</p>
          </div>
        )}
        <CardFooter className="flex justify-between">
          {step > 1 ? (
            <Button variant="outline" onClick={prevStep}>
              Back
            </Button>
          ) : (
            <Link href="/login">
              <Button variant="outline">Login Instead</Button>
            </Link>
          )}

          {step < totalSteps ? (
            <Button onClick={nextStep}>Continue</Button>
          ) : (
            step === 3 && (
              <>
                {!isSuccess ? (
                  <Button
                    onClick={() => {
                      setIsSubmitting(true)
                      // Simulate API call
                      setTimeout(() => {
                        setIsSubmitting(false)
                        setIsSuccess(true)
                      }, 1500)
                    }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Creating Account..." : "Create Account"}
                  </Button>
                ) : (
                  <Button onClick={() => (window.location.href = "/")} className="bg-green-600 hover:bg-green-700">
                    Go to Dashboard
                  </Button>
                )}
              </>
            )
          )}
        </CardFooter>
      </Card>
    </div>
  )
}

