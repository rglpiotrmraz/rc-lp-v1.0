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
  const [scrollDirection, setScrollDirection] = useState("up")
  const t = useTranslations('Navigation')
  const pathname = usePathname()

  // Check if homepage (considering i18n locales)
  const isHomePage = pathname === '/' || pathname === '/en' || pathname === '/pl'

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrolled(currentScrollY > 50)

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setScrollDirection("down")
      } else {
        setScrollDirection("up")
      }
      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: "/services", label: t('services') },
    { href: "/about", label: t('philosophy') },
    { href: "/contact", label: t('contact') }
  ]

  // Smart Scroll Logic: Hide on scroll down (mobile only), show on scroll up or if menu is open
  const isVisible = scrollDirection === "up" || isMenuOpen || !scrolled

  return (
    <motion.header
      layout
      transition={{ layout: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
      className={`fixed z-50 
        /* Mobile: Glass Pill logic */
        ${isVisible ? 'translate-y-0' : '-translate-y-[150%] md:translate-y-0'}
        ${isMenuOpen ? 'rounded-3xl bg-background/95 backdrop-blur-xl border-gold/20' : 'rounded-full bg-background/80 border-gold/10 backdrop-blur-md'}
        top-4 left-4 right-4 border shadow-lg py-3 px-6 overflow-hidden
        
        /* Desktop: Reset to full width transparent */
        md:top-0 md:left-0 md:right-0 md:rounded-none md:border-none md:bg-transparent md:backdrop-blur-none md:shadow-none md:px-0 md:overflow-visible
        ${scrolled ? 'md:py-4 md:bg-background/80 md:backdrop-blur-md' : 'md:py-6'}
      `}
    >
      <motion.div layout className="max-w-7xl mx-auto md:px-6 flex flex-col md:flex-row md:items-center justify-between relative">

        {/* Top Bar: Logo + Actions (Mobile) */}
        <div className="flex items-center justify-between w-full md:w-auto">

          {/* Logo Section */}
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

          {/* Mobile Actions: Language + Toggle */}
          <div className="flex md:hidden items-center gap-4 relative z-50">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-1 text-silver/80 hover:text-gold transition-colors"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

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

        {/* Right Actions - Desktop Only */}
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

        {/* EXPANDABLE MOBILE MENU CONTENT */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden w-full overflow-hidden"
            >
              <div className="flex flex-col pt-6 pb-2 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="px-4 py-3 text-sm uppercase tracking-[0.15em] text-silver hover:text-gold hover:bg-gold/5 transition-colors border-l-2 border-transparent hover:border-gold rounded-r-lg"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="h-px bg-white/5 my-2 mx-4" />
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 text-xs uppercase tracking-[0.2em] text-gold hover:text-white hover:bg-gold/10 transition-colors font-medium rounded-lg"
                >
                  {t('requestInvitation')}
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </motion.div>
    </motion.header>
  )
}
