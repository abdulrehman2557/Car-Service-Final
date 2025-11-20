"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { useLanguage } from "@/components/language-context"
import { translations } from "@/lib/translations"
import Link from "next/link"
import { Wrench, Zap, Droplet, CheckCircle, Star, Clock, Shield } from "lucide-react"

export default function Home() {
  const { language } = useLanguage()
  const t = translations[language]

  const services = [
  { icon: Wrench, label: language === "en" ? "Paint and lacquer service" : "Lakkering og malingsservice" },
  { icon: Zap, label: language === "en" ? "Plastic parts repair" : "Reparasjon av plastdeler" },
  { icon: Droplet, label: language === "en" ? "Stone chip repair " : "Reparasjon av steinsprut" },
  { icon: CheckCircle, label: language === "en" ? "Polishing" : "Polering" },
];


  const features = [
    {
      icon: Star,
      title: language === "en" ? "Expert Technicians" : "Ekspertmekanikere",
      description:
        language === "en"
          ? "Our certified mechanics have 10+ years of experience in automotive repair and maintenance"
          : "Våre sertifiserte mekanikere har 10+ års erfaring innen bilreparasjon og vedlikehold",
    },
    {
      icon: Clock,
      title: language === "en" ? "Fast & Reliable" : "Rask og Pålitelig",
      description:
        language === "en"
          ? "We guarantee quick turnaround times without compromising on quality or precision"
          : "Vi garanterer rask gjennomføring uten å kompromittere på kvalitet eller presisjon",
    },
    {
      icon: Shield,
      title: language === "en" ? "Quality Guarantee" : "Kvalitetsgaranti",
      description:
        language === "en"
          ? "All services are backed by our comprehensive warranty and satisfaction guarantee"
          : "Alle tjenester er dekket av vår omfattende garanti og tilfredshetsgaranti",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative min-h-56 sm:min-h-72 md:min-h-96 lg:min-h-[500px] bg-gradient-to-r from-primary to-accent overflow-hidden py-8 sm:py-12">
          <img
            src="/images/hero-garage.jpg"
            alt="Professional car service garage"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
            <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-2 sm:mb-3 md:mb-4 text-balance leading-tight">
              {t.home.hero_title}
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-primary-foreground/90 mb-4 sm:mb-6 max-w-2xl text-pretty leading-relaxed">
              {language === "en"
                ? "Professional car service and repair for all makes and models. Expert technicians, modern equipment, and competitive pricing."
                : "Profesjonell bilservice og reparasjon for alle merker og modeller. Ekspertmekanikere, moderne utstyr og konkurransedyktig prising."}
            </p>
            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 w-full sm:w-auto">
              <Link
                href="/contact"
                className="px-4 sm:px-8 py-2.5 sm:py-3 bg-primary-foreground text-primary font-semibold rounded-lg hover:shadow-lg transition text-center text-xs sm:text-sm md:text-base min-h-[40px] sm:min-h-[44px] flex items-center justify-center"
              >
                {t.home.book_service}
              </Link>
              <Link
                href="/services"
                className="px-4 sm:px-8 py-2.5 sm:py-3 border-2 border-primary-foreground text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground/10 transition text-center text-xs sm:text-sm md:text-base min-h-[40px] sm:min-h-[44px] flex items-center justify-center"
              >
                {language === "en" ? "View Services" : "Se Tjenester"}
              </Link>
            </div>
          </div>
        </section>

        <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-12 text-foreground">
              {t.home.key_services}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <div
                    key={index}
                    className="bg-card p-3 sm:p-6 md:p-8 rounded-lg border border-border hover:shadow-lg hover:border-primary transition text-center group"
                  >
                    <Icon className="w-6 sm:w-10 md:w-12 h-6 sm:h-10 md:h-12 text-primary mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold text-foreground text-xs sm:text-sm md:text-base">{service.label}</h3>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-card border-t border-border">
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-12 text-foreground">
              {language === "en" ? "Why Choose Lakkfixas?" : "Hvorfor Velge Lakkfixas?"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div
                    key={index}
                    className="bg-background p-4 sm:p-6 md:p-8 rounded-lg border border-border hover:shadow-lg transition"
                  >
                    <Icon className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 text-primary mb-2 sm:mb-3 md:mb-4" />
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-gradient-to-r from-primary/5 to-accent/5 border-t border-b border-border">
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-3 sm:mb-4 text-foreground animate-slide-up">
              {language === "en" ? "Meet Our Expert Team Manager" : "Møt Vår Ekspertleder"}
            </h2>
            <p className="text-center text-muted-foreground mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto text-xs sm:text-sm md:text-base px-2">
              {language === "en"
                ? "Leading our team with over 15 years of expertise in automotive repair and restoration"
                : "Leder vårt team med over 15 års ekspertise innen bilreparasjon og restaurering"}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center">
              {/* Manager Image */}
              <div className="flex justify-center animate-scale-in" style={{ animationDelay: "0.1s" }}>
                <div className="relative w-full max-w-sm">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-20 blur-2xl"></div>
                  <img
                    src="/images/ioannis-farkonas.jpg"
                    alt="IOANNIS FARKONAS - Team Manager"
                    className="relative w-full h-auto rounded-2xl shadow-2xl border-4 border-primary/20 object-cover"
                  />
                  <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-2 sm:left-3 md:left-4 right-2 sm:right-3 md:right-4 bg-black/60 backdrop-blur-md rounded-lg p-2 sm:p-3 md:p-4 text-white">
                    <h3 className="text-sm sm:text-base md:text-lg font-bold">IOANNIS FARKONAS</h3>
                    <p className="text-xs sm:text-xs md:text-sm text-primary/80 font-semibold">
                      {language === "en" ? "Team Manager & Master Technician" : "Leder & Meistermekaniker"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Manager Info */}
              <div className="space-y-3 sm:space-y-4 md:space-y-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-primary mb-2 sm:mb-3">
                    {language === "en" ? "Professional Excellence & Expertise" : "Profesjonell Dyktighet & Ekspertise"}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed mb-2 sm:mb-3 md:mb-4">
                    {language === "en"
                      ? "With 15+ years of hands-on experience in the automotive industry, IOANNIS leads our expert team with a commitment to precision and customer satisfaction. His specialized expertise spans across all our services, from complex to premium paint and lacquer finishes."
                      : "Med 15+ års praktisk erfaring i bilindustrien, leder IOANNIS vårt ekspertteam med dedikasjon til presisjon og kundetilfredshet. Hans spesialiserte ekspertise spenner over alle våre tjenester, fra kompleks motordiagnostikk til premium maling og lakksluttbehandlinger."}
                  </p>
                </div>

                <div className="bg-card rounded-lg p-3 sm:p-4 md:p-6 border border-border hover:shadow-lg transition">
                  <h4 className="font-semibold text-foreground mb-2 sm:mb-3 flex items-center gap-2 text-xs sm:text-sm md:text-base">
                    <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                    {language === "en" ? "Areas of Expertise" : "Ekspertiseområder"}
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 md:gap-3">
                    <li className="flex items-center gap-2 text-xs sm:text-xs md:text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      {language === "en" ? "Paint & Lacquer Service" : "Maling & Lakktjeneste"}
                    </li>
                    <li className="flex items-center gap-2 text-xs sm:text-xs md:text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      {language === "en" ? "Plastic parts repair" : "Reparasjon av plastdeler"}
                    </li>
                   
                    
                    <li className="flex items-center gap-2 text-xs sm:text-xs md:text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      {language === "en" ? "Stone chip repair" : "Reparasjon av steinsprut"}
                    </li>
                    <li className="flex items-center gap-2 text-xs sm:text-xs md:text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      {language === "en" ? "Polishing" : "Polering"}
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 md:gap-4 pt-1 sm:pt-2">
                  <Link
                    href="/about"
                    className="flex-1 px-4 sm:px-6 py-2.5 sm:py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:opacity-90 transition text-center text-xs sm:text-sm md:text-base min-h-[40px] sm:min-h-[44px] flex items-center justify-center"
                  >
                    {language === "en" ? "View Full Team" : "Se Helt Team"}
                  </Link>
                  <Link
                    href="/contact"
                    className="flex-1 px-4 sm:px-6 py-2.5 sm:py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition text-center text-xs sm:text-sm md:text-base min-h-[40px] sm:min-h-[44px] flex items-center justify-center"
                  >
                    {language === "en" ? "Book with Expert" : "Bestill Med Ekspert"}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

       {/* ✅ Our Services Section (Updated) */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 text-foreground">
              {language === "en" ? "Our Services" : "Våre Tjenester"}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">

              {/* Painting Service */}
              <div className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition">
                <img
                  src="/images/lacquer-service.jpg"
                  alt="Car painting service"
                  className="w-full h-32 sm:h-40 md:h-48 object-cover"
                />
                <div className="p-4 md:p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {language === "en" ? "Car Painting & Polishing" : "Billakkering og Polering"}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {language === "en"
                      ? "We offer high-quality car painting and polishing to restore your vehicle’s shine and protect the exterior from damage."
                      : "Vi tilbyr høykvalitets billakkering og polering for å gjenopprette glansen og beskytte bilens ytre mot skader."}
                  </p>
                  <Link href="/services" className="text-primary font-semibold hover:underline text-sm">
                    {language === "en" ? "Learn More →" : "Lær Mer →"}
                  </Link>
                </div>
              </div>

              {/* Interior Cleaning Service */}
              <div className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition">
                <img
                  src="/images/design-mode/Car-Detailing-Services-In-Karachi.jpg"
                  alt="Car interior cleaning"
                  className="w-full h-32 sm:h-40 md:h-48 object-cover"
                />
                <div className="p-4 md:p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {language === "en" ? "Interior Cleaning" : "Interiørrengjøring"}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {language === "en"
                      ? "Complete interior detailing service including seat, carpet, and dashboard cleaning for a fresh look and feel."
                      : "Full interiørdetaljering inkludert rens av seter, tepper og dashbord for et friskt utseende og ren følelse."}
                  </p>
                  <Link href="/services" className="text-primary font-semibold hover:underline text-sm">
                    {language === "en" ? "Learn More →" : "Lær Mer →"}
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>
        <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-6">
              {language === "en" ? "Ready to Service Your Car?" : "Klar til å Vedlikeholde Bilen Din?"}
            </h2>
            <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto opacity-90">
              {language === "en"
                ? "Contact us today to book your appointment or get a free quote. Our team is ready to help!"
                : "Kontakt oss i dag for å bestille en time eller få et gratis tilbud. Vårt team er klar til å hjelpe!"}
            </p>
            <Link
              href="/contact"
              className="inline-block px-4 sm:px-8 py-2.5 sm:py-3 bg-primary-foreground text-primary font-semibold rounded-lg hover:shadow-lg transition text-xs sm:text-sm md:text-base min-h-[40px] sm:min-h-[44px] flex items-center justify-center"
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
