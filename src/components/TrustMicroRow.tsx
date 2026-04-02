const TrustMicroRow = ({ className = "" }: { className?: string }) => (
  <div className={`flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground ${className}`}>
    <span className="px-3 py-1 border border-border bg-surface font-medium"><strong>No retainer</strong></span>
    <span className="px-3 py-1 border border-border bg-surface font-medium"><strong>30-day pilot</strong></span>
    <span className="px-3 py-1 border border-border bg-surface font-medium"><strong>Reply within 24 hours</strong></span>
  </div>
);

export default TrustMicroRow;
