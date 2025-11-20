"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { useLanguage } from "@/components/language-context"
import { translations } from "@/lib/translations"
import Image from "next/image"
import { MapPin, FileImage, Send, X } from "lucide-react"

export default function CarDamagePage() {
  const { language } = useLanguage()
  const t = translations[language]

  const [userName, setUserName] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [userPhone, setUserPhone] = useState("")
  const [damagePoints, setDamagePoints] = useState([])

  const handleImageClick = (e) => {
    const rect = e.target.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100

    setDamagePoints((prev) => [...prev, { x, y, image: null, description: "" }])
  }

  const updateDamage = (index, field, value) => {
    const updated = [...damagePoints]
    updated[index][field] = value
    setDamagePoints(updated)
  }

  const convertFileToBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        const base64 = reader.result.split(",")[1] // remove prefix
        resolve({ name: file.name, data: base64 })
      }
      reader.onerror = (err) => reject(err)
    })

  const handleSubmit = async () => {
    if (!userName || !userEmail) {
      alert("Please enter your name and email")
      return
    }

    try {
      const pointsWithImages = await Promise.all(
        damagePoints.map(async (p) => {
          if (p.image) {
            const img = await convertFileToBase64(p.image)
            return { ...p, image: img }
          }
          return p
        })
      )

      const res = await fetch("/api/sendDamageReport", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "damage",
          userName,
          userEmail,
          userPhone,
          damagePoints: pointsWithImages,
        }),
      })

      if (res.ok) alert("Damage report sent successfully!")
      else alert("Failed to send report.")
    } catch (err) {
      console.error(err)
      alert("Error sending report.")
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />

      {/* HERO */}
      <section className="relative h-72 bg-gradient-to-r from-primary to-primary/70 overflow-hidden">
        <img
          src="/images/car-damage-hero.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative h-full flex flex-col justify-center px-6 max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground animate-slide-up">
            {language === "en"
              ? "Report Your Car Damage"
              : "Rapporter Bilskader"}
          </h1>
          <p className="text-primary-foreground/90 mt-2 text-lg max-w-2xl animate-slide-up">
            {language === "en"
              ? "Click on the car image to mark damage points and upload photos & descriptions."
              : "Klikk på bildet for å markere skader og laste opp bilder og beskrivelser."}
          </p>
        </div>
      </section>

      {/* USER INFO */}
      <section className="pb-6 max-w-3xl mx-auto px-4">
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm space-y-4">
          <h2 className="text-xl font-semibold mb-2">
            {language === "en" ? "Your Information" : "Dine Opplysninger"}
          </h2>

          <input
            type="text"
            placeholder={language === "en" ? "Full Name" : "Fullt navn"}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-full p-3 rounded-lg border border-border bg-background"
          />

          <input
            type="email"
            placeholder={language === "en" ? "Email Address" : "E-postadresse"}
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            className="w-full p-3 rounded-lg border border-border bg-background"
          />

          <input
            type="tel"
            placeholder={language === "en" ? "Phone (optional)" : "Telefon (valgfritt)"}
            value={userPhone}
            onChange={(e) => setUserPhone(e.target.value)}
            className="w-full p-3 rounded-lg border border-border bg-background"
          />
        </div>
      </section>

      {/* IMAGE CLICK AREA */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative border border-border rounded-lg overflow-hidden bg-card shadow-md group">
            <Image
              src="/car-blueprint.png"
              width={1200}
              height={800}
              alt="Car outline"
              className="w-full object-cover cursor-crosshair"
              onClick={handleImageClick}
            />

            {/* MARKERS */}
            {damagePoints.map((p, idx) => (
              <div
                key={idx}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${p.x}%`, top: `${p.y}%` }}
              >
                <MapPin className="text-primary drop-shadow-lg" size={32} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DAMAGE INPUT FIELDS */}
      {damagePoints.length > 0 && (
        <section className="pb-20">
          <div className="max-w-3xl mx-auto px-4 space-y-6">
            {damagePoints.map((p, idx) => (
              <div
                key={idx}
                className="bg-card border border-border rounded-lg p-6 shadow-sm hover:border-primary transition"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">
                    {language === "en"
                      ? `Damage #${idx + 1}`
                      : `Skade #${idx + 1}`}
                  </h3>

                  <button
                    onClick={() =>
                      setDamagePoints(damagePoints.filter((_, i) => i !== idx))
                    }
                    className="text-muted-foreground hover:text-destructive"
                  >
                    <X />
                  </button>
                </div>

                {/* Upload */}
                <label className="block mb-3 text-sm font-medium">
                  {language === "en" ? "Upload Image" : "Last opp bilde"}
                </label>
                <div className="flex items-center gap-3 mb-4">
                  <FileImage className="text-primary" />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                      updateDamage(idx, "image", e.target.files[0])
                    }
                    className="text-sm"
                  />
                </div>

                {/* Description */}
                <label className="block mb-2 text-sm font-medium">
                  {language === "en"
                    ? "Damage Description"
                    : "Skadebeskrivelse"}
                </label>
                <textarea
                  rows={3}
                  className="w-full p-3 rounded-lg border border-border bg-background"
                  placeholder={
                    language === "en"
                      ? "Describe the damage..."
                      : "Beskriv skaden..."
                  }
                  value={p.description}
                  onChange={(e) =>
                    updateDamage(idx, "description", e.target.value)
                  }
                />
              </div>
            ))}

            {/* SUBMIT */}
            <button
              onClick={handleSubmit}
              className="w-full py-4 rounded-lg bg-primary text-primary-foreground font-bold text-lg flex items-center justify-center gap-2 hover:opacity-90 transition"
            >
              <Send size={20} />
              {language === "en" ? "Submit Damage Report" : "Send Rapporter"}
            </button>
          </div>
        </section>
      )}

      <Footer />
      <FloatingButtons />
    </div>
  )
}
