import { Link } from "react-router-dom";

interface CTAButtonProps {
  to?: string;
  children: React.ReactNode;
  variant?: "primary" | "primary-inverted";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}

const CTAButton = ({ to, children, variant = "primary", className = "", type = "button", onClick }: CTAButtonProps) => {
  const base = "inline-flex items-center justify-center text-sm font-medium px-6 py-3 tracking-wide transition-opacity hover:opacity-75 min-h-[44px]";
  const variants = {
    primary: "bg-primary text-primary-foreground",
    "primary-inverted": "bg-primary-foreground text-primary",
  };

  const cls = `${base} ${variants[variant]} ${className}`;

  if (to) {
    return <Link to={to} className={cls}>{children}</Link>;
  }

  return <button type={type} onClick={onClick} className={cls}>{children}</button>;
};

export default CTAButton;
