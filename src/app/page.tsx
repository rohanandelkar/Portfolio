"use client"

import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Code2,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react"
import Link from "next/link"
import { type CSSProperties, useState } from "react"

const projects = [
  {
    number: "01",
    type: "COMPUTER VISION",
    title: "Low-visibility object detection",
    description:
      "A real-time YOLOv8 system for autonomous driving that recognizes seven road-object classes through fog, rain, snow, and nighttime conditions.",
    result: "69.1% mAP@50 · 2.5 ms inference",
    stack: ["Python", "PyTorch", "YOLOv8", "OpenCV"],
    href: "https://github.com/rohanandelkar/low-visibility-object-detection",
    accent: "coral",
  },
  {
    number: "02",
    type: "SECURITY SIMULATION",
    title: "DDoS detection simulator",
    description:
      "An educational browser simulation that visualizes traffic spikes, latency, and server load, then applies rate limiting and IP blocklisting to restore service.",
    result: "Live on Netlify · React + Vite",
    stack: ["React", "JavaScript", "Network security"],
    href: "https://ddos-attack-detection-prevention-simu.netlify.app/",
    repo: "https://github.com/rohanandelkar/DDoS-Attack-Detection-Prevention-Simulator",
    accent: "lime",
  },
  {
    number: "03",
    type: "DATA PRODUCT",
    title: "Employee salary prediction",
    description:
      "An end-to-end regression app that cleans, explores, and models salary data from experience, test scores, and interview scores.",
    result: "~94% accuracy · Streamlit app",
    stack: ["Python", "Pandas", "Scikit-learn", "Streamlit"],
    href: "https://github.com/rohanandelkar/Employee-Salary-Prediction",
    accent: "blue",
  },
  {
    number: "04",
    type: "BUSINESS INTELLIGENCE",
    title: "Blinkit sales dashboard",
    description:
      "A Power BI dashboard turning grocery sales data into actionable business insights through Power Query, DAX, and interactive visualizations.",
    result: "Power BI · DAX · Data storytelling",
    stack: ["Power BI", "Power Query", "DAX", "Analytics"],
    href: "https://github.com/rohanandelkar/Data-Analysis-Dashboard",
    accent: "yellow",
  },
]

const skills = [
  "Python",
  "SQL",
  "Java",
  "PyTorch",
  "Scikit-learn",
  "Power BI",
  "Microsoft Azure",
  "Agentic AI",
  "LLM workflows",
  "React",
  "Spring Boot",
  "Docker",
  "Git",
  "Linux",
]

