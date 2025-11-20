"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { useLanguage } from "@/components/language-context"
import { translations } from "@/lib/translations"
import Link from "next/link"
import { Award, Users, Zap, Shield } from "lucide-react"

export default function AboutPage() {
  const { language } = useLanguage()
  const t = translations[language]

  const values = [
    {
      icon: Award,
      title: t.about.expert,
      description:
        language === "en"
          ? "Our team consists of certified mechanics with 10+ years of experience in the automotive industry. We stay updated with the latest repair techniques and technologies."
          : "Vårt team består av sertifiserte mekanikere med 10+ års erfaring i bilindustrien. Vi holder oss oppdatert med de nyeste reparasjonsteknikker og teknologier.",
    },
    {
      icon: Zap,
      title: t.about.fast,
      description:
        language === "en"
          ? "We provide quick and affordable services without compromising on quality or precision. Most repairs are completed within 24-48 hours."
          : "Vi tilbyr rask og rimelig service uten å kompromittere på kvalitet eller presisjon. De fleste reparasjoner fullføres innen 24-48 timer.",
    },
    {
      icon: Users,
      title: t.about.support,
      description:
        language === "en"
          ? "Our dedicated support team is always ready to help you with any questions or concerns. We provide transparent communication throughout the repair process."
          : "Vårt dedikerte supportteam er alltid klar til å hjelpe deg med spørsmål eller bekymringer. Vi gir transparent kommunikasjon gjennom hele reparasjonsprosessen.",
    },
    {
      icon: Shield,
      title: t.about.quality,
      description:
        language === "en"
          ? "Every service is backed by our comprehensive quality guarantee and warranty. We stand behind our work 100%."
          : "Hver tjeneste er dekket av vår omfattende kvalitetsgaranti og garanti. Vi står bak vårt arbeid 100%.",
    },
  ]

  const stats = [
    {
      number: "500+",
      label: language === "en" ? "Happy Customers" : "Fornøyde Kunder",
      description: language === "en" ? "Satisfied clients trust us" : "Fornøyde klienter stoler på oss",
    },
    {
      number: "10+",
      label: language === "en" ? "Years Experience" : "År Erfaring",
      description: language === "en" ? "In automotive service" : "Innen bilservice",
    },
    {
      number: "1000+",
      label: language === "en" ? "Services Completed" : "Tjenester Fullført",
      description: language === "en" ? "Successful repairs" : "Vellykkede reparasjoner",
    },
    {
      number: "98%",
      label: language === "en" ? "Satisfaction Rate" : "Tilfredshetsrate",
      description: language === "en" ? "Customer satisfaction" : "Kundetilfredshet",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-80 md:h-96 bg-gradient-to-r from-primary to-accent overflow-hidden">
          <img
            src="/images/team-mechanics.jpg"
            alt="Professional mechanics team"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4 text-balance">
              {t.about.title}
            </h1>
            <p className="text-lg text-primary-foreground/90 max-w-2xl text-pretty">
              {language === "en"
                ? "Learn more about Lakkfixas and our commitment to excellence in automotive service"
                : "Lær mer om Lakkfixas og vår forpliktelse til fremragende bilservice"}
            </p>
          </div>
        </section>

        {/* About Description */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-foreground leading-relaxed mb-6">
                {language === "en"
                  ? "Lakkfixas is a leading car painting workshop specializing in giving your vehicle a fresh and flawless appearance. With over ten years of experience, we have built a strong reputation for quality, precision, and customer satisfaction."
                  : "Lakkfixas er et ledende billakkeringsverksted som spesialiserer seg på å gi kjøretøyet ditt et nytt og feilfritt utseende. Med over ti års erfaring har vi opparbeidet et rykte for kvalitet, presisjon og kundetilfredshet."}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {language === "en"
                  ? "Our mission is to provide professional painting services that protect your car and make it look like new. We combine modern techniques with competitive prices, making high-quality car painting accessible to everyone."
                  : "Vår misjon er å tilby profesjonell lakkeringsservice som beskytter bilen din og gjør at den ser ut som ny. Vi kombinerer moderne teknikker med konkurransedyktige priser, slik at kvalitetslakkering er tilgjengelig for alle."}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {language === "en"
                  ? "Whether it’s minor scratches, larger damages, or a complete repaint, our team of certified painters is equipped to handle everything with careful precision and attention to detail. We use only original paints and state-of-the-art equipment to ensure a durable and perfect result."
                  : "Enten du trenger rutinemessig vedlikehold eller komplekse reparasjoner, er vårt team av sertifiserte mekanikere utstyrt til å håndtere alt med profesjonalitet og omsorg. Vi bruker bare det nyeste diagnostikkutstyret og originale deler for å sikre at kjøretøyet ditt får best mulig service."}
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 md:py-24 bg-card border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                  <p className="font-semibold text-foreground mb-1">{stat.label}</p>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">{t.about.why_choose}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <div key={index} className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition">
                    <Icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-3">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === "en" ? "Experience the Lakkfixas Difference" : "Opplev Lakkfixas-Forskjellen"}
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              {language === "en"
                ? "Join hundreds of satisfied customers who trust Lakkfixas for their vehicle maintenance and repair needs. Contact us today!"
                : "Bli med hundrevis av fornøyde kunder som stoler på Lakkfixas for vedlikehold og reparasjon av kjøretøy. Kontakt oss i dag!"}
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-primary-foreground text-primary font-semibold rounded-lg hover:shadow-lg transition"
            >
              {t.home.book_service}
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  )
}
