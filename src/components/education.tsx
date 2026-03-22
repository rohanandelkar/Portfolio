"use client"

import { Section } from "@/components/section"
import { motion } from "framer-motion"
import { GraduationCap, MapPin, Calendar, BookOpen } from "lucide-react"

export function Education() {
    return (
        <Section id="education" title="Education">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div
                        whileHover={{ scale: 1.01, x: 4 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="glass border border-[var(--border)] rounded-2xl p-8 relative overflow-hidden"
                        style={{ borderLeft: "2px solid var(--accent-1)" }}
                    >
                        {/* Background decoration */}
                        <div
                            className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-10 pointer-events-none"
                            style={{ background: "var(--accent-1)" }}
                        />

                        <div className="flex flex-col md:flex-row md:items-start gap-6">
                            {/* Icon */}
                            <div
                                className="flex-shrink-0 p-4 rounded-2xl glass border border-[var(--border)]"
                                style={{ boxShadow: "0 0 20px rgba(99,102,241,0.15)" }}
                            >
                                <GraduationCap className="w-8 h-8" style={{ color: "var(--accent-1)" }} />
                            </div>

                            {/* Details */}
                            <div className="flex-1">
                                <h3 className="text-xl md:text-2xl font-bold text-[var(--foreground)] mb-1">
                                    Bachelor of Technology in Computer Science and Engineering
                                </h3>
                                <p className="text-base font-semibold mb-3" style={{ color: "var(--accent-1)" }}>
                                    Yashwantrao Chavan College of Engineering, Nagpur
                                </p>

                                <div className="flex flex-wrap gap-4 mb-4">
                                    <span className="inline-flex items-center gap-1.5 text-sm text-[var(--muted)]">
                                        <Calendar className="w-3.5 h-3.5" style={{ color: "var(--accent-2)" }} />
                                        Jul 2023 — Jul 2027
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 text-sm text-[var(--muted)]">
                                        <MapPin className="w-3.5 h-3.5" style={{ color: "var(--accent-3)" }} />
                                        Nagpur, India
                                    </span>
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    <span
                                        className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full"
                                        style={{
                                            color: "var(--accent-2)",
                                            background: "rgba(139,92,246,0.12)",
                                            border: "1px solid rgba(139,92,246,0.25)",
                                        }}
                                    >
                                        <BookOpen className="w-3 h-3" />
                                        Minor: Cybersecurity
                                    </span>
                                    <span
                                        className="inline-flex items-center text-xs font-bold px-3 py-1.5 rounded-full"
                                        style={{
                                            color: "var(--accent-3)",
                                            background: "rgba(6,182,212,0.12)",
                                            border: "1px solid rgba(6,182,212,0.25)",
                                        }}
                                    >
                                        CGPA: 7.9 / 10
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </Section>
    )
}
