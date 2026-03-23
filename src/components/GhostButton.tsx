import { Link } from "react-router-dom";

interface GhostButtonProps {
  to?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const GhostButton = ({ to, children, className = "", onClick }: GhostButtonProps) => {
  const cls = `inline-flex items-center justify-center text-sm font-semibold px-6 py-3 tracking-wide border border-primary text-primary bg-transparent hover:bg-accent hover:border-accent hover:text-[#111111] transition-colors duration-300 min-h-[44px] focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${className}`;

  if (to) {
    return <Link to={to} className={cls}>{children}</Link>;
  }

  return <button onClick={onClick} className={cls}>{children}</button>;
};

export default GhostButton;
