"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-border/30">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <img 
              src="/images/logo.png" 
              alt="Royal Concierge" 
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <Link 
              href="#services" 
              className="text-silver/70 hover:text-gold text-xs tracking-[0.2em] uppercase transition-colors duration-300"
            >
              Services
            </Link>
            <Link 
              href="#philosophy" 
              className="text-silver/70 hover:text-gold text-xs tracking-[0.2em] uppercase transition-colors duration-300"
            >
              Philosophy
            </Link>
            <Link 
              href="#membership" 
              className="text-silver/70 hover:text-gold text-xs tracking-[0.2em] uppercase transition-colors duration-300"
            >
              Membership
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              variant="outline" 
              className="border-gold/50 text-gold hover:bg-gold/10 hover:border-gold hover:shadow-[0_0_20px_rgba(201,162,39,0.2)] tracking-[0.15em] text-xs uppercase transition-all duration-500 bg-transparent"
              onClick={() => document.getElementById('membership')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Request Invitation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-silver/80 hover:text-gold transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-6 border-t border-border/30 pt-6">
            <Link 
              href="#services" 
              className="text-silver/70 hover:text-gold text-xs tracking-[0.2em] uppercase transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="#philosophy" 
              className="text-silver/70 hover:text-gold text-xs tracking-[0.2em] uppercase transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Philosophy
            </Link>
            <Link 
              href="#membership" 
              className="text-silver/70 hover:text-gold text-xs tracking-[0.2em] uppercase transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Membership
            </Link>
            <Button 
              variant="outline" 
              className="w-fit border-gold/50 text-gold hover:bg-gold/10 hover:border-gold tracking-[0.15em] text-xs uppercase bg-transparent"
              onClick={() => {
                setIsMenuOpen(false)
                document.getElementById('membership')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Request Invitation
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
