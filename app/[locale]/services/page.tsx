import { Crown, Plane, Building, Briefcase, Heart, GraduationCap } from "lucide-react"
import { useTranslations } from "next-intl"

export default function ServicesPage() {
    const t = useTranslations('Services')

    const services = [
        {
            icon: Crown,
            id: "lifestyle",
        },
        {
            icon: Plane,
            id: "travel",
        },
        {
            icon: Building,
            id: "assets",
        },
        {
            icon: Briefcase,
            id: "corporate",
        },
        {
            icon: Heart,
            id: "wellness",
        },
        {
            icon: GraduationCap,
            id: "education",
        },
    ]

    return (
        <main className="min-h-screen bg-background pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16 md:mb-24">
                    <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">The Royal Standard</p>
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide mb-6">
                        {t('title')}
                    </h1>
                    <div className="w-px h-20 bg-gradient-to-b from-gold/40 to-transparent mx-auto" />
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="group relative p-8 md:p-12 bg-card border border-border/50 hover:border-gold/40 transition-all duration-500 flex flex-col items-center text-center"
                            style={{
                                background: 'linear-gradient(135deg, rgba(201,162,39,0.02) 0%, transparent 50%)'
                            }}
                        >
                            {/* Subtle gold gradient border overlay on hover */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none border border-gold/20" />

                            {/* Icon */}
                            <div className="p-4 rounded-full bg-gold/5 mb-8 group-hover:bg-gold/10 transition-colors duration-500">
                                <service.icon className="w-8 h-8 text-gold/80 group-hover:text-gold transition-colors duration-500" strokeWidth={1.5} />
                            </div>

                            {/* Title */}
                            <h3 className="font-serif text-2xl text-foreground mb-4 tracking-wide">
                                {t(`${service.id}.title`)}
                            </h3>

                            {/* Tagline */}
                            <p className="text-gold text-sm tracking-wide mb-6 uppercase border-b border-gold/20 pb-2">
                                {t(`${service.id}.tagline`)}
                            </p>

                            {/* Description */}
                            <p className="text-silver/60 font-sans text-sm leading-relaxed max-w-sm">
                                {t(`${service.id}.description`)}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}
