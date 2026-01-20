import { WithContext, LocalBusiness, Service } from 'schema-dts';

export function JsonLd({ locale }: { locale: string }) {
    const jsonLd: WithContext<LocalBusiness> = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Royal Concierge',
        description: locale === 'pl'
            ? 'Twój zaufany partner w świecie ekskluzywnych usług. Royal Concierge oferuje kompleksowe zarządzanie stylem życia.'
            : 'Your trusted partner in the world of exclusive services. Royal Concierge offers comprehensive lifestyle management.',
        image: 'https://royalconcierge.pl/images/logo.png', // Assuming domain, user didn't specify. Using generic.
        telephone: '+48123456789',
        email: 'hello@royalconcierge.pl',
        address: {
            '@type': 'PostalAddress',
            addressCountry: 'PL',
            addressLocality: 'Warszawa' // Assuming Warsaw based on +48
        },
        url: 'https://royalconcierge.pl',
        priceRange: '$$$$',
        openingHoursSpecification: [
            {
                "@type": 'OpeningHoursSpecification',
                dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                ],
                opens: "00:00",
                closes: "23:59"
            }
        ],
        employee: {
            "@type": 'Person',
            name: 'Adam Gajda',
            jobTitle: locale === 'pl' ? 'Opiekun Klienta' : 'Client Manager',
            image: 'https://royalconcierge.pl/images/Adam.jpeg',
            email: 'adam@royalconcierge.pl',
            telephone: '+48123456789'
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
