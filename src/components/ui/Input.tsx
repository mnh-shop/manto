import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({ label, error, className, id, ...props }: InputProps) {
  return (
    <div className="space-y-1.5">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-glow-charcoal">
          {label}
        </label>
      )}
      <input
        id={id}
        className={cn(
          "w-full px-4 py-3 rounded-xl border border-glow-border bg-white text-glow-charcoal placeholder:text-glow-muted focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-glow-gold transition-all duration-200",
          error && "border-red-500 focus:ring-red-500/50",
          className
        )}
        {...props}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}

interface BadgeProps {
  children: React.ReactNode;
  variant?: "gold" | "dark" | "light";
}

export function Badge({ variant = "gold", children }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold",
        {
          "bg-glow-gold/10 text-glow-gold": variant === "gold",
          "bg-glow-charcoal text-white": variant === "dark",
          "bg-glow-cream text-glow-charcoal": variant === "light",
        }
      )}
    >
      {children}
    </span>
  );
}
