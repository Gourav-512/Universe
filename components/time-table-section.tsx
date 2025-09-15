"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Clock } from "lucide-react"

export function TimeTableSection() {
  const batches = [
    {
      name: "Kids Batch (5–12 yrs)",
      days: "Mon–Wed–Fri",
      time: "5 PM – 6 PM",
      direction: "left",
    },
    {
      name: "Teens Batch (13–18 yrs)",
      days: "Tue–Thu–Sat",
      time: "6 PM – 7:30 PM",
      direction: "right",
    },
    {
      name: "Adults & Parents Batch (18+)",
      days: "Sat–Sun",
      time: "10 AM – 12 Noon",
      direction: "left",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
            <Clock className="text-yellow-600" size={48} />
            Our Class Time Table
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-yellow-400">
            <div className="bg-yellow-500 p-4">
              <div className="grid grid-cols-3 gap-4 text-white font-bold text-center">
                <div>Batch</div>
                <div>Days</div>
                <div>Time</div>
              </div>
            </div>

            <div className="divide-y divide-gray-200">
              {batches.map((batch, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: batch.direction === "left" ? -100 : 100,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2,
                  }}
                  className="grid grid-cols-3 gap-4 p-6 hover:bg-yellow-50 transition-colors duration-300"
                >
                  <div className="font-semibold text-gray-800 text-center">{batch.name}</div>
                  <div className="text-gray-600 text-center font-medium">{batch.days}</div>
                  <div className="text-yellow-600 font-bold text-center">{batch.time}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-8"
          >
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              onClick={() =>
                window.open("https://wa.me/919876543210?text=Hi! I want to book a batch for drawing classes.", "_blank")
              }
            >
              Book Your Batch
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