const experience = [
  {
    date: "FEB — MAR 2026",
    role: "Business Intelligence / Data Analytics Intern",
    company: "Microsoft Elevate × AICTE",
    detail: "Built interactive Power BI dashboards and reporting pipelines to turn business datasets into clear KPI stories.",
  },
  {
    date: "JUL — AUG 2025",
    role: "AI Agent Architect Trainee",
    company: "IBM SkillsBuild × CSRBOX",
    detail: "Designed multi-step agent workflows, explored LLMs and prompt engineering, and studied reliable automation patterns.",
  },
  {
    date: "MAY — JUN 2025",
    role: "Azure AI Intern",
    company: "Edunet Foundation × AICTE",
    detail: "Deployed cloud AI solutions with Azure Cognitive Services and integrated machine learning endpoints for business use cases.",
  },
]

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [pointer, setPointer] = useState({ x: 0, y: 0 })

  return (
    <main
      onMouseMove={(event) => setPointer({ x: event.clientX, y: event.clientY })}
      style={{ "--pointer-x": `${pointer.x}px`, "--pointer-y": `${pointer.y}px` } as CSSProperties}
    >
      <div className="pointer-glow" aria-hidden="true" />
      <header className="site-header">
        <Link className="wordmark" href="#top" onClick={() => setMenuOpen(false)}>
          RA<span>/</span>26
        </Link>
        <button className="menu-button" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#work" onClick={() => setMenuOpen(false)}>Selected work</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <a className="header-cta" href="mailto:rohanandelkar22@gmail.com">Let&apos;s talk <ArrowUpRight size={15} /></a>
      </header>

      <section className="hero section-shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> CS engineering student · Nagpur, India</p>
          <h1>I build useful<br /><em>intelligence.</em></h1>
          <p className="hero-intro">Rohan Andelkar is a computer science engineer working across machine learning, data products, cloud AI, and cybersecurity.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">Explore the work <ArrowUpRight size={17} /></a>
            <a className="text-link" href="/Rohan_Resume.pdf" target="_blank">Download résumé <ExternalLink size={15} /></a>
          </div>
        </div>
        <div className="hero-art" aria-label="Abstract illustration">
          <div className="art-grid" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="art-card card-top"><Sparkles size={18} /><span>AI / ML</span></div>
          <div className="art-card card-bottom"><Code2 size={18} /><span>ship with intent</span></div>
          <div className="hero-monogram">R<span>.</span></div>
        </div>
        <div className="hero-foot">
          <span>Scroll to see selected work</span>
          <ChevronDown size={17} />
          <span className="hero-line" />
          <span>01 / 04</span>
        </div>
      </section>

      <section className="signal-strip">
        <div><strong>7.85</strong><span>CGPA / 10</span></div>
        <div><strong>69.1%</strong><span>mAP@50 on YOLOv8m</span></div>
        <div><strong>GATE</strong><span>2026 qualified</span></div>
        <div><strong>3+</strong><span>industry internships</span></div>
      </section>

      <section className="section-shell work-section" id="work">
        <div className="section-heading">
          <p className="eyebrow">01 / Selected work</p>
          <h2>Things I&apos;ve<br /><em>made real.</em></h2>
          <p className="section-note">A small collection of experiments, systems, and data products built to solve a specific problem.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article
              className={`project-card ${project.accent}`}
              key={project.title}
              onMouseMove={(event) => {
                const rect = event.currentTarget.getBoundingClientRect()
                event.currentTarget.style.setProperty("--spot-x", `${event.clientX - rect.left}px`)
                event.currentTarget.style.setProperty("--spot-y", `${event.clientY - rect.top}px`)
              }}
            >
              <div className="project-meta"><span>{project.number}</span><span>{project.type}</span></div>
              <div className="project-icon">{project.accent === "lime" ? <ShieldCheck size={26} /> : project.accent === "blue" ? <Code2 size={26} /> : <Sparkles size={26} />}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-result"><Check size={15} /> {project.result}</div>
              <div className="tag-row">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <div className="project-links">
                <a href={project.href} target="_blank" rel="noreferrer">View project <ArrowUpRight size={15} /></a>
                {project.repo && <a href={project.repo} target="_blank" rel="noreferrer" aria-label="View source code"><Github size={17} /></a>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="section-shell about-grid">
          <div className="section-heading">
            <p className="eyebrow">02 / About</p>
            <h2>Curious by<br /><em>default.</em></h2>
          </div>
          <div className="about-copy">
            <p className="large-copy">I like the space between a messy question and a useful answer.</p>
            <p>Currently pursuing a B.Tech in Computer Science Engineering with a minor in Cybersecurity at YCCE, I combine analytical thinking with a builder&apos;s instinct. My work moves from training vision models to shaping dashboards and designing safer systems.</p>
            <div className="skill-cloud">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
          </div>
        </div>
      </section>

      <section className="section-shell experience-section" id="experience">
        <div className="section-heading">
          <p className="eyebrow">03 / Experience</p>
          <h2>Learning by<br /><em>doing.</em></h2>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-item" key={item.role}>
              <span className="timeline-date">{item.date}</span>
              <div className="timeline-marker" />
              <div><h3>{item.role}</h3><p className="timeline-company">{item.company}</p><p>{item.detail}</p></div>
            </article>
          ))}
        </div>
        <div className="education-card"><MapPin size={19} /><div><p className="eyebrow">Education / 2023 — 2027</p><h3>Yeshwantrao Chavan College of Engineering</h3><p>B.Tech in Computer Science Engineering · Minor in Cybersecurity</p></div><span className="education-score">7.85<span>/10</span></span></div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-shell contact-inner">
          <div><p className="eyebrow">04 / Start a conversation</p><h2>Have a good<br /><em>problem?</em></h2></div>
          <div className="contact-copy"><p>Whether it&apos;s an internship, a data challenge, or a thoughtful side project — I&apos;d love to hear what you&apos;re working on.</p><a className="email-link" href="mailto:rohanandelkar22@gmail.com">rohanandelkar22@gmail.com <ArrowUpRight size={19} /></a><div className="social-links"><a href="https://github.com/rohanandelkar" target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a><a href="https://www.linkedin.com/in/rohanandelkar/" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a><a href="tel:+917249784567"><Mail size={18} /> +91 72497 84567</a></div></div>
        </div>
      </section>

      <footer className="site-footer section-shell"><span>© 2026 Rohan Andelkar</span><span>Built with curiosity & care</span><span>Available for opportunities <span className="status-dot" /></span></footer>
    </main>
  )
}
