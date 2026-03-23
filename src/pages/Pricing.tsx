import { Helmet } from "react-helmet-async";
import SectionWrapper from "@/components/SectionWrapper";
import CTAButton from "@/components/CTAButton";
import FAQItem from "@/components/FAQItem";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const tiers = [
  {
    name: "Signal",
    price: "$2,000 / month",
    desc: "A consistent, human social presence on the channels that matter for your ICP.",
    includes: ["LinkedIn + one additional channel", "12 posts/month", "Content calendar", "Monthly report", "1 strategy call/month"],
    forText: "Early-stage SaaS teams with no marketing hire yet.",
    badge: null,
  },
  {
    name: "Engine",
    price: "$3,500 / month",
    desc: "A content system that builds organic pipeline. Not just followers.",
    includes: ["Full content strategy", "4 SEO articles/month", "16 social posts", "Founder LinkedIn ghostwriting", "Monthly KPI report"],
    forText: "SaaS companies that need leads from content, not just presence.",
    badge: "Most popular",
  },
  {
    name: "Program",
    price: "$5,000 / month",
    desc: "Your first influencer program. Or the one that actually works this time.",
    includes: ["5 to 10 qualified creators/month", "Creator sourcing, briefing, and management", "Full campaign strategy and execution", "ROI measurement and tracking", "Executive-level monthly report"],
    forText: "B2B SaaS and DTC brands ready to build pipeline through creators.",
    badge: null,
  },
];

const comparison = [
  { feature: "Price", signal: "$2,000/mo", engine: "$3,500/mo", program: "$5,000/mo" },
  { feature: "Social posts", signal: "12/mo", engine: "16/mo", program: "—" },
  { feature: "SEO articles", signal: "—", engine: "4/mo", program: "—" },
  { feature: "Ghostwriting (founder)", signal: "—", engine: "Yes", program: "—" },
  { feature: "Creator management", signal: "—", engine: "—", program: "5 to 10/mo" },
  { feature: "Content strategy", signal: "—", engine: "Yes", program: "Yes" },
  { feature: "Campaign execution", signal: "—", engine: "—", program: "Yes" },
  { feature: "ROI reporting", signal: "—", engine: "Monthly KPI", program: "Executive monthly" },
  { feature: "Monthly strategy call", signal: "Yes", engine: "Yes", program: "Yes" },
];

const addons = [
  { name: "CEO / Founder LinkedIn ghostwriting", price: "+$800 / month" },
  { name: "AEO (Answer Engine Optimization) audit", price: "$1,500 one-time" },
  { name: "Campaign landing page", price: "$1,500 to $2,500 one-time" },
  { name: "Influencer campaign measurement report", price: "$500 to $1,000 / month" },
];

const faqs = [
  { q: "Is there a minimum commitment after the pilot?", a: "No. The pilot is the commitment. After that, we move month-to-month. No annual contracts, no lock-ins." },
  { q: "Can I cancel anytime?", a: "Yes. We ask for 30 days notice so we can wrap ongoing work cleanly. That's it." },
  { q: "Do prices change after we start?", a: "No. The rate you start at holds for as long as we work together. We don't sneak in price increases." },
  { q: "What if I want more than one service?", a: "We've run Engine and Program simultaneously for the same client. If the budget and scope makes sense, we can build a custom package. Start with the pilot and we'll figure out the right structure." },
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
          <h1 className="text-display mb-4">See exactly what you'd get. Before you commit to anything.</h1>
          <p className="text-body-lg text-muted-foreground">Every engagement starts with a 30-day pilot. You see the quality. We learn your business. Then you decide.</p>
        </div>
      </SectionWrapper>

      {/* PILOT BLOCK */}
      <section className="bg-dark text-dark-text section-padding">
        <div className="container-narrow text-center">
          <p className="overline text-dark-muted mb-4">The 30-Day Pilot</p>
          <p className="text-h2 mb-4">$1,500 to $2,000</p>
          <p className="text-body-lg text-dark-muted mb-6">Full audit of your current marketing presence. A roadmap for where to go next. Two to three weeks of live execution so you can see exactly what working with us looks like.</p>
          <p className="text-body text-dark-muted mb-6">No retainer. No contract. No commitment beyond the month.</p>
          <div className="text-left max-w-md mx-auto mb-8">
            <p className="text-sm font-semibold text-dark-text mb-3">What ships in 30 days:</p>
            <ul className="space-y-2 text-sm text-dark-muted">
              <li>• Current-state audit (LinkedIn, content, creator presence, or all three)</li>
              <li>• Roadmap covering where to put your attention and why</li>
              <li>• 2 to 3 weeks of live work in your highest-priority channel</li>
              <li>• End-of-pilot debrief with recommendations</li>
            </ul>
          </div>
          <CTAButton to="/contact" variant="primary-inverted">Start my pilot →</CTAButton>
          <p className="text-sm text-dark-muted mt-3">No retainer. No contract. We reply within 24 hours.</p>
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
                <CTAButton to="/contact" className="w-full">Start my pilot →</CTAButton>
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
                  <th className="text-left py-3 px-4 font-semibold">Signal</th>
                  <th className="text-left py-3 px-4 font-semibold">Engine</th>
                  <th className="text-left py-3 px-4 font-semibold">Program</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i} className="group border-b border-border hover:bg-accent-tint transition-colors duration-200">
                    <td className="py-3 pr-4 font-medium group-hover:text-[#111111]">{row.feature}</td>
                    <td className="py-3 px-4 text-muted-foreground group-hover:text-[#111111] transition-colors duration-200">{row.signal}</td>
                    <td className="py-3 px-4 text-muted-foreground group-hover:text-[#111111] transition-colors duration-200">{row.engine}</td>
                    <td className="py-3 px-4 text-muted-foreground group-hover:text-[#111111] transition-colors duration-200">{row.program}</td>
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
          <p className="text-caption mt-4">Add-ons bolt onto any tier. Ask during the pilot debrief and we'll tell you if it makes sense for your stage.</p>
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper>
        <div className="container-default">
          <h2 className="text-h2 mb-10">Questions you probably have.</h2>
          <div className="max-w-3xl">
            {faqs.map((faq, i) => <FAQItem key={i} question={faq.q} answer={faq.a} />)}
          </div>
        </div>
      </SectionWrapper>

      {/* FOOTER CTA */}
      <section className="bg-dark text-dark-text section-padding">
        <div className="container-narrow text-center">
          <h2 className="text-h2 mb-4">No long contracts. Start with 30 days.</h2>
          <p className="text-body text-dark-muted mb-6">Or reach us at <a href="mailto:vanessa@output-marketing.com" className="underline hover:text-accent transition-colors">vanessa@output-marketing.com</a></p>
          <CTAButton to="/contact" variant="primary-inverted">Start my 30-day pilot →</CTAButton>
          <p className="text-sm text-dark-muted mt-3">We reply within 24 hours.</p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Pricing;
