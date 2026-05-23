"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

type GalleryCardProps = {
  title: string;
  category: string;
  image: string;
  height: string;
};

export function GalleryCard({
  title,
  category,
  image,
  height,
}: GalleryCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.3,
      }}
      className={cn("group relative overflow-hidden rounded-4xl", height)}
    >
      {/* Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{
          backgroundImage: `url(${image})`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-6">
        <div className="space-y-2">
          <p className=" text-sm font-medium tracking-[0.2em] text-primary-foreground/70 uppercase">
            {category}
          </p>
          <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
      </div>
    </motion.div>
  );
}
