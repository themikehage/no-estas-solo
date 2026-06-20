import { useState } from 'react'
import { motion } from 'framer-motion'
import { substances, axes, studySource, noWorstDrugMessage } from '@/data/nutt-study'
import SectionHeading from '@/components/ui/SectionHeading'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { clsx } from 'clsx'

type AxisId = (typeof axes)[number]['id']

const axisStyles: Record<AxisId, string> = {
  lethality: 'border-thread-red/40 bg-thread-red/10 text-thread-red',
  dependency: 'border-dopamine-gold/40 bg-dopamine-gold/10 text-dopamine-gold',
  socialHarm: 'border-azulejo-blue/40 bg-azulejo-blue/10 text-azulejo-blue',
}

const axisBarStyles: Record<AxisId, string> = {
  lethality: 'bg-thread-red',
  dependency: 'bg-dopamine-gold',
  socialHarm: 'bg-azulejo-blue',
}

const axisValueStyles: Record<AxisId, string> = {
  lethality: 'text-thread-red',
  dependency: 'text-dopamine-gold',
  socialHarm: 'text-azulejo-blue',
}

export default function NuttStudySection() {
  const [activeAxis, setActiveAxis] = useState<AxisId>('lethality')

  const sorted = [...substances].sort((a, b) => {
    const key = activeAxis as keyof typeof a
    return Number(b[key]) - Number(a[key])
  })

  const maxVal = 100

  return (
    <section id="estudio" className="relative z-10 py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            eyebrow="El estudio Nutt"
            title="No existe 'la peor droga'"
            subtitle="Depende del eje que mires. David Nutt y su equipo pidieron a expertos que puntuaran cada sustancia en tres dimensiones de daño. El resultado no es un ranking — es un mapa."
          />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="flex flex-wrap gap-3 mb-12">
            {axes.map((axis) => (
              <button
                key={axis.id}
                onClick={() => setActiveAxis(axis.id)}
                className={clsx(
                  'px-5 py-3 font-body text-sm transition-all cursor-pointer border focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-synapse-green',
                  activeAxis === axis.id
                    ? axisStyles[axis.id]
                    : 'border-hospital-white/10 text-hospital-white/60 hover:border-hospital-white/30',
                )}
              >
                {axis.label}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="bg-hospital-white/5 border border-hospital-white/10 p-6 md:p-8 mb-8">
            <div className="space-y-4">
              {sorted.map((substance, index) => {
                const value = Number(
                  substance[activeAxis as keyof typeof substance],
                )

                return (
                  <motion.div
                    key={substance.id}
                    layout
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="grid grid-cols-[120px_1fr_auto] md:grid-cols-[160px_1fr_auto] items-center gap-4"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-hospital-white/30 w-6">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="font-body text-sm md:text-base text-hospital-white">
                        {substance.name}
                      </span>
                    </div>

                    <div className="h-3 bg-hospital-white/5 relative overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(value / maxVal) * 100}%` }}
                        transition={{ duration: 0.8, delay: index * 0.03 }}
                        className={clsx('h-full', axisBarStyles[activeAxis])}
                      />
                    </div>

                    <span
                      className={clsx(
                        'font-mono text-sm min-w-[3ch] text-right',
                        axisValueStyles[activeAxis],
                      )}
                    >
                      {value}
                    </span>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          <AnimatedSection delay={0.4}>
            <div className="border-l-2 border-azulejo-blue/40 pl-6">
              <p className="font-body text-base text-hospital-white/70 leading-relaxed">
                {noWorstDrugMessage}
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.5}>
            <div className="border-l-2 border-stone-warm/40 pl-6">
              <p className="font-body text-sm text-hospital-white/50 leading-relaxed italic">
                {studySource}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
