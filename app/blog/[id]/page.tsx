"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/components/language-context"
import { translations } from "@/lib/translations"
import { ArrowLeft } from "lucide-react"
import { useParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"

const articleImages = {
  1: "/images/oil-change-guide.jpg",
  2: "/images/brake-system.jpg",
  3: "/images/tire-maintenance.jpg",
  4: "/images/car-tuning.jpg",
  5: "/images/battery-replacement.jpg",
  6: "/images/ac-service.jpg",
}

const relatedArticles = {
  1: [2, 3],
  2: [1, 3],
  3: [1, 2],
  4: [5, 6],
  5: [4, 6],
  6: [4, 5],
}

export default function ArticlePage() {
  const { language } = useLanguage()
  const t = translations[language]
  const params = useParams()
  const articleId = Number.parseInt(params.id as string)

  const title = t.articles[`article${articleId}_title`]
  const content = t.articles[`article${articleId}_content`]
  const image = articleImages[articleId as keyof typeof articleImages]
  const related = relatedArticles[articleId as keyof typeof relatedArticles]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background text-foreground">
        {/* Back Button */}
        <div className="bg-card border-b border-border animate-fade-in">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link
              href="/blog"
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition font-medium hover:gap-3"
            >
              <ArrowLeft size={20} />
              {t.blog.back_to_blog}
            </Link>
          </div>
        </div>

        {/* Article Content */}
        <article className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero Image */}
            <div className="relative h-96 rounded-lg overflow-hidden mb-8 shadow-lg animate-slide-up">
              <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
            </div>

            {/* Article Header */}
            <div className="mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">{title}</h1>
              <div className="flex items-center gap-4 text-muted-foreground">
                <span>{t.blog.published} Oct 31, 2025</span>
                <span>•</span>
                <span>{t.blog.author}</span>
              </div>
            </div>

            {/* Article Body */}
            <div
              className="prose prose-invert prose-lg max-w-none mb-12 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <p className="text-lg text-foreground leading-relaxed mb-6">{content}</p>

              <div className="bg-primary/10 border-l-4 border-primary p-6 rounded my-8 transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl font-bold text-primary mb-2">Pro Tip</h3>
                <p className="text-muted-foreground">
                  Regular maintenance is the key to keeping your vehicle running smoothly and avoiding costly repairs.
                  Schedule your service with Lakkfixas today!
                </p>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                At Lakkfixas, we have the expertise and equipment to handle all your car maintenance and repair needs.
                Our team of skilled technicians is ready to help you keep your vehicle in top condition.
              </p>
            </div>

            {/* CTA */}
            <div className="bg-primary text-primary-foreground rounded-lg p-8 mb-12 text-center transform hover:scale-105 transition-transform duration-300 animate-scale-in">
              <h3 className="text-2xl font-bold mb-4">Need Professional Service?</h3>
              <p className="mb-6">Contact Lakkfixas today to schedule your appointment</p>
              <Link
                href="/contact"
                className="inline-block bg-primary-foreground text-primary px-8 py-3 rounded-lg font-bold hover:bg-primary-foreground/90 transition"
              >
                Book Service Now
              </Link>
            </div>

            {/* Related Articles */}
            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <h3 className="text-2xl font-bold text-foreground mb-6">{t.blog.related_articles}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {related.map((relatedId, index) => (
                  <Link
                    key={relatedId}
                    href={`/blog/${relatedId}`}
                    className="group bg-card text-card-foreground rounded-lg overflow-hidden shadow-md border border-border hover:border-primary transition-all duration-300 transform hover:-translate-y-2 animate-scale-in"

                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    <div className="relative h-40 overflow-hidden bg-muted">
                      <Image
                        src={articleImages[relatedId as keyof typeof articleImages] || "/placeholder.svg"}
                        alt={`Article ${relatedId}`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold group-hover:text-primary-foreground transition">
                        {t.articles[`article${relatedId}_title`]}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}
