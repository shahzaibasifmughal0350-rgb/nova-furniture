import { motion } from "framer-motion";

export default function FeatureCard({ icon: Icon, title, description, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-2xl border border-stone-200 bg-white p-7"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-soft text-accent-ink">
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </div>
      <h3 className="mt-5 font-medium text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-stone-600">{description}</p>
    </motion.div>
  );
}
