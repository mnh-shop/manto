import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer",
        {
          "bg-gray-800 text-white hover:bg-gray-800/90 active:scale-[0.98]":
            variant === "primary",
          "bg-yellow-500 text-gray-800 hover:bg-yellow-500/90 active:scale-[0.98]":
            variant === "secondary",
          "bg-transparent text-gray-800 hover:bg-gray-800/5":
            variant === "ghost",
          "border-2 border-glow-charcoal text-gray-800 hover:bg-gray-800 hover:text-white":
            variant === "outline",
        },
        {
          "px-4 py-2 text-sm": size === "sm",
          "px-6 py-3 text-base": size === "md",
          "px-8 py-4 text-lg": size === "lg",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
