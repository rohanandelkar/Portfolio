"use client"

import { Section } from "@/components/section"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { useRef, useState } from "react"

const projects = [
  {
    title: "Sanjivani – AI Health Triage",
    description:
      "Developed an AI health triage system aligned with UN SDG 3. Built machine learning models (XGBoost, Random Forest) achieving 90%+ top-3 accuracy in disease prediction. Applied agent-based AI architecture for intelligent decision-making. Flask REST backend, containerised with Docker, deployed on IBM Cloud.",
    tags: ["Python", "Flask", "IBM Cloud", "Docker", "XGBoost", "React"],
    tagColor: "var(--accent-2)",
    gradient: "from-violet-500/20 to-indigo-500/20",
    links: {
      demo: "https://lnkd.in/dGmtF5vp",
      repo: "https://lnkd.in/dGmtF5vp",
    },
  },
  {
    title: "DDoS Attack Detection & Prevention Simulator",
    description:
      "Simulated real-time network traffic to detect anomalies and potential DDoS attacks. Implemented threshold-based detection algorithms for traffic analysis. Built monitoring dashboard for traffic visualization, alerts, and server health. Designed mitigation logic to simulate attack prevention mechanisms.",
    tags: ["JavaScript", "React", "Netlify", "Cybersecurity"],
    tagColor: "var(--accent-3)",
    gradient: "from-cyan-500/20 to-teal-500/20",
    links: {
      demo: "https://ddos-attack-detection-prevention-simu.netlify.app/",
      repo: "https://github.com/rohanandelkar/DDoS-Attack-Detection-Prevention-Simulator",
    },
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: y * -16, y: x * 16 })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
    setHovered(false)
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(${hovered ? "12px" : "0px"})`,
        transition: hovered ? "transform 0.1s ease-out" : "transform 0.4s ease-out",
        transformStyle: "preserve-3d",
      }}
      className="relative group rounded-2xl overflow-hidden cursor-default"
    >
      <div
        className="glass border border-[var(--border)] rounded-2xl overflow-hidden transition-all duration-300"
        style={{
          boxShadow: hovered
            ? `0 25px 60px rgba(0,0,0,0.5), 0 0 40px ${project.tagColor}22`
            : "0 4px 20px rgba(0,0,0,0.3)",
          borderColor: hovered ? project.tagColor + "55" : "var(--border)",
        }}
      >
        {/* Gradient image area */}
        <div className={`h-48 w-full bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
          <div
            className="absolute inset-0 opacity-40 animate-spin-slow"
            style={{
              background: `conic-gradient(from 0deg at 50% 50%, ${project.tagColor}00, ${project.tagColor}88, ${project.tagColor}00)`,
            }}
          />
          <div
            className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full blur-2xl opacity-60"
            style={{ background: project.tagColor }}
          />
          <span
            className="absolute top-4 right-4 text-6xl font-black opacity-10 select-none"
            style={{ color: project.tagColor }}
          >
            0{index + 1}
          </span>
        </div>

        {/* Content */}
        <div className="p-6" style={{ transform: "translateZ(20px)" }}>
          <h3
            className="text-xl font-bold mb-2 transition-colors duration-200"
            style={{ color: hovered ? project.tagColor : "var(--foreground)" }}
          >
            {project.title}
          </h3>
          <p className="text-sm text-[var(--muted)] mb-5 leading-relaxed line-clamp-4">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-semibold px-3 py-1 rounded-full border"
                style={{
                  color: project.tagColor,
                  borderColor: project.tagColor + "44",
                  background: project.tagColor + "11",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-4">
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              data-hover="true"
              className="flex items-center gap-1.5 text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" /> Live Demo
            </a>
            <a
              href={project.links.repo}
              target="_blank"
              rel="noopener noreferrer"
              data-hover="true"
              className="flex items-center gap-1.5 text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            >
              <Github className="w-3.5 h-3.5" /> Code
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function Projects() {
  return (
    <Section id="projects" title="Featured Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </Section>
  )
}
