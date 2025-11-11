"use client"

import type React from "react"

import { useState } from "react"
import { useLanguage } from "./language-context"
import { translations } from "@/lib/translations"
import { Button } from "@/components/ui/button"

export function ContactForm() {
  const { language } = useLanguage()
  const t = translations[language]
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formData = new FormData(e.currentTarget)
      const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        message: formData.get("message"),
      }

      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setSubmitStatus("success")
      e.currentTarget.reset()
      setTimeout(() => setSubmitStatus("idle"), 3000)
    } catch (error) {
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus("idle"), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
          {t.contact.name}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-3 sm:px-4 py-2 sm:py-3 text-base sm:text-sm border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder={language === "en" ? "Your name" : "Ditt navn"}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
          {t.contact.email}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-3 sm:px-4 py-2 sm:py-3 text-base sm:text-sm border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder={language === "en" ? "your@email.com" : "din@epost.no"}
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
          {t.contact.phone}
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full px-3 sm:px-4 py-2 sm:py-3 text-base sm:text-sm border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="+47 45 82 59 92"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
          {t.contact.message}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-3 sm:px-4 py-2 sm:py-3 text-base sm:text-sm border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          placeholder={language === "en" ? "Your message..." : "Din melding..."}
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 py-2 sm:py-3 text-base sm:text-sm"
      >
        {isSubmitting ? (language === "en" ? "Sending..." : "Sender...") : t.contact.submit}
      </Button>

      {submitStatus === "success" && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
          {language === "en" ? "Thank you! We'll get back to you soon." : "Takk! Vi kontakter deg snart."}
        </div>
      )}

      {submitStatus === "error" && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
          {language === "en" ? "Something went wrong. Please try again." : "Noe gikk galt. Prøv igjen."}
        </div>
      )}
    </form>
  )
}
