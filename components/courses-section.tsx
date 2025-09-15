"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Baby, Users, GraduationCap, Clock, MapPin, Wifi } from "lucide-react"

const courses = [
  {
    title: "Kids Batch",
    ageRange: "5-12 years",
    icon: Baby,
    description:
      "Fun and creative art sessions designed for young minds. Focus on basic drawing, coloring, and simple Indian folk art patterns.",
    features: ["Basic Drawing", "Color Theory", "Folk Art Patterns", "Creative Play"],
    color: "bg-primary",
    hoverColor: "hover:bg-primary/90",
  },
  {
    title: "Teens Batch",
    ageRange: "13-18 years",
    icon: Users,
    description:
      "Advanced techniques including sketching, watercolors, and traditional Indian art forms like Madhubani and Warli.",
    features: ["Advanced Sketching", "Watercolor Techniques", "Madhubani Art", "Portrait Drawing"],
    color: "bg-secondary",
    hoverColor: "hover:bg-secondary/90",
  },
  {
    title: "Adults & Parents",
    ageRange: "18+ years",
    icon: GraduationCap,
    description: "Comprehensive art program covering oil painting, canvas art, and contemporary Indian art styles.",
    features: ["Oil Painting", "Canvas Art", "Contemporary Styles", "Art Therapy"],
    color: "bg-accent",
    hoverColor: "hover:bg-accent/90",
  },
]

export function CoursesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Courses & Batches</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Choose the perfect batch for your age group and artistic journey
          </p>

          {/* Online & Offline Badge */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <Badge variant="outline" className="text-lg px-4 py-2 border-primary text-primary">
              <Wifi className="w-4 h-4 mr-2" />
              Online Available
            </Badge>
            <Badge variant="outline" className="text-lg px-4 py-2 border-secondary text-secondary">
              <MapPin className="w-4 h-4 mr-2" />
              Offline Classes
            </Badge>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {courses.map((course, index) => {
            const IconComponent = course.icon
            return (
              <Card
                key={course.title}
                className="group relative overflow-hidden border-2 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                {/* Paint Stroke Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <CardHeader className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-full ${course.color} text-white`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <Badge variant="secondary" className="text-sm">
                      {course.ageRange}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {course.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative z-10 space-y-6">
                  <p className="text-muted-foreground leading-relaxed">{course.description}</p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">What You'll Learn:</h4>
                    <ul className="space-y-2">
                      {course.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>2 hours per session</span>
                  </div>

                  <Button
                    className={`w-full ${course.color} ${course.hoverColor} text-white group-hover:scale-105 transition-transform`}
                  >
                    Enroll Now
                  </Button>
                </CardContent>

                {/* Decorative Paint Splash */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/10 rounded-full paint-splash opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
