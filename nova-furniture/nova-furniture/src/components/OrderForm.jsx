import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Button from "./Button";

const initialState = { name: "", phone: "", city: "", address: "", notes: "" };

export default function OrderForm({ onSubmit, submitLabel = "Send Order on WhatsApp" }) {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (field) => (e) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }));
  };

  const validate = () => {
    const nextErrors = {};
    if (!values.name.trim()) nextErrors.name = "Full name is required.";
    if (!values.phone.trim()) nextErrors.phone = "Phone number is required.";
    if (!values.city.trim()) nextErrors.city = "City is required.";
    if (!values.address.trim()) nextErrors.address = "Delivery address is required.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    onSubmit(values);
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <Field label="Full Name" error={errors.name}>
        <input
          value={values.name}
          onChange={handleChange("name")}
          type="text"
          placeholder="Your full name"
          className={inputClass(errors.name)}
        />
      </Field>

      <div className="grid grid-cols-2 gap-4">
        <Field label="Phone Number" error={errors.phone}>
          <input
            value={values.phone}
            onChange={handleChange("phone")}
            type="tel"
            placeholder="03XX XXXXXXX"
            className={inputClass(errors.phone)}
          />
        </Field>
        <Field label="City" error={errors.city}>
          <input
            value={values.city}
            onChange={handleChange("city")}
            type="text"
            placeholder="Lahore"
            className={inputClass(errors.city)}
          />
        </Field>
      </div>

      <Field label="Complete Address" error={errors.address}>
        <textarea
          value={values.address}
          onChange={handleChange("address")}
          rows={2}
          placeholder="House / street / area"
          className={inputClass(errors.address)}
        />
      </Field>

      <Field label="Additional Notes (optional)">
        <textarea
          value={values.notes}
          onChange={handleChange("notes")}
          rows={2}
          placeholder="Delivery instructions, color preference, etc."
          className={inputClass()}
        />
      </Field>

      <Button type="submit" variant="whatsapp" icon={MessageCircle} className="w-full">
        {submitLabel}
      </Button>
      <p className="text-xs text-stone-500 text-center">
        You'll review your order in WhatsApp before it's sent — we confirm every order manually.
      </p>
    </form>
  );
}

function Field({ label, error, children }) {
  return (
    <div>
      <label className="block text-sm font-medium text-ink mb-1.5">{label}</label>
      {children}
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-1 text-xs text-accent-ink"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
}

function inputClass(error) {
  return `w-full rounded-xl border ${
    error ? "border-accent-ink" : "border-stone-300"
  } bg-white px-4 py-2.5 text-sm outline-none focus:border-ink transition-colors placeholder:text-stone-400`;
}
