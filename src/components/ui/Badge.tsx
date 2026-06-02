import { cn } from "@/lib/utils";

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
          "bg-gray-300/10 text-gray-600": variant === "gold",
          "bg-gray-800 text-white": variant === "dark",
          "bg-gray-100 text-gray-800": variant === "light",
        }
      )}
    >
      {children}
    </span>
  );
}
