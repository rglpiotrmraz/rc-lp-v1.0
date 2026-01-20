import { useTranslations } from "next-intl"
import { ApplicationForm } from "@/components/application-form"
import { ClientManager } from "@/components/client-manager"

export default function ContactPage() {
    const t = useTranslations('Contact')

    return (
        <main className="min-h-screen bg-background pt-32 pb-24">
            <div className="max-w-4xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16 md:mb-20">
                    <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Get in Touch</p>
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide mb-6">
                        {t('title')}
                    </h1>
                    <div className="w-px h-20 bg-gradient-to-b from-gold/40 to-transparent mx-auto" />
                </div>

                {/* Client Manager Section */}
                <div className="mb-16 md:mb-24">
                    <ClientManager />
                </div>

                {/* Form Section */}
                <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-b from-gold/5 via-transparent to-transparent blur-xl opacity-50" />
                    <ApplicationForm />
                </div>

                {/* General Contact Info */}
                <div className="mt-16 text-center">
                    <p className="text-silver/40 text-sm mb-2">General Inquiries</p>
                    <a href="mailto:hello@royalconcierge.pl" className="text-gold hover:text-white transition-colors tracking-wide">
                        hello@royalconcierge.pl
                    </a>
                </div>
            </div>
        </main>
    )
}
