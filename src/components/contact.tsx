"use client"

import { Section } from "@/components/section"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { useState } from "react"

const XIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153zM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644z" />
  </svg>
)

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "rohanandelkar22@gmail.com",
    color: "var(--accent-1)",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 72497 84567",
    color: "var(--accent-2)",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Nagpur, India",
    color: "var(--accent-3)",
  },
]

export function Contact() {
  const [focused, setFocused] = useState<string | null>(null)

  return (
    <Section id="contact" title="Get In Touch">
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
        {/* Left — Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-[var(--foreground)]">
            Let&apos;s{" "}
            <span className="shimmer-text">Work Together</span>
          </h3>
          <p className="text-[var(--muted)] mb-8 leading-relaxed">
            I&apos;m a CS undergrad (Class of 2027) actively looking for internships and
            collaborative projects in AI, cloud, and full-stack development.
            Got something exciting? I&apos;d love to hear about it.
          </p>

          <div className="space-y-4 mb-8">
            {contactInfo.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 group"
                >
                  <div
                    className="p-3 rounded-xl glass border border-[var(--border)] transition-all duration-300 group-hover:scale-110"
                    style={{
                      boxShadow: `0 0 15px ${item.color}33`,
                      borderColor: `${item.color}33`,
                    }}
                  >
                    <Icon
                      className="w-5 h-5 transition-colors duration-300"
                      style={{ color: item.color }}
                    />
                  </div>
                  <div>
                    <div className="text-xs text-[var(--muted)] font-medium uppercase tracking-wider">
                      {item.label}
                    </div>
                    <div className="font-semibold text-[var(--foreground)]">
                      {item.value}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Social links */}
          <div className="flex gap-3">
            {[
              { Icon: Github, href: "https://github.com/rohanandelkar", color: "var(--accent-1)" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/rohanandelkar/", color: "var(--accent-2)" },
              { Icon: XIcon, href: "https://x.com/AndelkarRohan", color: "var(--accent-3)" },
            ].map(({ Icon, href, color }, i) => (
              <motion.a
                key={i}
                href={href}
                data-hover="true"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-xl glass border border-[var(--border)] transition-all duration-300"
                style={{}}
                onMouseEnter={(e) => {
                  ; (e.currentTarget as HTMLElement).style.borderColor = color + "66"
                    ; (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${color}33`
                }}
                onMouseLeave={(e) => {
                  ; (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"
                    ; (e.currentTarget as HTMLElement).style.boxShadow = "none"
                }}
              >
                <Icon className="w-5 h-5" style={{ color }} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right — Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div
            className="glass border border-[var(--border)] rounded-2xl p-8"
            style={{ boxShadow: "0 25px 60px rgba(0,0,0,0.3)" }}
          >
            <form className="space-y-5">
              {["name", "email"].map((field) => (
                <div key={field}>
                  <label
                    htmlFor={field}
                    className="block text-sm font-medium text-[var(--muted)] mb-2 capitalize"
                  >
                    {field}
                  </label>
                  <input
                    type={field === "email" ? "email" : "text"}
                    id={field}
                    name={field}
                    autoComplete={field === "email" ? "email" : "name"}
                    data-hover="true"
                    onFocus={() => setFocused(field)}
                    onBlur={() => setFocused(null)}
                    placeholder={field === "name" ? "John Doe" : "john@example.com"}
                    suppressHydrationWarning
                    className="w-full px-4 py-3 rounded-xl bg-transparent border text-[var(--foreground)] placeholder-[var(--muted)] outline-none transition-all duration-300"
                    style={{
                      borderColor:
                        focused === field ? "var(--accent-1)" : "var(--border)",
                      boxShadow:
                        focused === field
                          ? "0 0 0 3px rgba(99,102,241,0.15), 0 0 20px rgba(99,102,241,0.1)"
                          : "none",
                    }}
                  />
                </div>
              ))}

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[var(--muted)] mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  data-hover="true"
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  placeholder="Tell me about your project..."
                  suppressHydrationWarning
                  className="w-full px-4 py-3 rounded-xl bg-transparent border text-[var(--foreground)] placeholder-[var(--muted)] outline-none transition-all duration-300 resize-none"
                  style={{
                    borderColor:
                      focused === "message" ? "var(--accent-1)" : "var(--border)",
                    boxShadow:
                      focused === "message"
                        ? "0 0 0 3px rgba(99,102,241,0.15), 0 0 20px rgba(99,102,241,0.1)"
                        : "none",
                  }}
                />
              </div>

              <motion.button
                type="submit"
                data-hover="true"
                whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(99,102,241,0.5)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 rounded-xl font-bold text-white transition-all duration-300 relative overflow-hidden"
                style={{ background: "var(--gradient-brand)" }}
              >
                <span className="relative z-10">Send Message ✦</span>
                <motion.span
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)" }}
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                />
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
