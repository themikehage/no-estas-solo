import { stats, methodologicalNote } from '@/data/stats'
import SectionHeading from '@/components/ui/SectionHeading'
import AnimatedSection from '@/components/ui/AnimatedSection'

export default function StatsSection() {
  return (
    <section id="datos" className="relative z-10 py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            eyebrow="La magnitud"
            title="Los números detrás de las personas"
            subtitle="Cada cifra representa vidas, familias, comunidades. Detrás de cada estadística hay alguien que no eligió estar aquí."
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 mb-16">
          {stats.map((stat, index) => (
            <AnimatedSection key={stat.id} delay={index * 0.1}>
              <div>
                <p className="font-display text-5xl md:text-6xl text-synapse-green leading-none mb-1">
                  {stat.value}
                </p>
                <div className="w-12 h-px bg-hospital-white/10 my-4" />
                <p className="font-body text-lg text-hospital-white mb-2">
                  {stat.label}
                </p>
                <p className="font-body text-sm text-hospital-white/40 leading-relaxed mb-3">
                  {stat.context}
                </p>
                <p className="font-mono text-xs text-hospital-white/20">
                  Fuente: {stat.source}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="max-w-3xl mx-auto border-l-2 border-dopamine-gold/40 pl-6">
            <p className="font-body text-sm text-hospital-white/50 leading-relaxed italic">
              {methodologicalNote}
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
