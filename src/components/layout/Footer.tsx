export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-hospital-white/5 bg-neural-black/90">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-display text-2xl text-hospital-white mb-4">
              No Estás Solo
            </h3>
            <p className="font-body text-sm text-hospital-white/50 leading-relaxed">
              Concienciación sobre el uso de drogas con enfoque humanizador.
              Datos verificados, testimonios reales, recursos de ayuda.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs tracking-widest uppercase text-synapse-green/70 mb-4">
              Fuentes
            </h4>
            <ul className="space-y-2 font-body text-sm text-hospital-white/50">
              <li>OMS / UNODC</li>
              <li>Nutt et al., The Lancet (2010)</li>
              <li>Plan Nacional sobre Drogas</li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs tracking-widest uppercase text-synapse-green/70 mb-4">
              Nota metodológica
            </h4>
            <p className="font-body text-sm text-hospital-white/50 leading-relaxed">
              El estigma y la ilegalidad hacen que muchas muertes relacionadas
              con drogas no se reporten como tales. Las cifras son estimaciones
              conservadoras.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-hospital-white/5 text-center">
          <p className="font-body text-xs text-hospital-white/30">
            Sitio creado con fines educativos y de concienciación. No sustituye
            el consejo médico profesional.
          </p>
        </div>
      </div>
    </footer>
  )
}
