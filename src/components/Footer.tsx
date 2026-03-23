import { Link } from "react-router-dom";
import CTAButton from "./CTAButton";

const Footer = () => {
  return (
    <footer className="bg-dark text-dark-text">
      <div className="container-default section-padding text-center">
        <h2 className="text-h2 mb-6">Ready to see what the output looks like?</h2>
        <CTAButton to="/contact" variant="primary-inverted" className="mb-4">
          Start your 30-day pilot →
        </CTAButton>
        <p className="text-dark-muted text-sm mt-4">
          Or reach us directly:{" "}
          <a href="mailto:vanessa@output-marketing.com" className="underline hover:opacity-75 transition-opacity">
            vanessa@output-marketing.com
          </a>
        </p>

        <div className="mt-12 pt-8 border-t border-dark-muted/20">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm text-dark-muted mb-4">
            <Link to="/work" className="hover:text-dark-text transition-colors">Work</Link>
            <span>·</span>
            <Link to="/services/influencer-marketing" className="hover:text-dark-text transition-colors">Services</Link>
            <span>·</span>
            <Link to="/pricing" className="hover:text-dark-text transition-colors">Pricing</Link>
            <span>·</span>
            <Link to="/about" className="hover:text-dark-text transition-colors">About</Link>
            <span>·</span>
            <Link to="/contact" className="hover:text-dark-text transition-colors">Contact</Link>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-dark-muted mb-6">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-dark-text transition-colors">
              LinkedIn
            </a>
            <span>·</span>
            <a href="https://x.com/vanessasemprun" target="_blank" rel="noopener noreferrer" className="hover:text-dark-text transition-colors">
              X (@vanessasemprun)
            </a>
          </div>
          <p className="text-xs text-dark-muted">© 2026 Output Marketing · Privacy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
