import { Link } from "react-router-dom";
import { AtSign, Share2, Video, Mail, Phone, MessageCircle } from "lucide-react";
import STORE from "../config/store";

export default function Footer() {
  return (
    <footer className="bg-ink text-stone-300">
      <div className="container-nova py-16 grid grid-cols-2 md:grid-cols-5 gap-10">
        <div className="col-span-2">
          <Link to="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-paper text-ink font-display text-lg">
              N
            </span>
            <span className="font-display text-lg text-paper">{STORE.brandName}</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-stone-400">
            Durable, stylish and affordable furniture designed for modern spaces.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {[
              { Icon: AtSign, href: STORE.social.instagram, label: "Instagram" },
              { Icon: Share2, href: STORE.social.facebook, label: "Facebook" },
              { Icon: Video, href: STORE.social.tiktok, label: "TikTok" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-700 text-stone-400 hover:text-paper hover:border-accent transition-colors"
              >
                <Icon className="h-4 w-4" strokeWidth={1.75} />
              </a>
            ))}
          </div>
        </div>

        <FooterColumn
          title="Shop"
          links={[
            { label: "Plastic Chairs", to: "/products?category=plastic-chairs" },
            { label: "Gaming Chairs", to: "/products?category=gaming-chairs" },
            { label: "Outdoor Furniture", to: "/products?category=outdoor" },
            { label: "All Products", to: "/products" },
          ]}
        />
        <FooterColumn
          title="Company"
          links={[
            { label: "About", to: "/about" },
            { label: "Contact", to: "/contact" },
          ]}
        />
        <FooterColumn
          title="Support"
          links={[
            { label: "Shipping", to: "/contact" },
            { label: "Returns", to: "/contact" },
            { label: "FAQs", to: "/contact" },
          ]}
        />
      </div>

      <div className="container-nova pb-10">
        <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-stone-400 border-t border-stone-800 pt-8">
          <a href={`tel:${STORE.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 hover:text-paper transition-colors">
            <Phone className="h-4 w-4" strokeWidth={1.75} /> {STORE.phone}
          </a>
          <a
            href={`https://wa.me/${STORE.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-paper transition-colors"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={1.75} /> WhatsApp
          </a>
          <a href={`mailto:${STORE.email}`} className="flex items-center gap-2 hover:text-paper transition-colors">
            <Mail className="h-4 w-4" strokeWidth={1.75} /> {STORE.email}
          </a>
        </div>
      </div>

      <div className="border-t border-stone-800">
        <div className="container-nova py-5 text-xs text-stone-500">
          © {STORE.year} {STORE.brandName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="text-sm font-medium text-paper">{title}</h3>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link to={link.to} className="text-sm text-stone-400 hover:text-paper transition-colors">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
