"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"

const artworks = [
  {
    id: 1,
    title: "Madhubani Peacock",
    artist: "Student Work",
    category: "Traditional",
    image: "/colorful-madhubani-peacock-painting-indian-folk-ar.jpg",
  },
  {
    id: 2,
    title: "Watercolor Landscape",
    artist: "Teen Batch",
    category: "Watercolor",
    image: "/beautiful-watercolor-landscape-painting-mountains.jpg",
  },
  {
    id: 3,
    title: "Oil Portrait",
    artist: "Adult Class",
    category: "Oil Painting",
    image: "/realistic-oil-painting-portrait-indian-woman.jpg",
  },
  {
    id: 4,
    title: "Abstract Canvas",
    artist: "Advanced Student",
    category: "Modern",
    image: "/vibrant-abstract-painting-canvas-colorful.jpg",
  },
  {
    id: 5,
    title: "Warli Art",
    artist: "Kids Batch",
    category: "Folk Art",
    image: "/traditional-warli-art-tribal-painting-white-on-bro.jpg",
  },
  {
    id: 6,
    title: "Floral Study",
    artist: "Beginner",
    category: "Sketching",
    image: "/detailed-pencil-sketch-flowers-botanical-drawing.jpg",
  },
]

export function GallerySection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Student <span className="text-primary">Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Witness the incredible artistic journey of our students across all age groups
          </p>
        </div>

        {/* Masonry Grid Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 max-w-6xl mx-auto">
          {artworks.map((artwork) => (
            <Card
              key={artwork.id}
              className="break-inside-avoid group cursor-pointer overflow-hidden border-2 hover:border-primary/40 transition-all duration-300"
              onMouseEnter={() => setHoveredId(artwork.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={artwork.image || "/placeholder.svg"}
                  alt={artwork.title}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Paint Live Effect Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent transition-opacity duration-300 ${
                    hoveredId === artwork.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-lg font-bold mb-1">{artwork.title}</h3>
                    <p className="text-sm opacity-90">{artwork.artist}</p>
                    <div className="inline-block mt-2 px-2 py-1 bg-white/20 rounded-full text-xs">
                      {artwork.category}
                    </div>
                  </div>
                </div>

                {/* Paint Brush Animation */}
                {hoveredId === artwork.id && (
                  <div className="absolute top-2 right-2">
                    <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                    </svg>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold">
            View Complete Gallery
          </button>
        </div>
      </div>
    </section>
  )
}
