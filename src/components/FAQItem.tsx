import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="group border-b border-border hover:bg-accent-tint transition-colors duration-200 px-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left min-h-[44px]"
      >
        <span className="text-h3 pr-4 group-hover:text-[#111111] transition-colors duration-200">{question}</span>
        <ChevronDown
          className={`w-5 h-5 shrink-0 text-muted-foreground group-hover:text-[#111111] transition-all duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="text-body text-muted-foreground pb-5">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQItem;
