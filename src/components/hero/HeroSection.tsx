import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-mono text-xs tracking-widest uppercase text-synapse-green/70 mb-6"
        >
          Concienciación sobre el uso de drogas
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-display text-6xl md:text-8xl lg:text-9xl text-hospital-white leading-none mb-8"
        >
          No estás
          <span className="block text-synapse-green">solo</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-body text-lg md:text-xl text-hospital-white/60 max-w-2xl mx-auto leading-relaxed mb-12"
        >
          Nadie elige llegar aquí. Pero nadie tiene que estar aquí solo.
          Datos reales, historias humanas, recursos de ayuda.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#datos"
            className="inline-flex items-center justify-center px-8 py-4 bg-synapse-green text-neural-black font-body text-base transition-all hover:bg-synapse-green/80"
          >
            Explorar los datos
          </a>
          <a
            href="#ayuda"
            className="inline-flex items-center justify-center px-8 py-4 border border-hospital-white/20 text-hospital-white font-body text-base transition-all hover:border-hospital-white/60"
          >
            Buscar ayuda
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="mt-20"
        >
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-synapse-green/40 to-transparent mx-auto" />
        </motion.div>
      </div>
    </section>
  )
}
