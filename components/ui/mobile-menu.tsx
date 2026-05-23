"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Gallery",
    href: "#gallery",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        aria-label="Open Menu"
        onClick={() => setOpen(!open)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {open && (
        <div className="absolute left-0 top-20 w-full border-y border-border bg-background/95 backdrop-blur">
          <nav className="flex flex-col p-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-4 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
