"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/components/language-context"
import { translations } from "@/lib/translations"
import { ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"

const articles = [
  { id: 1, image: "/images/oil-change-guide.jpg", category: "Maintenance" },
  { id: 2, image: "/images/brake-system.jpg", category: "Safety" },
  { id: 3, image: "/images/tire-maintenance.jpg", category: "Maintenance" },
  { id: 4, image: "/images/car-tuning.jpg", category: "Performance" },
  { id: 5, image: "/images/battery-replacement.jpg", category: "Maintenance" },
  { id: 6, image: "/images/ac-service.jpg", category: "Comfort" },
]

export default function BlogPage() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background text-foreground">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 animate-fade-in">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up">{t.blog.title}</h1>
            <p
              className="text-lg text-primary-foreground/90 animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              {t.blog.subtitle}
            </p>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <Link
                  key={article.id}
                  href={`/blog/${article.id}`}
                  className="group bg-card text-card-foreground rounded-lg overflow-hidden shadow-md border border-border hover:border-primary transition-all duration-300 transform hover:-translate-y-2 animate-scale-in"

                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={`Article ${article.id}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary-foreground transition">
                      {t.articles[`article${article.id}_title`]}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {t.articles[`article${article.id}_excerpt`]}
                    </p>
                    <div className="flex items-center font-medium group-hover:gap-2 transition-all">
                      {t.blog.read_more}
                      <ArrowRight size={16} className="ml-2" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}
