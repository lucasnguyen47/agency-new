import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Mail, Phone } from "lucide-react";

const services = [
  {
    title: "Brand Strategy",
    description:
      "We define your brand's purpose, positioning, and personality to create a solid foundation for growth.",
    icon: <CheckCircle2 className="w-6 h-6 text-terracotta" />,
  },
  {
    title: "Visual Identity",
    description:
      "Crafting memorable logos, color palettes, and typography that tell your unique story visually.",
    icon: <CheckCircle2 className="w-6 h-6 text-terracotta" />,
  },
  {
    title: "Digital Design",
    description:
      "Designing intuitive and beautiful digital experiences that engage your audience across all platforms.",
    icon: <CheckCircle2 className="w-6 h-6 text-terracotta" />,
  },
];

const clientLogos = ["Lumina", "Vortex", "Aura", "Zenith", "Nova", "Pulse"];

const projects = [
  {
    id: 1,
    title: "Lumury Lifestyle",
    category: "Brand Strategy & Visual Identity",
    image: "/images/case-study-1.png",
  },
  {
    id: 2,
    title: "TechFlow Solutions",
    category: "Digital Design & Branding",
    image: "/images/branding-process.png",
  },
  {
    id: 3,
    title: "Artisan Collective",
    category: "Brand Strategy & Visual Identity",
    image: "/images/hero-bg.png",
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, Lumury Lifestyle",
    quote: "Studio Forma didn't just create a logo—they created a movement.",
    image: "SJ",
  },
  {
    name: "Michael Chen",
    role: "Founder, TechFlow Solutions",
    quote: "The team's strategic approach to our rebrand was exceptional.",
    image: "MC",
  },
  {
    name: "Emma Rodriguez",
    role: "Director, Artisan Collective",
    quote: "Working with Studio Forma was transformative.",
    image: "ER",
  },
];

