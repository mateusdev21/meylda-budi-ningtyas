"use client";

import { motion } from "framer-motion";

import {
  ChefHat,
  ShieldCheck,
  UtensilsCrossed,
  Soup,
  PackageCheck,
  Users,
  CookingPot,
  TimerReset,
} from "lucide-react";

import { Card } from "./card";

import { Text } from "@/components/typography/text";

const icons = {
  "chef-hat": ChefHat,
  "shield-check": ShieldCheck,
  "utensils-crossed": UtensilsCrossed,
  soup: Soup,
  "package-check": PackageCheck,
  users: Users,
  "cooking-pot": CookingPot,
  "timer-reset": TimerReset,
};

type SkillCardProps = {
  icon: keyof typeof icons;
  title: string;
  description: string;
};

export function SkillCard({ icon, title, description }: SkillCardProps) {
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
      <Card className="group relative min-h-full overflow-hidden rounded-4xl border-border/60 bg-card/70 p-8 backdrop-blur-xl">
        {/* Glow Effect */}
        <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-3xl" />
        </div>

        <div className="relative space-y-6">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 transition-transform duration-300 group-hover:scale-110">
            <Icon className="h-8 w-8 text-primary" />
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
            <Text>{description}</Text>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
