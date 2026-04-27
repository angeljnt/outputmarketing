interface FitChecklistProps {
  fitItems: string[];
  notFitItems: string[];
  fitTitle?: string;
  notFitTitle?: string;
  className?: string;
}

const FitChecklist = ({
  fitItems,
  notFitItems,
  fitTitle = "This works for you if...",
  notFitTitle = "This is probably not the best fit if...",
  className = "",
}: FitChecklistProps) => {
  return (
    <div className={`grid md:grid-cols-2 gap-6 ${className}`}>
      <div className="bg-surface border border-border p-6">
        <p className="overline mb-3">Good fit</p>
        <h3 className="text-h3 mb-4">{fitTitle}</h3>
        <ul className="space-y-3 text-body text-muted-foreground">
          {fitItems.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </div>
      <div className="border border-border p-6">
        <p className="overline mb-3">Not ideal</p>
        <h3 className="text-h3 mb-4">{notFitTitle}</h3>
        <ul className="space-y-3 text-body text-muted-foreground">
          {notFitItems.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FitChecklist;
