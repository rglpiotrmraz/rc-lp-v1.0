'use client';

import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent" />
      
      {/* Top decorative line */}
      <div className="absolute top-32 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 pt-20">
        {/* Logo prominently displayed */}
        <div className="mb-10">
          <img 
            src="/images/logo.png" 
            alt="Royal Concierge" 
            className="h-36 md:h-48 w-auto mx-auto"
          />
        </div>

        {/* Headline */}
        <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-foreground mb-6 tracking-wide leading-tight text-balance">
          The Ultimate Currency is Time.
        </h1>

        {/* Subheadline */}
        <p className="text-silver/60 text-base md:text-lg mb-12 max-w-xl mx-auto font-sans tracking-wide text-pretty">
          Elite Lifestyle Management for the Sovereign Few.
        </p>

        {/* CTA with glow effect */}
        <Button 
          size="lg"
          className="bg-transparent border border-gold/60 text-gold hover:bg-gold/10 hover:border-gold hover:shadow-[0_0_30px_rgba(201,162,39,0.3)] tracking-[0.2em] text-xs uppercase px-10 py-6 transition-all duration-500"
          onClick={() => document.getElementById('membership')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Request Invitation
        </Button>

        {/* Bottom scroll indicator */}
        <div className="mt-20 flex flex-col items-center gap-2">
          <span className="text-gold/40 text-xs tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-gold/40 to-transparent" />
        </div>
      </div>
    </section>
  )
}
