"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Palette, Brush } from "lucide-react"

const artTypes = ["Canvas Art", "Sketching", "Watercolors", "Indian Folk Art", "Oil Painting"]

export function HeroSection() {
  const [currentArtType, setCurrentArtType] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentArtType((prev) => (prev + 1) % artTypes.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100">
      {/* Background Paint Splashes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full paint-splash"></div>
        <div
          className="absolute top-40 right-20 w-24 h-24 bg-secondary/20 rounded-full paint-splash"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/4 w-40 h-40 bg-accent/15 rounded-full paint-splash"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-1/3 w-28 h-28 bg-primary/25 rounded-full paint-splash"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      {/* Brush Stroke Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
          <path
            d="M100 400 Q300 200 500 400 T900 400"
            stroke="currentColor"
            strokeWidth="20"
            className="brush-stroke"
          />
          <path
            d="M200 300 Q400 500 600 300 T1000 300"
            stroke="currentColor"
            strokeWidth="15"
            className="brush-stroke"
            style={{ animationDelay: "0.5s" }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Floating Icons */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <Palette className="w-12 h-12 text-primary floating" />
            <Brush className="w-12 h-12 text-secondary floating" style={{ animationDelay: "1s" }} />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance">
            DEMO SITE Learn Drawing & Painting <span className="text-primary">with Us</span>
          </h1>

          <div className="h-16 mb-8 flex items-center justify-center">
            <div className="text-2xl md:text-3xl font-semibold text-muted-foreground">
              <span className="typewriter text-primary">{artTypes[currentArtType]}</span>
            </div>
          </div>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty">
            Discover the beauty of traditional Indian art combined with modern techniques. Express your creativity
            through colors and imagination.
          </p>

          <Button
            size="lg"
            className="text-xl px-8 py-6 pulse-glow bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Join Now
          </Button>

          {/* Decorative Elements */}
          <div className="mt-16 flex justify-center items-center gap-8 opacity-60">
            <div className="w-16 h-1 bg-primary brush-stroke"></div>
            <div className="w-8 h-8 bg-secondary rounded-full paint-splash"></div>
            <div className="w-16 h-1 bg-primary brush-stroke"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
