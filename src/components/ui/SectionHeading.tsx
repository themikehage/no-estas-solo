interface SectionHeadingProps {
  eyebrow: string
  title: string
  subtitle?: string
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="mb-16 max-w-3xl">
      <span className="font-mono text-xs tracking-widest uppercase text-synapse-green/70 mb-4 block">
        {eyebrow}
      </span>
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-hospital-white leading-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="font-body text-lg text-hospital-white/60 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
