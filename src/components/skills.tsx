"use client"

import { Section } from "@/components/section"
import { motion } from "framer-motion"
import { useState } from "react"

const skillCategories = [
  {
    label: "Programming",
    color: "var(--accent-1)",
    skills: ["Python", "JavaScript", "SQL", "Bash"],
  },
  {
    label: "Data Analytics",
    color: "var(--accent-3)",
    skills: ["Power BI", "Data Visualization", "DAX", "Power Query", "Excel", "Data Cleaning", "Data Modeling"],
  },
  {
    label: "Machine Learning",
    color: "var(--accent-2)",
    skills: ["Supervised Learning", "Classification", "Random Forest", "XGBoost", "Feature Engineering"],
  },
  {
    label: "Web & APIs",
    color: "var(--accent-1)",
    skills: ["React", "HTML", "CSS", "Flask", "REST APIs"],
  },
  {
    label: "Cloud & DevOps",
    color: "var(--accent-3)",
    skills: ["Microsoft Azure", "IBM Cloud", "Docker", "Git", "GitHub", "Netlify"],
  },
  {
    label: "Cybersecurity",
    color: "var(--accent-2)",
    skills: ["DDoS Detection", "Network Traffic Analysis", "System Monitoring"],
  },
  {
    label: "Core CS",
    color: "var(--accent-1)",
    skills: ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems"],
  },
]

function SkillBadge({ skill, color, index }: { skill: string; color: string; index: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.04, ease: "backOut" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.1, rotateX: 8, rotateY: -8, z: 30 }}
      style={{ transformStyle: "preserve-3d", perspective: 600 }}
      className="cursor-default"
    >
      <div
        className="px-5 py-2.5 rounded-full text-sm font-semibold glass border transition-all duration-300"
        style={{
          borderColor: hovered ? color : "var(--border)",
          boxShadow: hovered ? `0 0 20px ${color}55, 0 0 40px ${color}22` : "none",
          color: hovered ? color : "var(--foreground)",
        }}
      >
        {skill}
      </div>
    </motion.div>
  )
}

export function Skills() {
  return (
    <Section id="skills" title="Skills & Technologies">
      <div className="space-y-10 max-w-4xl mx-auto">
        {skillCategories.map((cat, catIdx) => (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: catIdx * 0.08 }}
          >
            {/* Category header */}
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-3 h-3 rounded-full"
                style={{ background: cat.color, boxShadow: `0 0 10px ${cat.color}` }}
              />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: cat.color }}>
                {cat.label}
              </span>
              <div className="flex-1 h-px" style={{ background: `linear-gradient(90deg, ${cat.color}44, transparent)` }} />
            </div>

            <div className="flex flex-wrap gap-3">
              {cat.skills.map((skill, i) => (
                <SkillBadge key={skill} skill={skill} color={cat.color} index={catIdx * 6 + i} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
