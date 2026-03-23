import { motion } from "framer-motion";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const SectionWrapper = ({ children, className = "", id }: SectionWrapperProps) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`section-padding ${className}`}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
