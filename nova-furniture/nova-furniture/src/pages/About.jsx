import { motion } from "framer-motion";
import { ShieldCheck, Sofa, PenTool, HeartHandshake } from "lucide-react";
import ImagePlaceholder from "../components/ImagePlaceholder";
import SectionHeading from "../components/SectionHeading";
import FeatureCard from "../components/FeatureCard";
import Button from "../components/Button";
import usePageMeta from "../utils/usePageMeta";

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Quality",
    description: "We focus on durable materials and reliable construction.",
  },
  {
    icon: Sofa,
    title: "Comfort",
    description: "Every seating product is designed with everyday comfort in mind.",
  },
  {
    icon: PenTool,
    title: "Simplicity",
    description: "Practical products with clean and useful designs.",
  },
  {
    icon: HeartHandshake,
    title: "Customer First",
    description: "We prioritize customer satisfaction from product selection to order delivery.",
  },
];

export default function About() {
  usePageMeta(
    "About NOVA Furniture",
    "NOVA Furniture designs durable, practical and stylish plastic furniture for homes, offices, restaurants, cafés, events, schools and outdoor spaces."
  );

  return (
    <div>
      {/* HERO */}
      <section className="container-nova pt-14 pb-8 md:pt-20 md:pb-12">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl text-4xl md:text-5xl font-medium text-ink text-balance"
        >
          Furniture Designed for Everyday Life.
        </motion.h1>
      </section>

      {/* STORY */}
      <section className="container-nova pb-16 md:pb-24 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <ImagePlaceholder
            label="ABOUT IMAGE PLACEHOLDER"
            aspect="aspect-[4/3]"
            rounded="rounded-3xl"
            className="w-full"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-2xl md:text-3xl font-medium text-ink">Our Story</h2>
          <p className="mt-4 text-stone-600 leading-relaxed">
            NOVA Furniture started with a simple observation: the plastic chair, one of the most
            common pieces of furniture in the world, rarely got the design attention it deserved.
            We set out to change that — building a range of seating that keeps the practicality
            people rely on plastic for, while raising the bar on comfort, finish and durability.
          </p>
          <p className="mt-4 text-stone-600 leading-relaxed">
            Today, NOVA products sit in homes, restaurants, offices, schools and gaming setups
            across the country. Every chair is engineered first, styled second — because furniture
            that doesn't hold up isn't worth having, no matter how it looks on day one.
          </p>
        </motion.div>
      </section>

      {/* MISSION */}
      <section className="bg-stone-100 py-16 md:py-24">
        <div className="container-nova max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-medium text-ink">Our Mission</h2>
            <p className="mt-4 text-lg text-stone-600 leading-relaxed">
              Our mission is to make quality furniture accessible to homes and businesses while
              combining comfort, durability and modern design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-16 md:py-24">
        <div className="container-nova">
          <SectionHeading title="Our Values" />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => (
              <FeatureCard key={v.title} {...v} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 md:pb-28">
        <div className="container-nova text-center">
          <h2 className="text-2xl md:text-3xl font-medium text-ink">Ready to see the collection?</h2>
          <Button to="/products" variant="primary" size="lg" className="mt-6">
            Shop NOVA Furniture
          </Button>
        </div>
      </section>
    </div>
  );
}
