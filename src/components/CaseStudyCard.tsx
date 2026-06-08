import { Link } from "react-router-dom";

interface CaseStudyCardProps {
  title: string;
  type: string;
  date: string;
  metrics: React.ReactNode[];
  link: string;
  client?: string;
  clientLogo?: string;
  badge?: React.ReactNode;
}

const CaseStudyCard = ({
  title,
  type,
  date,
  metrics,
  link,
  client,
  clientLogo,
  badge,
}: CaseStudyCardProps) => {
  return (
    <div className="group bg-surface p-6 md:p-8 flex flex-col border border-neutral-200 hover:bg-accent hover:border-accent transition-colors duration-300">
      {badge ? <div className="mb-4">{badge}</div> : null}
      {clientLogo ? (
        <img
          src={clientLogo}
          alt={`${client ?? "Client"} logo`}
          className="mb-4 h-5 w-auto object-contain opacity-75 transition-opacity duration-300 group-hover:opacity-100"
          loading="lazy"
        />
      ) : client ? (
        <p className="overline mb-3 group-hover:text-[#111111] transition-colors duration-300">{client}</p>
      ) : null}
      <h3 className="text-h3 mb-2 group-hover:text-[#111111] transition-colors duration-300">{title}</h3>
      <p className="text-caption mb-4 group-hover:text-[#111111] transition-colors duration-300">{type} · {date}</p>
      <ul className="space-y-1 mb-6">
        {metrics.map((m, i) => (
          <li key={i} className="text-body flex items-start gap-2 group-hover:text-[#111111] transition-colors duration-300">
            <span className="text-foreground group-hover:text-[#111111]">•</span>
            <span>{m}</span>
          </li>
        ))}
      </ul>
      <Link
        to={link}
        className="mt-auto text-sm font-medium text-foreground group-hover:text-[#111111] transition-colors"
      >
        Read case study →
      </Link>
    </div>
  );
};

export default CaseStudyCard;
