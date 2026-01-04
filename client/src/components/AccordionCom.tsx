import React from "react";

import {
  Accordion as UIAccordion,
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

const AccordionCom = () => {
  return (
    <div>
      <section className="py-20 md:py-32 bg-white">
        <div className="container max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-serif mb-12 text-center">
            Frequently Asked <span className="text-terracotta">Questions</span>
          </h2>
          <UIAccordion type="single" collapsible className="space-y-4">
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
          </UIAccordion>
        </div>
      </section>
    </div>
  );
};

export default AccordionCom;
