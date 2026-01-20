import { useTranslations } from "next-intl"

export default function AboutPage() {
    const t = useTranslations('About')

    return (
        <main className="min-h-screen bg-background pt-32 pb-24">
            <div className="max-w-4xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-20">
                    <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Royal Concierge</p>
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide mb-8">
                        {t('title')}
                    </h1>
                    <div className="w-px h-24 bg-gradient-to-b from-gold/40 to-transparent mx-auto" />
                </div>

                {/* Content */}
                <div className="space-y-12 text-center md:text-justify">
                    <p className="text-silver/70 font-sans text-lg leading-relaxed first-letter:text-gold first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left">
                        {t('p1')}
                    </p>
                    <p className="text-silver/70 font-sans text-lg leading-relaxed">
                        {t('p2')}
                    </p>

                    <div className="py-12 flex justify-center">
                        <div className="p-8 border-y border-gold/10 max-w-2xl">
                            <p className="font-serif text-2xl md:text-3xl text-gold/80 italic text-center leading-relaxed">
                                "{t('quote')}"
                            </p>
                        </div>
                    </div>

                    <p className="text-silver/70 font-sans text-lg leading-relaxed">
                        {t('p3')}
                    </p>
                </div>
            </div>
        </main>
    )
}
