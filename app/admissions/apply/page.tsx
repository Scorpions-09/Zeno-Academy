'use client'

import { useState, FormEvent } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { admissionRequirements } from '@/lib/data'

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState(false)
  const [programType, setProgramType] = useState('undergraduate')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Here you would typically handle form submission, e.g., send data to a server
    console.log('Form submitted for program type:', programType)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="container py-12 md:py-16 lg:py-24 flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Application Submitted!</h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Thank you for applying to Zeno Academy. Your application has been successfully submitted. Please wait for an email response.
        </p>
      </div>
    )
  }

  const renderFormFields = (requirements: string[]) => {
    return requirements.map((req, index) => {
      // Basic input field generation based on requirement text
      // This can be greatly improved with more specific field types and validation
      const fieldId = `field-${programType}-${index}`
      let fieldType = 'text'
      let placeholder = req
      let label = req

      if (req.toLowerCase().includes('email')) {
        fieldType = 'email'
        placeholder = 'Enter your email'
      } else if (req.toLowerCase().includes('phone')) {
        fieldType = 'tel'
        placeholder = 'Enter your phone number'
      } else if (req.toLowerCase().includes('date') || req.toLowerCase().includes('dob')) {
        fieldType = 'date'
        placeholder = ''
      } else if (req.toLowerCase().includes('gpa')) {
        fieldType = 'number'
        placeholder = 'Enter your GPA'
      } else if (req.toLowerCase().includes('statement') || req.toLowerCase().includes('essay')) {
        return (
          <div key={fieldId} className="space-y-2">
            <Label htmlFor={fieldId}>{label}</Label>
            <Textarea id={fieldId} placeholder={`Write your ${label.toLowerCase()}`} required />
          </div>
        )
      } else if (req.toLowerCase().includes('recommendation')) {
        label = `${req} (e.g., recommender's name and email)`
        placeholder = `Recommender's Name, Recommender's Email`
      } else if (req.toLowerCase().includes('resume') || req.toLowerCase().includes('cv')) {
        fieldType = 'file'
        label = `${req} (PDF, DOCX)`
      } else if (req.toLowerCase().includes('passport')){
        fieldType = 'file'
        label = `${req} (PDF, JPG, PNG)`
      } else if (req.toLowerCase().includes('financial documentation')){
        fieldType = 'file'
        label = `${req} (PDF)`
      }

      if (fieldType === 'file') {
        return (
          <div key={fieldId} className="space-y-2">
            <Label htmlFor={fieldId}>{label}</Label>
            <Input id={fieldId} type={fieldType} required />
          </div>
        )
      }

      return (
        <div key={fieldId} className="space-y-2">
          <Label htmlFor={fieldId}>{label}</Label>
          <Input id={fieldId} type={fieldType} placeholder={placeholder} required />
        </div>
      )
    })
  }

  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Apply to Zeno Academy</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Complete the form below to start your application process.
          </p>
        </div>
      </div>

      <Tabs defaultValue="undergraduate" className="w-full max-w-3xl mx-auto" onValueChange={setProgramType}>
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="undergraduate">Undergraduate</TabsTrigger>
          <TabsTrigger value="graduate">Graduate</TabsTrigger>
          <TabsTrigger value="international">International</TabsTrigger>
        </TabsList>

        {admissionRequirements.map((program) => (
          <TabsContent key={program.program} value={program.program.toLowerCase().split(' ')[0]}>
            <Card>
              <CardHeader>
                <CardTitle>{program.program} Application</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor={`fullName-${program.program.toLowerCase().split(' ')[0]}`}>Full Name</Label>
                    <Input id={`fullName-${program.program.toLowerCase().split(' ')[0]}`} placeholder="Enter your full name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`email-${program.program.toLowerCase().split(' ')[0]}`}>Email Address</Label>
                    <Input id={`email-${program.program.toLowerCase().split(' ')[0]}`} type="email" placeholder="Enter your email address" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`phone-${program.program.toLowerCase().split(' ')[0]}`}>Phone Number</Label>
                    <Input id={`phone-${program.program.toLowerCase().split(' ')[0]}`} type="tel" placeholder="Enter your phone number" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`dob-${program.program.toLowerCase().split(' ')[0]}`}>Date of Birth</Label>
                    <Input id={`dob-${program.program.toLowerCase().split(' ')[0]}`} type="date" required />
                  </div>
                  <div className="space-y-2">
                    <Label>Gender</Label>
                    <RadioGroup defaultValue="other" className="flex space-x-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="male" id={`male-${program.program.toLowerCase().split(' ')[0]}`} />
                        <Label htmlFor={`male-${program.program.toLowerCase().split(' ')[0]}`}>Male</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="female" id={`female-${program.program.toLowerCase().split(' ')[0]}`} />
                        <Label htmlFor={`female-${program.program.toLowerCase().split(' ')[0]}`}>Female</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="other" id={`other-${program.program.toLowerCase().split(' ')[0]}`} />
                        <Label htmlFor={`other-${program.program.toLowerCase().split(' ')[0]}`}>Other</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`address-${program.program.toLowerCase().split(' ')[0]}`}>Address</Label>
                    <Textarea id={`address-${program.program.toLowerCase().split(' ')[0]}`} placeholder="Enter your full address" required />
                  </div>
                  
                  {/* Dynamically generated fields based on requirements */}
                  {renderFormFields(program.requirements)}

                  <Button type="submit" className="w-full">Submit Application</Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}