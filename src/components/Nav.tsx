import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import GhostButton from "./GhostButton";
import logo from "@/assets/output-marketing-logo.svg";

const services = [
  { label: "Founder LinkedIn", to: "/services/founder-linkedin" },
  { label: "Content Marketing", to: "/services/content-marketing" },
  { label: "Organic SEO", to: "/services/organic-seo" },
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

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? "shadow-sm bg-background/95 backdrop-blur" : "bg-background"
      }`}
    >
      <div className="container-wide flex items-center justify-between h-16">
        <Link to="/" className="shrink-0 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2">
          <img src={logo} alt="Output Marketing" className="h-7" />
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.label} className="relative">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="px-3 py-1.5 rounded-sm text-sm font-medium text-foreground hover:bg-accent hover:text-[#111111] transition-colors duration-200 flex items-center gap-1 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
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
                        className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-[#111111] transition-colors duration-200"
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
                className="px-3 py-1.5 rounded-sm text-sm font-medium text-foreground hover:bg-accent hover:text-[#111111] transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                {link.label}
              </Link>
            )
          )}
          <GhostButton to="/contact">Start my <strong>30-day pilot</strong> →</GhostButton>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 min-h-[44px] min-w-[44px] flex items-center justify-center focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border fixed inset-x-0 top-16 bottom-0 overflow-y-auto z-50">
          <div className="container-wide py-4 flex flex-col gap-2">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label}>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="px-3 py-2 rounded-sm text-sm font-medium text-foreground hover:bg-accent hover:text-[#111111] transition-colors duration-200 flex items-center gap-1 min-h-[44px] w-full"
                  >
                    {link.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  {servicesOpen && (
                    <div className="pl-4 flex flex-col gap-1 mt-1">
                      {services.map((s) => (
                        <Link key={s.to} to={s.to} className="px-3 py-2 rounded-sm text-sm text-muted-foreground hover:bg-accent hover:text-[#111111] transition-colors duration-200 min-h-[44px] flex items-center">
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
                  className="px-3 py-2 rounded-sm text-sm font-medium text-foreground hover:bg-accent hover:text-[#111111] transition-colors duration-200 min-h-[44px] flex items-center"
                >
                  {link.label}
                </Link>
              )
            )}
            <GhostButton to="/contact" className="w-full mt-2">Start my <strong>30-day pilot</strong> →</GhostButton>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
