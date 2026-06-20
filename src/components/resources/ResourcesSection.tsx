import { resources, resourcesIntro, resourcesDisclaimer } from '@/data/resources'
import SectionHeading from '@/components/ui/SectionHeading'
import AnimatedSection from '@/components/ui/AnimatedSection'

export default function ResourcesSection() {
  return (
    <section id="ayuda" className="relative z-10 py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Recursos de ayuda"
            title="Si necesitas ayuda, está aquí"
            subtitle={resourcesIntro}
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {resources.map((resource, index) => (
            <AnimatedSection key={resource.id} delay={index * 0.1}>
              <div className="bg-hospital-white/5 border border-hospital-white/10 p-8 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full bg-synapse-green" />
                  <span className="font-mono text-xs uppercase tracking-wider text-synapse-green/70">
                    {resource.type === 'phone'
                      ? 'Teléfono'
                      : resource.type === 'website'
                        ? 'Web'
                        : 'Centro'}
                  </span>
                  {resource.region && (
                    <span className="font-mono text-xs text-hospital-white/30">
                      {resource.region}
                    </span>
                  )}
                </div>

                <h3 className="font-display text-xl text-hospital-white mb-3">
                  {resource.name}
                </h3>

                <p className="font-body text-sm text-hospital-white/60 leading-relaxed mb-4 flex-grow">
                  {resource.description}
                </p>

                {resource.url ? (
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm text-synapse-green hover:text-synapse-green/80 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-synapse-green"
                  >
                    {resource.contact}
                  </a>
                ) : resource.type === 'center' ? (
                  <a
                    href={`mailto:${resource.contact}`}
                    className="font-mono text-sm text-synapse-green hover:text-synapse-green/80 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-synapse-green"
                  >
                    {resource.contact}
                  </a>
                ) : (
                  <a
                    href={`tel:${resource.contact.replace(/\s/g, '')}`}
                    className="font-mono text-lg text-synapse-green hover:text-synapse-green/80 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-synapse-green"
                  >
                    {resource.contact}
                  </a>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="max-w-3xl mx-auto border-l-2 border-thread-red/40 pl-6">
            <p className="font-body text-sm text-hospital-white/50 leading-relaxed italic">
              {resourcesDisclaimer}
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
