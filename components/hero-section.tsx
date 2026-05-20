import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section id="about" className="min-h-screen flex items-center pt-20">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="lg:col-span-3 space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase">
                Ph.D. Candidate · Researcher · Consultant
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-balance text-foreground">
                Bridging Technology Governance{' '}
                <span className="text-muted-foreground">&</span>{' '}
                Social Science
              </h1>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              I investigate the intersection of digital policy, algorithmic accountability, 
              and social impact. My research combines rigorous academic methodologies with 
              practical industry insights to address emerging challenges in technology governance.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="group">
                View Publications
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                Get in Touch
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-border">
              <div>
                <p className="text-3xl font-semibold text-foreground">15+</p>
                <p className="text-sm text-muted-foreground">Publications</p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-foreground">8</p>
                <p className="text-sm text-muted-foreground">Research Projects</p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-foreground">5+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Right Content - Avatar */}
          <div className="lg:col-span-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-secondary to-muted overflow-hidden border border-border">
                {/* Avatar Placeholder */}
                <div className="w-full h-full flex items-center justify-center bg-secondary">
                  <div className="text-center space-y-2">
                    <div className="w-24 h-24 mx-auto rounded-full bg-muted-foreground/20 flex items-center justify-center">
                      <span className="text-4xl font-semibold text-muted-foreground">JD</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Professional Photo</p>
                  </div>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
