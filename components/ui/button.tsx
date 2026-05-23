import Link from "next/link";

import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
};

const variants = {
  primary: `bg-primary text-primary-foreground hover:opacity-90`,
  secondary: `bg-secondary text-secondary-foreground hover:opacity-90`,
  outline: `border border-border bg-card hover:bg-accent`,
};

export function Button({
  children,
  href,
  className,
  variant = "primary",
}: ButtonProps) {
  const styles = cn(
    `inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 hover:scale-105`,
    variants[variant],
    className
  );

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return <button className={styles}>{children}</button>;
}
