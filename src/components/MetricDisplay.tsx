import { motion } from "framer-motion";

interface MetricDisplayProps {
  value: string;
  label: string;
  className?: string;
}

const MetricDisplay = ({ value, label, className = "" }: MetricDisplayProps) => {
  return (
    <div className={`group text-center px-6 py-4 hover:bg-accent transition-colors duration-300 ${className}`}>
      <motion.div
        className="text-3xl md:text-4xl font-bold leading-tight group-hover:!text-[#111111] transition-colors duration-300"
        initial={{ color: "#6B6B6B" }}
        whileInView={{ color: "#D4A853" }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {value}
      </motion.div>
      <div className="text-caption mt-1 group-hover:text-[#111111] transition-colors duration-300">{label}</div>
    </div>
  );
};

export default MetricDisplay;
