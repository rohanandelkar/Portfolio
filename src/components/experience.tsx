"use client"

import { Section } from "@/components/section"
import { motion } from "framer-motion"

const experiences = [
  {
    company: "Microsoft Elevate × AICTE",
    role: "Power BI Intern",
    period: "Feb 2026 – Mar 2026",
    location: "Remote",
    description:
      "Developed interactive dashboards using Power BI for business intelligence and reporting. Performed data cleaning and transformation using Power Query, and applied DAX functions to create calculated measures and KPIs. Built data models enabling efficient visualization and data-driven decision making.",
    accent: "var(--accent-3)",
  },
  {
    company: "Edunet Foundation × Microsoft",
    role: "Microsoft Azure AI Intern",
    period: "May 2025 – Jun 2025",
    location: "Remote",
    description:
      "Designed and deployed AI solutions using Azure Cognitive Services. Built cloud-based intelligent applications integrating APIs and ML models. Implemented real-world use cases for automation and prediction systems.",
    accent: "var(--accent-1)",
  },
  {
    company: "IBM SkillsBuild × CSRBOX Foundation",
    role: "AI Agent Architect Intern",
    period: "Jan 2025 – Feb 2025",
    location: "Remote",
    description:
      "Developed \"Sanjivani\" — an AI health triage system aligned with UN SDG 3. Built machine learning models achieving 90%+ top-3 accuracy in disease prediction. Applied agent-based AI architecture for intelligent decision-making and collaborated in a 6-member team using agile development practices.",
    accent: "var(--accent-2)",
  },
]

export function Experience() {
  return (
    <Section id="experience" title="Internship Experience">
      <div className="max-w-3xl mx-auto">
        <div className="relative">
          {/* Gradient vertical line */}
          <div
            className="absolute left-[7px] top-0 bottom-0 w-px"
            style={{ background: "linear-gradient(to bottom, var(--accent-3), var(--accent-1), var(--accent-2))" }}
          />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-10"
              >
                {/* Glowing dot */}
                <div
                  className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full animate-timeline-pulse"
                  style={{
                    background: exp.accent,
                    boxShadow: `0 0 0 3px ${exp.accent}33`,
                  }}
                />

                {/* Glass card */}
                <motion.div
                  whileHover={{ x: 6, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="glass border border-[var(--border)] rounded-2xl p-6 transition-all duration-300"
                  style={{ borderLeft: `2px solid ${exp.accent}66` }}
                >
                  {/* Period & location badges */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span
                      className="inline-flex items-center text-xs font-bold font-mono px-3 py-1 rounded-full"
                      style={{
                        color: exp.accent,
                        background: `${exp.accent}15`,
                        border: `1px solid ${exp.accent}33`,
                      }}
                    >
                      {exp.period}
                    </span>
                    <span
                      className="inline-flex items-center text-xs font-medium px-2.5 py-0.5 rounded-full"
                      style={{
                        color: "var(--muted)",
                        background: "var(--border)",
                      }}
                    >
                      {exp.location}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-1 text-[var(--foreground)]">
                    {exp.role}
                  </h3>
                  <div
                    className="text-sm font-semibold mb-3"
                    style={{ color: exp.accent }}
                  >
                    {exp.company}
                  </div>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">
                    {exp.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
