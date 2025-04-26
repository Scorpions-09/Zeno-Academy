import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { newsData } from "@/lib/data"
import { ArrowLeft } from "lucide-react"

interface NewsPageProps {
  params: {
    id: string
  }
}

export function generateMetadata({ params }: NewsPageProps) {
  const news = newsData.find((item) => item.id === params.id)

  if (!news) {
    return {
      title: "News Not Found | Zeno Academy",
      description: "The requested news article could not be found.",
    }
  }

  return {
    title: `${news.title} | Zeno Academy`,
    description: news.summary,
  }
}

export default function NewsDetailPage({ params }: NewsPageProps) {
  const news = newsData.find((item) => item.id === params.id)

  if (!news) {
    notFound()
  }

  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <Link href="/news">
        <Button variant="ghost" className="mb-6 pl-0">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to News
        </Button>
      </Link>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">{news.title}</h1>
        <p className="text-muted-foreground mb-6">
          {new Date(news.date).toLocaleDateString()} | By {news.author}
        </p>

        <Image
          src={news.image || "/news-default.svg"}
          width={800}
          height={400}
          alt={news.title}
          className="rounded-lg object-cover w-full aspect-video mb-8"
        />

        <div
          className="prose prose-stone dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: news.content }}
        />

        <div className="mt-12 pt-6 border-t">
          <h2 className="text-xl font-bold mb-4">Share this article</h2>
          <div className="flex space-x-4">
            <Button variant="outline" size="sm">
              Facebook
            </Button>
            <Button variant="outline" size="sm">
              Twitter
            </Button>
            <Button variant="outline" size="sm">
              LinkedIn
            </Button>
            <Button variant="outline" size="sm">
              Email
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
