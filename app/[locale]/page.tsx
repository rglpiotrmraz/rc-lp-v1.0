import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
// Removed ValuesSection to declutter and rely on specific About page
import { ApplicationForm } from "@/components/application-form";
import { useTranslations } from "next-intl";

export default function Home() {
    const t = useTranslations('Hero');
    return (
        <main className="min-h-screen bg-background">
            <HeroSection />
            <ServicesSection />
            {/* Added spacing and separation for structure */}
            <div className="py-24 bg-card/30">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">{t('philosophyTeaser.title')}</h2>
                    <p className="text-silver/60 mb-8 leading-relaxed">
                        {t('philosophyTeaser.text')}
                    </p>
                    <a href="/about" className="text-gold hover:text-white transition-colors uppercase tracking-widest text-xs border-b border-gold/30 pb-1">
                        {t('philosophyTeaser.link')}
                    </a>
                </div>
            </div>
            <ApplicationForm />
        </main>
    );
}
