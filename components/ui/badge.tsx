import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        `inline-flex rounded-full border border-border bg-card/80 px-4 py-2 text-smfont-medium tracking-wide text-primary backdrop-blur`,
        className
      )}
    >
      {children}
    </span>
  );
}
