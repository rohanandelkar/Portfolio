"use client"

import { Section } from "@/components/section"
import { motion } from "framer-motion"
import { Award, Trophy, Users, Code } from "lucide-react"

const achievements = [
    {
        icon: Trophy,
        title: "Qualified GATE 2026 — Computer Science",
        description: "Score: 21.43 | Demonstrated strong fundamentals in core CS subjects.",
        color: "var(--accent-1)",
    },
    {
        icon: Award,
        title: "Power BI — Microsoft Elevate × AICTE",
        description: "Certification in data analytics and business intelligence using Power BI (2026).",
        color: "var(--accent-2)",
    },
    {
        icon: Award,
        title: "Agentic AI — IBM SkillsBuild",
        description: "Certification in agent-based AI architecture and intelligent systems (2025).",
        color: "var(--accent-3)",
    },
    {
        icon: Award,
        title: "AI in Marketing — NPTEL (IIT)",
        description: "Completed NPTEL course on AI applications in marketing strategies (2025).",
        color: "var(--accent-1)",
    },
    {
        icon: Award,
        title: "Cybersecurity Threat Landscape — LinkedIn Learning",
        description: "Certification covering modern cybersecurity threats and defense strategies (2024).",
        color: "var(--accent-2)",
    },
    {
        icon: Users,
        title: "Core Lead — ISTE Student Chapter",
        description: "Leading initiatives, organizing technical events, and driving student community engagement.",
        color: "var(--accent-3)",
    },
    {
        icon: Users,
        title: "Member — ACM Student Chapter",
        description: "Active participation in technical workshops, coding activities, and collaborative projects.",
        color: "var(--accent-1)",
    },
    {
        icon: Code,
        title: "Technical Workshops & Coding Activities",
        description: "Regular participation in hackathons, coding competitions, and technical workshops.",
        color: "var(--accent-2)",
    },
]

export function Achievements() {
    return (
        <Section id="achievements" title="Achievements & Certifications">
            <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {achievements.map((item, index) => {
                    const Icon = item.icon
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.06, ease: "backOut" }}
                            whileHover={{ y: -4, scale: 1.02 }}
                            className="group relative"
                        >
                            <div
                                className="glass border border-[var(--border)] rounded-2xl p-5 h-full transition-all duration-300 group-hover:border-opacity-60"
                                style={{
                                    borderColor: "var(--border)",
                                }}
                                onMouseEnter={(e) => {
                                    ; (e.currentTarget as HTMLElement).style.borderColor = item.color + "55"
                                        ; (e.currentTarget as HTMLElement).style.boxShadow = `0 10px 40px ${item.color}15, 0 0 20px ${item.color}10`
                                }}
                                onMouseLeave={(e) => {
                                    ; (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"
                                        ; (e.currentTarget as HTMLElement).style.boxShadow = "none"
                                }}
                            >
                                {/* Icon */}
                                <div
                                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-all duration-300"
                                    style={{
                                        background: `${item.color}15`,
                                        border: `1px solid ${item.color}33`,
                                    }}
                                >
                                    <Icon className="w-5 h-5" style={{ color: item.color }} />
                                </div>

                                {/* Content */}
                                <h3 className="text-sm font-bold text-[var(--foreground)] mb-2 leading-snug">
                                    {item.title}
                                </h3>
                                <p className="text-xs text-[var(--muted)] leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </Section>
    )
}
