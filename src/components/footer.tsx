import { Github, Linkedin } from "lucide-react"

const XIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153zM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644z" />
  </svg>
)

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative pt-12 pb-8 overflow-hidden">
      {/* Gradient top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "var(--gradient-brand)" }}
      />

      {/* Background bleed */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: "var(--gradient-brand)" }}
      />

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        {/* Brand */}
        <div className="text-center md:text-left">
          <span className="shimmer-text text-2xl font-extrabold">Rohan Andelkar</span>
          <p className="text-xs text-[var(--muted)] mt-1">
            CS Undergrad · Machine Learning &amp; Cloud Builder · {year}
          </p>
        </div>

        {/* Copyright */}
        <p className="text-sm text-[var(--muted)]">
          © {year} Rohan Andelkar. Crafted with ❤️ &amp; ☕
        </p>

        {/* Socials */}
        <div className="flex gap-3">
          {[
            { Icon: Github, href: "https://github.com/rohanandelkar", label: "GitHub" },
            { Icon: Linkedin, href: "https://www.linkedin.com/in/rohanandelkar/", label: "LinkedIn" },
            { Icon: XIcon, href: "https://x.com/AndelkarRohan", label: "X (Twitter)" },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              data-hover="true"
              className="p-2.5 rounded-xl glass border border-[var(--border)] text-[var(--muted)] hover:text-[var(--accent-1)] hover:border-[var(--accent-1)] hover:shadow-[0_0_15px_rgba(99,102,241,0.3)] transition-all duration-300"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
