"use client"

import { useTranslations } from "next-intl"

export function ClientManager() {
    const t = useTranslations('Contact.manager')

    return (
        <div className="bg-card border border-border/50 p-8 md:p-10 relative overflow-hidden group">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-50" />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                {/* Image Container */}
                <div className="relative w-48 md:w-56 aspect-[3/4] flex-shrink-0">
                    <div className="absolute inset-0 border border-gold/30 -translate-x-3 -translate-y-3 transition-transform duration-700 group-hover:translate-x-0 group-hover:translate-y-0" />
                    <img
                        src="/images/Adam.jpeg"
                        alt="Adam Gajda"
                        className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-700 shadow-2xl"
                    />
                </div>

                {/* Info */}
                <div className="text-center md:text-left">
                    <p className="text-gold/60 text-xs tracking-[0.2em] uppercase mb-2">
                        {t('title')}
                    </p>
                    <h3 className="font-serif text-2xl text-foreground mb-4">
                        Adam Gajda
                    </h3>

                    <div className="space-y-2">
                        <p className="text-silver/70 font-sans text-sm">
                            <span className="text-gold/40 mr-3">{t('email')}</span>
                            <a href="mailto:adam@royalconcierge.pl" className="hover:text-gold transition-colors">
                                adam@royalconcierge.pl
                            </a>
                        </p>
                        <p className="text-silver/70 font-sans text-sm">
                            <span className="text-gold/40 mr-3">{t('phone')}</span>
                            <a href="tel:+48123456789" className="hover:text-gold transition-colors">
                                +48 123 456 789
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
