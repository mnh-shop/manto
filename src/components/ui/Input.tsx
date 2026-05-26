import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({ label, error, className, id, ...props }: InputProps) {
  return (
    <div className="space-y-1.5">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-800">
          {label}
        </label>
      )}
      <input
        id={id}
        className={cn(
          "w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-800 placeholder:text-glow-muted focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-yellow-500 transition-all duration-200",
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
          "bg-yellow-500/10 text-yellow-500": variant === "gold",
          "bg-gray-800 text-white": variant === "dark",
          "bg-glow-cream text-gray-800": variant === "light",
        }
      )}
    >
      {children}
    </span>
  );
}
