import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import ImagePlaceholder from "./ImagePlaceholder";

export default function CategoryCard({ title, description, image, to, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to={to} className="group block">
        <div className="relative overflow-hidden rounded-3xl">
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.6, ease: "easeOut" }}>
            <ImagePlaceholder
              src={image}
              alt={title}
              label={title}
              aspect="aspect-[3/4]"
              rounded="rounded-3xl"
              className="w-full"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-display text-xl text-paper">{title}</h3>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-paper/90 text-ink transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
            <p className="mt-1.5 text-sm text-stone-200 max-w-[85%]">{description}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
