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
  const base = "group inline whitespace-nowrap text-sm font-semibold py-3 tracking-wide min-h-[44px] underline underline-offset-[6px] decoration-1 hover:decoration-2 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2";
  const variants = {
    primary: "text-foreground decoration-foreground",
    "primary-inverted": "text-primary-foreground decoration-primary-foreground",
  };

  const arrow = <span aria-hidden="true" className="no-underline transition-transform duration-200 group-hover:translate-x-0.5"> →</span>;

  const cls = `${base} ${variants[variant]} ${className}`;

  if (to) {
    return <Link to={to} className={cls}>{children}{arrow}</Link>;
  }

  return <button type={type} onClick={onClick} className={cls}>{children}{arrow}</button>;
};

export default CTAButton;
