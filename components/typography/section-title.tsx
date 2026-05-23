import { cn } from "@/lib/utils";
import { Heading } from "./heading";
import { Text } from "./text";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  centered = true,
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn("space-y-4", centered && "mx-auto text-center", className)}
    >
      {eyebrow && (
        <span className="inline-flex rounded-full border border-border bg-card px-4 py-2 text-sm font-medium tracking-wide text-primary">
          {eyebrow}
        </span>
      )}

      <Heading size="xl" as="h2">
        {title}
      </Heading>

      {description && (
        <Text size="lg" className="mx-auto max-w-3xl">
          {description}
        </Text>
      )}
    </div>
  );
}
