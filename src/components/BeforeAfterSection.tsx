interface BeforeAfterSectionProps {
  before: string[];
  after: string[];
  whyShift?: string;
  beforeTitle?: string;
  afterTitle?: string;
  className?: string;
}

const BeforeAfterSection = ({
  before,
  after,
  whyShift,
  beforeTitle = "Before",
  afterTitle = "After",
  className = "",
}: BeforeAfterSectionProps) => {
  return (
    <div className={className}>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="border border-border p-6">
          <p className="overline mb-3">{beforeTitle}</p>
          <h3 className="text-h3 mb-4">What it usually looks like now</h3>
          <ul className="space-y-3 text-body text-muted-foreground">
            {before.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
        <div className="bg-surface border border-border p-6">
          <p className="overline mb-3">{afterTitle}</p>
          <h3 className="text-h3 mb-4">What it should feel like instead</h3>
          <ul className="space-y-3 text-body text-muted-foreground">
            {after.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </div>
      {whyShift ? (
        <p className="text-body text-muted-foreground mt-6 max-w-3xl">{whyShift}</p>
      ) : null}
    </div>
  );
};

export default BeforeAfterSection;
