import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

type HoverSwapButtonProps = {
  defaultText: string;
  hoverText: string;
  icon?: ReactNode;
  className?: string;
  variant?: "default" | "outline" | "ghost";
};

export function HoverSwapButton({
  defaultText,
  hoverText,
  icon,
  className,
  variant = "default",
}: HoverSwapButtonProps) {
  return (
    <Button
      size="lg"
      variant={variant}
      className={cn(
        "group relative overflow-hidden text-xs uppercase tracking-widest hover:border-transparent",
        className
      )}
    >
      <div className="flex items-center gap-2 transition-transform duration-300 group-hover:-translate-y-[200%] cursor-not-allowed">
        {defaultText}

        {icon && (
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            {icon}
          </span>
        )}
      </div>

      <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-300 group-hover:translate-y-0 bg-zinc-400 text-white cursor-not-allowed">
        {hoverText}
      </span>
    </Button>
  );
}