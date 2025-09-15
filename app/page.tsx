import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { CoursesSection } from "@/components/courses-section"
import { GallerySection } from "@/components/gallery-section"
import { ContactSection } from "@/components/contact-section"
import { PaintSplashDivider } from "@/components/paint-splash-divider"
import { TimeTableSection } from "@/components/time-table-section"
import { StationerySection } from "@/components/stationery-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PaintSplashDivider />
      <AboutSection />
      <PaintSplashDivider />
      <CoursesSection />
      <PaintSplashDivider />
      <TimeTableSection />
      <PaintSplashDivider />
      <GallerySection />
      <PaintSplashDivider />
      <StationerySection />
      <PaintSplashDivider />
      <ContactSection />
    </main>
  )
}
