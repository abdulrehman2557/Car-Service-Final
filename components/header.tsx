"use client"

import Link from "next/link"
import { useLanguage } from "./language-context"
import { translations } from "@/lib/translations"
import { Mail, MessageCircle, Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const { language, setLanguage } = useLanguage()
  const t = translations[language]
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">L</span>
            </div>
            <span className="font-bold text-lg text-primary hidden sm:inline">Lakkfixas</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition text-sm lg:text-base">
              {t.nav.home}
            </Link>
 <Link href="/car-damage" className="text-foreground hover:text-primary transition text-sm lg:text-base">
            Car Damage
          </Link>
            <Link href="/services" className="text-foreground hover:text-primary transition text-sm lg:text-base">
              {t.nav.services}
            </Link>
            <Link href="/blog" className="text-foreground hover:text-primary transition text-sm lg:text-base">
              {t.nav.blog}
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition text-sm lg:text-base">
              {t.nav.about}
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition text-sm lg:text-base">
              {t.nav.contact}
            </Link>
           
          </nav>

          {/* Right side - Language switcher and contact icons */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Language Switcher - Responsive */}
            <div className="flex gap-1 sm:gap-2 border border-border rounded-lg p-1">
              <button
                onClick={() => setLanguage("en")}
                className={`px-2 sm:px-3 py-1 rounded text-xs sm:text-sm font-medium transition ${
                  language === "en" ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("no")}
                className={`px-2 sm:px-3 py-1 rounded text-xs sm:text-sm font-medium transition ${
                  language === "no" ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"
                }`}
              >
                NO
              </button>
            </div>

            {/* Contact Icons - Hidden on very small screens */}
            <div className="hidden sm:flex items-center gap-2">
              <a
                href="https://wa.me/4745825992"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-foreground hover:text-primary transition"
                title="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="mailto:info@lakkfixas.no"
                className="p-2 text-foreground hover:text-primary transition"
                title="Email"
              >
                <Mail size={20} />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-foreground hover:text-primary transition"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <nav className="md:hidden border-t border-border py-4 space-y-3 animate-slide-down">
            <Link
              href="/"
              className="block px-4 py-2 text-foreground hover:text-primary hover:bg-muted rounded transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.home}
            </Link>
<Link
      href="/car-damage"
      className="block px-4 py-2 text-foreground hover:text-primary hover:bg-muted rounded transition"
      onClick={() => setIsMenuOpen(false)}
    >
      Car Damage
    </Link>
            <Link
              href="/services"
              className="block px-4 py-2 text-foreground hover:text-primary hover:bg-muted rounded transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.services}
            </Link>
            <Link
              href="/blog"
              className="block px-4 py-2 text-foreground hover:text-primary hover:bg-muted rounded transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.blog}
            </Link>
            <Link
              href="/about"
              className="block px-4 py-2 text-foreground hover:text-primary hover:bg-muted rounded transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.about}
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-2 text-foreground hover:text-primary hover:bg-muted rounded transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.contact}
            </Link>
            
    {/* OR if you want it translated like the others: */}
    {/* {t.nav.carDamage || "Car Damage"} */}
            {/* Mobile Contact Icons */}
            <div className="flex gap-4 px-4 pt-2">
              <a
                href="https://wa.me/4798765432"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 p-3 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition text-center font-medium text-sm"
              >
                WhatsApp
              </a>
              <a
                href="mailto:info@lakkfixas.no"
                className="flex-1 p-3 border-2 border-primary text-primary rounded hover:bg-primary/5 transition text-center font-medium text-sm"
              >
                Email
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
