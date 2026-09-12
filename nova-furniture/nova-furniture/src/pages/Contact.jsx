import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, MapPin, Check } from "lucide-react";
import Button from "../components/Button";
import STORE from "../config/store";
import { sendGeneralEnquiry } from "../utils/whatsapp";
import usePageMeta from "../utils/usePageMeta";

const initialState = { name: "", email: "", phone: "", subject: "", message: "" };

export default function Contact() {
  usePageMeta(
    "Contact NOVA Furniture",
    "Get in touch with NOVA Furniture about products, bulk orders, delivery or anything else — by form, phone, email or WhatsApp."
  );

  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const handleChange = (field) => (e) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!values.name.trim()) next.name = "Name is required.";
    if (!values.email.trim()) next.email = "Email is required.";
    else if (!/^\S+@\S+\.\S+$/.test(values.email)) next.email = "Enter a valid email.";
    if (!values.subject.trim()) next.subject = "Subject is required.";
    if (!values.message.trim()) next.message = "Message is required.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSent(true);
    setValues(initialState);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div>
      <section className="container-nova pt-14 pb-4 md:pt-20">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-medium text-ink text-balance"
        >
          We're Here to Help.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 max-w-xl text-lg text-stone-600"
        >
          Have a question about our chairs, bulk orders, delivery, or anything else? Get in touch
          with our team.
        </motion.p>
      </section>

      <section className="container-nova py-12 md:py-16 grid grid-cols-1 lg:grid-cols-5 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-3"
        >
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Full Name" error={errors.name}>
                <input value={values.name} onChange={handleChange("name")} type="text" placeholder="Your name" className={inputClass(errors.name)} />
              </Field>
              <Field label="Email" error={errors.email}>
                <input value={values.email} onChange={handleChange("email")} type="email" placeholder="you@email.com" className={inputClass(errors.email)} />
              </Field>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Phone (optional)">
                <input value={values.phone} onChange={handleChange("phone")} type="tel" placeholder="03XX XXXXXXX" className={inputClass()} />
              </Field>
              <Field label="Subject" error={errors.subject}>
                <input value={values.subject} onChange={handleChange("subject")} type="text" placeholder="Bulk order enquiry" className={inputClass(errors.subject)} />
              </Field>
            </div>
            <Field label="Message" error={errors.message}>
              <textarea value={values.message} onChange={handleChange("message")} rows={5} placeholder="How can we help?" className={inputClass(errors.message)} />
            </Field>

            <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
              Send Message
            </Button>

            {sent && (
              <motion.p
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-sm text-emerald-700"
              >
                <Check className="h-4 w-4" /> Thanks — we'll get back to you shortly.
              </motion.p>
            )}
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-2 space-y-3"
        >
          <ContactRow icon={Mail} label="Email" value={STORE.email} href={`mailto:${STORE.email}`} />
          <ContactRow icon={Phone} label="Phone" value={STORE.phone} href={`tel:${STORE.phone.replace(/\s/g, "")}`} />
          <ContactRow
            icon={MessageCircle}
            label="WhatsApp"
            value={STORE.phone}
            href={`https://wa.me/${STORE.whatsappNumber}`}
          />
          <ContactRow icon={MapPin} label="Address" value={STORE.address} />

          <div className="pt-2">
            <Button
              onClick={() => sendGeneralEnquiry("there", "I have a question about your products.")}
              variant="whatsapp"
              size="lg"
              icon={MessageCircle}
              className="w-full"
            >
              Chat on WhatsApp
            </Button>
          </div>

          <div className="pt-4">
            <div className="aspect-[4/3] rounded-2xl bg-stone-100 border border-stone-200 flex items-center justify-center">
              <div className="text-center px-6">
                <MapPin className="h-6 w-6 text-stone-400 mx-auto" strokeWidth={1.5} />
                <p className="mt-2 text-xs font-medium tracking-wide text-stone-500">MAP PLACEHOLDER</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

function ContactRow({ icon: Icon, label, value, href }) {
  const content = (
    <div className="flex items-center gap-4 rounded-2xl border border-stone-200 bg-white p-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent-ink">
        <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
      </span>
      <div className="min-w-0">
        <p className="text-xs text-stone-500">{label}</p>
        <p className="text-sm font-medium text-ink truncate">{value}</p>
      </div>
    </div>
  );
  if (href) {
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="block hover:border-ink transition-colors rounded-2xl">
        {content}
      </a>
    );
  }
  return content;
}

function Field({ label, error, children }) {
  return (
    <div>
      <label className="block text-sm font-medium text-ink mb-1.5">{label}</label>
      {children}
      {error && <p className="mt-1 text-xs text-accent-ink">{error}</p>}
    </div>
  );
}

function inputClass(error) {
  return `w-full rounded-xl border ${
    error ? "border-accent-ink" : "border-stone-300"
  } bg-white px-4 py-2.5 text-sm outline-none focus:border-ink transition-colors placeholder:text-stone-400`;
}
