import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

export function Button({
  children,
  variant = "primary",
  href,
  className = "",
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseClass =
    "inline-flex items-center justify-center px-6 py-3 rounded font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-accent glass-button";

  const variants = {
    primary:
      "bg-accent/90 text-white hover:bg-accent hover:bg-opacity-100 focus:ring-accent border border-black/10 dark:border-white/10",
    secondary:
      "border border-black/15 dark:border-white/20 text-foreground bg-black/[0.04] dark:bg-white/[0.03] hover:bg-black/[0.08] dark:hover:bg-white/[0.08] focus:ring-black/20 dark:focus:ring-white/30",
  };

  const combinedClass = `${baseClass} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClass} role="button">
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClass}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
