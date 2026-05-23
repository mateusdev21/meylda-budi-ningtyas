"use client";

import { motion } from "framer-motion";

type StaggerProps = {
  children: React.ReactNode;
  className?: string;
};

export function Stagger({ children, className }: StaggerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
