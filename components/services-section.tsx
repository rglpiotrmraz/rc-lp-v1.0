import { Crown, Plane, Building } from "lucide-react"

const services = [
  {
    icon: Crown,
    title: "Lifestyle",
    tagline: "Access the inaccessible.",
    description: "Private events, exclusive reservations, and bespoke experiences crafted for the discerning few.",
  },
  {
    icon: Plane,
    title: "Travel",
    tagline: "Private aviation & logistics.",
    description: "Seamless journeys aboard the world's finest aircraft with comprehensive ground coordination.",
  },
  {
    icon: Building,
    title: "Assets",
    tagline: "Real estate & art acquisition.",
    description: "Discreet procurement of prestigious properties and rare collectibles worldwide.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">The Royal Standard</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground tracking-wide">
            Our Services
          </h2>
        </div>

        {/* Three Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative p-8 md:p-10 bg-card border border-border/50 hover:border-gold/40 transition-all duration-500"
              style={{
                background: 'linear-gradient(135deg, rgba(201,162,39,0.02) 0%, transparent 50%)'
              }}
            >
              {/* Subtle gold gradient border overlay on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none border border-gold/20" />

              {/* Icon */}
              <service.icon className="w-7 h-7 text-gold/80 mb-8 group-hover:text-gold transition-colors duration-500" strokeWidth={1.5} />

              {/* Title */}
              <h3 className="font-serif text-2xl text-foreground mb-3 tracking-wide">
                {service.title}
              </h3>

              {/* Tagline */}
              <p className="text-gold text-sm tracking-wide mb-4">
                {service.tagline}
              </p>

              {/* Description */}
              <p className="text-silver/50 font-sans text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
