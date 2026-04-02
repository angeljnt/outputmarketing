import { useState } from "react";
import { Helmet } from "react-helmet-async";
import SectionWrapper from "@/components/SectionWrapper";
import CTAButton from "@/components/CTAButton";
import GhostButton from "@/components/GhostButton";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { Check, AlertCircle } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", company: "", email: "", message: "" });
  const [emailValid, setEmailValid] = useState<boolean | null>(null);
  const [submitted, setSubmitted] = useState(false);

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
    setSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>Contact Output Marketing</title>
        <meta name="description" content="Start your 30-day pilot or book a 20-min intro call. We reply within 24 hours." />
      </Helmet>

      <SectionWrapper>
        <div className="container-narrow">
          <h1 className="text-display mb-4">Let's talk.</h1>
          <p className="text-body-lg text-muted-foreground mb-10">You're a B2B SaaS company that needs marketing that ships results. Two ways to start:</p>

          {submitted ? (
            <div className="bg-surface border border-border p-8 text-center">
              <Check className="w-10 h-10 text-success mx-auto mb-4" />
              <h2 className="text-h2 mb-3">We got it.</h2>
              <p className="text-body text-muted-foreground mb-2"><strong>You'll hear from us within 24 hours.</strong></p>
              <p className="text-body text-muted-foreground mb-6">Need to move faster?</p>
              <GhostButton onClick={() => window.open("#", "_blank")}>Book a 20-min intro call →</GhostButton>
            </div>
          ) : (
            <div className="grid md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-start">
              <div>
                <h2 className="text-h3 mb-6">Start the pilot</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium mb-1.5 block">Name *</label>
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
                    <label htmlFor="email" className="text-sm font-medium mb-1.5 block">Work email *</label>
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
                      <p className="text-micro text-destructive mt-1">Please enter a valid work email (name@company.com)</p>
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
                    <label htmlFor="message" className="text-sm font-medium mb-1.5 block">What's the one thing you need fixed? *</label>
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
                  <CTAButton type="submit">Start my{"\u00A0"}<strong>30-day pilot</strong> →</CTAButton>
                  <p className="text-caption"><strong>No retainer. No contract.</strong> <strong>We reply within 24 hours.</strong></p>
                </form>
              </div>

              <div className="md:border-l md:border-border md:pl-10 md:min-w-[260px]">
                <h2 className="text-h3 mb-4">Prefer a conversation?</h2>
                <p className="text-body text-muted-foreground mb-6">Book a <strong>20-min intro call</strong>. No pitch, no pressure. We'll tell you if we're the right fit.</p>
                <GhostButton onClick={() => window.open("#", "_blank")}>Book a 20-min intro call →</GhostButton>
                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-caption text-muted-foreground mb-2">Or email directly:</p>
                  <a href="mailto:vanessa@output-marketing.com" className="text-sm font-medium text-foreground hover:text-accent transition-colors">vanessa@output-marketing.com</a>
                </div>
              </div>
            </div>
          )}
        </div>
      </SectionWrapper>

      <Footer />
    </>
  );
};

export default Contact;
