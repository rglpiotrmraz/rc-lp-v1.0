import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ValuesSection } from "@/components/values-section"
import { ApplicationForm } from "@/components/application-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ServicesSection />
      <ValuesSection />
      <ApplicationForm />
      <Footer />
    </main>
  )
}
