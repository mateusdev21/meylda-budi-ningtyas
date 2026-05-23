"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import { ChefHat } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

import { Button } from "@/components/ui/button";

import { FadeIn } from "@/components/motion/fade-in";
import { Stagger } from "@/components/motion/stagger";

import { FnbBackground } from "@/components/vectors/fnb-background";

export function HeroSection() {
  return (
    <Section id="home" className="relative overflow-hidden py-0">
      {/* F&B Vector Background */}
      <div className="absolute inset-0 -z-20 overflow-hidden opacity-[0.2] dark:opacity-[0.2]">
        <FnbBackground />
      </div>

      <Container>
        <div className="grid min-h-[75vh] items-center gap-20 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <Stagger className="space-y-8">
            {/* Badge */}
            <FadeIn>
              <div className="inline-flex items-center gap-3 rounded-full border border-border/60 bg-background/70 px-5 py-3 backdrop-blur-xl">
                <ChefHat className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium tracking-[0.2em] uppercase text-foreground/70">
                  Portfolio
                </span>
              </div>
            </FadeIn>

            {/* Heading */}
            <FadeIn delay={0.1}>
              <div className="space-y-6">
                <div className="space-y-4">
                  <p className="text-lg font-medium tracking-[0.3em] text-primary uppercase">
                    Hello, I’m
                  </p>

                  <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight md:text-7xl">
                    Meylda Budi Ningtyas
                  </h1>

                  <h2 className="text-2xl font-medium text-foreground/70 md:text-3xl">
                    Cook Helper
                  </h2>
                </div>

                <p className="max-w-2xl text-lg leading-relaxed text-foreground/70">
                  Passionate about supporting professional kitchen environments
                  through teamwork, food preparation, hygiene standards, and
                  efficient culinary operations.
                </p>
              </div>
            </FadeIn>

            {/* CTA */}
            <FadeIn delay={0.2}>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button href="#contact">Contact Me</Button>
                <Button href="#gallery" variant="outline">
                  View Dishes
                </Button>
              </div>
            </FadeIn>

            {/* Stats */}
            <FadeIn delay={0.3}>
              <div className="flex flex-wrap gap-10 pt-4">
                <div>
                  <h3 className="text-4xl font-bold">1+</h3>
                  <p className="text-foreground/60">Years Experience</p>
                </div>

                <div>
                  <h3 className="text-4xl font-bold">50+</h3>
                  <p className="text-foreground/60">Dishes Prepared</p>
                </div>

                <div>
                  <h3 className="text-4xl font-bold">100%</h3>
                  <p className="text-foreground/60">Team Commitment</p>
                </div>
              </div>
            </FadeIn>
          </Stagger>

          {/* RIGHT IMAGE */}
          <FadeIn delay={0.4}>
            <div className="relative mx-auto w-full max-w-135">
              {/* Decorative Glow */}
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl" />

              {/* Floating Badge */}
              <motion.div
                animate={{
                  y: [0, -16, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-6 top-10 z-20 hidden rounded-2xl border border-border/60 bg-background/80 p-5 shadow-2xl backdrop-blur-xl lg:block"
              >
                <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary">
                  Hospitality
                </p>
              </motion.div>

              {/* Image Wrapper */}
              <div
                className="relative overflow-hidden rounded-[3rem] border border-border/60 bg-card/70 shadow-2xl backdrop-blur-xl"
              >
                <div className="relative aspect-4/5">
                  <Image
                    src="/profile.jpg"
                    alt="Cook Helper Portrait"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>

                {/* Bottom Gradient */}
                <div
                  className="
                    absolute
                    inset-x-0
                    bottom-0
                    h-40
                    bg-linear-to-t
                    from-black/40
                    to-transparent
                  "
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
