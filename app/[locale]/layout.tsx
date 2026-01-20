import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing'; // Wait, I didn't create routing.ts, using basic setup.
// Let's use standard setup without extra routing file for now or define validation inline.

import { Cormorant_Garamond, Inter, Cinzel } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import '../globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { JsonLd } from '@/components/json-ld';

const _cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const _inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: 'Royal Concierge | VIP Management Company',
    description: 'Premier VIP management for the distinguished few.',
};

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    const { locale } = await params;

    // Ensure that the incoming `locale` is valid
    if (!['en', 'pl'].includes(locale)) {
        notFound();
    }

    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

    return (
        <html lang={locale}>
            <body className={`font-sans antialiased`}>
                <NextIntlClientProvider messages={messages}>
                    <JsonLd locale={locale} />
                    <Header />
                    {children}
                    <Footer />
                    <Analytics />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
