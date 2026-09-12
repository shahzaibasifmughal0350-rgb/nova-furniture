import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const VARIANTS = {
  primary:
    "bg-ink text-paper hover:bg-accent-dark border border-ink hover:border-accent-dark",
  accent:
    "bg-accent text-white hover:bg-accent-dark border border-accent hover:border-accent-dark",
  outline:
    "bg-transparent text-ink border border-ink/25 hover:border-ink",
  ghost: "bg-transparent text-ink hover:bg-stone-100 border border-transparent",
  whatsapp:
    "bg-[#25D366] text-white hover:bg-[#1fb455] border border-[#25D366] hover:border-[#1fb455]",
};

const SIZES = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-7 py-4 text-base",
};

export default function Button({
  as,
  to,
  href,
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "left",
  className = "",
  children,
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-colors duration-200 disabled:opacity-50 disabled:pointer-events-none ${VARIANTS[variant]} ${SIZES[size]} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon className="h-4 w-4" strokeWidth={2} />}
      <span>{children}</span>
      {Icon && iconPosition === "right" && <Icon className="h-4 w-4" strokeWidth={2} />}
    </>
  );

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.97 },
    transition: { duration: 0.15 },
  };

  if (to) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link to={to} className={classes} {...props}>
          {content}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...props}>
          {content}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.button {...motionProps} className={classes} {...props}>
      {content}
    </motion.button>
  );
}
