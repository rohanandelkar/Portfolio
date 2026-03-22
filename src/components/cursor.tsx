"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useSpring } from "framer-motion"

export function CustomCursor() {
    const [mounted, setMounted] = useState(false)
    const [visible, setVisible] = useState(false)
    const [clicking, setClicking] = useState(false)
    const [hovering, setHovering] = useState(false)

    const mouseX = useRef(0)
    const mouseY = useRef(0)

    const springConfig = { damping: 28, stiffness: 300, mass: 0.5 }
    const dotX = useSpring(0, { damping: 30, stiffness: 500, mass: 0.3 })
    const dotY = useSpring(0, { damping: 30, stiffness: 500, mass: 0.3 })
    const ringX = useSpring(0, springConfig)
    const ringY = useSpring(0, springConfig)

    useEffect(() => {
        setMounted(true)
        const move = (e: MouseEvent) => {
            mouseX.current = e.clientX
            mouseY.current = e.clientY
            dotX.set(e.clientX)
            dotY.set(e.clientY)
            ringX.set(e.clientX)
            ringY.set(e.clientY)
            setVisible(true)
        }

        const enter = () => setVisible(true)
        const leave = () => setVisible(false)
        const down = () => setClicking(true)
        const up = () => setClicking(false)

        const checkHover = (e: MouseEvent) => {
            const el = e.target as HTMLElement
            const isInteractive = el.closest("a, button, input, textarea, [data-hover]")
            setHovering(!!isInteractive)
        }

        window.addEventListener("mousemove", move)
        window.addEventListener("mousemove", checkHover)
        window.addEventListener("mouseenter", enter)
        window.addEventListener("mouseleave", leave)
        window.addEventListener("mousedown", down)
        window.addEventListener("mouseup", up)

        return () => {
            window.removeEventListener("mousemove", move)
            window.removeEventListener("mousemove", checkHover)
            window.removeEventListener("mouseenter", enter)
            window.removeEventListener("mouseleave", leave)
            window.removeEventListener("mousedown", down)
            window.removeEventListener("mouseup", up)
        }
    }, [dotX, dotY, ringX, ringY])

    if (!mounted) return null
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return null

    return (
        <>
            {/* Ring */}
            <motion.div
                style={{
                    x: ringX,
                    y: ringY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    opacity: visible ? 1 : 0,
                    scale: hovering ? 1.6 : clicking ? 0.8 : 1,
                }}
                transition={{ duration: 0.15 }}
                className="fixed top-0 left-0 z-[9999] pointer-events-none"
            >
                <div
                    className="w-9 h-9 rounded-full border-2 transition-colors duration-200"
                    style={{
                        borderColor: hovering ? "var(--accent-3)" : "var(--accent-1)",
                        boxShadow: hovering
                            ? "0 0 15px rgba(6,182,212,0.6)"
                            : "0 0 10px rgba(99,102,241,0.5)",
                    }}
                />
            </motion.div>

            {/* Dot */}
            <motion.div
                style={{
                    x: dotX,
                    y: dotY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    opacity: visible ? 1 : 0,
                    scale: clicking ? 0.5 : 1,
                }}
                transition={{ duration: 0.1 }}
                className="fixed top-0 left-0 z-[9999] pointer-events-none"
            >
                <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: hovering ? "var(--accent-3)" : "var(--accent-1)" }}
                />
            </motion.div>
        </>
    )
}
