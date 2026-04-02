import { Helmet } from "react-helmet-async";
import SectionWrapper from "@/components/SectionWrapper";
import CTAButton from "@/components/CTAButton";
import FAQItem from "@/components/FAQItem";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const tiers = [
  {
    name: "Foundation",
    price: "$1,800 / month",
    desc: "A founder LinkedIn presence and content foundation. Built for the stage where you don't have a marketing team yet.",
    includes: ["12 ghostwritten LinkedIn posts/month", "2 SEO articles/month", "Content calendar", "Monthly performance report", "1 strategy call/month"],
    forText: "Seed-stage B2B SaaS founders with no marketing hire.",
    badge: null,
  },
  {
    name: "Engine",
    price: "$3,500 / month",
    desc: "A content system that builds organic pipeline. Founder brand plus company SEO, working together.",
    includes: ["Founder LinkedIn ghostwriting (3x/week + 2 carousels/month)", "Brand page management (3x/week)", "4 to 6 SEO articles/month", "Monthly KPI report", "Quarterly strategy session"],
    forText: "Series A B2B SaaS companies that need leads from content, not just presence.",
    badge: "Most popular",
  },
  {
    name: "Full Stack",
    price: "$6,000 / month",
    desc: "The complete content machine. Founder brand, SEO, distribution, and attribution.",
    includes: ["Everything in Engine", "8 articles/month", "Technical SEO audit + ongoing optimization", "Distribution layer (email repurposing + carousel adaptation)", "Attribution setup (GA4 + CRM)", "1 original research asset/quarter"],
    forText: "Series A/B companies ready to treat content as a growth engine.",
    badge: null,
  },
];

const comparison = [
  { feature: "Price", foundation: "$1,800/mo", engine: "$3,500/mo", fullStack: "$6,000/mo" },
  { feature: "Founder LinkedIn posts", foundation: "12/mo", engine: "3x/week + 2 carousels", fullStack: "3x/week + 2 carousels" },
  { feature: "Brand page posts", foundation: "—", engine: "3x/week", fullStack: "3x/week" },
  { feature: "SEO articles", foundation: "2/mo", engine: "4–6/mo", fullStack: "8/mo" },
  { feature: "Original research asset", foundation: "—", engine: "—", fullStack: "1/quarter" },
  { feature: "Technical SEO", foundation: "—", engine: "—", fullStack: "Yes" },
  { feature: "Distribution layer", foundation: "—", engine: "—", fullStack: "Yes" },
  { feature: "Attribution setup", foundation: "—", engine: "—", fullStack: "Yes" },
  { feature: "Monthly KPI report", foundation: "Yes", engine: "Yes", fullStack: "Yes" },
  { feature: "Quarterly strategy session", foundation: "—", engine: "Yes", fullStack: "Yes" },
  { feature: "Strategy call", foundation: "Monthly", engine: "Quarterly", fullStack: "Quarterly" },
];

const addons = [
  { name: "Second founder LinkedIn ghostwriting", price: "+$1,500/month" },
  { name: "pSEO setup (programmatic SEO build)", price: "$4,000 to $12,000 one-time" },
  { name: "pSEO monthly maintenance", price: "$1,500 to $3,000/month" },
  { name: "GEO (get cited in ChatGPT, Perplexity, AI Overviews)", price: "+$800/month" },
  { name: "Content audit", price: "$1,500 to $2,500 one-time" },
  { name: "SEO technical audit", price: "$1,500 to $3,000 one-time" },
  { name: "Positioning + messaging audit", price: "$2,000 to $4,000 one-time" },
];

