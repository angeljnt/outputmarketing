import { useState, useEffect } from "react";
import CTAButton from "./CTAButton";
import { trackEvent } from "@/lib/analytics";

const StickyMobileCTA = () => {
  const [visible, setVisible] = useState(false);
  const [inputFocused, setInputFocused] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero-section");
      const footer = document.getElementById("footer-cta");
      if (!hero) return;

      const heroBottom = hero.getBoundingClientRect().bottom;
      const footerTop = footer?.getBoundingClientRect().top ?? Infinity;
      const windowHeight = window.innerHeight;

      setVisible(heroBottom < 0 && footerTop > windowHeight);
    };

    const handleFocusIn = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.tagName === "SELECT") {
        setInputFocused(true);
      }
    };

    const handleFocusOut = () => {
      setInputFocused(false);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("focusin", handleFocusIn);
    document.addEventListener("focusout", handleFocusOut);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("focusin", handleFocusIn);
      document.removeEventListener("focusout", handleFocusOut);
    };
  }, []);

  if (!visible || inputFocused) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-background/95 backdrop-blur border-t border-border px-4 py-3 safe-area-pb">
      <CTAButton to="/contact" className="w-full" onClick={() => trackEvent("cta_primary_click", { page: window.location.pathname, location: "sticky_mobile" })}>
        Start my{"\u00A0"}<strong>30-day pilot</strong> →
      </CTAButton>
    </div>
  );
};

export default StickyMobileCTA;
