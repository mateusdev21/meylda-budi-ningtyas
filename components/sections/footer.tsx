import Link from "next/link";

import { Container } from "@/components/layout/container";

export function Footer() {
  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-border/60
        py-10
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          left-1/2
          top-0
          h-64
          w-64
          -translate-x-1/2
          rounded-full
          bg-primary/10
          blur-3xl
        "
      />

      <Container>
        <div
          className="
            relative
            flex
            flex-col
            items-center
            justify-between
            gap-6
            text-center
            md:flex-row
          "
        >
          {/* Brand */}
          <div className="space-y-2">
            <Link
              href="/"
              className="
                font-serif
                text-2xl
                font-bold
                tracking-tight
              "
            >
              Meylda Budi Ningtyas
            </Link>

            <p className="text-sm text-foreground/60">
              Passion for hospitality, teamwork, and culinary excellence.
            </p>
          </div>

          {/* Navigation */}
          <div
            className="
              flex
              flex-wrap
              items-center
              justify-center
              gap-6
              text-sm
              text-foreground/70
            "
          >
            <Link href="#about">About</Link>

            <Link href="#skills">Skills</Link>

            <Link href="#experience">Experience</Link>

            <Link href="#gallery">Gallery</Link>

            <Link href="#contact">Contact</Link>
          </div>

          {/* Copyright */}
          <p
            className="
              text-sm
              text-foreground/60
            "
          >
            © 2026 Mateus Arga. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
