import React from "react";
import { motion } from "framer-motion";
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

const FAQ = () => {
  return (
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
  );
};

export default FAQ;