const faqItems = [
  {
    question: "What is your typical project timeline?",
    answer: "Most branding projects take 6-12 weeks depending on scope.",
  },
  {
    question: "Do you offer revisions?",
    answer: "Yes! We include 2-3 rounds of revisions in our standard packages.",
  },
  {
    question: "Can you work with remote teams?",
    answer:
      "Absolutely. We work with clients worldwide using video calls and collaboration tools.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-off-white selection:bg-terracotta/30">
      <Navigation />
      <main>
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
          <div className="container relative z-10">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-terracotta/10 text-terracotta rounded-full">
                  Branding & Design Agency
                </span>
                <h1 className="text-6xl md:text-8xl font-serif leading-[1.1] mb-8">
                  We shape brands that{" "}
                  <span className="italic text-terracotta">resonate</span> and
                  endure.
                </h1>
                <p className="text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
                  Studio Forma is a boutique branding agency dedicated to
                  crafting soulful identities for visionary businesses.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="rounded-full bg-terracotta hover:bg-terracotta/90 text-white h-auto p-8 py-4 text-lg font-medium transition-all hover:scale-105 active:scale-95 cursor-pointer">
                    Book a Call
                  </Button>
                  <Button
                    onClick={() => (window.location.href = "/work")}
                    className="rounded-full border border-terracotta/20 text-foreground h-auto px-8 py-4 text-lg font-medium transition-all hover:scale-105 active:scale-95 cursor-pointer"
                    style={{ color: "#ffffff" }}
                  >
                    View Our Work
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-full -z-10 opacity-60 md:opacity-100">
            <img
              src="/images/hero-bg.png"
              alt="Abstract Background"
              className="w-full h-full object-cover object-left"
            />
          </div>
        </section>

        <section className="py-12 border-y border-border/50 bg-white/50">
          <div className="container">
            <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-8">
              Trusted by visionary brands
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale">
              {clientLogos.map(logo => (
                <span
                  key={logo}
                  className="text-2xl font-serif font-bold italic"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl mb-6">
                  Comprehensive branding solutions for the modern era.
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We don't just design logos; we build ecosystems.
                </p>
                <img
                  src="/images/branding-process.png"
                  alt="Branding Process"
                  className="rounded-3xl shadow-2xl"
                />
              </div>
              <div className="grid gap-6">
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="glass-card border-none shadow-none hover:bg-white/60 transition-colors">
                      <CardContent className="p-0">
                        <div className="mb-4">{service.icon}</div>
                        <h3 className="text-2xl mb-3">{service.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-terracotta text-white overflow-hidden">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="flex-1">
                <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-white/10 rounded-full">
                  Featured Case Study
                </span>
                <h2 className="text-5xl md:text-7xl mb-8 leading-tight">
                  LUMURY LIFESTYLE
                </h2>
                <p className="text-xl text-white/80 mb-10 leading-relaxed">
                  A complete brand transformation for a luxury sustainable
                  living brand.
                </p>
                <Button className="bg-white text-terracotta hover:bg-white/90 rounded-full px-8 py-4 h-auto text-lg font-bold transition-all hover:scale-105 active:scale-95 cursor-pointer">
                  Read Case Study
                </Button>
              </div>
              <div className="flex-1 relative">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <img
                    src="/images/case-study-1.png"
                    alt="Case Study"
                    className="rounded-3xl shadow-2xl w-full object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-white">
          <div className="container">
            <h2 className="text-4xl md:text-5xl font-serif mb-4 text-center">
              Featured <span className="text-terracotta">Projects</span>
            </h2>
            <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
              Explore some of our recent work.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    className="overflow-hidden rounded-3xl border-none shadow-lg hover:shadow-2xl transition-all hover:scale-102 duration-300 cursor-pointer"
                    style={{ paddingTop: "0px", paddingBottom: "0px" }}
                  >
                    <div className="relative h-48 overflow-hidden bg-gray-200">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        style={{ height: "248px" }}
                      />
                    </div>
                    <CardContent className="p-6">
                      <p className="text-xs font-bold uppercase tracking-widest text-terracotta mb-2">
                        {project.category}
                      </p>
                      <h3 className="text-2xl font-serif mb-4">
                        {project.title}
                      </h3>
                      <p>This is some description of the Project</p>
                      <Button className="w-full rounded-full bg-terracotta hover:bg-terracotta/90 text-white h-auto px-8 py-4 text-sm mt-10">
                        View Case Study
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-off-white">
          <div className="container">
            <h2 className="text-4xl md:text-5xl font-serif mb-16 text-center">
              What our clients <span className="text-terracotta">say</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-3xl bg-white border border-border/50"
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

        <section className="py-20 md:py-32 bg-white">
          <div className="container max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-serif mb-12 text-center">
              Frequently Asked{" "}
              <span className="text-terracotta">Questions</span>
            </h2>
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
                    <AccordionTrigger className="text-lg font-bold hover:text-terracotta transition-colors cursor-pointer">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pt-4">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="py-24 md:py-32">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-16">
                <div>
                  <h2 className="text-4xl font-serif mb-12">
                    Let's build something{" "}
                    <span className="italic text-terracotta">
                      extraordinary
                    </span>{" "}
                    together.
                  </h2>
                  <p className="text-lg text-muted-foreground mb-12">
                    Ready to elevate your brand?
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-terracotta/10 flex items-center justify-center text-terracotta">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                          Email Us
                        </p>
                        <p className="text-lg">hello@studioforma.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-terracotta/10 flex items-center justify-center text-terracotta">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                          Call Us
                        </p>
                        <p className="text-lg">+1 (555) 123-4567</p>
                      </div>
                    </div>
                  </div>
                </div>
                <Card className="p-8 rounded-3xl border-none shadow-xl bg-white">
                  <form className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-bold">Name</label>
                        <Input
                          placeholder="John Doe"
                          className="rounded-xl border-border/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold">Email</label>
                        <Input
                          placeholder="john@example.com"
                          className="rounded-xl border-border/50"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold">
                        Service Interested In
                      </label>
                      <Input
                        placeholder="e.g. Brand Strategy"
                        className="rounded-xl border-border/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold">Message</label>
                      <Textarea
                        placeholder="Tell us about your project..."
                        className="rounded-xl border-border/50 min-h-[120px]"
                      />
                    </div>
                    <Button className="w-full rounded-full bg-terracotta hover:bg-terracotta/90 text-white h-auto py-4 font-medium transition-all active:scale-95">
                      Send Request
                    </Button>
                  </form>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
