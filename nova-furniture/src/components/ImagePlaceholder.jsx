import { useState } from "react";
import { Armchair } from "lucide-react";

/**
 * Drop-in <img> replacement.
 * If `src` is missing or fails to load, renders a professional-looking
 * placeholder instead of a broken image icon — so the layout never breaks
 * before real product photography is added to /public/images.
 */
export default function ImagePlaceholder({
  src,
  alt = "",
  label,
  className = "",
  aspect = "aspect-[4/5]",
  rounded = "rounded-2xl",
}) {
  const [failed, setFailed] = useState(!src);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt || label || "Product image placeholder"}
        className={`relative ${aspect} ${rounded} overflow-hidden bg-stone-100 border border-stone-200 flex flex-col items-center justify-center gap-3 ${className}`}
      >
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, var(--color-stone-200) 0px, var(--color-stone-200) 1px, transparent 1px, transparent 14px)",
          }}
        />
        <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white border border-stone-300 shadow-sm">
          <Armchair className="h-6 w-6 text-stone-500" strokeWidth={1.5} />
        </div>
        {label && (
          <span className="relative px-4 text-center text-xs font-medium tracking-wide text-stone-500">
            {label}
          </span>
        )}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`${aspect} ${rounded} object-cover ${className}`}
    />
  );
}
