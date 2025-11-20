// components/contact-form.tsx   ← overwrite your current file with this

"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
  const res = await fetch("/api/sendDamageReport", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    type: "contact",
    userName: name,
    userEmail: email,
    userPhone: phone,
    message,
  }),
})
 };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Name *</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Your full name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Email *</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Phone (optional)</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="+47 123 45 678"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Message *</label>
        <textarea
          rows={6}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          placeholder="Write your message here..."
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-primary text-primary-foreground font-bold py-4 rounded-lg flex items-center justify-center gap-3 hover:opacity-90 transition disabled:opacity-60"
      >
        <Send size={20} />
        {loading ? "Sending..." : "Send Message"}
      </button>

      {status && (
        <p className={`text-center font-medium mt-4 ${status.includes("Thank you") || status.includes("✅") ? "text-green-600" : "text-red-600"}`}>
          {status}
        </p>
      )}
    </form>
  );
}