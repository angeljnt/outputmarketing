import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import GhostButton from "./GhostButton";
import logo from "@/assets/output-marketing-logo.svg";

const services = [
  { label: "Influencer Marketing", to: "/services/influencer-marketing" },
  { label: "Content Marketing", to: "/services/content-marketing" },
  { label: "Social Media", to: "/services/social-media" },
];

const navLinks = [
  { label: "Work", to: "/work" },
  { label: "Services", to: "#", dropdown: true },
  { label: "Pricing", to: "/pricing" },
  { label: "About", to: "/about" },
];

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? "shadow-sm bg-background/95 backdrop-blur" : "bg-background"
      }`}
    >
      <div className="container-wide flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="text-lg font-bold text-foreground tracking-tight">
          Output Marketing
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.label} className="relative">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="text-sm font-medium text-foreground hover:opacity-60 transition-opacity flex items-center gap-1"
                >
                  {link.label}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                {servicesOpen && (
                  <div className="absolute top-full mt-2 left-0 bg-background border border-border shadow-md py-2 min-w-[200px]">
                    {services.map((s) => (
                      <Link
                        key={s.to}
                        to={s.to}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-surface transition-colors"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                to={link.to}
                className="text-sm font-medium text-foreground hover:opacity-60 transition-opacity"
              >
                {link.label}
              </Link>
            )
          )}
          <GhostButton to="/contact">Start a pilot →</GhostButton>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container-wide py-4 flex flex-col gap-4">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label}>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="text-sm font-medium text-foreground flex items-center gap-1 min-h-[44px]"
                  >
                    {link.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  {servicesOpen && (
                    <div className="pl-4 flex flex-col gap-2 mt-1">
                      {services.map((s) => (
                        <Link key={s.to} to={s.to} className="text-sm text-muted-foreground min-h-[44px] flex items-center">
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-sm font-medium text-foreground min-h-[44px] flex items-center"
                >
                  {link.label}
                </Link>
              )
            )}
            <GhostButton to="/contact" className="w-full">Start a pilot →</GhostButton>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
