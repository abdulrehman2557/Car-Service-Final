"use client"

import { useLanguage } from "./language-context"
import { translations } from "@/lib/translations"
import { Mail, MessageCircle, Facebook, Instagram } from "lucide-react"

export function Footer() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary-foreground rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">L</span>
              </div>
              <span className="font-bold text-lg">Lakkfixas</span>
            </div>
            <p className="text-sm opacity-90">Professional car service in Norway</p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">{t.contact.direct_contact}</h3>
            <div className="space-y-2 text-sm">
              <p>Phone: +47 45 82 59 92</p>
              <p>Email: info@lakkfixas.no</p>
              <p>Address: Henrik Bullsveg 60, 2069 Jessheim, Norway</p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold mb-4">{t.footer.follow}</h3>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/share/16azyXMVQ4/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/lakkfix?igsh=eHNxeDhoaGh6c281&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://wa.me/4745825992"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition"
              >
                <MessageCircle size={20} />
              </a>
              <a href="mailto:info@lakkfixas.no" className="hover:opacity-80 transition">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-90">
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
