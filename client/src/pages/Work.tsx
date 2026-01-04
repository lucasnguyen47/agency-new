import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

const projects = [
  {
    id: 1,
    title: "Lumury Lifestyle",
    category: "Brand Strategy & Visual Identity",
    description:
      "A complete brand transformation for a luxury sustainable living brand. We redefined their visual language to reflect elegance and environmental consciousness.",
    image: "/images/case-study-1.png",
    results: [
      "40% increase in brand recognition",
      "250% growth in social media followers",
      "Successfully launched 3 new product lines",
    ],
  },
  {
    id: 2,
    title: "TechFlow Solutions",
    category: "Digital Design & Branding",
    description:
      "Rebranding a B2B SaaS company to appeal to modern tech startups. We created a bold, innovative visual identity that communicates trust and innovation.",
    image: "/images/branding-process.png",
    results: [
      "15% increase in conversion rate",
      "Improved brand perception scores",
      "Enhanced customer retention",
    ],
  },
  {
    id: 3,
    title: "Artisan Collective",
    category: "Brand Strategy & Visual Identity",
    description:
      "Developed a cohesive brand identity for a marketplace of independent artisans. The design celebrates craftsmanship while maintaining modern appeal.",
    image: "/images/hero-bg.png",
    results: [
      "Attracted 500+ artisan partners",
      "50% increase in marketplace transactions",
      "Featured in design publications",
    ],
  },
  {
    id: 4,
    title: "Wellness Hub",
    category: "Digital Design & Branding",
    description:
      "Created a holistic brand experience for a health and wellness platform.",
    image: "/images/case-study-1.png",
    results: [
      "100K+ app downloads in first month",
      "4.8-star app store rating",
      "Became industry leader in wellness tech",
    ],
  },
  {
    id: 5,
    title: "Eco Ventures",
    category: "Brand Strategy & Visual Identity",
    description:
      "Developed a sustainable brand identity for an eco-friendly startup.",
    image: "/images/branding-process.png",
    results: [
      "Secured $5M Series A funding",
      "Featured in Forbes and TechCrunch",
      "Became carbon-neutral certified",
    ],
  },
  {
    id: 6,
    title: "Urban Eats",
    category: "Digital Design & Branding",
    description:
      "Complete rebrand for a food delivery platform targeting Gen Z.",
    image: "/images/hero-bg.png",
    results: [
      "300% increase in app downloads",
      "Expanded to 15 new cities",
      "Achieved $50M valuation",
    ],
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, Lumury Lifestyle",
    quote:
      "Studio Forma didn't just create a logo—they created a movement. Our brand now resonates with our target audience in ways we never imagined.",
    image: "SJ",
  },
  {
    name: "Michael Chen",
    role: "Founder, TechFlow Solutions",
    quote:
      "The team's strategic approach to our rebrand was exceptional. They understood our vision and translated it into a visual identity that drives results.",
    image: "MC",
  },
  {
    name: "Emma Rodriguez",
    role: "Director, Artisan Collective",
    quote:
      "Working with Studio Forma was transformative. They elevated our brand to a level we didn't know was possible.",
    image: "ER",
  },
];

export default function Work() {
  return (
    <div className="min-h-screen bg-off-white">
      <Navigation />

      <main className="pt-32">
        {/* Hero Section */}
        <section className="py-20 md:py-20">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-6xl md:text-7xl font-serif mb-6">
                Our <span className="text-terracotta">Work</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Explore the brands we've helped transform and the impact we've
                created across industries.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 md:py-32">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden rounded-3xl h-full border-none shadow-lg hover:shadow-2xl transition-all hover:scale-102 cursor-pointer duration-300">
                    <div className="relative h-64 overflow-hidden bg-gray-200">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-8">
                      <p className="text-xs font-bold uppercase tracking-widest text-terracotta mb-3">
                        {project.category}
                      </p>
                      <h3 className="text-3xl font-serif mb-3">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        {project.description}
                      </p>

                      <div className="mb-8 space-y-2">
                        <p className="text-sm font-bold text-muted-foreground">
                          Results:
                        </p>
                        {project.results.map((result, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <span className="text-terracotta font-bold">✓</span>
                            <p className="text-sm text-muted-foreground">
                              {result}
                            </p>
                          </div>
                        ))}
                      </div>

                      <Button className="w-full rounded-full bg-terracotta hover:bg-terracotta/90 text-white h-auto px-8 py-4">
                        View Case Study <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container">
            <h2 className="text-4xl md:text-5xl font-serif mb-16 text-center">
              What our clients say
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-3xl bg-off-white border border-border/50"
                >
                  <p className="text-lg italic text-muted-foreground mb-6">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-terracotta text-white flex items-center justify-center font-bold">
                      {testimonial.image}
                    </div>
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-terracotta text-white">
          <div className="container text-center">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Inspired by our work?
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Let's create something amazing together. Schedule a consultation
              to discuss your project.
            </p>
            <Button
              onClick={() => (window.location.href = "/contact")}
              className="bg-white text-terracotta hover:bg-white/90 rounded-full px-10 py-4 h-auto text-lg font-bold"
            >
              Start Your Project
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
