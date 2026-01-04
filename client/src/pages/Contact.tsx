"use client"

import type React from "react"

import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"

const faqItems = [
  {
    question: "What is your typical project timeline?",
    answer:
      "Most branding projects take 6-12 weeks depending on scope. Brand strategy alone is 4-6 weeks, while full identity design can take 8-12 weeks. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "Do you offer revisions?",
    answer:
      "Yes! We include 2-3 rounds of revisions in our standard packages. Additional revisions are available at an hourly rate. We believe in getting it right for you.",
  },
  {
    question: "Can you work with remote teams?",
    answer:
      "Absolutely. We work with clients worldwide using video calls, project management tools, and cloud collaboration. Distance is no barrier to creating great work together.",
  },
  {
    question: "What's included in your brand guidelines?",
    answer:
      "Our comprehensive brand guidelines include logo usage rules, color specifications, typography guidelines, imagery style, tone of voice, and application examples across various mediums.",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Yes! We offer retainer packages for ongoing brand management, design support, and strategy consultation. This helps ensure your brand stays consistent and evolves with your business.",
  },
  {
    question: "What's your design philosophy?",
    answer:
      "We believe in creating brands that are meaningful, memorable, and strategically sound. We combine data-driven insights with creative excellence to build identities that resonate with your audience.",
  },
]

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("https://formspree.io/f/mkogqlql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          service: formData.service,
          budget: formData.budget,
          message: formData.message,
        }),
      })

      if (response.ok) {
        toast.success("Message sent successfully! We'll get back to you soon.")
        setFormData({ name: "", email: "", company: "", service: "", budget: "", message: "" })
      } else {
        toast.error("Failed to send message. Please try again.")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      toast.error("An error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-off-white">
      <Navigation />

      <main className="pt-32">
        {/* Hero Section */}
        <section className="py-20 md:py-20">
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-6xl md:text-7xl font-serif mb-6">
                Let's <span className="text-terracotta">Connect</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Have a project in mind? We'd love to hear about it. Get in touch with our team to discuss your branding
                needs.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 md:py-32">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-16">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-serif mb-12">Get in touch</h2>

                <div className="space-y-8 mb-12">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-terracotta/10 flex items-center justify-center text-terracotta shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold mb-1">Email</p>
                      <p className="text-muted-foreground">hello@studioforma.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-terracotta/10 flex items-center justify-center text-terracotta shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold mb-1">Phone</p>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-terracotta/10 flex items-center justify-center text-terracotta shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold mb-1">New York Office</p>
                      <p className="text-muted-foreground">
                        123 Creative Avenue
                        <br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-terracotta/10 flex items-center justify-center text-terracotta flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold mb-1">London Office</p>
                      <p className="text-muted-foreground">
                        45 Design Street
                        <br />
                        London, UK SW1A 1AA
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-white rounded-3xl border border-border/50">
                  <p className="font-bold mb-2">Response Time</p>
                  <p className="text-muted-foreground">
                    We typically respond to inquiries within 24 hours during business days.
                  </p>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 rounded-3xl border-none shadow-xl bg-white">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-bold">Name *</label>
                        <Input
                          name="name"
                          placeholder="Your name"
                          className="rounded-xl border-border/50 h-12"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold">Email *</label>
                        <Input
                          name="email"
                          placeholder="your@email.com"
                          className="rounded-xl border-border/50 h-12"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold">Company</label>
                      <Input
                        name="company"
                        placeholder="Your company name"
                        className="rounded-xl border-border/50 h-12"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold">Service Interested In *</label>
                      <select
                        name="service"
                        className="w-full px-4 py-3 rounded-xl border border-border/50 bg-white text-foreground"
                        value={formData.service}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select a service</option>
                        <option value="Brand Strategy">Brand Strategy</option>
                        <option value="Visual Identity">Visual Identity</option>
                        <option value="Digital Design">Digital Design</option>
                        <option value="Full Package">Full Package</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold">Budget Range</label>
                      <select
                        name="budget"
                        className="w-full px-4 py-3 rounded-xl border border-border/50 bg-white text-foreground"
                        value={formData.budget}
                        onChange={handleChange}
                      >
                        <option value="">Select budget range</option>
                        <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                        <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                        <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                        <option value="$50,000+">$50,000+</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold">Message *</label>
                      <Textarea
                        name="message"
                        placeholder="Tell us about your project and goals..."
                        className="rounded-xl border-border/50 min-h-[150px]"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full rounded-full bg-terracotta hover:bg-terracotta/90 text-white h-auto py-4 font-bold disabled:opacity-50"
                    >
                      {isSubmitting ? "Sending..." : "Send Inquiry"}
                    </Button>
                  </form>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-serif mb-12 text-center">Frequently Asked Questions</h2>

            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="rounded-xl border border-border/50 px-6 data-[state=open]:bg-terracotta/5"
                  >
                    <AccordionTrigger className="text-lg font-bold hover:text-terracotta transition-colors">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pt-4">{item.answer}</AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-terracotta text-white">
          <div className="container text-center">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Ready to start your journey?</h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Fill out the form above or call us directly. We're excited to learn about your project.
            </p>
            <Button className="bg-white text-terracotta hover:bg-white/90 rounded-full px-10 py-4 h-auto text-lg font-bold">
              Book a Call
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
