"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle } from "lucide-react"
import Image from "next/image"

export function StationerySection() {
  const products = [
    {
      name: "Sketchbook",
      price: "₹150",
      description: "A4 size, 100 pages premium paper",
      image: "/art-sketchbook.jpg",
    },
    {
      name: "Drawing Pencils Set",
      price: "₹200",
      description: "HB, 2B, 6B professional pencils",
      image: "/drawing-pencils-set.jpg",
    },
    {
      name: "Paint Brushes",
      price: "₹180",
      description: "Set of 6 different sizes",
      image: "/paint-brushes-set.jpg",
    },
    {
      name: "Canvas Sheets",
      price: "₹120",
      description: "Pack of 10 A4 canvas sheets",
      image: "/canvas-sheets.jpg",
    },
    {
      name: "Watercolors",
      price: "₹250",
      description: "24 colors professional set",
      image: "/watercolor-paint-set.jpg",
    },
  ]

  const handleWhatsAppOrder = (productName: string, price: string) => {
    const message = `Hi! I want to order ${productName} for ${price}. Please confirm availability.`
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
            🎨 Affordable Stationery for Students
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get all your drawing materials at low prices directly from us.
          </p>
          <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                rotateZ: [0, -1, 1, 0],
                transition: { duration: 0.3 },
              }}
              className="group"
            >
              <Card className="h-full border-2 border-yellow-200 hover:border-yellow-400 transition-all duration-300 hover:shadow-2xl bg-white overflow-hidden">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-4 overflow-hidden rounded-lg">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={200}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {/* Paint splash effect on hover */}
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 0.3 }}
                      className="absolute inset-0 bg-yellow-400 rounded-full blur-xl"
                      style={{
                        background: "radial-gradient(circle, rgba(251,191,36,0.6) 0%, transparent 70%)",
                      }}
                    />
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>

                  <p className="text-gray-600 mb-3 text-sm">{product.description}</p>

                  <div className="text-2xl font-bold text-yellow-600 mb-4">{product.price}</div>

                  <Button
                    onClick={() => handleWhatsAppOrder(product.name, product.price)}
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg"
                  >
                    <MessageCircle size={18} />
                    Buy Now on WhatsApp
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 text-lg">
            💡 <strong>Special Offer:</strong> Get 10% discount when you buy 3 or more items together!
          </p>
        </motion.div>
      </div>
    </section>
  )
}
