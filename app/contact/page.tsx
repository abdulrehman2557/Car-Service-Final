"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { useLanguage } from "@/components/language-context"
import { translations } from "@/lib/translations"
import { ContactForm } from "@/components/contact-form"
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react"

export default function ContactPage() {
  const { language } = useLanguage()
  const t = translations[language]

  const contactMethods = [
    {
      icon: Phone,
      label: t.contact.phone_label,
      value: "+47 45 82 59 92",
      href: "tel:+4745825992",
    },
    {
      icon: Mail,
      label: t.contact.email_label,
      value: "info@lakkfixas.no",
      href: "mailto:info@lakkfixas.no",
    },
    {
      icon: MapPin,
      label: t.contact.address,
      value: "Henrik Bullsveg 60, 2069 Jessheim",
      href: "https://maps.google.com/maps?q=Henrik+Bullsveg+60+2069+Jessheim+Norway",
    },
    {
      icon: MessageCircle,
      label: t.contact.whatsapp,
      value: "+47 45 82 59 92",
      href: "https://wa.me/4745825992",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-80 md:h-96 bg-gradient-to-r from-primary to-accent overflow-hidden">
          <img
            src="/images/contact-garage.jpg"
            alt="Professional car service garage"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4 text-balance">
              {t.contact.title}
            </h1>
            <p className="text-lg text-primary-foreground/90 max-w-2xl text-pretty">
              {language === "en"
                ? "Get in touch with us for any inquiries or to book your service appointment"
                : "Kontakt oss for spørsmål eller for å bestille en servicetime"}
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-12 sm:py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
              {contactMethods.map((method, index) => {
                const Icon = method.icon
                return (
                  <a
                    key={index}
                    href={method.href}
                    target={method.href.startsWith("http") && !method.href.startsWith("mailto") ? "_blank" : undefined}
                    rel={
                      method.href.startsWith("http") && !method.href.startsWith("mailto")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="bg-card p-6 rounded-lg border border-border hover:shadow-lg hover:border-primary transition-all duration-300 group"
                  >
                    <Icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="font-semibold text-foreground mb-2">{method.label}</h3>
                    <p className="text-sm text-muted-foreground hover:text-primary transition">{method.value}</p>
                  </a>
                )
              })}
            </div>
          </div>
        </section>

        {/* Contact Form and Info with Images */}
        <section className="py-12 sm:py-16 md:py-24 bg-card border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
              {/* Form */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">{t.contact.form_title}</h2>
                <ContactForm />
              </div>

              {/* Info with Image */}
              <div>
                <div className="mb-8 rounded-lg overflow-hidden border border-border">
                  <img
                    src="/images/workshop-interior.jpg"
                    alt="Professional workshop interior"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                  {language === "en" ? "Business Hours" : "Åpningstider"}
                </h2>
                <div className="space-y-6">
                  <div className="bg-background p-6 rounded-lg border border-border">
                    <h3 className="font-semibold text-foreground mb-4">
                      {language === "en" ? "Monday - Friday" : "Mandag - Fredag"}
                    </h3>
                    <p className="text-muted-foreground">07:00 - 17:00</p>
                  </div>
                  <div className="bg-background p-6 rounded-lg border border-border">
                    <h3 className="font-semibold text-foreground mb-4">{language === "en" ? "Saturday" : "Lørdag"}</h3>
                    <p className="text-muted-foreground">09:00 - 15:00</p>
                  </div>
                  <div className="bg-background p-6 rounded-lg border border-border">
                    <h3 className="font-semibold text-foreground mb-4">{language === "en" ? "Sunday" : "Søndag"}</h3>
                    <p className="text-muted-foreground">{language === "en" ? "Closed" : "Lukket"}</p>
                  </div>

                  <div className="bg-primary text-primary-foreground p-6 rounded-lg mt-8">
                    <h3 className="font-semibold mb-3">
                      {language === "en" ? "Emergency Service" : "Nødsituasjonstjeneste"}
                    </h3>
                    <p className="text-sm opacity-90 mb-4">
                      {language === "en"
                        ? "Need urgent help? Call us anytime for emergency assistance."
                        : "Trenger du hjelp? Ring oss når som helst for nødhjelp."}
                    </p>
                    <a
                      href="tel:+4745825992"
                      className="inline-block px-4 py-2 bg-primary-foreground text-primary font-semibold rounded hover:shadow-lg transition"
                    >
                      +47 45 82 59 92
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section with Image */}
        <section className="py-12 sm:py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 sm:mb-8 text-center">
              {language === "en" ? "Find Us" : "Finn Oss"}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              <div className="rounded-lg overflow-hidden border border-border h-72 sm:h-96">
                <img
                  src="/images/mechanics-working.jpg"
                  alt="Mechanics working on car"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full h-72 sm:h-96 bg-muted rounded-lg border border-border overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2000.5!2d10.7522!3d59.9139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416e61e1234567%3A0x1234567890abcdef!2sOslo%2C%20Norway!5e0!3m2!1sen!2sno!4v1234567890"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  )
}
