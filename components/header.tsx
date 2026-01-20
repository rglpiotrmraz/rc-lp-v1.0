"use client"

import { useState, useEffect } from "react"
import { Link } from "@/i18n/routing"
import { Button } from "@/components/ui/button"
import { Menu, X, ArrowLeft } from "lucide-react"
import { useTranslations } from "next-intl"
import { LanguageSwitcher } from "@/components/language-switcher"
import { MagneticButton } from "@/components/magnetic-button"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const t = useTranslations('Navigation')
  const pathname = usePathname()

  // Check if homepage (considering i18n locales)
  const isHomePage = pathname === '/' || pathname === '/en' || pathname === '/pl'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: "/services", label: t('services') },
    { href: "/about", label: t('philosophy') },
    { href: "/contact", label: t('contact') }
  ]

  return (
    <>
      <header
        className={`fixed z-50 transition-all duration-500 
        /* Mobile: Glass Pill */
        top-4 left-4 right-4 rounded-full border border-gold/10 bg-background/80 backdrop-blur-md shadow-lg py-3 px-6
        /* Desktop: Full Width, transparent initially */
        md:top-0 md:left-0 md:right-0 md:rounded-none md:border-none md:bg-transparent md:backdrop-blur-none md:shadow-none md:px-0
        ${scrolled ? 'md:py-4 md:bg-background/80 md:backdrop-blur-md' : 'md:py-6'}`}
      >
        <div className="max-w-7xl mx-auto md:px-6 flex items-center justify-between">
          {/* Logo - Hidden initially on Home, always visible on subpages */}
          {/* Logo - Hidden initially on Home, always visible on subpages */}
          <Link href="/" className={`relative z-50 flex items-center gap-3 transition-opacity duration-500 ${(scrolled || !isHomePage) ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none lg:opacity-0'}`}>
            {!isHomePage && (
              <ArrowLeft className={`text-gold/80 hover:text-gold transition-all duration-500 w-auto ${scrolled ? 'h-5' : 'h-6 md:h-7'}`} />
            )}
            <img
              src="/images/logo-header.png"
              alt="Royal Concierge"
              className={`transition-all duration-500 ${scrolled ? 'h-6' : 'h-8'} w-auto`}
            />
          </Link>

          {/* Desktop Navigation - Center "Island" */}
          <div className={`hidden md:flex items-center gap-1 px-2 py-2 rounded-full border transition-all duration-500 ${scrolled
            ? 'bg-background/80 backdrop-blur-md border-border/50 shadow-lg'
            : 'bg-transparent border-transparent'
            }`}>
            {navLinks.map((link) => (
              <MagneticButton key={link.href}>
                <Link
                  href={link.href}
                  className="px-6 py-2 rounded-full text-xs uppercase tracking-[0.2em] text-silver/70 hover:text-foreground transition-colors hover:bg-gold/5 block"
                >
                  {link.label}
                </Link>
              </MagneticButton>
            ))}
          </div>

          {/* Right Actions - Pill Style */}
          <div className={`hidden md:flex items-center gap-1 px-2 py-2 rounded-full border transition-all duration-500 relative z-50 ${scrolled
            ? 'bg-background/80 backdrop-blur-md border-border/50 shadow-lg'
            : 'bg-transparent border-transparent'
            }`}>
            <LanguageSwitcher />
            <MagneticButton>
              <Button
                asChild
                variant="ghost"
                className="bg-gold/10 hover:bg-gold hover:text-black border border-gold/20 hover:border-gold rounded-full px-6 tracking-[0.15em] text-xs uppercase transition-all duration-300"
              >
                <Link href="/contact">{t('requestInvitation')}</Link>
              </Button>
            </MagneticButton>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center justify-end w-full relative z-50">
            {/* Duplicate Logo Removed: Only Main Logo (left) is used, handled by CSS visibility */}

            <div className="flex items-center gap-4">
              <LanguageSwitcher />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-1 text-silver/80 hover:text-gold transition-colors"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu - Glass Pill Style Popup - Connected to Header via top positioning */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-[4.5rem] left-4 right-4 z-40 bg-card/95 backdrop-blur-xl border border-gold/20 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Darker background for contrast */}
            <div className="flex flex-col py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-6 py-3 text-sm uppercase tracking-[0.15em] text-silver hover:text-gold hover:bg-gold/5 transition-colors border-l-2 border-transparent hover:border-gold"
                >
                  {link.label}
                </Link>
              ))}
              <div className="h-px bg-white/5 my-2 mx-4" />
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="px-6 py-3 text-xs uppercase tracking-[0.2em] text-gold hover:text-white hover:bg-gold/10 transition-colors font-medium"
              >
                {t('requestInvitation')}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
