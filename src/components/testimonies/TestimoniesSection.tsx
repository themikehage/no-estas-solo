import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { testimonies, testimoniesIntro } from '@/data/testimonies'
import SectionHeading from '@/components/ui/SectionHeading'
import AnimatedSection from '@/components/ui/AnimatedSection'

function PlusIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
      <line x1="8" y1="3" x2="8" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="3" y1="8" x2="13" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function MinusIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
      <line x1="3" y1="8" x2="13" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export default function TestimoniesSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  return (
    <section id="historias" className="relative z-10 py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Historias reales"
            title="Cada persona, un camino"
            subtitle={testimoniesIntro}
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonies.map((testimony, index) => (
            <AnimatedSection key={testimony.id} delay={index * 0.1}>
              <motion.div
                layout
                onClick={() =>
                  setExpandedId(
                    expandedId === testimony.id ? null : testimony.id,
                  )
                }
                className="bg-hospital-white/5 border border-hospital-white/10 p-8 cursor-pointer transition-colors hover:border-thread-red/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-synapse-green"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setExpandedId(
                      expandedId === testimony.id ? null : testimony.id,
                    )
                  }
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-display text-2xl text-hospital-white">
                      {testimony.name}, {testimony.age}
                    </h3>
                    <p className="font-mono text-xs text-dopamine-gold/70 mt-1">
                      {testimony.substance}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-hospital-white/30 mt-1">
                    {testimony.recoveryStatus}
                  </span>
                </div>

                <p className="font-display text-lg text-hospital-white/80 italic leading-relaxed mb-4">
                  &ldquo;{testimony.excerpt}&rdquo;
                </p>

                <AnimatePresence>
                  {expandedId === testimony.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <p className="font-body text-sm text-hospital-white/60 leading-relaxed pt-4 border-t border-hospital-white/10">
                        {testimony.fullStory}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex items-center gap-2 mt-4 text-hospital-white/30">
                  <span className="text-xs">
                    {expandedId === testimony.id ? (
                      <MinusIcon />
                    ) : (
                      <PlusIcon />
                    )}
                  </span>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
