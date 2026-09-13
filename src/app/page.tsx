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

function ProjectIllustration({ id }: { id: string }) {
  if (id === "01") {
    return (
      <svg className="project-illustration" viewBox="0 0 360 190" aria-hidden="true">
        <path d="M0 144c58-34 104-35 163-10 59 26 105 20 197-22v78H0z" fill="rgba(17,17,27,.22)" />
        <path d="M40 150 119 45l82 105M102 150l63-82 66 82M183 150l47-54 90 54" fill="none" stroke="rgba(244,240,255,.8)" strokeWidth="5" strokeLinecap="round" />
        <rect x="139" y="72" width="75" height="51" rx="10" fill="#d8f56a" stroke="#11111b" strokeWidth="5" />
        <circle cx="162" cy="96" r="8" fill="#11111b" /><circle cx="191" cy="96" r="8" fill="#11111b" />
        <path d="M164 110q13 10 26 0M177 72V57M169 58h16" fill="none" stroke="#11111b" strokeWidth="5" strokeLinecap="round" />
        <path d="M25 30h76M275 31h59M14 54h45" stroke="rgba(244,240,255,.45)" strokeWidth="4" strokeLinecap="round" />
      </svg>
    )
  }
  if (id === "02") {
    return (
      <svg className="project-illustration" viewBox="0 0 360 190" aria-hidden="true">
        <rect x="35" y="30" width="290" height="130" rx="18" fill="rgba(17,17,27,.28)" stroke="rgba(244,240,255,.7)" strokeWidth="4" />
        <path d="M55 125h250M55 125l34-24 21 13 36-49 30 28 38-58 35 31 39-23" fill="none" stroke="#d8f56a" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M55 125h250" stroke="#11111b" strokeWidth="4" />
        <circle cx="214" cy="67" r="19" fill="#ff7b59" stroke="#11111b" strokeWidth="5" />
        <path d="M214 56v13M214 78v2" stroke="#11111b" strokeWidth="5" strokeLinecap="round" />
        <path d="M73 55h55M73 72h31" stroke="rgba(244,240,255,.7)" strokeWidth="5" strokeLinecap="round" />
      </svg>
    )
  }
  if (id === "03") {
    return (
      <svg className="project-illustration" viewBox="0 0 360 190" aria-hidden="true">
        <rect x="42" y="30" width="276" height="130" rx="17" fill="rgba(17,17,27,.28)" stroke="rgba(244,240,255,.65)" strokeWidth="4" />
        <path d="M67 132c26-12 31-54 60-35s33 27 55 5 25-57 53-43 27 34 58 7" fill="none" stroke="#11111b" strokeWidth="7" strokeLinecap="round" />
        <circle cx="128" cy="97" r="10" fill="#ff7b59" stroke="#11111b" strokeWidth="4" /><circle cx="235" cy="59" r="10" fill="#d8f56a" stroke="#11111b" strokeWidth="4" />
        <path d="M70 57h86M70 76h47" stroke="#4de4ff" strokeWidth="5" strokeLinecap="round" />
        <path d="M76 144h210" stroke="rgba(244,240,255,.55)" strokeWidth="3" />
      </svg>
    )
  }
  return (
    <svg className="project-illustration" viewBox="0 0 360 190" aria-hidden="true">
      <rect x="45" y="30" width="270" height="130" rx="15" fill="rgba(17,17,27,.25)" stroke="rgba(17,17,27,.7)" strokeWidth="4" />
      <rect x="67" y="60" width="66" height="72" rx="8" fill="#11111b" opacity=".82" /><rect x="148" y="60" width="66" height="72" rx="8" fill="#11111b" opacity=".62" /><rect x="229" y="60" width="64" height="72" rx="8" fill="#11111b" opacity=".42" />
      <path d="M80 112h40M80 100h30M161 110h37M161 96h26M241 115h39M241 102h29" stroke="#d8f56a" strokeWidth="5" strokeLinecap="round" />
      <path d="M79 78h23M160 78h34M241 78h26" stroke="#ff7b59" strokeWidth="6" strokeLinecap="round" />
      <circle cx="293" cy="41" r="12" fill="#ff7b59" stroke="#11111b" strokeWidth="4" />
    </svg>
  )
}

const projects = [
  { id: "01", title: "Low-visibility\nobject detection", kind: "COMPUTER VISION", metric: "69.1% mAP@50", copy: "YOLOv8m trained across fog, rain, snow and night conditions for autonomous driving.", tags: ["PyTorch", "YOLOv8", "OpenCV"], href: "https://github.com/rohanandelkar/low-visibility-object-detection", label: "View source", tone: "violet", size: "wide" },
  { id: "02", title: "DDoS detection\nsimulator", kind: "CYBERSECURITY", metric: "LIVE DEMO", copy: "Real-time traffic spikes, rate limiting and IP blocklisting in an educational browser simulation.", tags: ["React", "Vite", "Security"], href: "https://ddos-attack-detection-prevention-simu.netlify.app", label: "Open live demo", tone: "orange", size: "normal" },
  { id: "03", title: "Employee salary\nprediction", kind: "PREDICTIVE ANALYTICS", metric: "~94% ACCURACY", copy: "An end-to-end regression pipeline packaged as an interactive Streamlit experience.", tags: ["Python", "Scikit-learn", "Streamlit"], href: "https://github.com/rohanandelkar/Employee-Salary-Prediction", label: "View source", tone: "cyan", size: "normal" },
  { id: "04", title: "Blinkit sales\nintelligence", kind: "BUSINESS INTELLIGENCE", metric: "POWER BI / DAX", copy: "A grocery sales dashboard that turns raw numbers into decision-ready stories.", tags: ["Power BI", "DAX", "Data"], href: "https://github.com/rohanandelkar/Data-Analysis-Dashboard", label: "View source", tone: "lime", size: "wide" },
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
            <div className="card-visual"><ProjectIllustration id={project.id} /></div>
            <div className="card-content"><p className="metric"><Check size={13} /> {project.metric}</p><h3>{project.title.split("\n").map((line) => <span key={line}>{line}<br /></span>)}</h3><p>{project.copy}</p><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a className="project-action" href={project.href} target="_blank" rel="noopener noreferrer" aria-label={`${project.label}: ${project.title.replace("\n", " ")}`} onClick={(event) => event.stopPropagation()}>{project.label} <ArrowUpRight size={15} /></a></div>
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
