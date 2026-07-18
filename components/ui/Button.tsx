import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end text-white shadow-[0_18px_55px_rgba(225,41,218,0.28)] hover:translate-y-[-2px]",
  secondary:
    "border border-border-subtle bg-surface text-text-primary hover:border-accent-cyan hover:bg-surface-strong",
  ghost:
    "text-text-secondary hover:bg-surface hover:text-text-primary"
};

export function buttonStyles({
  className,
  variant = "primary"
}: {
  className?: string;
  variant?: ButtonVariant;
} = {}) {
  return cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition will-change-transform",
    variants[variant],
    className
  );
}
