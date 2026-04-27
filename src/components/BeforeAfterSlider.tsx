import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowLeftRight,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Clock3,
  FileText,
  Linkedin,
  RefreshCcw,
  Rocket,
  TriangleAlert,
} from "lucide-react";

interface BeforeAfterSliderProps {
  before: string[];
  after: string[];
  className?: string;
}

const MapChip = ({
  value,
  className = "",
}: {
  value: string;
  className?: string;
}) => (
  <span
    className={`inline-flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-semibold ${className}`}
  >
    {value}
  </span>
);

const BeforeScene = () => (
  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,17,0.02),rgba(17,17,17,0.08))] p-5 md:p-8">
    <div className="relative h-full overflow-hidden border border-border/80 bg-background/75 shadow-[0_20px_40px_rgba(17,17,17,0.06)]">
      <div className="absolute -left-6 top-10 h-px w-32 rotate-[8deg] bg-rose-400/60" />
      <div className="absolute right-14 top-16 h-px w-28 -rotate-[12deg] bg-amber-500/50" />
      <div className="absolute left-1/2 top-[58%] h-px w-20 -translate-x-1/2 rotate-[18deg] bg-foreground/20" />

      <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-amber-800 shadow-sm">
        <Clock3 className="h-3.5 w-3.5" />
        Late
        <MapChip value="1" className="bg-amber-700 text-white" />
      </div>
      <div className="absolute right-8 top-8 flex items-center gap-2 rounded-full bg-rose-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-rose-700 shadow-sm">
        <TriangleAlert className="h-3.5 w-3.5" />
        No owner
        <MapChip value="2" className="bg-rose-600 text-white" />
      </div>
      <div className="absolute left-[48%] top-[46%] flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-sky-700 shadow-sm">
        <BarChart3 className="h-3.5 w-3.5" />
        Unclear ROI
        <MapChip value="3" className="bg-sky-700 text-white" />
      </div>

      <div className="absolute left-6 top-16 w-[43%] -rotate-3 border border-border bg-background p-4 shadow-[0_12px_30px_rgba(17,17,17,0.08)]">
        <div className="mb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <TriangleAlert className="h-4 w-4 text-rose-500" />
            <p className="overline">Content</p>
          </div>
          <span className="rounded-full bg-rose-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-rose-700">
            Stalled
          </span>
        </div>
        <div className="space-y-2">
          <div className="h-2.5 w-4/5 bg-border" />
          <div className="h-2.5 w-3/5 bg-border" />
          <div className="h-2.5 w-2/5 bg-border" />
        </div>
      </div>

      <div className="absolute right-8 top-20 w-[34%] rotate-[4deg] border border-border bg-surface p-4 shadow-[0_10px_24px_rgba(17,17,17,0.05)]">
        <div className="mb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Rocket className="h-4 w-4 text-amber-600" />
            <p className="overline">Launch</p>
          </div>
          <span className="rounded-full bg-amber-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-amber-800">
            Slipping
          </span>
        </div>
        <div className="space-y-2">
          <div className="h-2.5 w-11/12 bg-border" />
          <div className="h-2.5 w-2/3 bg-border" />
        </div>
      </div>

      <div className="absolute left-12 top-[48%] w-[38%] -rotate-[1deg] border border-border bg-background p-4">
        <div className="mb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Linkedin className="h-4 w-4 text-sky-700" />
            <p className="overline">LinkedIn</p>
          </div>
          <span className="rounded-full bg-slate-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-slate-600">
            Draft
          </span>
        </div>
        <div className="space-y-2">
          <div className="h-2.5 w-5/6 bg-border" />
          <div className="h-2.5 w-2/5 bg-border" />
          <div className="h-2.5 w-1/2 bg-border" />
        </div>
      </div>

      <div className="absolute bottom-8 right-10 grid w-[42%] grid-cols-2 gap-3">
        <div className="border border-border bg-surface p-3">
          <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
            <FileText className="h-3.5 w-3.5 text-foreground/60" />
            Notes
          </div>
          <div className="mt-2 h-10 bg-border/70" />
        </div>
        <div className="border border-border bg-background p-3">
          <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
            <BarChart3 className="h-3.5 w-3.5 text-foreground/60" />
            Metrics?
          </div>
          <div className="mt-2 h-10 bg-border/50" />
        </div>
      </div>
    </div>
  </div>
);

