import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/hero-section'
import { PublicationsSection } from '@/components/publications-section'
import { ProjectsSection } from '@/components/projects-section'
import { ServiceSection } from '@/components/service-section'
import { ContactSection, Footer } from '@/components/contact-section'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <PublicationsSection />
        <ProjectsSection />
        <ServiceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
