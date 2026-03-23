import { Link } from "react-router-dom";

interface CaseStudyCardProps {
  title: string;
  type: string;
  date: string;
  metrics: string[];
  link: string;
  client?: string;
}

const CaseStudyCard = ({ title, type, date, metrics, link, client }: CaseStudyCardProps) => {
  return (
    <div className="bg-surface p-6 md:p-8 flex flex-col justify-between">
      {client && <p className="overline mb-3">{client}</p>}
      <h3 className="text-h3 mb-2">{title}</h3>
      <p className="text-caption mb-4">{type} · {date}</p>
      <ul className="space-y-1 mb-6">
        {metrics.map((m, i) => (
          <li key={i} className="text-body flex items-start gap-2">
            <span className="text-foreground">•</span>
            <span>{m}</span>
          </li>
        ))}
      </ul>
      <Link
        to={link}
        className="text-sm font-medium text-foreground hover:opacity-60 transition-opacity"
      >
        Read case study →
      </Link>
    </div>
  );
};

export default CaseStudyCard;