const faqs: { q: string; a: React.ReactNode }[] = [
  { q: "Is there a minimum commitment after the pilot?", a: <>No. The pilot is the commitment. After that, we move <strong>month-to-month</strong>. <strong>No annual contracts, no lock-ins.</strong></> },
  { q: "Can I cancel anytime?", a: <>Yes. We ask for <strong>30 days notice</strong> so we can wrap ongoing work cleanly. That's it.</> },
  { q: "Do prices change after we start?", a: <>No. <strong>The rate you start at holds for as long as we work together.</strong> We don't sneak in price increases.</> },
  { q: "What if I want more than one service?", a: "We've run Foundation and Engine simultaneously for the same client, or Engine with a pSEO project running in parallel. If the scope makes sense, we build a custom structure. Start with the pilot." },
  { q: "Can I start with the pilot and move to a different tier than I expected?", a: "Yes. That's the point of the pilot. We both learn what's actually needed. The tier recommendation at the end is based on what we saw in the work, not what we hoped to sell." },
  { q: "Do you offer discounts for early-stage startups?", a: "The pilot is already priced to be accessible. For pre-revenue companies, we sometimes structure the pilot differently. Reach out and we'll be straight with you about whether we're the right fit." },
];

const Pricing = () => {
  return (
    <>
      <Helmet>
        <title>Pricing: Output Marketing</title>
        <meta name="description" content="See exactly what you'd get. Every engagement starts with a 30-day pilot. $1,500 to $2,000." />
      </Helmet>

      {/* HERO */}
      <SectionWrapper>
        <div className="container-narrow text-center">
          <h1 className="text-display mb-4">See exactly what you'd get.</h1>
          <p className="text-body-lg text-muted-foreground">Every engagement starts with a <strong>30-day pilot</strong>. <strong>$1,500 to $2,000</strong>. You see the quality. We learn your business. Then you decide.</p>
        </div>
      </SectionWrapper>

      {/* PILOT BLOCK */}
      <section className="bg-dark text-dark-text section-padding">
        <div className="container-narrow text-center">
          <p className="overline text-dark-muted mb-4">The <strong>30-Day Pilot</strong></p>
          <p className="text-h2 mb-4"><strong>$1,500 to $2,000</strong></p>
          <p className="text-body-lg text-dark-muted mb-6"><strong>Full audit</strong> of your current marketing presence. A roadmap for where to go next. Two to three weeks of live execution so you can see exactly what working with us looks like.</p>
          <p className="text-body text-dark-muted mb-6"><strong>No retainer. No contract. No commitment beyond the month.</strong></p>
          <div className="text-left max-w-md mx-auto mb-8">
            <p className="text-sm font-semibold text-dark-text mb-3">What ships in <strong>30 days</strong>:</p>
            <ul className="space-y-2 text-sm text-dark-muted">
              <li>• Current-state audit (LinkedIn, content, creator presence, or all three)</li>
              <li>• Roadmap covering where to put your attention and why</li>
              <li>• 2 to 3 weeks of live work in your highest-priority channel</li>
              <li>• End-of-pilot debrief with recommendations</li>
            </ul>
          </div>
          <CTAButton to="/contact" variant="primary-inverted">Start my <strong>30-day pilot</strong> →</CTAButton>
          <p className="text-sm text-dark-muted mt-3"><strong>No retainer. No contract.</strong> <strong>We reply within 24 hours.</strong></p>
        </div>
      </section>

      {/* THREE TIERS */}
      <SectionWrapper>
        <div className="container-default">
          <h2 className="text-h2 mb-2">What comes after the pilot.</h2>
          <p className="text-body-lg text-muted-foreground mb-10">If we continue, you pick the program that fits where you are.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <div key={tier.name} className="group bg-surface p-6 md:p-8 flex flex-col relative border border-neutral-200 hover:bg-accent hover:border-accent transition-colors duration-300">
                {tier.badge && <span className="absolute top-4 right-4 bg-foreground text-background text-xs font-semibold px-3 py-1">{tier.badge}</span>}
                <h3 className="text-h3 mb-1 group-hover:text-[#111111]">{tier.name}</h3>
                <p className="text-body font-semibold mb-3 group-hover:text-[#111111]">{tier.price}</p>
                <p className="text-body text-muted-foreground mb-4 group-hover:text-[#111111] transition-colors duration-300">{tier.desc}</p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4 flex-1">
                  {tier.includes.map((item, i) => <li key={i} className="group-hover:text-[#111111] transition-colors duration-300">• {item}</li>)}
                </ul>
                <p className="text-caption mb-4 group-hover:text-[#111111] transition-colors duration-300">For: {tier.forText}</p>
                <CTAButton to="/contact" className="w-full">Start my <strong>30-day pilot</strong> →</CTAButton>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* COMPARISON TABLE */}
      <SectionWrapper>
        <div className="container-wide">
          <p className="overline mb-6">Side by side</p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 pr-4 font-medium"></th>
                  <th className="text-left py-3 px-4 font-semibold">Foundation</th>
                  <th className="text-left py-3 px-4 font-semibold">Engine</th>
                  <th className="text-left py-3 px-4 font-semibold">Full Stack</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i} className="group border-b border-border hover:bg-accent-tint transition-colors duration-200">
                    <td className="py-3 pr-4 font-medium group-hover:text-[#111111]">{row.feature}</td>
                    <td className="py-3 px-4 text-muted-foreground group-hover:text-[#111111] transition-colors duration-200">{row.foundation}</td>
                    <td className="py-3 px-4 text-muted-foreground group-hover:text-[#111111] transition-colors duration-200">{row.engine}</td>
                    <td className="py-3 px-4 text-muted-foreground group-hover:text-[#111111] transition-colors duration-200">{row.fullStack}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </SectionWrapper>

      {/* ADD-ONS */}
      <SectionWrapper>
        <div className="container-default">
          <h2 className="text-h2 mb-6">Need something specific?</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 pr-4 font-medium">Add-on</th>
                  <th className="text-left py-3 px-4 font-medium">Price</th>
                </tr>
              </thead>
              <tbody>
                {addons.map((addon, i) => (
                  <tr key={i} className="group border-b border-border hover:bg-accent-tint transition-colors duration-200">
                    <td className="py-3 pr-4 group-hover:text-[#111111] transition-colors duration-200">{addon.name}</td>
                    <td className="py-3 px-4 text-muted-foreground group-hover:text-[#111111] transition-colors duration-200">{addon.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-caption mt-4">Add-ons bolt onto any tier. We'll tell you in the pilot debrief whether the add-on makes sense for your stage.</p>
        </div>
      </SectionWrapper>

      {/* DECISION HELPER */}
      <SectionWrapper className="bg-surface-alt">
        <div className="container-narrow">
          <h2 className="text-h2 mb-6">Not sure which tier fits?</h2>
          <div className="space-y-6">
            <div className="p-5 border border-border bg-background">
              <p className="text-body font-semibold mb-1">Are you pre-Series A with no marketing hire?</p>
              <p className="text-body text-muted-foreground">Start with <strong>Foundation</strong>. You get a founder LinkedIn presence and SEO base without overbuilding.</p>
            </div>
            <div className="p-5 border border-border bg-background">
              <p className="text-body font-semibold mb-1">Do you have product-market fit and need leads from content?</p>
              <p className="text-body text-muted-foreground"><strong>Engine</strong> is built for this. Founder brand plus company SEO, working together to generate pipeline.</p>
            </div>
            <div className="p-5 border border-border bg-background">
              <p className="text-body font-semibold mb-1">Do you need to prove to your board that content drives demos?</p>
              <p className="text-body text-muted-foreground"><strong>Full Stack</strong> adds attribution, distribution, and original research so you can tie content to revenue.</p>
            </div>
          </div>
          <p className="text-body text-muted-foreground mt-6">Still not sure? Start with the pilot. We'll recommend the right tier in the debrief.</p>
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper>
        <div className="container-default">
          <h2 className="text-h2 mb-10">Common questions.</h2>
          <div className="max-w-3xl">
            {faqs.map((faq, i) => <FAQItem key={i} question={faq.q} answer={faq.a} />)}
          </div>
        </div>
      </SectionWrapper>

      {/* FOOTER CTA — converted to light section */}
      <section className="bg-surface border-t border-b border-border section-padding">
        <div className="container-narrow text-center">
          <h2 className="text-h2 mb-4"><strong>No long contracts.</strong> Start with <strong>30 days</strong>.</h2>
          <p className="text-body text-muted-foreground mb-6">Or reach us at <a href="mailto:vanessa@output-marketing.com" className="underline hover:text-accent transition-colors">vanessa@output-marketing.com</a></p>
          <CTAButton to="/contact">Start my <strong>30-day pilot</strong> →</CTAButton>
          <p className="text-sm text-muted-foreground mt-3"><strong>We reply within 24 hours.</strong></p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Pricing;