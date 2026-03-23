interface MetricDisplayProps {
  value: string;
  label: string;
  className?: string;
}

const MetricDisplay = ({ value, label, className = "" }: MetricDisplayProps) => {
  return (
    <div className={`text-center ${className}`}>
      <div className="text-3xl md:text-4xl font-bold text-foreground leading-tight">{value}</div>
      <div className="text-caption mt-1">{label}</div>
    </div>
  );
};

export default MetricDisplay;
