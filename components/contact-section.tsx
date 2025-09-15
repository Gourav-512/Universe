"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, MessageCircle, MapPin, Clock, Mail } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    batch: "",
    mode: "",
    phone: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Admissions Open Banner */}
      <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary to-secondary text-white py-3 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          <span className="text-lg font-bold mx-8">🎨 ADMISSIONS OPEN 🎨</span>
          <span className="text-lg font-bold mx-8">Limited Seats Available</span>
          <span className="text-lg font-bold mx-8">🎨 ADMISSIONS OPEN 🎨</span>
          <span className="text-lg font-bold mx-8">Join Our Art Family Today</span>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Start Your <span className="text-primary">Art Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Ready to unleash your creativity? Get in touch with us today!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-primary">Enrollment Form</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="age">Age</Label>
                  <Input
                    id="age"
                    type="number"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    placeholder="Enter your age"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="batch">Preferred Batch</Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, batch: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your batch" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="kids">Kids Batch (5-12 yrs)</SelectItem>
                      <SelectItem value="teens">Teens Batch (13-18 yrs)</SelectItem>
                      <SelectItem value="adults">Adults & Parents (18+)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mode">Learning Mode</Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, mode: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose learning mode" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="online">Online Classes</SelectItem>
                      <SelectItem value="offline">Offline Classes</SelectItem>
                      <SelectItem value="hybrid">Both Online & Offline</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6"
                >
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-2 border-secondary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h3>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Call Us</p>
                      <p className="text-muted-foreground">+91 98765 43210</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-secondary/10 rounded-full">
                      <MessageCircle className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">WhatsApp</p>
                      <p className="text-muted-foreground">+91 98765 43210</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-accent/10 rounded-full">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <p className="text-muted-foreground">info@artclasses.in</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Location</p>
                      <p className="text-muted-foreground">Art Studio, Mumbai, India</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-secondary/10 rounded-full">
                      <Clock className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Class Timings</p>
                      <p className="text-muted-foreground">Mon-Sat: 9 AM - 7 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <Button className="bg-green-600 hover:bg-green-700 text-white py-6 text-lg">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </Button>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground py-6 text-lg bg-transparent"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
