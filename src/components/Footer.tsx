import { Link } from "react-router-dom";
import CTAButton from "./CTAButton";

const Footer = () => {
  return (
    <footer className="bg-dark text-dark-text">
      <div className="container-default section-padding text-center">
        <h2 className="text-h2 mb-6">See what the output looks like.</h2>
        <CTAButton to="/contact" variant="primary-inverted" className="mb-4">
          Start my{" "}<strong>30-day pilot</strong> →
        </CTAButton>
        <p className="text-dark-muted text-sm mt-4">
          Prefer direct email:{" "}
          <a href="mailto:contact@output-marketing.com" className="underline hover:font-semibold transition-[font-weight]">
            contact@output-marketing.com
          </a>
        </p>

        <div className="mt-12 pt-8 border-t border-dark-muted/20">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm text-dark-muted mb-4">
            <Link to="/work" className="hover:font-semibold transition-[font-weight]">Case studies</Link>
            <span>·</span>
            <Link to="/services" className="hover:font-semibold transition-[font-weight]">Services</Link>
            <span>·</span>
            <Link to="/pricing" className="hover:font-semibold transition-[font-weight]">Pricing</Link>
            <span>·</span>
            <Link to="/about" className="hover:font-semibold transition-[font-weight]">About</Link>
            <span>·</span>
            <Link to="/contact" className="hover:font-semibold transition-[font-weight]">Contact</Link>
          </div>
          <p className="text-micro text-dark-muted">© 2026 Output Marketing</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
