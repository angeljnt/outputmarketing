import { useState } from "react";
import { Helmet } from "react-helmet-async";
import SectionWrapper from "@/components/SectionWrapper";
import CTAButton from "@/components/CTAButton";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { Check, AlertCircle } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", company: "", email: "", message: "" });
  const [emailValid, setEmailValid] = useState<boolean | null>(null);

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleEmailBlur = () => {
    if (form.email) setEmailValid(validateEmail(form.email));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(form.email)) {
      setEmailValid(false);
      return;
    }
    toast({ title: "We got it. You'll hear from us within 24 hours." });
    setForm({ name: "", company: "", email: "", message: "" });
    setEmailValid(null);
  };

  return (
    <>
      <Helmet>
        <title>Contact Output Marketing</title>
        <meta name="description" content="B2B SaaS company. Marketing that ships results. We reply within 24 hours." />
      </Helmet>

      <SectionWrapper>
        <div className="container-narrow">
          <h1 className="text-display mb-4">Let's talk.</h1>
          <p className="text-body-lg text-muted-foreground mb-10">You're a B2B SaaS company. Marketing that ships results. <strong>We reply within 24 hours.</strong></p>

          <form onSubmit={handleSubmit} className="space-y-6">
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
              <label htmlFor="company" className="text-sm font-medium mb-1.5 block">Company</label>
              <input
                id="company"
                type="text"
                placeholder="Company name"
                required
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className="w-full border border-border bg-background px-4 py-3 text-sm focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus:outline-none min-h-[44px]"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium mb-1.5 block">Email</label>
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
              <label htmlFor="message" className="text-sm font-medium mb-1.5 block">What's the one thing you need fixed?</label>
              <textarea
                id="message"
                placeholder="Tell us where you're stuck."
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full border border-border bg-background px-4 py-3 text-sm focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus:outline-none min-h-[120px] resize-y"
              />
            </div>
            <CTAButton type="submit">Send it →</CTAButton>
            <p className="text-caption"><strong>We reply within 24 hours.</strong> <strong>No pitch, no pressure.</strong></p>
          </form>

          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-body text-muted-foreground mb-4">Not sure which plan? Start with the pilot.</p>
            <CTAButton to="/contact">Start my <strong>30-day pilot</strong> →</CTAButton>
            <p className="text-caption mt-4">
              <strong>No retainer. No contract.</strong>{" "}
              <strong>We reply within 24 hours.</strong>
            </p>
            <p className="text-caption mt-2">
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