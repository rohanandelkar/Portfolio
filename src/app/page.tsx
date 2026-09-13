"use client"

import {
  ArrowDownRight,
  ArrowUpRight,
  BrainCircuit,
  Check,
  Code2,
  Github,
  Linkedin,
  Mail,
  Menu,
  Orbit,
  Play,
  Sparkles,
  TerminalSquare,
  X,
  Zap,
} from "lucide-react"
import Link from "next/link"
import { type CSSProperties, useEffect, useState } from "react"

const projects = [
  { id: "01", title: "Low-visibility\nobject detection", kind: "COMPUTER VISION", metric: "69.1% mAP@50", copy: "YOLOv8m trained across fog, rain, snow and night conditions for autonomous driving.", tags: ["PyTorch", "YOLOv8", "OpenCV"], href: "https://github.com/rohanandelkar/low-visibility-object-detection", tone: "violet", size: "wide" },
  { id: "02", title: "DDoS detection\nsimulator", kind: "CYBERSECURITY", metric: "LIVE DEMO", copy: "Real-time traffic spikes, rate limiting and IP blocklisting in an educational browser simulation.", tags: ["React", "Vite", "Security"], href: "https://ddos-attack-detection-prevention-simu.netlify.app/", tone: "orange", size: "normal" },
  { id: "03", title: "Employee salary\nprediction", kind: "PREDICTIVE ANALYTICS", metric: "~94% ACCURACY", copy: "An end-to-end regression pipeline packaged as an interactive Streamlit experience.", tags: ["Python", "Scikit-learn", "Streamlit"], href: "https://github.com/rohanandelkar/Employee-Salary-Prediction", tone: "cyan", size: "normal" },
  { id: "04", title: "Blinkit sales\nintelligence", kind: "BUSINESS INTELLIGENCE", metric: "POWER BI / DAX", copy: "A grocery sales dashboard that turns raw numbers into decision-ready stories.", tags: ["Power BI", "DAX", "Data"], href: "https://github.com/rohanandelkar/Data-Analysis-Dashboard", tone: "lime", size: "wide" },
]

const skills = ["Python", "Machine Learning", "Agentic AI", "Power BI", "Azure", "Cybersecurity", "React", "SQL", "PyTorch", "LLM workflows", "Spring Boot", "Docker"]

