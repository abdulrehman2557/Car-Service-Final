"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { useLanguage } from "@/components/language-context"
import { translations } from "@/lib/translations"
import Link from "next/link"
import { Wrench, Zap, Droplet, CheckCircle, Gauge, Siren as Tire, Beaker as Brake, Battery, Wind } from "lucide-react"

export default function ServicesPage() {
  const { language } = useLanguage()
  const t = translations[language]

  const services = [
  {
      icon: Droplet,
      title: t.services.lacquer,
      description: t.services.lacquer_desc,
      details:
        language === "en"
          ? "Professional painting, lacquer coating, and color matching services for a perfect finish on your vehicle."
          : "Profesjonell maling, lakkbelegg og fargesamkjøring for perfekt finish på kjøretøyet ditt.",
      image: "/images/lacquer-service.jpg",
    },
   
    {
  icon: CheckCircle,
  title: t.services.detailing || (language === "en" ? "Car Detailing Package" : "Bilpleiepakke"),
  description: t.services.detailing_desc || (language === "en" ? "Complete interior and exterior car detailing service." : "Komplett interiør- og eksteriørbilpleietjeneste."),
  details:
    language === "en"
      ? "Our car detailing package includes full interior deep cleaning, exterior polishing, paint protection, tire and rim shining, and engine bay cleaning. We use premium products to make your car look brand new inside and out."
      : "Vår bilpleiepakke inkluderer grundig interiørrengjøring, utvendig polering, lakkbeskyttelse, dekkskinn og motorvask. Vi bruker premiumprodukter for å få bilen til å se ut som ny både innvendig og utvendig.",
  image: "https://surfnshine.com/wp-content/uploads/2023/10/interior-detailing-1024x576.jpg",
},

    {
      icon: Zap,
      title: t.services.lanterns,
      description: t.services.lanterns_desc,
      details:
        language === "en"
          ? "Expert headlight and taillight repair, replacement, and restoration services for optimal visibility and safety."
          : "Ekspertservice for frontlys og baklysreparasjon, utskifting og restaurering for optimal synlighet og sikkerhet.",
      image: "/images/lanterns-service.jpg",
    },
    {
      icon: Wrench,
      title: t.services.bodywork,
      description: t.services.bodywork_desc,
      details:
        language === "en"
          ? "Professional dent removal, panel repair, and complete bodywork restoration to restore your vehicle's appearance."
          : "Profesjonell bulkfjerning, panelreparasjon og komplett karosserirestaurering for å gjenopprette kjøretøyets utseende.",
      image: "/images/bodywork-repair.jpg",
    },
    

    {
      icon: Wrench,
      title: t.services.plastic,
      description: t.services.plastic_desc,
      details:
        language === "en"
          ? "Bumper repair, plastic trim restoration, and component replacement for a like-new appearance."
          : "Støtfangerreparasjon, plasttrimprestaurering og komponentutskifting for utseende som nytt.",
      image: "/images/plastic-repair.jpg",
    },
    {
  icon: Wrench,
  title: t.services.interior || (language === "en" ? "Interior Service" : "Interiørtjeneste"),
  description: t.services.interior_desc || (language === "en" ? "Seat repair, mat cleaning, and full interior detailing." : "Setereparasjon, matterengjøring og full interiørdetaljering."),
  details:
    language === "en"
      ? "Our interior service includes repairing seats, replacing or cleaning mats, dashboard polishing, and full cabin cleaning to make your car’s interior look and feel brand new."
      : "Vår interiørtjeneste inkluderer setereparasjon, utskifting eller rengjøring av matter, dashbordpolering og full kabinrengjøring for å få bilen til å se ut og føles som ny.",
  image: "https://www.fixdar.com/wp-content/uploads/2025/04/Car-Detailing-Services-In-Karachi.jpg",
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
              {t.services.title}
            </h1>
            <p className="text-lg text-primary-foreground/90 max-w-2xl text-pretty">
              {language === "en"
                ? "Comprehensive car maintenance and repair services tailored to your vehicle's needs. Expert technicians using modern equipment."
                : "Omfattende bilvedlikehold og reparasjonstjenester tilpasset kjøretøyets behov. Ekspertmekanikere som bruker moderne utstyr."}
            </p>
          </div>
        </section>

        {/* Services Grid with Details and Images */}
        <section className="py-12 sm:py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <div
                    key={index}
                    className="bg-card rounded-lg border border-border hover:shadow-lg hover:border-primary transition-all duration-300 group overflow-hidden"
                  >
                    <div className="relative h-40 overflow-hidden bg-muted">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="mb-4">
                        <Icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <h3 className="text-base font-semibold text-foreground mb-2">{service.title}</h3>
                      <p className="text-xs text-muted-foreground mb-3">{service.description}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{service.details}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
        {/* Car Detailing Services List */}
<section className="py-12 sm:py-16 bg-background border-t border-border">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-center text-primary mb-8">
      {language === "en" ? "Car Detailing Services" : "Bilpleietjenester"}
    </h2>

    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-foreground text-center">
      {[
        language === "en" ? "Car Wash & Cleaning" : "Bilvask og rengjøring",
        language === "en" ? "Polishing" : "Polering",
        language === "en" ? "Paint Protection" : "Lakkbeskyttelse",
        language === "en" ? "Engine Cleaning" : "Motorrengjøring",
        language === "en" ? "Interior Cleaning" : "Interiørrengjøring",
        language === "en" ? "Wheel & Rim Cleaning" : "Felgrengjøring",
        language === "en" ? "Glass & Window Polishing" : "Glass- og vinduspolering",
        language === "en" ? "Windshield Replacement" : "Skifte av frontrute",
        language === "en" ? "Stone Chip Repair" : "Reparasjon av steinsprut",
        language === "en" ? "Paint Sealing" : "Lakkforsegling",
        language === "en" ? "Odor Removal" : "Fjerning av lukt",
        language === "en" ? "Door Handle & Plastic Care" : "Dørhåndtak og plastpleie",
        language === "en" ? "Lubrication & Maintenance" : "Smøring og vedlikehold",
        language === "en" ? "Car Detailing Package" : "Bilpleiepakke",
      ].map((item, index) => (
        <li
          key={index}
          className="p-3 bg-card text-card-foreground rounded-lg shadow-sm border border-border hover:bg-primary hover:text-primary-foreground transition"
        >
          {item}
        </li>
      ))}
    </ul>
  </div>
</section>



        {/* Why Choose Our Services */}
        <section className="py-12 sm:py-16 md:py-24 bg-card border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-foreground">
              {language === "en" ? "Why Choose Our Services?" : "Hvorfor Velge Våre Tjenester?"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {language === "en" ? "Expert Technicians" : "Ekspertmekanikere"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {language === "en"
                    ? "Highly trained and certified professionals with 10+ years of experience in automotive repair and maintenance."
                    : "Høyt utdannede og sertifiserte fagfolk med 10+ års erfaring innen bilreparasjon og vedlikehold."}
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {language === "en" ? "Fast Service" : "Rask Tjeneste"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {language === "en"
                    ? "Quick turnaround without compromising quality. Most services completed within 24-48 hours."
                    : "Rask gjennomføring uten å kompromittere kvaliteten. De fleste tjenester fullført innen 24-48 timer."}
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {language === "en" ? "Modern Equipment" : "Moderne Utstyr"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {language === "en"
                    ? "State-of-the-art diagnostic and repair tools including computer diagnostics and specialized equipment."
                    : "Moderne diagnostikk- og reparasjonsverktøy inkludert datamaskinstøttet diagnostikk og spesialisert utstyr."}
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {language === "en" ? "Guaranteed Quality" : "Garantert Kvalitet"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {language === "en"
                    ? "All work backed by our comprehensive quality guarantee and customer satisfaction guarantee."
                    : "Alt arbeid dekket av vår omfattende kvalitetsgaranti og kundetilfredshetsgaranti."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === "en" ? "Ready to Service Your Car?" : "Klar til å Vedlikeholde Bilen Din?"}
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              {language === "en"
                ? "Contact us today to book your appointment or get a free quote for any of our comprehensive services."
                : "Kontakt oss i dag for å bestille en time eller få et gratis tilbud for noen av våre omfattende tjenester."}
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
