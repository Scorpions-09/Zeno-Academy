import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { admissionRequirements } from "@/lib/data"

export const metadata = {
  title: "Admissions | Zeno Academy",
  description: "Information about admissions to Zeno Academy",
}

export default function AdmissionsPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Admissions</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Join our community of scholars and innovators. Discover the admission requirements and application process.
          </p>
        </div>
      </div>

      <div className="grid gap-12">
        {/* Overview Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Admission Overview</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="mb-4">
                Zeno Academy is committed to admitting a diverse group of talented students who will contribute to our
                academic community and benefit from the educational opportunities we offer. Our admission process is
                designed to identify students who demonstrate academic excellence, intellectual curiosity, and a
                commitment to personal growth and community engagement.
              </p>
              <p>
                We evaluate applications holistically, considering academic achievements, extracurricular activities,
                personal qualities, and potential for growth. We encourage applications from students of all
                backgrounds, regardless of race, ethnicity, gender, nationality, or socioeconomic status.
              </p>
            </div>
            <div className="bg-muted rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Key Dates</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Fall Semester</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Application Opens: January 1</li>
                    <li>Early Decision Deadline: February 1</li>
                    <li>Regular Decision Deadline: April 15</li>
                    <li>Admission Decisions: May 15</li>
                    <li>Enrollment Confirmation: June 1</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Spring Semester</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Application Opens: August 1</li>
                    <li>Application Deadline: November 1</li>
                    <li>Admission Decisions: November 30</li>
                    <li>Enrollment Confirmation: December 15</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Admission Requirements</h2>
          <Tabs defaultValue="undergraduate">
            <TabsList className="mb-6">
              <TabsTrigger value="undergraduate">Undergraduate</TabsTrigger>
              <TabsTrigger value="graduate">Graduate</TabsTrigger>
              <TabsTrigger value="international">International</TabsTrigger>
            </TabsList>
            {admissionRequirements.map((program) => (
              <TabsContent key={program.program} value={program.program.toLowerCase().split(" ")[0]}>
                <Card>
                  <CardHeader>
                    <CardTitle>{program.program}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Requirements</h3>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                          {program.requirements.map((req, index) => (
                            <li key={index}>{req}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Application Deadlines</h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="font-medium">Fall Semester</p>
                            <p className="text-muted-foreground">{program.deadlines.fall}</p>
                          </div>
                          <div>
                            <p className="font-medium">Spring Semester</p>
                            <p className="text-muted-foreground">{program.deadlines.spring}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </section>

        {/* Application Process */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Application Process</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mb-4">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Submit Application</h3>
                <p className="text-muted-foreground">
                  Complete the online application form with your personal information, academic history, and other
                  required details.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mb-4">
                  <span className="text-xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Submit Documents</h3>
                <p className="text-muted-foreground">
                  Upload or send all required documents, including transcripts, test scores, letters of recommendation,
                  and personal statements.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mb-4">
                  <span className="text-xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Interview (if required)</h3>
                <p className="text-muted-foreground">
                  Some programs may require an interview as part of the application process. You will be notified if an
                  interview is needed.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Financial Aid */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Financial Aid & Scholarships</h2>
          <div className="bg-muted rounded-lg p-6 mb-6">
            <p className="mb-4">
              Zeno Academy is committed to making education accessible to all qualified students, regardless of their
              financial circumstances. We offer a range of financial aid options, including scholarships, grants, loans,
              and work-study opportunities.
            </p>
            <p>
              Our merit-based scholarships recognize academic excellence, leadership potential, and special talents.
              Need-based financial aid is available to students who demonstrate financial need as determined by our
              financial aid assessment process.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Merit Scholarships</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Presidential Scholarship (full tuition)</li>
                  <li>Dean's Scholarship (75% tuition)</li>
                  <li>Academic Excellence Scholarship (50% tuition)</li>
                  <li>Leadership Scholarship (25% tuition)</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Need-Based Aid</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Zeno Academy Grants</li>
                  <li>Work-Study Programs</li>
                  <li>Student Loans</li>
                  <li>Emergency Financial Assistance</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact & Apply */}
        <section className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Apply?</h2>
          <p className="max-w-2xl mx-auto mb-6">
            Take the first step towards your future at Zeno Academy. Our admissions team is here to guide you through
            the process.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/admissions/apply">
              <Button size="lg" variant="secondary">
                Apply Now
              </Button>
            </Link>
            <a href="mailto:admin@zeno.edu.kg">
              <Button size="lg" variant="outline" className="bg-transparent">
                Contact Admissions
              </Button>
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
