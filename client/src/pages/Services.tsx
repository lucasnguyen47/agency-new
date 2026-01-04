import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, Lightbulb, Palette, Zap } from "lucide-react";
import AccordionCom from "@/components/AccordionCom";
import FAQ from "@/components/FAQ";

const services = [
  {
    id: 1,
    title: "Brand Strategy",
    icon: Lightbulb,
    description:
      "We define your brand's purpose, positioning, and personality.",
    details: [
      "Market research",
      "Positioning framework",
      "Messaging strategy",
      "Brand guidelines",
    ],
    price: "Starting from $5,000",
    image: "/images/service-research.png",
  },
  {
    id: 2,
    title: "Visual Identity",
    icon: Palette,
    description: "Crafting memorable logos, color palettes, and typography.",
    details: ["Logo design", "Color palette", "Typography", "Asset library"],
    price: "Starting from $3,500",
    image: "/images/service-design-system.png",
  },
  {
    id: 3,
    title: "Digital Design",
    icon: Zap,
    description: "Designing intuitive and beautiful digital experiences.",
    details: ["Website design", "Mobile design", "UI/UX", "Digital collateral"],
    price: "Starting from $4,000",
    image: "/images/service-messaging.png",
  },
  {
    id: 4,
    title: "Brand Audit",
    icon: Lightbulb,
    description: "Comprehensive brand health assessment and analysis.",
    details: [
      "Perception analysis",
      "Competitor review",
      "Audience research",
      "Recommendations",
    ],
    price: "Starting from $2,000",
    image: "/images/service-brand-audit.png",
  },
  {
    id: 5,
    title: "Packaging Design",
    icon: Palette,
    description: "Product packaging and label design that stands out.",
    details: [
      "Concept development",
      "Label design",
      "Material specs",
      "Production files",
    ],
    price: "Starting from $3,000",
    image: "/images/service-packaging.png",
  },
  {
    id: 6,
    title: "Marketing Collateral",
    icon: Zap,
    description: "Business cards, brochures, and promotional materials.",
    details: [
      "Business cards",
      "Brochures",
      "Social templates",
      "Email design",
    ],
    price: "Starting from $1,500",
    image: "/images/service-marketing-collateral.png",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-off-white">
      <Navigation />

      <main className="pt-32">
        <section className="py-20 md:py-20">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-6xl md:text-7xl font-serif mb-6">
                Our <span className="text-terracotta">Services</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mb-8">
                We offer comprehensive branding solutions designed to elevate
                your business.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card
                      className="overflow-hidden rounded-3xl border-none shadow-lg hover:shadow-2xl transition-all h-full flex flex-col duration-300 cursor-pointer"
                      style={{ paddingTop: "0px", paddingBottom: "0px" }}
                    >
                      <div className="relative h-48 overflow-hidden bg-gray-200">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-8 flex-1 flex flex-col">
                        <div className="mb-4">
                          <IconComponent className="w-8 h-8 text-terracotta" />
                        </div>
                        <h3 className="text-2xl font-serif mb-3">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground mb-6">
                          {service.description}
                        </p>

                        <div className="mb-8 space-y-3 flex-1">
                          {service.details.map((detail, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-terracotta mt-2 shrink-0" />
                              <p className="text-sm text-muted-foreground">
                                {detail}
                              </p>
                            </div>
                          ))}
                        </div>

                        <div className="mb-6 pt-6 border-t border-border/50">
                          <p className="font-bold text-terracotta">
                            {service.price}
                          </p>
                        </div>

                        <Button className="w-full rounded-full bg-terracotta hover:bg-terracotta/90 text-white h-auto px-8 py-4 cursor-pointer">
                          Learn More <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-terracotta text-white">
          <div className="container text-center">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Ready to transform your brand?
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Let's discuss which service is right for your business and create
              a custom package tailored to your needs.
            </p>
            <Button
              onClick={() => (window.location.href = "/contact")}
              className="bg-white text-terracotta hover:bg-white/90 rounded-full px-10 py-4 h-auto text-lg font-bold cursor-pointer"
            >
              Get Started
            </Button>
          </div>
        </section>
        <FAQ />
        <AccordionCom />
      </main>

      <Footer />
    </div>
  );
}