const roles = ["AI / ML builder", "data storyteller", "cloud tinkerer", "security learner"]
const certifications = [
  ["Microsoft", "Career Essentials in Cybersecurity"],
  ["Microsoft", "Microsoft Security Copilot"],
  ["LinkedIn Learning", "Cybersecurity Foundations"],
  ["LinkedIn Learning", "Cybersecurity Threat Landscape"],
  ["LinkedIn Learning", "Cybersecurity Terminology"],
]

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [roleIndex, setRoleIndex] = useState(0)
  const [activeSkill, setActiveSkill] = useState("Machine Learning")
  const [scrolled, setScrolled] = useState(0)
  const [photoTilt, setPhotoTilt] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const roleTimer = window.setInterval(() => setRoleIndex((value) => (value + 1) % roles.length), 2200)
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setScrolled(max > 0 ? (window.scrollY / max) * 100 : 0)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => { window.clearInterval(roleTimer); window.removeEventListener("scroll", onScroll) }
  }, [])

  return (
    <main className="signal-page">
      <div className="scroll-progress" style={{ width: `${scrolled}%` }} />
      <div className="ambient ambient-a" /><div className="ambient ambient-b" /><div className="ambient ambient-c" />
      <header className="signal-nav">
        <Link className="signal-logo" href="#top" onClick={() => setMenuOpen(false)}>ROHAN<span>✳</span></Link>
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? "signal-links open" : "signal-links"}>
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a><a href="#story" onClick={() => setMenuOpen(false)}>Story</a><a href="#credentials" onClick={() => setMenuOpen(false)}>Credentials</a><a href="#stack" onClick={() => setMenuOpen(false)}>Stack</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <a className="availability" href="mailto:rohanandelkar22@gmail.com"><span /> Available for work</a>
      </header>

      <section className="signal-hero shell" id="top">
        <div className="hero-stamp"><span>PORTFOLIO</span><strong>26</strong><small>DESIGN / BUILD / LEARN</small></div>
        <div className="hero-main">
          <p className="kicker"><Zap size={14} fill="currentColor" /> COMPUTER SCIENCE · NAGPUR, INDIA</p>
          <h1>Turning <span>curiosity</span><br />into <span>working systems.</span></h1>
          <div className="hero-bottom"><p>I&apos;m Rohan — a CS engineer exploring the edges of <strong key={roleIndex}>{roles[roleIndex]}</strong>. I build things that make complex ideas feel useful.</p><a className="round-arrow" href="#work"><ArrowDownRight /></a></div>
        </div>
        <div className="orbital-art">
          <div className="orbital-ring ring-1" /><div className="orbital-ring ring-2" /><div className="orbital-ring ring-3" />
          <div
            className="photo-card"
            onMouseMove={(event) => {
              const rect = event.currentTarget.getBoundingClientRect()
              setPhotoTilt({
                x: ((event.clientY - rect.top) / rect.height - 0.5) * -12,
                y: ((event.clientX - rect.left) / rect.width - 0.5) * 12,
              })
            }}
            onMouseLeave={() => setPhotoTilt({ x: 0, y: 0 })}
            style={{ transform: `rotateX(${photoTilt.x}deg) rotateY(${photoTilt.y}deg)` }}
          >
            <img src="/rohan-profile.png" alt="Rohan Andelkar" />
            <div className="photo-overlay"><BrainCircuit size={25} /><span>BUILD<br />SIGNAL<br />LOOP</span></div>
            <span className="photo-label">ROHAN / 2026</span>
          </div>
          <div className="float-chip chip-ai"><Sparkles size={15} /> AI / ML</div><div className="float-chip chip-code"><Code2 size={15} /> SHIP IT</div>
        </div>
        <div className="hero-ticker"><span>SCROLL TO EXPLORE</span><span>✳</span><span>PYTHON / AZURE / POWER BI / SECURITY / REPEAT</span><span>↓</span></div>
      </section>

      <section className="marquee"><div>MAKE DATA <span>VISIBLE</span> MAKE AI <span>USEFUL</span> MAKE SYSTEMS <span>HUMAN</span> ✳&nbsp; MAKE DATA <span>VISIBLE</span> MAKE AI <span>USEFUL</span> ✳</div></section>

      <section className="shell work-section" id="work">
        <div className="section-top"><div><p className="kicker"><Orbit size={14} /> 01 / SELECTED SIGNALS</p><h2>Built, tested,<br /><i>shipped.</i></h2></div><p className="section-aside">Four projects, four different ways of asking a good question and following it all the way to a working answer.</p></div>
        <div className="bento-grid">
          {projects.map((project) => <article className={`bento-card ${project.tone} ${project.size}`} key={project.id}>
            <div className="card-topline"><span>{project.id}</span><span>{project.kind}</span><ArrowUpRight size={18} /></div>
            <div className="card-visual"><div className={`visual-lines visual-${project.tone}`} /><span className="visual-code">{project.id === "01" ? "object.detect()" : project.id === "02" ? "traffic / anomaly" : project.id === "03" ? "model.fit(data)" : "insight → action"}</span></div>
            <div className="card-content"><p className="metric"><Check size={13} /> {project.metric}</p><h3>{project.title.split("\n").map((line) => <span key={line}>{line}<br /></span>)}</h3><p>{project.copy}</p><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a href={project.href} target="_blank" rel="noreferrer">Open project <ArrowUpRight size={15} /></a></div>
          </article>)}
        </div>
      </section>

      <section className="story-section" id="story"><div className="shell story-grid"><div className="story-number">02<span>/</span></div><div className="story-copy"><p className="kicker">THE SHORT VERSION</p><h2>Not just a<br /><i>tech stack.</i></h2><p className="story-lead">I&apos;m interested in the moment where a technical idea becomes something another person can actually use.</p><p>That has meant computer vision for difficult road conditions, dashboards that clarify a business, agentic workflows that automate the boring parts, and security simulations that make invisible threats visible. I&apos;m still learning. That&apos;s the point.</p><div className="story-facts"><div><strong>7.85</strong><span>CGPA / 10</span></div><div><strong>GATE</strong><span>2026 qualified</span></div><div><strong>03+</strong><span>internships</span></div></div></div><div className="story-quote">“<br /><span>Stay curious.<br />Ship often.</span><br />”</div></div></section>

      <section className="credentials-section" id="credentials"><div className="shell credentials-grid"><div><p className="kicker"><Check size={14} /> VERIFIED SIGNALS</p><h2>Receipts for<br /><i>the work.</i></h2><p className="credentials-note">Certifications and training gathered across cybersecurity, cloud AI, and agentic systems.</p></div><div className="cert-list">{certifications.map(([issuer, title], index) => <div className="cert-row" key={title}><span className="cert-index">0{index + 1}</span><div><span>{issuer}</span><strong>{title}</strong></div><Check size={16} /></div>)}</div></div></section>

      <section className="shell stack-section" id="stack"><div className="section-top"><div><p className="kicker"><TerminalSquare size={14} /> 03 / CURRENT TOOLKIT</p><h2>Tools for<br /><i>the next idea.</i></h2></div><p className="section-aside">Tap a skill to change the signal. The toolkit is always evolving.</p></div><div className="skill-board"><div className="skill-orb"><div><span>NOW<br />EXPLORING</span><strong>{activeSkill}</strong></div></div><div className="skill-pills">{skills.map((skill, index) => <button className={activeSkill === skill ? "selected" : ""} key={skill} onClick={() => setActiveSkill(skill)} style={{ "--i": index } as CSSProperties}>{skill}</button>)}</div></div></section>

      <section className="contact-panel" id="contact"><div className="shell contact-grid"><div><p className="kicker">04 / YOUR MOVE</p><h2>Let&apos;s make<br /><span>something</span><br />matter.</h2></div><div className="contact-right"><p>Have a problem worth exploring, a team that needs a curious builder, or just a good idea? Send it my way.</p><a className="big-contact" href="mailto:rohanandelkar22@gmail.com">rohanandelkar22@gmail.com <ArrowUpRight /></a><div className="contact-links"><a href="https://github.com/rohanandelkar" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a><a href="https://www.linkedin.com/in/rohanandelkar/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a><a href="/Rohan_Resume.pdf" target="_blank" rel="noreferrer"><Play size={15} /> Résumé</a></div></div></div></section>
      <footer className="shell signal-footer"><span>ROHAN ✳ ANDELKAR</span><span>© 2026 / MADE WITH CURIOSITY</span><span><Mail size={14} /> NAGPUR, INDIA</span></footer>
    </main>
  )
}
