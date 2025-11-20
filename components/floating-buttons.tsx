"use client"

import { useState, useEffect } from "react"
import { Phone, X } from "lucide-react"

export function FloatingButtons() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible((prev) => !prev)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  const buttons = [
    {
      label: "WhatsApp",
      href: "https://wa.me/4745825992",
      bgColor: "bg-green-500",
      hoverColor: "hover:bg-green-600",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.946 1.347l-.355.192-.368-.06c-1.286-.264-2.514-.666-3.66-1.203l-.424-.23-.458.149C.73 5.612-.342 6.996.159 8.307c.socials.149.898.298 1.414.347-.595.573-1.17 1.171-1.653 1.859-.484.688-.848 1.432-1.063 2.207-.215.775-.215 1.51 0 2.285.431 1.646 1.587 3.030 3.226 3.692 1.64.662 3.469.662 5.109 0 1.64-.662 2.796-2.046 3.226-3.692.215-.775.215-1.51 0-2.285-.215-.775-.579-1.519-1.063-2.207-.484-.688-1.058-1.286-1.653-1.859.516-.049 1.265-.198 1.414-.347.501-1.311-.429-2.695-1.866-3.35-.36-.19-.749-.286-1.148-.286z" />
        </svg>
      ),
    },
    {
      label: "Call",
      href: "tel:+4745825992",
      bgColor: "bg-blue-500",
      hoverColor: "hover:bg-blue-600",
      icon: <Phone size={20} />,
    },
    {
      label: "Email",
      href: "mailto:info@lakkfixas.no",
      bgColor: "bg-red-500",
      hoverColor: "hover:bg-red-600",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
    },
  ]

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Expanded Buttons */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 flex flex-col gap-3 mb-4 animate-in fade-in slide-in-from-bottom-2 duration-200">
          {buttons.map((button, index) => (
            <a
              key={index}
              href={button.href}
              target={button.href.startsWith("http") ? "_blank" : undefined}
              rel={button.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`flex items-center gap-3 px-4 py-3 ${button.bgColor} ${button.hoverColor} text-white rounded-full shadow-lg hover:shadow-xl transition-all whitespace-nowrap animate-scale-in`}
              title={button.label}
            >
              {button.icon}
              <span className="text-sm font-medium">{button.label}</span>
            </a>
          ))}
        </div>
      )}

      {/* Main Toggle Button with Pulse Animation */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 ${isOpen ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"} text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all transform ${isOpen ? "scale-110" : "scale-100"} ${!isOpen && isVisible ? "animate-pulse-glow" : ""}`}
        title={isOpen ? "Close" : "Contact Us"}
      >
        {isOpen ? <X size={24} /> : <Phone size={24} />}
      </button>
    </div>
  )
}
