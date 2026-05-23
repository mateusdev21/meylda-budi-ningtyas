import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        `rounded-4xl border border-border bg-card/80 p-6 shadow-sm backdrop-blur transition-all duration-300`,
        className
      )}
    >
      {children}
    </div>
  );
}
