const sourceTracks = [
  {
    label: "General content",
    top: 18,
    endTop: 22,
    strokeWidth: 4,
    endStrokeWidth: 4,
    color: "rgba(17, 17, 17, 0.18)",
    keep: false,
  },
  {
    label: "SEO content",
    top: 33,
    endTop: 28,
    strokeWidth: 8,
    endStrokeWidth: 10,
    color: "#111111",
    keep: true,
    focusLabel: "SEO content",
  },
  {
    label: "Founder-led content",
    top: 48,
    endTop: 48,
    strokeWidth: 6,
    endStrokeWidth: 7,
    color: "#444444",
    keep: true,
    focusLabel: "Founder-led content",
  },
  {
    label: "Launch content",
    top: 63,
    endTop: 68,
    strokeWidth: 7,
    endStrokeWidth: 8,
    color: "#777777",
    keep: true,
    focusLabel: "Launch content",
  },
  {
    label: "Reactive requests",
    top: 78,
    endTop: 74,
    strokeWidth: 3,
    endStrokeWidth: 3,
    color: "rgba(17, 17, 17, 0.12)",
    keep: false,
  },
];

const PilotFocusDiagram = () => {
  return (
    <div className="overflow-hidden border border-border bg-background shadow-[0_16px_40px_rgba(17,17,17,0.05)]">
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 border-b border-border bg-surface-alt px-4 py-4 text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-foreground md:px-6">
        <span>Try a few lanes</span>
        <span className="rounded-full border border-border bg-background px-3 py-1 text-foreground">
          30-day pilot
        </span>
        <span className="text-right">Keep the best ones</span>
      </div>

      <div className="relative min-h-[360px] bg-surface px-4 py-8 md:min-h-[420px] md:px-6">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1000 420"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <line
            x1="500"
            y1="40"
            x2="500"
            y2="370"
            stroke="rgba(17, 17, 17, 0.14)"
            strokeDasharray="8 8"
            strokeWidth="2"
          />

          {sourceTracks.map((track) => {
            const startY = 60 + ((track.top - 18) / 60) * 250;
            const endY = 60 + ((track.endTop - 18) / 60) * 250;

            return (
              <g key={track.label}>
                <path
                  d={`M 220 ${startY} C 300 ${startY}, 390 ${endY}, 500 ${endY}`}
                  fill="none"
                  stroke={track.color}
                  strokeWidth={track.strokeWidth}
                  strokeLinecap="round"
                  opacity={track.keep ? "0.95" : "0.55"}
                />
                {track.keep ? (
                  <path
                    d={`M 500 ${endY} C 620 ${endY}, 710 ${endY}, 805 ${endY}`}
                    fill="none"
                    stroke={track.color}
                    strokeWidth={track.endStrokeWidth}
                    strokeLinecap="round"
                    opacity="0.95"
                  />
                ) : (
                  <>
                    <line
                      x1="487"
                      y1={endY - 9}
                      x2="513"
                      y2={endY + 9}
                      stroke="rgba(17,17,17,0.35)"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      x1="487"
                      y1={endY + 9}
                      x2="513"
                      y2={endY - 9}
                      stroke="rgba(17,17,17,0.35)"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </>
                )}
              </g>
            );
          })}
        </svg>

        <div className="absolute left-1/2 top-4 -translate-x-1/2 text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
          After 30 days
        </div>

        {sourceTracks.map((track) => (
          <div
            key={track.label}
            className="absolute left-4 w-[7rem] text-xs font-medium text-foreground md:left-6 md:w-[10rem] md:text-sm"
            style={{ top: `calc(${track.top}% - 0.9rem)` }}
          >
            {track.label}
          </div>
        ))}

        <div className="absolute right-4 inset-y-0 md:right-6">
          {sourceTracks
            .filter((track) => track.keep)
            .map((track) => (
              <div
                key={track.focusLabel}
                className="absolute right-0 w-[7.5rem] text-right md:w-[12rem]"
                style={{ top: `calc(${track.endTop}% - 0.75rem)` }}
              >
                <p
                  className="text-xs font-medium md:text-sm"
                  style={{ color: track.color }}
                >
                  {track.focusLabel}
                </p>
              </div>
            ))}
        </div>
      </div>

      <div className="border-t border-border bg-surface-alt px-4 py-4 md:px-6">
        <p className="text-sm text-muted-foreground">
          In this example, the pilot showed that{" "}
          <strong className="text-foreground">SEO content</strong>,{" "}
          <strong className="text-foreground">founder-led content</strong>, and{" "}
          <strong className="text-foreground">launch content</strong> were the best bets.
        </p>
      </div>
    </div>
  );
};

export default PilotFocusDiagram;
