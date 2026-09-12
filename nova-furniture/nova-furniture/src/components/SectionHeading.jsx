import { motion } from "framer-motion";

export default function SectionHeading({
  title,
  subtitle,
  align = "left",
  as: Tag = "h2",
  className = "",
}) {
  return (
    <div className={`${align === "center" ? "text-center mx-auto" : "text-left"} max-w-2xl ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <Tag className="text-3xl md:text-4xl font-medium text-ink text-balance">{title}</Tag>
        {subtitle && (
          <p className="mt-3 text-base md:text-lg text-stone-700 text-balance">{subtitle}</p>
        )}
      </motion.div>
    </div>
  );
}
