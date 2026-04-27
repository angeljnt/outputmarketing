import { useMemo, useState } from "react";
import CTAButton from "@/components/CTAButton";

interface FitAssessmentChecklistProps {
  requirements: string[];
  notFitItems: string[];
  className?: string;
  hideHeader?: boolean;
}

const FitAssessmentChecklist = ({
  requirements,
  notFitItems,
  className = "",
  hideHeader = false,
}: FitAssessmentChecklistProps) => {
  const [checkedItems, setCheckedItems] = useState<boolean[]>(
    requirements.map(() => false),
  );

  const checkedCount = checkedItems.filter(Boolean).length;

  const status = useMemo(() => {
    if (checkedCount === requirements.length) {
      return {
        label: "Strong fit",
        body: "Strong fit. Message us right away and we can map the right pilot or package fast.",
        badgeClassName: "bg-emerald-100 text-emerald-800 border-emerald-200",
      };
    }

    if (checkedCount >= 3) {
      return {
        label: "Good fit",
        body: "This looks like a good fit. The pilot is probably the right next move.",
        badgeClassName: "bg-amber-100 text-amber-800 border-amber-200",
      };
    }

    if (checkedCount > 0) {
      return {
        label: "Maybe a fit",
        body: "There is enough here to talk, but we may need to tighten the scope first.",
        badgeClassName: "bg-sky-100 text-sky-800 border-sky-200",
      };
    }

    return {
      label: "Not a fit yet",
      body: "Right now this may be too early or too far from the kind of work we do best.",
      badgeClassName: "bg-background text-muted-foreground border-border",
    };
  }, [checkedCount, requirements.length]);

  const toggleItem = (index: number) => {
    setCheckedItems((current) =>
      current.map((value, currentIndex) =>
        currentIndex === index ? !value : value,
      ),
    );
  };

  return (
    <div className={`border border-border bg-surface ${className}`}>
      <div className="grid gap-0 md:grid-cols-[1.15fr_0.85fr]">
        <div className="p-6 md:p-8">
          {!hideHeader && (
            <>
              <p className="overline mb-3">Fit check</p>
              <h3 className="text-h3 mb-6">Check the boxes.</h3>
            </>
          )}

          <div className="space-y-3">
            {requirements.map((item, index) => {
              const checked = checkedItems[index];

              return (
                <label
                  key={item}
                  className={`flex cursor-pointer items-start gap-4 border p-4 transition-colors duration-200 ${
                    checked
                      ? "border-emerald-300 bg-emerald-50"
                      : "border-border bg-background hover:border-foreground/25"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleItem(index)}
                    className="mt-0.5 h-5 w-5 shrink-0 accent-emerald-600"
                  />
                  <span
                    className={`text-body ${
                      checked ? "text-emerald-950" : "text-foreground"
                    }`}
                  >
                    {item}
                  </span>
                </label>
              );
            })}
          </div>
        </div>

        <div className="border-t border-border p-6 md:border-l md:border-t-0 md:p-8">
          <p className="overline mb-3">Current read</p>
          <span
            className={`inline-flex items-center rounded-full border px-3 py-1.5 text-sm font-semibold ${status.badgeClassName}`}
          >
            {status.label}
          </span>
          <p className="mt-4 text-body text-muted-foreground">{status.body}</p>

          <div className="mt-6 border-t border-border pt-6">
            <p className="text-small text-muted-foreground">
              <strong className="text-foreground">{checkedCount}</strong> of{" "}
              <strong className="text-foreground">{requirements.length}</strong>{" "}
              requirements checked
            </p>
            <div className="mt-4 h-2 w-full overflow-hidden bg-background">
              <div
                className="h-full bg-foreground transition-all duration-300"
                style={{
                  width: `${(checkedCount / requirements.length) * 100}%`,
                }}
              />
            </div>
          </div>

          <div className="mt-6 border-t border-border pt-6">
            {checkedCount >= 3 ? (
              <div className="flex flex-col items-center justify-center text-center">
                <p className="overline mb-3">Ready to start?</p>
                <p className="text-body text-muted-foreground mb-5 max-w-xs">
                  This already looks like a good fit. Start with the pilot and we can get moving.
                </p>
                <CTAButton to="/contact">Start my 30-day pilot now →</CTAButton>
              </div>
            ) : (
              <>
                <p className="overline mb-3">Usually not a fit if...</p>
                <div className="space-y-3">
                  {notFitItems.map((item) => (
                    <p key={item} className="text-body text-muted-foreground">
                      • {item}
                    </p>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FitAssessmentChecklist;
