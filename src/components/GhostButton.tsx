import { Link } from "react-router-dom";

interface GhostButtonProps {
  to?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const GhostButton = ({ to, children, className = "", onClick }: GhostButtonProps) => {
  const cls = `group inline-flex items-center gap-2 text-sm font-semibold py-3 tracking-wide min-h-[44px] text-foreground underline underline-offset-[6px] decoration-1 decoration-foreground hover:decoration-2 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 [&_strong]:ml-1 ${className}`;

  const arrow = <span aria-hidden="true" className="no-underline inline-block transition-transform duration-200 group-hover:translate-x-0.5">→</span>;

  if (to) {
    return <Link to={to} className={cls}>{children}{arrow}</Link>;
  }

  return <button onClick={onClick} className={cls}>{children}{arrow}</button>;
};

export default GhostButton;
