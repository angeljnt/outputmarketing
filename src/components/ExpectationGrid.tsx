import { ExpectationItem } from "@/content/siteContent";

interface ExpectationGridProps {
  items: ExpectationItem[];
  className?: string;
}

const ExpectationGrid = ({ items, className = "" }: ExpectationGridProps) => {
  return (
    <div className={`grid md:grid-cols-2 gap-6 ${className}`}>
      {items.map((item) => (
        <div key={item.title} className="group p-6 border border-neutral-200 hover:bg-accent hover:border-accent transition-colors duration-300">
          <p className="overline mb-3 group-hover:text-[#111111] transition-colors duration-300">{item.title}</p>
          <p className="text-body text-muted-foreground group-hover:text-[#111111] transition-colors duration-300">
            {item.body}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ExpectationGrid;
