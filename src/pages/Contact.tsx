import { useState } from "react";
import { Helmet } from "react-helmet-async";
import SectionWrapper from "@/components/SectionWrapper";
import CTAButton from "@/components/CTAButton";
import FitChecklist from "@/components/FitChecklist";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { Check, AlertCircle } from "lucide-react";
import { packageContent, serviceContent } from "@/content/siteContent";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    company: "",
    website: "",
    email: "",
    service: "",
    packageName: "",
    message: "",
  });
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
    setForm({
      name: "",
      company: "",
      website: "",
      email: "",
      service: "",
      packageName: "",
      message: "",
    });
    setEmailValid(null);
    setSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>Contact | Output Marketing</title>
        <meta
          name="description"
          content="Tell Output Marketing what you need help with and start the 30-Day Pilot conversation."
        />
      </Helmet>

      <SectionWrapper>
        <div className="container-default">
          <div className="max-w-3xl">
            <p className="overline mb-4">Contact</p>
          <h1 className="text-display mb-4">
            Tell us what needs fixing.
          </h1>
          <p className="text-body-lg text-muted-foreground">
            Send us your site, tell us what feels stuck, and we will tell you if the pilot makes sense.
          </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-surface-alt">
        <div className="container-default">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-start">
            <FitChecklist
              fitItems={[
                "You are a lean B2B SaaS team that needs clearer content, launch support, visibility, or a cleaner growth system.",
                "You want a pilot-first structure before committing to a longer package.",
                "You are looking for a real operating partner, not just a random collection of deliverables.",
                "You want clear help, not more confusion.",
              ]}
              notFitItems={[
                "You need paid media, heavy production, or a broad full-service agency relationship.",
                "You are outside the software lane and the fit feels forced.",
                "You want a long-term contract before seeing the work in motion.",
              ]}
            />
            <div className="border border-border bg-background p-6">
              <p className="overline mb-3">What happens next</p>
              <h2 className="text-h3 mb-4">Pilot first.</h2>
              <div className="space-y-3 text-body text-muted-foreground">
                <p>1. We review your site and your main problem.</p>
                <p>2. We tell you if the pilot makes sense.</p>
                <p>3. If the fit is strong, we move into the right package or project.</p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="container-default">
          {submitted ? (
            <div className="max-w-2xl border border-border bg-surface p-8 text-center">
              <Check className="w-10 h-10 text-success mx-auto mb-4" />
              <h2 className="text-h2 mb-3">We got it.</h2>
              <p className="text-body text-muted-foreground mb-2">
                <strong>You’ll hear from us within 24 hours.</strong>
              </p>
              <p className="text-body text-muted-foreground mb-6">
                If you want to add context in the meantime, email us directly at{" "}
                <a
                  href="mailto:contact@output-marketing.com"
                  className="underline hover:font-semibold transition-[font-weight]"
                >
                  contact@output-marketing.com
                </a>
                .
              </p>
            </div>
          ) : (
            <div className="grid lg:grid-cols-[1fr_0.8fr] gap-10 items-start">
              <div>
                <h2 className="text-h2 mb-6">Start the conversation</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="text-sm font-medium mb-1.5 block">
                        Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full border border-border bg-background px-4 py-3 text-sm focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus:outline-none min-h-[44px]"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="text-sm font-medium mb-1.5 block">
                        Company
                      </label>
                      <input
                        id="company"
                        type="text"
                        placeholder="Company name"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="w-full border border-border bg-background px-4 py-3 text-sm focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus:outline-none min-h-[44px]"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="text-sm font-medium mb-1.5 block">
                        Work email *
                      </label>
                      <div className="relative">
                        <input
                          id="email"
                          type="email"
                          placeholder="name@company.com"
                          required
                          value={form.email}
                          onChange={(e) => {
                            setForm({ ...form, email: e.target.value });
                            setEmailValid(null);
                          }}
                          onBlur={handleEmailBlur}
                          className={`w-full border bg-background px-4 py-3 text-sm focus-visible:ring-2 focus:outline-none min-h-[44px] pr-10 ${
                            emailValid === false
                              ? "border-destructive focus-visible:ring-destructive"
                              : emailValid === true
                                ? "border-success focus-visible:ring-success"
                                : "border-border focus-visible:ring-foreground"
                          }`}
                        />
                        {emailValid === true && (
                          <Check className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-success" />
                        )}
                        {emailValid === false && (
                          <AlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-destructive" />
                        )}
                      </div>
                      {emailValid === false && (
                        <p className="text-micro text-destructive mt-1">
                          Please enter a valid work email.
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="website" className="text-sm font-medium mb-1.5 block">
                        Website
                      </label>
                      <input
                        id="website"
                        type="url"
                        placeholder="https://yourcompany.com"
                        value={form.website}
                        onChange={(e) => setForm({ ...form, website: e.target.value })}
                        className="w-full border border-border bg-background px-4 py-3 text-sm focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus:outline-none min-h-[44px]"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="service" className="text-sm font-medium mb-1.5 block">
                        Service interest
                      </label>
                      <select
                        id="service"
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full border border-border bg-background px-4 py-3 text-sm focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus:outline-none min-h-[44px]"
                      >
                        <option value="">Not sure yet</option>
                        {serviceContent.map((service) => (
                          <option key={service.slug} value={service.title}>
                            {service.title}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="packageName" className="text-sm font-medium mb-1.5 block">
                        Package interest
                      </label>
                      <select
                        id="packageName"
                        value={form.packageName}
                        onChange={(e) => setForm({ ...form, packageName: e.target.value })}
                        className="w-full border border-border bg-background px-4 py-3 text-sm focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus:outline-none min-h-[44px]"
                      >
                        <option value="">Not sure yet</option>
                        {packageContent.map((pkg) => (
                          <option key={pkg.name} value={pkg.name}>
                            {pkg.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="text-sm font-medium mb-1.5 block">
                      What needs fixing? *
                    </label>
                    <textarea
                      id="message"
                      placeholder="Tell us what is not working and what you want to improve."
                      required
                      rows={6}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full border border-border bg-background px-4 py-3 text-sm focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus:outline-none min-h-[140px] resize-y"
                    />
                  </div>

                  <CTAButton type="submit">
                    Start my{" "}<strong>30-day pilot</strong> →
                  </CTAButton>
                  <p className="text-caption">
                    <strong>Pilot first.</strong> We reply within 24 hours.
                  </p>
                </form>
              </div>

              <div className="border border-border bg-surface p-6">
                <p className="overline mb-3">Useful context to include</p>
                <div className="space-y-3 text-body text-muted-foreground mb-6">
                  <p>• Your website and what you sell</p>
                  <p>• What feels weakest right now</p>
                  <p>• Whether you want a package or a one-off project</p>
                  <p>• What better results would look like</p>
                </div>
                <p className="text-small text-muted-foreground">
                  Prefer email? Reach us directly at{" "}
                  <a
                    href="mailto:contact@output-marketing.com"
                    className="font-medium text-foreground hover:font-semibold transition-[font-weight]"
                  >
                    contact@output-marketing.com
                  </a>
                </p>
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
