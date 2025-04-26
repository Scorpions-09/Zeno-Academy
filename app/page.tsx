'use client'

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { newsData } from "@/lib/data"
import { useLanguage } from "@/lib/language-context"

export default function Home() {
  const { language, translations } = useLanguage()
  // Get the latest 3 news items
  const latestNews = newsData.slice(0, 3)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  {translations[language].hero.title}
                </h1>
                <h2 className="text-xl font-semibold text-primary">{translations[language].hero.subtitle}</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  {translations[language].hero.description}
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/admissions">
                  <Button size="lg">{translations[language].hero.applyNow}</Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline">
                    {translations[language].hero.learnMore}
                  </Button>
                </Link>
              </div>
            </div>
            <Image
              src="/campus-default.jpg"
              width={550}
              height={550}
              alt="Zeno Academy Campus"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            />
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{translations[language].mission.title}</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                {translations[language].mission.description}
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto">
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
                    className="h-8 w-8 text-primary"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Academic Excellence</h3>
                <p className="text-muted-foreground">
                  We foster a culture of academic rigor and intellectual curiosity, encouraging students to pursue
                  knowledge and develop critical thinking skills.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto">
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
                    className="h-8 w-8 text-primary"
                  >
                    <path d="M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7H2Z" />
                    <path d="M6 11V7c0-1.1.9-2 2-2h3" />
                    <path d="M18 11V7c0-1.1-.9-2-2-2h-3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Innovation & Research</h3>
                <p className="text-muted-foreground">
                  We are dedicated to advancing knowledge through innovative research and creative endeavors that
                  address real-world challenges.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto">
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
                    className="h-8 w-8 text-primary"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                    <path d="M2 12h20" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Global Perspective</h3>
                <p className="text-muted-foreground">
                  We embrace diversity and promote a global perspective, preparing students to thrive in an
                  interconnected world.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{translations[language].news.title}</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                {translations[language].news.description}
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {latestNews.map((news) => (
              <Card key={news.id} className="overflow-hidden">
                <Image
                  src={news.image || "/campus-default.jpg"}
                  width={400}
                  height={200}
                  alt={news.title}
                  className="aspect-video object-cover w-full"
                />
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">{news.title}</h3>
                    <p className="text-sm text-muted-foreground">{new Date(news.date).toLocaleDateString()}</p>
                    <p className="line-clamp-3">{news.summary}</p>
                    <Link href={`/news/${news.id}`}>
                      <Button variant="link" className="p-0">
                        {translations[language].news.readMore}
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center">
            <Link href="/news">
              <Button variant="outline">{translations[language].news.viewAll}</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{translations[language].cta.title}</h2>
              <p className="mx-auto max-w-[700px] md:text-xl">
                {translations[language].cta.description}
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/admissions">
                <Button size="lg" variant="secondary">
                  Apply Now
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
