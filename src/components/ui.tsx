import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export const EASE_OUT = [0.16, 1, 0.3, 1] as const
export const EASE_WAVE = [0.25, 1, 0.5, 1] as const

export const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

export const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 1.2, ease: EASE_OUT } },
}

export const revealVariants = {
  hidden: { y: 28, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: EASE_OUT } },
}

export function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      className={className}
      variants={revealVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}

export function WaveText({ text, className }: { text: string; className?: string }) {
  const [hovered, setHovered] = useState(false)
  const [entered, setEntered] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setEntered(true), 300)
    return () => clearTimeout(t)
  }, [])

  return (
    <span
      className={'relative inline-block align-baseline ' + (className ?? '')}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {text.split('').map((char, i) => {
        if (char === ' ') return ' '
        const trans = entered
          ? { duration: 0.35, delay: i * 0.015, ease: EASE_WAVE }
          : { duration: 1.8, ease: EASE_OUT }
        return (
          <span key={i} className="relative inline-block">
            <motion.span
              className="inline-block"
              initial={{ y: 100, x: -100, opacity: 0 }}
              animate={
                hovered ? { y: '-100%', x: '100%', opacity: 0 } : { y: '0%', x: '0%', opacity: 1 }
              }
              transition={trans}
            >
              {char}
            </motion.span>
            <motion.span
              className="absolute inset-0 inline-block"
              initial={{ y: '100%', x: '-100%', opacity: 0 }}
              animate={
                hovered ? { y: '0%', x: '0%', opacity: 1 } : { y: '100%', x: '-100%', opacity: 0 }
              }
              transition={{ duration: 0.35, delay: i * 0.015, ease: EASE_WAVE }}
            >
              {char}
            </motion.span>
          </span>
        )
      })}
    </span>
  )
}
