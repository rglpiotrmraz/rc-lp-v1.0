export function ValuesSection() {
  return (
    <section id="philosophy" className="py-24 md:py-32 bg-secondary border-y border-border/30">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Decorative element */}
        <div className="flex items-center justify-center gap-6 mb-12">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold/40" />
          <div className="w-2 h-2 rotate-45 border border-gold/40" />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold/40" />
        </div>

        {/* Quote */}
        <blockquote className="font-serif text-2xl md:text-4xl text-foreground tracking-wide leading-relaxed mb-8 text-balance">
          &ldquo;Discretion is the better part of valor.&rdquo;
        </blockquote>

        <p className="text-silver/40 text-xs tracking-[0.25em] uppercase">
          — Our Founding Principle
        </p>

        {/* Decorative element */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold/40" />
          <div className="w-2 h-2 rotate-45 border border-gold/40" />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold/40" />
        </div>
      </div>
    </section>
  )
}
