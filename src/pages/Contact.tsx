import { useState } from "react";
import { Helmet } from "react-helmet-async";
import SectionWrapper from "@/components/SectionWrapper";
import CTAButton from "@/components/CTAButton";
import GhostButton from "@/components/GhostButton";
import Footer from "@/components/Footer";
import TrustMicroRow from "@/components/TrustMicroRow";
import { useToast } from "@/hooks/use-toast";
import { Check, AlertCircle } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", company: "", email: "", message: "", service: "" });
  const [emailValid, setEmailValid] = useState<boolean | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleEmailBlur = () => {
    if (form.email) setEmailValid(validateEmail(form.email));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent("contact_form_submit", { page: "/contact" });
    if (!validateEmail(form.email)) {
      setEmailValid(false);
      return;
    }
    trackEvent("contact_form_success", { page: "/contact" });
    setSubmitted(true);
    setForm({ name: "", company: "", email: "", message: "", service: "" });
    setEmailValid(null);
  };

  if (submitted) {
    return (
      <>
        <Helmet>
          <title>Contact Output Marketing</title>
          <meta name="description" content="B2B SaaS marketing that ships results. We reply within 24 hours." />
        </Helmet>
        <SectionWrapper>
          <div className="container-narrow text-center">
            <h1 className="text-display mb-4">Got it.</h1>
            <p className="text-body-lg text-muted-foreground mb-6">We'll reply within <strong>24 hours</strong>. If your timeline is urgent, book a 20-min intro call.</p>
            <GhostButton to="#" onClick={() => trackEvent("book_intro_call_click", { page: "/contact" })}>Book a 20-min intro call →</GhostButton>
            <TrustMicroRow className="mt-6" />
          </div>
        </SectionWrapper>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Contact Output Marketing</title>
        <meta name="description" content="B2B SaaS marketing that ships results. We reply within 24 hours." />
      </Helmet>

      <SectionWrapper>
        <div className="container-narrow" id="hero-section">
          <h1 className="text-display mb-4">Let's talk.</h1>
          <p className="text-body-lg text-muted-foreground mb-6">You're a B2B SaaS company. Marketing that ships results. <strong>We reply within 24 hours.</strong></p>

          {/* DUAL CONVERSION PATHS */}
          <div className="flex flex-wrap gap-4 mb-10 items-center">
            <CTAButton to="#form" onClick={() => { trackEvent("cta_primary_click", { page: "/contact", location: "dual_path" }); document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" }); }}>
              Start my{"\u00A0"}<strong>30-day pilot</strong> →
            </CTAButton>
            <GhostButton to="#" onClick={() => trackEvent("book_intro_call_click", { page: "/contact" })}>
              Book a 20-min intro call →
            </GhostButton>
          </div>

          <form id="contact-form" onSubmit={handleSubmit} className="space-y-6" onFocus={() => trackEvent("contact_form_start", { page: "/contact" })}>
            <div>
              <label htmlFor="name" className="text-sm font-medium mb-1.5 block">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border border-border bg-background px-4 py-3 text-sm focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus:outline-none min-h-[44px]"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium mb-1.5 block">Work email</label>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  placeholder="name@company.com"
                  required
                  value={form.email}
                  onChange={(e) => { setForm({ ...form, email: e.target.value }); setEmailValid(null); }}
                  onBlur={handleEmailBlur}
                  className={`w-full border bg-background px-4 py-3 text-sm focus-visible:ring-2 focus:outline-none min-h-[44px] pr-10 ${
                    emailValid === false ? "border-destructive focus-visible:ring-destructive" :
                    emailValid === true ? "border-success focus-visible:ring-success" :
                    "border-border focus-visible:ring-accent"
                  }`}
                />
                {emailValid === true && <Check className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-success" />}
                {emailValid === false && <AlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-destructive" />}
              </div>
              {emailValid === false && (
                <p className="text-micro text-destructive mt-1">Please enter a valid email (name@company.com)</p>
              )}
            </div>
            <div>
              <label htmlFor="company" className="text-sm font-medium mb-1.5 block">Company <span className="text-muted-foreground font-normal">(optional)</span></label>
              <input
                id="company"
                type="text"
                placeholder="Company name"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className="w-full border border-border bg-background px-4 py-3 text-sm focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus:outline-none min-h-[44px]"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-medium mb-1.5 block">What do you need fixed in the next 90 days?</label>
              <textarea
                id="message"
                placeholder="Tell us what is blocking pipeline right now."
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full border border-border bg-background px-4 py-3 text-sm focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus:outline-none min-h-[120px] resize-y"
              />
            </div>
            <div>
              <label htmlFor="service" className="text-sm font-medium mb-1.5 block">What are you most interested in? <span className="text-muted-foreground font-normal">(optional)</span></label>
              <select
                id="service"
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="w-full border border-border bg-background px-4 py-3 text-sm focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus:outline-none min-h-[44px]"
              >
                <option value="">Select one</option>
                <option value="founder-linkedin">Founder LinkedIn</option>
                <option value="content-marketing">Content Marketing</option>
                <option value="organic-seo">Organic SEO</option>
                <option value="not-sure">Not sure yet</option>
              </select>
            </div>
            <CTAButton type="submit" onClick={() => trackEvent("cta_primary_click", { page: "/contact", location: "form_submit" })}>
              Start my{"\u00A0"}<strong>30-day pilot</strong> →
            </CTAButton>
          </form>

          {/* CONTACT REASSURANCE */}
          <div className="mt-10 pt-8 border-t border-border">
            <TrustMicroRow className="mb-4 justify-start" />
            <p className="text-caption">
              Prefer direct email:{" "}
              <a href="mailto:vanessa@output-marketing.com" className="text-foreground hover:text-accent transition-colors">vanessa@output-marketing.com</a>
            </p>
          </div>
        </div>
      </SectionWrapper>

      <Footer />
    </>
  );
};

export default Contact;
