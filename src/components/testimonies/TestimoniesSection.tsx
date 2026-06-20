import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { testimonies, testimoniesIntro } from '@/data/testimonies'
import SectionHeading from '@/components/ui/SectionHeading'
import AnimatedSection from '@/components/ui/AnimatedSection'

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
                className="bg-hospital-white/5 border border-hospital-white/10 p-8 cursor-pointer transition-colors hover:border-thread-red/30"
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
                  <span className="font-mono text-xs text-hospital-white/30">
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

                <p className="font-mono text-xs text-hospital-white/30 mt-4">
                  {expandedId === testimony.id
                    ? 'Cerrar historia'
                    : 'Leer historia completa'}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