const AfterScene = () => (
  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(212,168,83,0.12),transparent)] p-5 md:p-8">
    <div className="flex h-full flex-col gap-4">
      <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
        <div className="border border-border bg-background p-4">
          <div className="mb-3 flex items-center justify-between gap-3">
            <p className="overline">Weekly rhythm</p>
            <div className="flex flex-wrap items-center justify-end gap-2">
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-1 text-[11px] font-medium text-emerald-800">
                Live
                <MapChip value="1" className="h-4 w-4 bg-emerald-700 text-[9px] text-white" />
              </span>
              <span className="rounded-full bg-sky-100 px-2.5 py-1 text-[11px] font-medium text-sky-800">
                Measured
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-1 text-[11px] font-medium text-amber-800">
                ROI
                <MapChip value="3" className="h-4 w-4 bg-amber-700 text-[9px] text-white" />
              </span>
            </div>
          </div>
          <div className="grid gap-2 md:grid-cols-3">
            <div className="border border-border bg-surface p-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
                  Content
                </p>
              </div>
              <div className="mt-2 space-y-2">
                <div className="h-2 bg-foreground/15" />
                <div className="h-2 w-2/3 bg-foreground/15" />
              </div>
            </div>
            <div className="border border-border bg-surface p-3">
              <div className="flex items-center gap-2">
                <Rocket className="h-4 w-4 text-amber-600" />
                <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
                  Launch
                </p>
                <MapChip value="2" className="h-4 w-4 bg-amber-700 text-[9px] text-white" />
              </div>
              <div className="mt-2 space-y-2">
                <div className="h-2 bg-foreground/15" />
                <div className="h-2 w-3/4 bg-foreground/15" />
              </div>
            </div>
            <div className="border border-border bg-surface p-3">
              <div className="flex items-center gap-2">
                <Linkedin className="h-4 w-4 text-sky-700" />
                <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
                  LinkedIn
                </p>
              </div>
              <div className="mt-2 space-y-2">
                <div className="h-2 bg-foreground/15" />
                <div className="h-2 w-1/2 bg-foreground/15" />
              </div>
            </div>
          </div>
        </div>
        <div className="border border-border bg-background p-4">
          <p className="overline mb-3">Measure and adjust</p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 rounded-sm border border-border bg-surface px-3 py-2 text-sm text-foreground">
              <BarChart3 className="h-4 w-4 text-sky-700" />
              Measure what shipped
            </div>
            <div className="flex items-center gap-3 rounded-sm border border-border bg-surface px-3 py-2 text-sm text-foreground">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              See what moved sales
            </div>
            <div className="flex items-center gap-3 rounded-sm border border-border bg-surface px-3 py-2 text-sm text-foreground">
              <RefreshCcw className="h-4 w-4 text-amber-700" />
              Adjust next week fast
            </div>
          </div>
        </div>
      </div>
      <div className="grid flex-1 gap-4 md:grid-cols-2">
        <div className="border border-border bg-background p-4">
          <p className="overline mb-3">Measured weekly</p>
          <div className="grid h-[calc(100%-1.5rem)] grid-cols-2 gap-3">
            <div className="border border-border bg-surface p-3">
              <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
                <Linkedin className="h-3.5 w-3.5 text-sky-700" />
                Reach
              </div>
              <div className="mt-2 h-9 bg-foreground/10" />
            </div>
            <div className="border border-border bg-surface p-3">
              <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
                <BarChart3 className="h-3.5 w-3.5 text-emerald-700" />
                Pipeline
              </div>
              <div className="mt-2 h-9 bg-foreground/10" />
            </div>
            <div className="border border-border bg-surface p-3">
              <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
                <Rocket className="h-3.5 w-3.5 text-amber-700" />
                Launches
              </div>
              <div className="mt-2 h-9 bg-foreground/10" />
            </div>
            <div className="border border-border bg-surface p-3">
              <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
                <RefreshCcw className="h-3.5 w-3.5 text-foreground/70" />
                Next task
              </div>
              <div className="mt-2 h-9 bg-foreground/10" />
            </div>
          </div>
        </div>
        <div className="border border-border bg-background p-4">
          <p className="overline mb-3">Adjustment loop</p>
          <div className="grid h-[calc(100%-1.5rem)] gap-3">
            <div className="flex items-center gap-3 border border-border bg-surface px-3 py-3 text-sm text-foreground">
              <BarChart3 className="h-4 w-4 text-sky-700" />
              Review what moved
              <MapChip value="3" className="ml-auto h-4 w-4 bg-sky-700 text-[9px] text-white" />
            </div>
            <div className="flex items-center gap-3 border border-border bg-surface px-3 py-3 text-sm text-foreground">
              <RefreshCcw className="h-4 w-4 text-amber-700" />
              Adjust the plan
            </div>
            <div className="flex items-center gap-3 border border-border bg-surface px-3 py-3 text-sm text-foreground">
              <CheckCircle2 className="h-4 w-4 text-emerald-700" />
              Publish with more confidence
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const BeforeAfterSlider = ({
  before,
  after,
  className = "",
}: BeforeAfterSliderProps) => {
  const [split, setSplit] = useState(58);
  const [isDragging, setIsDragging] = useState(false);
  const frameRef = useRef<HTMLDivElement>(null);

  const transformationPairs = useMemo(
    () =>
      before.map((beforeItem, index) => ({
        before: beforeItem,
        after: after[index],
      })),
    [after, before],
  );

  useEffect(() => {
    if (!isDragging) {
      return undefined;
    }

    const updateSplitFromPointer = (clientX: number) => {
      const frame = frameRef.current;

      if (!frame) {
        return;
      }

      const bounds = frame.getBoundingClientRect();
      const next = ((clientX - bounds.left) / bounds.width) * 100;
      setSplit(Math.min(100, Math.max(0, next)));
    };

    const handlePointerMove = (event: PointerEvent) => {
      updateSplitFromPointer(event.clientX);
    };

    const stopDragging = () => {
      setIsDragging(false);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", stopDragging);
    window.addEventListener("pointercancel", stopDragging);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", stopDragging);
      window.removeEventListener("pointercancel", stopDragging);
    };
  }, [isDragging]);

  return (
    <div className={className}>
      <div className="relative overflow-hidden border border-border bg-surface-alt">
        <div ref={frameRef} className="relative aspect-[16/10] overflow-hidden">
          <AfterScene />
          <div
            className="absolute inset-0 overflow-hidden border-r border-border"
            style={{ clipPath: `inset(0 ${100 - split}% 0 0)` }}
          >
            <BeforeScene />
          </div>

          <div
            className="absolute inset-y-0 z-20"
            style={{ left: `calc(${split}% - 1px)` }}
          >
            <div className="relative h-full w-0">
              <div className="h-full w-px bg-foreground/20" />
              <button
                type="button"
                aria-label="Drag to compare before and after"
                onPointerDown={(event) => {
                  event.preventDefault();
                  setIsDragging(true);
                }}
                onKeyDown={(event) => {
                  if (event.key === "ArrowLeft") {
                    event.preventDefault();
                    setSplit((current) => Math.max(0, current - 4));
                  }

                  if (event.key === "ArrowRight") {
                    event.preventDefault();
                    setSplit((current) => Math.min(100, current + 4));
                  }
                }}
                className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize touch-none items-center justify-center rounded-full border border-border bg-background shadow-[0_10px_30px_rgba(17,17,17,0.12)] transition-transform duration-200 hover:scale-105 active:scale-95"
              >
                <ArrowLeftRight className="h-4 w-4 text-foreground" />
              </button>
            </div>
          </div>

          <span className="absolute left-4 top-4 z-30 rounded-full border border-border bg-background px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
            Before
          </span>
          <span className="absolute right-4 top-4 z-30 rounded-full border border-border bg-background px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
            After
          </span>
        </div>
      </div>

      <div className="mt-6 grid items-stretch gap-4 md:grid-cols-3">
        {transformationPairs.map((pair, index) => (
          <div
            key={pair.before}
            className="grid h-full grid-rows-[auto_minmax(0,1fr)_auto_minmax(0,1fr)] gap-4 border border-border bg-background p-5"
          >
            <div className="flex items-center justify-between gap-3">
              <p className="overline">Shift 0{index + 1}</p>
              <MapChip
                value={`${index + 1}`}
                className="border border-border bg-surface text-foreground"
              />
            </div>
            <div className="flex h-full min-h-[8.5rem] flex-col border border-border bg-surface px-4 py-3 md:min-h-[9.5rem]">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                Now
              </p>
              <p className="text-small text-muted-foreground">{pair.before}</p>
            </div>
            <div className="flex items-center gap-3 px-1">
              <div className="h-px flex-1 bg-border" />
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-accent/45">
                <ArrowRight className="h-3.5 w-3.5 text-foreground" />
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>
            <div className="flex h-full min-h-[8.5rem] flex-col border border-border bg-surface-alt px-4 py-3 md:min-h-[9.5rem]">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                With us
              </p>
              <p className="text-small text-foreground">{pair.after}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
