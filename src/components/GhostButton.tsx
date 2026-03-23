import { Link } from "react-router-dom";

interface GhostButtonProps {
  to?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const GhostButton = ({ to, children, className = "", onClick }: GhostButtonProps) => {
  const cls = `inline-flex items-center justify-center text-sm font-medium px-6 py-3 tracking-wide border border-primary text-primary bg-transparent transition-opacity hover:opacity-60 min-h-[44px] ${className}`;

  if (to) {
    return <Link to={to} className={cls}>{children}</Link>;
  }

  return <button onClick={onClick} className={cls}>{children}</button>;
};

export default GhostButton;
