"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { useTranslations } from "next-intl"

export function ApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [contactMethod, setContactMethod] = useState<'email' | 'phone' | null>(null)
  const [preferredTime, setPreferredTime] = useState<string | null>(null)

  const t = useTranslations('Contact')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name') as string,
      contactMethod: contactMethod,
      contactValue: formData.get('contactValue') as string,
      preferredTime: preferredTime,
      requestDetails: formData.get('request') as string,
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit')
      }

      setSubmitted(true)
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const toggleContactMethod = (method: 'email' | 'phone') => {
    setContactMethod(prev => prev === method ? null : method)
  }

  const togglePreferredTime = (time: string) => {
    setPreferredTime(prev => prev === time ? null : time)
  }

  return (
    <section id="membership" className="py-24 md:py-32 bg-background">
      <div className="max-w-xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">{t('requestInvitation')}</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 tracking-wide">
            {t('title')}
          </h2>
        </div>

        {submitted ? (
          <div className="text-center py-16 border border-gold/30 bg-card relative">
            <div className="absolute top-3 left-3 w-5 h-5 border-l border-t border-gold/40" />
            <div className="absolute top-3 right-3 w-5 h-5 border-r border-t border-gold/40" />
            <div className="absolute bottom-3 left-3 w-5 h-5 border-l border-b border-gold/40" />
            <div className="absolute bottom-3 right-3 w-5 h-5 border-r border-b border-gold/40" />

            <h3 className="font-serif text-2xl text-foreground mb-4 tracking-wide">
              Royal Concierge
            </h3>
            <p className="text-silver/50 font-sans text-sm leading-relaxed max-w-sm mx-auto">
              {t('form.success')}
            </p>
          </div>
        ) : (
          <div className="relative">
            <div className="absolute inset-0 border border-gold/15 -m-3" />
            <div className="absolute inset-0 border border-gold/10 -m-5" />

            <form onSubmit={handleSubmit} className="relative bg-card border border-border p-8 md:p-12">
              <div className="absolute top-4 left-4 w-6 h-6 border-l border-t border-gold/40" />
              <div className="absolute top-4 right-4 w-6 h-6 border-r border-t border-gold/40" />
              <div className="absolute bottom-4 left-4 w-6 h-6 border-l border-b border-gold/40" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-r border-b border-gold/40" />

              <div className="space-y-8">
                <div>
                  <label htmlFor="name" className="block text-xs tracking-[0.2em] uppercase text-silver/50 mb-3">
                    {t('form.name')}
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    placeholder={t('form.name')}
                    className="w-full bg-transparent border-0 border-b border-gold/30 focus:border-gold text-foreground py-3 text-base tracking-wide placeholder:text-silver/30 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs tracking-[0.2em] uppercase text-silver/50 mb-3">
                    {t('form.contact')}
                  </label>
                  <div className="flex gap-4 mb-4">
                    <button
                      type="button"
                      onClick={() => toggleContactMethod('phone')}
                      className={`flex-1 py-3 text-sm tracking-widest uppercase border transition-all duration-300 ${contactMethod === 'phone'
                        ? 'border-gold bg-gold/10 text-gold'
                        : 'border-gold/20 text-silver/40 hover:border-gold/40 hover:text-silver/60'
                        }`}
                    >
                      {t('form.methodPhone')}
                    </button>
                    <button
                      type="button"
                      onClick={() => toggleContactMethod('email')}
                      className={`flex-1 py-3 text-sm tracking-widest uppercase border transition-all duration-300 ${contactMethod === 'email'
                        ? 'border-gold bg-gold/10 text-gold'
                        : 'border-gold/20 text-silver/40 hover:border-gold/40 hover:text-silver/60'
                        }`}
                    >
                      {t('form.methodEmail')}
                    </button>
                  </div>

                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${contactMethod ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <input
                      id="contactValue"
                      name="contactValue"
                      required={!!contactMethod}
                      type={contactMethod === 'email' ? 'email' : 'tel'}
                      placeholder={contactMethod === 'email' ? t('form.placeholderEmail') : t('form.placeholderPhone')}
                      className="w-full bg-transparent border-0 border-b border-gold/30 focus:border-gold text-foreground py-3 text-base tracking-wide placeholder:text-silver/30 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs tracking-[0.2em] uppercase text-silver/50 mb-3">
                    {t('form.preferredTime')}
                  </label>
                  <div className="grid grid-cols-1 gap-3 mb-4">
                    {['Morning', 'Afternoon', 'Evening'].map((timeSlot) => (
                      <button
                        key={timeSlot}
                        type="button"
                        onClick={() => togglePreferredTime(timeSlot.toLowerCase())}
                        className={`text-center py-3 text-xs tracking-[0.2em] uppercase border transition-all duration-300 ${preferredTime === timeSlot.toLowerCase()
                          ? 'border-gold bg-gold/10 text-gold'
                          : 'border-gold/20 text-silver/40 hover:border-gold/40 hover:text-silver/60'
                          }`}
                      >
                        {t(`form.time${timeSlot}`)}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="request" className="block text-xs tracking-[0.2em] uppercase text-silver/50 mb-3">
                    {t('form.request')}
                  </label>
                  <textarea
                    id="request"
                    name="request"
                    required
                    placeholder={t('form.request')}
                    rows={3}
                    className="w-full bg-transparent border-0 border-b border-gold/30 focus:border-gold text-foreground py-3 text-base tracking-wide placeholder:text-silver/30 focus:outline-none transition-colors resize-none"
                  />
                </div>

                {error && (
                  <p className="text-red-400 text-sm text-center">{error}</p>
                )}

                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting || !contactMethod}
                    className="w-full bg-gold text-background hover:bg-gold/90 hover:shadow-[0_0_25px_rgba(201,162,39,0.3)] tracking-[0.2em] text-xs uppercase py-6 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? t('form.submitting') : t('form.submit')}
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
