import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { facultyData, universityStats } from "@/lib/data"

export const metadata = {
  title: "About Us | Zeno Academy",
  description: "Learn about Zeno Academy, our faculty, and our mission",
}

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Zeno Academy</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Discover our history, mission, and the people who make our university exceptional.
          </p>
        </div>
      </div>

      <div className="grid gap-12">
        {/* History & Mission */}
        <section>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Our History</h2>
              <p className="mb-4">
                Founded in 1995, Zeno Academy was established with a vision to create an institution that would combine
                academic excellence with innovative teaching methods. Named after the ancient Greek philosopher Zeno of
                Citium, the founder of Stoicism, our university embodies the principles of wisdom, resilience, and
                ethical conduct.
              </p>
              <p>
                Over the past three decades, Zeno Academy has grown from a small college with just three departments to
                a comprehensive university offering a wide range of undergraduate and graduate programs. Throughout our
                history, we have remained committed to our founding principles while adapting to the changing needs of
                society and the evolving landscape of higher education.
              </p>
            </div>
            <Image
              src="/campus-default.jpg"
              width={600}
              height={400}
              alt="Zeno Academy Historic Building"
              className="rounded-lg object-cover"
            />
          </div>
        </section>

        {/* University Statistics */}
        <section className="bg-muted py-12 px-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-8 text-center">University at a Glance</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">{universityStats.students.toLocaleString()}</p>
              <p className="text-sm text-muted-foreground">Students</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">{universityStats.faculty.toLocaleString()}</p>
              <p className="text-sm text-muted-foreground">Faculty Members</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">{universityStats.programs.toLocaleString()}</p>
              <p className="text-sm text-muted-foreground">Academic Programs</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">{universityStats.research.toLocaleString()}</p>
              <p className="text-sm text-muted-foreground">Research Projects</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">{universityStats.international.toLocaleString()}</p>
              <p className="text-sm text-muted-foreground">International Students</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">{universityStats.alumni.toLocaleString()}</p>
              <p className="text-sm text-muted-foreground">Alumni Worldwide</p>
            </div>
          </div>
        </section>

        {/* Faculty */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Our Faculty</h2>
          <p className="max-w-3xl mb-8">
            Our distinguished faculty members are leaders in their fields, committed to excellence in teaching,
            research, and service. They bring a wealth of knowledge and experience to the classroom, providing students
            with a rich and engaging educational experience.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facultyData.map((faculty) => (
              <Card key={faculty.id}>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <Image
                      src={faculty.image || "/campus-default.jpg"}
                      width={150}
                      height={150}
                      alt={faculty.name}
                      className="rounded-full object-cover mb-4"
                    />
                    <h3 className="text-xl font-bold">{faculty.name}</h3>
                    <p className="text-primary mb-1">{faculty.title}</p>
                    <p className="text-sm text-muted-foreground mb-4">{faculty.department}</p>
                    <p className="text-sm">{faculty.bio}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Campus */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Our Campus</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Image
              src="/campus-default.jpg"
              width={600}
              height={400}
              alt="Zeno Academy Campus"
              className="rounded-lg object-cover"
            />
            <div>
              <p className="mb-4">
                Nestled in the picturesque Issyk-Kul Region of Kyrgyzstan, our campus offers a vibrant learning environment. 
The campus features a blend of historic and modern architecture, creating an environment that honors our traditions while embracing innovation. 
Our address is 12 Ala-Too Street, Building 3, Room 45, Ananyevo, Issyk-Kul Region 722101, Kyrgyzstan.
              </p>
              <p className="mb-4">
                Our facilities include state-of-the-art classrooms, research laboratories, a comprehensive library with
                over 500,000 volumes, modern dormitories, sports facilities, and recreational areas. The campus is
                designed to provide a conducive environment for learning, research, and personal growth.
              </p>
              <p>
                The campus is easily accessible and is within a short distance of many cultural
                attractions, restaurants, and shops, allowing students to fully experience the vibrant culture of
                San Diego.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-primary text-primary-foreground py-12 px-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary-foreground/10 mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8"
                >
                  <path d="M12 22a9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 3a9.5 9.5 0 0 0-9.5 9.5A9.5 9.5 0 0 0 12 22Z" />
                  <path d="m12 8 4 4-4 4" />
                  <path d="m8 12h8" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p>
                We strive for excellence in all our endeavors, from academic programs to research initiatives and
                community service.
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary-foreground/10 mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8"
                >
                  <path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z" />
                  <path d="M12 13v8" />
                  <path d="M5 13v6a2 2 0 0 0 2 2h8" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Integrity</h3>
              <p>
                We uphold the highest standards of honesty, transparency, and ethical conduct in all our interactions.
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary-foreground/10 mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8"
                >
                  <path d="M16.5 9.4 7.5 4.21" />
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <path d="M3.29 7 12 12l8.71-5" />
                  <path d="M12 22V12" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p>
                We foster a culture of creativity, critical thinking, and innovation to address the challenges of our
                time.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
