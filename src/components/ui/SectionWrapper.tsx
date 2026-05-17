'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionWrapperProps {
  id: string
  label: string     
  title: string      
  children: React.ReactNode
  className?: string
  alternate?: boolean 
}

export default function SectionWrapper({
  id,
  label,
  title,
  children,
  className,
  alternate = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        'relative overflow-hidden px-6 py-24 md:py-32',
        alternate && 'bg-[var(--color-card)]',
        className
      )}
    >
      {/* Decorative background section number */}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-4 right-6 select-none
                   font-display text-[8rem] font-black leading-none
                   text-[var(--color-border)] opacity-60 md:text-[12rem]"
      >
        {label}
      </span>

      <div className="relative mx-auto max-w-6xl">
        {/* Section header with entrance animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <p className="mb-2 font-mono text-xs tracking-[0.2em] uppercase text-[var(--color-accent)]">
            {label}
          </p>
          <h2 className="font-display text-4xl font-bold text-[var(--color-foreground)] md:text-5xl">
            {title}
          </h2>
        </motion.div>

        {children}
      </div>
    </section>
  )
}
