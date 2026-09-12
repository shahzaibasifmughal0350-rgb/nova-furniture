import { motion } from "framer-motion";
import { PackagePlus } from "lucide-react";
import Button from "./Button";
import { sendBulkOrderEnquiry } from "../utils/whatsapp";

export default function BulkOrderBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-3xl bg-ink px-8 py-10 md:px-12 md:py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
    >
      <div className="flex items-start gap-4">
        <div className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
          <PackagePlus className="h-6 w-6" strokeWidth={1.75} />
        </div>
        <div>
          <h3 className="font-display text-2xl text-paper">Need Chairs in Bulk?</h3>
          <p className="mt-2 max-w-lg text-stone-400">
            Planning an event, furnishing a restaurant, school, office or business? Contact us for
            bulk orders and customized pricing.
          </p>
        </div>
      </div>
      <Button variant="accent" onClick={sendBulkOrderEnquiry} className="shrink-0">
        Request Bulk Order
      </Button>
    </motion.div>
  );
}
