import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface StyledButtonProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  [key: string]: any;
}

export function StyledButton({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: StyledButtonProps) {
  const baseClasses = "rounded-full font-medium transition-all active:scale-95";

  const variantClasses = {
    primary: "bg-terracotta text-white hover:bg-terracotta/90 hover:scale-105 shadow-lg hover:shadow-xl px-8 py-4",
    secondary: "bg-white text-terracotta border-2 border-terracotta hover:bg-terracotta/5 px-8 py-4",
    outline: "border border-terracotta/20 text-foreground hover:bg-terracotta/5 px-8 py-4",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-8 py-4 text-base",
    lg: "px-10 py-5 text-lg",
  };

  const finalClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (
    <Button className={finalClasses} {...props}>
      {children}
    </Button>
  );
}
