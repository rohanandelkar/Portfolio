"use client"

import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion"
import { ArrowRight, Download } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

// Deterministic pseudo-random using a simple LCG seeded by index
function seededRandom(seed: number) {
  const x = Math.sin(seed + 1) * 10000
  return x - Math.floor(x)
}

const PARTICLE_COUNT = 20
const ACCENT_COLORS = ["var(--accent-1)", "var(--accent-2)", "var(--accent-3)"]

// Pre-compute stable particle data once at module level (deterministic, no Math.random at render)
const PARTICLES = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
  width: seededRandom(i * 7 + 0) * 4 + 1,
  height: seededRandom(i * 7 + 1) * 4 + 1,
  left: `${seededRandom(i * 7 + 2) * 100}%`,
  top: `${seededRandom(i * 7 + 3) * 100}%`,
  opacity: seededRandom(i * 7 + 4) * 0.6 + 0.2,
  color: ACCENT_COLORS[i % 3],
  duration: seededRandom(i * 7 + 5) * 4 + 3,
  delay: seededRandom(i * 7 + 6) * 3,
}))

const roles = [
  "Machine Learning Engineer",
  "Data Analytics Enthusiast",
  "Cloud Solutions Builder",
  "Cybersecurity Enthusiast",
]

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [mounted, setMounted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useTransform(mouseY, [-300, 300], [8, -8])
  const rotateY = useTransform(mouseX, [-300, 300], [-8, 8])

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    mouseX.set(e.clientX - cx)
    mouseY.set(e.clientY - cy)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      {/* ── Background Orbs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Orb 1 — indigo */}
        <div
          className="animate-orb-1 absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, rgba(99,102,241,0.6) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        {/* Orb 2 — violet */}
        <div
          className="animate-orb-2 absolute top-1/4 -right-48 w-[700px] h-[700px] rounded-full opacity-25"
          style={{
            background: "radial-gradient(circle, rgba(139,92,246,0.7) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        {/* Orb 3 — cyan */}
        <div
          className="animate-orb-3 absolute bottom-0 left-1/3 w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(6,182,212,0.6) 0%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />

        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Floating particles — client-only to avoid SSR/hydration mismatch */}
        {mounted && PARTICLES.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: p.width,
              height: p.height,
              left: p.left,
              top: p.top,
              background: p.color,
              opacity: p.opacity,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* ── Hero Content ── */}
      <motion.div
        className="container mx-auto px-4 md:px-6 text-center relative z-10"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1200 }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--border)] glass text-sm text-[var(--muted)] mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Available for opportunities
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-4 leading-none"
          style={{ transform: "translateZ(40px)" }}
        >
          Hi, I'm{" "}
          <span className="shimmer-text">Rohan</span>
        </motion.h1>

        {/* Typewriter Role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-12 flex items-center justify-center mb-4"
        >
          <span className="text-xl md:text-2xl font-medium text-[var(--muted)] mr-2">I'm a </span>
          <AnimatePresence mode="wait">
            <motion.span
              key={roleIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="text-xl md:text-2xl font-bold gradient-text"
            >
              {roles[roleIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base md:text-lg text-[var(--muted)] mb-10 max-w-xl mx-auto leading-relaxed"
        >
          Computer Science undergraduate (Class of 2027) with a minor in Cybersecurity,
          specialising in Data Analytics, Machine Learning, and Cloud Computing.
          Proven ability to develop AI-driven applications and build interactive
          dashboards using Power BI for data-driven insights.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#projects"
            className="group relative px-8 py-3.5 rounded-full font-semibold flex items-center gap-2 overflow-hidden transition-all duration-300"
            style={{
              background: "var(--gradient-brand)",
              boxShadow: "0 0 30px rgba(99,102,241,0.4)",
            }}
          >
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            View My Work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/Rohan_Resume.pdf"
            className="group relative px-8 py-3.5 rounded-full font-semibold flex items-center gap-2 glass border border-[var(--border)] hover:border-[var(--accent-1)] transition-all duration-300"
          >
            Resume
            <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--muted)] text-xs"
        >
          <span>Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-10"
            style={{ background: "var(--gradient-brand)" }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
