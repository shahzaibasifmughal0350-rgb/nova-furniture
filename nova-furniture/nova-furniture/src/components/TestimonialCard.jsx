import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function TestimonialCard({ quote, name, rating = 5, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-2xl bg-white border border-stone-200 p-7 flex flex-col h-full"
    >
      <div className="flex gap-0.5">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-accent text-accent" />
        ))}
      </div>
      <p className="mt-4 text-stone-700 leading-relaxed flex-1">"{quote}"</p>
      <p className="mt-5 text-sm font-medium text-ink">{name}</p>
    </motion.div>
  );
}
