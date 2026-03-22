"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface SectionProps {
  id: string
  title?: string
  children: ReactNode
  className?: string
}

export function Section({ id, title, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-24 md:py-32 relative ${className}`}>
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight section-heading">
              {title}
            </h2>
          </motion.div>
        )}
        {children}
      </div>
    </section>
  )
}
