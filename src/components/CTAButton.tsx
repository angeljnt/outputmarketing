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
  const base = "inline-flex items-center justify-center text-sm font-medium px-6 py-3 tracking-wide transition-all min-h-[44px] relative overflow-hidden group focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2";
  const variants = {
    primary: "bg-primary text-primary-foreground hover:opacity-90",
    "primary-inverted": "bg-primary-foreground text-primary hover:opacity-90",
  };

  const underline = (
    <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-accent group-hover:w-full transition-all duration-300" />
  );

  const cls = `${base} ${variants[variant]} ${className}`;

  if (to) {
    return <Link to={to} className={cls}>{children}{underline}</Link>;
  }

  return <button type={type} onClick={onClick} className={cls}>{children}{underline}</button>;
};

export default CTAButton;