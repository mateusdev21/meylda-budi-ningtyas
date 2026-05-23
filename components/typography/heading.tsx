import { cn } from "@/lib/utils";

type HeadingProps = {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4";
  size?: "hero" | "xl" | "lg" | "md";
};

const sizes = {
  hero: `text-5xl leading-tight md:text-7xl`,
  xl: `text-4xl leading-tight md:text-5xl`,
  lg: `text-3xl leading-snug md:text-4xl`,
  md: `text-2xl leading-snug md:text-3xl`,
};

export function Heading({
  children,
  className,
  as: Component = "h2",
  size = "lg",
}: HeadingProps) {
  return (
    <Component
      className={cn(
        "font-serif font-bold tracking-tight text-foreground",
        sizes[size],
        className
      )}
    >
      {children}
    </Component>
  );
}
