import { cn } from "@/lib/utils";

type TextProps = {
    children: React.ReactNode;
    className?: string;
    size?: "sm" | "base" | "lg";
};

const sizes = {
    sm: "text-sm leading-7",
    base: "text-base leading-8",
    lg: "text-lg leading-8 md:text-xl",
};

export function Text({
    children,
    className,
    size = "base",
}: TextProps) {
    return (
        <p
            className={cn(
                "text-foreground/70",
                sizes[size],
                className
            )}
        >
            {children}
        </p>
    );
}