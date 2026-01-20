"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { Button } from "@/components/ui/button";

export function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const toggleLocale = () => {
        const nextLocale = locale === "en" ? "pl" : "en";
        router.replace(pathname, { locale: nextLocale });
    };

    return (
        <Button
            variant="ghost"
            onClick={toggleLocale}
            className="bg-gold/10 hover:bg-gold hover:text-black border border-gold/20 hover:border-gold rounded-full px-6 tracking-[0.15em] text-xs uppercase transition-all duration-300 min-w-[80px]"
        >
            {locale === "en" ? "PL" : "EN"}
        </Button>
    );
}
