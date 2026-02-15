"use client";

import { useMemo, useState } from "react";

type FocusKey = "compatibility" | "reliability";

const focusCopy: Record<
  FocusKey,
  {
    steps: string[];
    stepDescription: string;
    summary: string;
  }
> = {
  compatibility: {
    steps: [
      "Align contracts across API modules",
      "Keep version boundaries predictable",
      "Reuse auth and event conventions",
      "Compose services without schema drift",
    ],
    stepDescription: "Compatibility workflow block",
    summary:
      "Keep modules predictable at scale with compatibility checks, shared error patterns, and validation on the endpoints your users hit the most.",
  },
  reliability: {
    steps: [
      "Standardize request contracts",
      "Validate high-volume routes",
      "Handle errors consistently",
      "Track performance in real time",
    ],
    stepDescription: "Reliability workflow block",
    summary:
      "Monitor slow routes, repeated failures, and request quality so teams can quickly find what is fast and what needs optimization.",
  },
};

export function ReliabilityFocusPanel() {
  const [activeFocus, setActiveFocus] = useState<FocusKey>("compatibility");

  const activeCopy = useMemo(() => focusCopy[activeFocus], [activeFocus]);

  return (
    <article className="rounded-2xl border border-border bg-card p-6">
      <div className="mb-4 inline-flex rounded-lg border border-border bg-muted p-1 text-xs">
        <button
          type="button"
          onClick={() => setActiveFocus("compatibility")}
          className={`cursor-pointer rounded-md px-3 py-1 transition ${
            activeFocus === "compatibility" ? "bg-primary/20 text-primary" : "text-muted-foreground"
          }`}
        >
          Compatibility
        </button>
        <button
          type="button"
          onClick={() => setActiveFocus("reliability")}
          className={`cursor-pointer rounded-md px-3 py-1 transition ${
            activeFocus === "reliability" ? "bg-primary/20 text-primary" : "text-muted-foreground"
          }`}
        >
          Reliability
        </button>
      </div>

      <div className="grid gap-2 sm:grid-cols-2">
        {activeCopy.steps.map((step) => (
          <div key={step} className="rounded-xl border border-border bg-muted p-3">
            <p className="text-sm font-medium">{step}</p>
            <p className="mt-1 text-xs text-muted-foreground">{activeCopy.stepDescription}</p>
          </div>
        ))}
      </div>

      <p className="mt-4 text-sm leading-6 text-muted-foreground">{activeCopy.summary}</p>
    </article>
  );
}
