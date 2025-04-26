import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { newsData } from "@/lib/data"

export const metadata = {
  title: "News | Zeno Academy",
  description: "Latest news and updates from Zeno Academy",
}

export default function NewsPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">University News</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Stay updated with the latest happenings, events, and announcements from Zeno Academy.
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {newsData.map((news) => (
          <Card key={news.id} className="overflow-hidden">
            <Image
              src={news.image || "/news-default.svg"}
              width={400}
              height={200}
              alt={news.title}
              className="aspect-video object-cover w-full"
            />
            <CardContent className="p-6">
              <div className="space-y-2">
                <h2 className="text-xl font-bold">{news.title}</h2>
                <p className="text-sm text-muted-foreground">
                  {new Date(news.date).toLocaleDateString()} | By {news.author}
                </p>
                <p className="line-clamp-3">{news.summary}</p>
                <Link href={`/news/${news.id}`}>
                  <Button variant="link" className="p-0">
                    Read More
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
