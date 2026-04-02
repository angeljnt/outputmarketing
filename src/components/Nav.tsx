import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import CTAButton from "./CTAButton";
import logo from "@/assets/output-marketing-logo.svg";
import { trackEvent } from "@/lib/analytics";

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

  // Body scroll lock for mobile menu
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
          <CTAButton to="/contact" onClick={() => trackEvent("cta_primary_click", { page: location.pathname, location: "nav" })}>
            Start my{"\u00A0"}<strong>30-day pilot</strong> →
          </CTAButton>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 min-h-[44px] min-w-[44px] flex items-center justify-center focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 z-[60]"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile full-screen overlay */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-background z-50 flex flex-col">
          <div className="container-wide py-6 flex flex-col gap-2 flex-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label}>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="px-3 py-3 rounded-sm text-base font-medium text-foreground hover:bg-accent hover:text-[#111111] transition-colors duration-200 flex items-center gap-1 min-h-[48px] w-full"
                  >
                    {link.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  {servicesOpen && (
                    <div className="pl-4 flex flex-col gap-1 mt-1">
                      {services.map((s) => (
                        <Link key={s.to} to={s.to} className="px-3 py-3 rounded-sm text-base text-muted-foreground hover:bg-accent hover:text-[#111111] transition-colors duration-200 min-h-[48px] flex items-center">
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
                  className="px-3 py-3 rounded-sm text-base font-medium text-foreground hover:bg-accent hover:text-[#111111] transition-colors duration-200 min-h-[48px] flex items-center"
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="mt-4">
              <CTAButton to="/contact" className="w-full" onClick={() => trackEvent("cta_primary_click", { page: location.pathname, location: "mobile_menu" })}>
                Start my{"\u00A0"}<strong>30-day pilot</strong> →
              </CTAButton>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
