import { useState } from 'react'
import { motion } from 'framer-motion'
import { substances, axes, studySource, noWorstDrugMessage } from '@/data/nutt-study'
import SectionHeading from '@/components/ui/SectionHeading'
import AnimatedSection from '@/components/ui/AnimatedSection'

type AxisId = (typeof axes)[number]['id']

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
                className="px-5 py-3 font-body text-sm transition-all cursor-pointer border"
                style={{
                  borderColor:
                    activeAxis === axis.id ? axis.color : 'rgba(245,245,240,0.1)',
                  backgroundColor:
                    activeAxis === axis.id ? `${axis.color}15` : 'transparent',
                  color:
                    activeAxis === axis.id
                      ? axis.color
                      : 'rgba(245,245,240,0.6)',
                }}
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
                const axis = axes.find((a) => a.id === activeAxis)!

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
                        className="h-full"
                        style={{ backgroundColor: axis.color }}
                      />
                    </div>

                    <span
                      className="font-mono text-sm min-w-[3ch] text-right"
                      style={{ color: axis.color }}
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
