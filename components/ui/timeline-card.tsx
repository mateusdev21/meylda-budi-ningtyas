"use client";

import { motion } from "framer-motion";

import { Check } from "lucide-react";

import { Card } from "./card";

import { Text } from "@/components/typography/text";

type TimelineCardProps = {
  company: string;
  role: string;
  period: string;
  description: string;
  responsibilities: string[];
};

export function TimelineCard({
  company,
  role,
  period,
  description,
  responsibilities,
}: TimelineCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.7,
      }}
      className="relative"
    >
      {/* Timeline Dot */}
      <div className="absolute -left-10.25 top-10 z-10 hidden h-5 w-5 rounded-full border-4 border-background bg-primary shadow-[0_0_30px_rgba(255,140,0,0.6)] lg:block" />

      <Card className="relative overflow-hidden rounded-4xl border-border/60 bg-card/70 p-8 backdrop-blur-xl">
        {/* Glow */}
        <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative space-y-6">
          {/* Header */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <p className="text-sm font-medium tracking-[0.2em] text-primary uppercase">
                {company}
              </p>

              <h3 className="text-3xl font-bold tracking-tight">{role}</h3>
            </div>

            <div className="inline-flex w-fit rounded-full border border-border bg-background/70 px-4 py-2 text-sm font-medium text-foreground/70 backdrop-blur">
              {period}
            </div>
          </div>

          {/* Description */}
          <Text size="lg">{description}</Text>

          {/* Responsibilities */}
          <div className="grid gap-4 pt-2">
            {responsibilities.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <p className="text-foreground/75">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
