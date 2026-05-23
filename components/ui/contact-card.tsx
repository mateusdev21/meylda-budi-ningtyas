"use client";

import { motion } from "framer-motion";

import Link from "next/link";

import { Mail, Phone, MapPin } from "lucide-react";
import { FaInstagram as Instagram } from "react-icons/fa";

import { Card } from "./card";

const icons = {
  mail: Mail,
  phone: Phone,
  instagram: Instagram,
  map: MapPin,
};

type ContactCardProps = {
  icon: keyof typeof icons;
  title: string;
  value: string;
  href: string;
};

export function ContactCard({ icon, title, value, href }: ContactCardProps) {
  const Icon = icons[icon];

  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.25,
      }}
    >
      <Link href={href} target="_blank" rel="noopener noreferrer">
        <Card
          className="
            group
            relative
            overflow-hidden
            rounded-4xl
            border-border/60
            bg-card/70
            px-4
            py-6
            backdrop-blur-xl
          "
        >
          {/* Glow */}
          <div
            className="
              absolute
              right-0
              top-0
              h-32
              w-32
              rounded-full
              bg-primary/10
              opacity-0
              blur-3xl
              transition-opacity
              duration-500
              group-hover:opacity-100
            "
          />

          <div className="relative space-y-5">
            <div
              className="
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                bg-primary/10
              "
            >
              <Icon className="h-8 w-8 text-primary" />
            </div>

            <div className="space-y-2">
              <p
                className="
                  text-sm
                  font-medium
                  tracking-[0.2em]
                  text-primary
                  uppercase
                "
              >
                {title}
              </p>

              <h3
                className="
                  text-lg
                  font-semibold
                  tracking-tight
                "
              >
                {value}
              </h3>
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}
