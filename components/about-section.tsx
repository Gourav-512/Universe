"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Star, Users } from "lucide-react"

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 animate-on-scroll">
            About Our <span className="text-primary">Art Journey</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
                <CardContent className="p-8">
                  <div className="text-left space-y-6">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Our art classes blend the rich heritage of{" "}
                      <strong className="text-primary">Indian traditional art</strong> with contemporary techniques,
                      creating a unique learning experience that honors our cultural roots while embracing modern
                      creativity.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      From ancient <strong className="text-secondary">Madhubani paintings</strong> to modern abstract
                      expressions, we guide students through a colorful journey of artistic discovery and personal
                      growth.
                    </p>
                    <div className="flex items-center gap-4 pt-4">
                      <Heart className="w-6 h-6 text-secondary" />
                      <span className="text-primary font-semibold">Passion for Art</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="animate-on-scroll space-y-6">
              {/* Animated Paintbrush Illustration */}
              <div className="relative h-64 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg overflow-hidden">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 200">
                  <defs>
                    <linearGradient id="brushGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgb(217, 119, 6)" />
                      <stop offset="100%" stopColor="rgb(236, 72, 153)" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M50 150 Q100 100 150 120 Q200 140 250 100"
                    stroke="url(#brushGradient)"
                    strokeWidth="8"
                    fill="none"
                    className="brush-stroke"
                  />
                  <circle cx="250" cy="100" r="12" fill="url(#brushGradient)" className="paint-splash" />
                </svg>
                <div className="absolute bottom-4 left-4 text-sm text-muted-foreground font-medium">
                  Traditional meets Modern
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Students</div>
                </div>
                <div className="text-center p-4 bg-secondary/5 rounded-lg">
                  <Star className="w-8 h-8 text-secondary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-secondary">15+</div>
                  <div className="text-sm text-muted-foreground">Art Forms</div>
                </div>
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <Heart className="w-8 h-8 text-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold text-accent">8+</div>
                  <div className="text-sm text-muted-foreground">Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
