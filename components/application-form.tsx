"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"

export function ApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)
    
    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name') as string,
      contact: formData.get('contact') as string,
      requestDetails: formData.get('request') as string,
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to submit')
      }

      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="membership" className="py-24 md:py-32 bg-background">
      <div className="max-w-xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Membership</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 tracking-wide">
            Request an Invitation
          </h2>
          <p className="text-silver/50 font-sans text-sm tracking-wide">
            Membership is by invitation only. Submit your inquiry below.
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-16 border border-gold/30 bg-card relative">
            {/* Corner decorations */}
            <div className="absolute top-3 left-3 w-5 h-5 border-l border-t border-gold/40" />
            <div className="absolute top-3 right-3 w-5 h-5 border-r border-t border-gold/40" />
            <div className="absolute bottom-3 left-3 w-5 h-5 border-l border-b border-gold/40" />
            <div className="absolute bottom-3 right-3 w-5 h-5 border-r border-b border-gold/40" />
            
            <h3 className="font-serif text-2xl text-foreground mb-4 tracking-wide">
              Thank You
            </h3>
            <p className="text-silver/50 font-sans text-sm leading-relaxed max-w-sm mx-auto">
              Your inquiry has been received. A member of our team will be in contact within 48 hours.
            </p>
          </div>
        ) : (
          /* VIP Invitation Style Form */
          <div className="relative">
            {/* Outer decorative borders */}
            <div className="absolute inset-0 border border-gold/15 -m-3" />
            <div className="absolute inset-0 border border-gold/10 -m-5" />
            
            <form onSubmit={handleSubmit} className="relative bg-card border border-border p-8 md:p-12">
              {/* Corner decorations */}
              <div className="absolute top-4 left-4 w-6 h-6 border-l border-t border-gold/40" />
              <div className="absolute top-4 right-4 w-6 h-6 border-r border-t border-gold/40" />
              <div className="absolute bottom-4 left-4 w-6 h-6 border-l border-b border-gold/40" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-r border-b border-gold/40" />

              <div className="space-y-8">
                {/* Name Field */}
                <div>
                  <label 
                    htmlFor="name" 
                    className="block text-xs tracking-[0.2em] uppercase text-silver/50 mb-3"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    placeholder="Enter your name"
                    className="w-full bg-transparent border-0 border-b border-gold/30 focus:border-gold text-foreground py-3 text-base tracking-wide placeholder:text-silver/30 focus:outline-none transition-colors"
                  />
                </div>

                {/* Contact Field */}
                <div>
                  <label 
                    htmlFor="contact" 
                    className="block text-xs tracking-[0.2em] uppercase text-silver/50 mb-3"
                  >
                    Contact
                  </label>
                  <input
                    id="contact"
                    name="contact"
                    required
                    placeholder="Email or phone"
                    className="w-full bg-transparent border-0 border-b border-gold/30 focus:border-gold text-foreground py-3 text-base tracking-wide placeholder:text-silver/30 focus:outline-none transition-colors"
                  />
                </div>

                {/* Nature of Request Field */}
                <div>
                  <label 
                    htmlFor="request" 
                    className="block text-xs tracking-[0.2em] uppercase text-silver/50 mb-3"
                  >
                    Nature of Request
                  </label>
                  <textarea
                    id="request"
                    name="request"
                    required
                    placeholder="Describe your inquiry"
                    rows={3}
                    className="w-full bg-transparent border-0 border-b border-gold/30 focus:border-gold text-foreground py-3 text-base tracking-wide placeholder:text-silver/30 focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Error Message */}
                {error && (
                  <p className="text-red-400 text-sm text-center">{error}</p>
                )}

                {/* Submit Button */}
                <div className="pt-4">
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gold text-background hover:bg-gold/90 hover:shadow-[0_0_25px_rgba(201,162,39,0.3)] tracking-[0.2em] text-xs uppercase py-6 transition-all duration-500 disabled:opacity-50"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                  </Button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  )
}
