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
  const base = "inline-flex items-center justify-center text-sm font-semibold px-6 py-3 tracking-wide transition-colors duration-300 min-h-[44px] focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2";
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-accent hover:text-[#111111]",
    "primary-inverted": "bg-primary-foreground text-primary hover:bg-accent hover:text-[#111111]",
  };

  const cls = `${base} ${variants[variant]} ${className}`;

  if (to) {
    return <Link to={to} className={cls}>{children}</Link>;
  }

  return <button type={type} onClick={onClick} className={cls}>{children}</button>;
};

export default CTAButton;
