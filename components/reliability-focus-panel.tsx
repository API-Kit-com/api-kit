"use client";

import { useMemo, useState } from "react";
import type { Locale } from "@/lib/i18n/config";
import { getMessages } from "@/messages";

type FocusKey = "compatibility" | "reliability";

type ReliabilityFocusPanelProps = {
  locale: Locale;
};

export function ReliabilityFocusPanel({ locale }: ReliabilityFocusPanelProps) {
  const [activeFocus, setActiveFocus] = useState<FocusKey>("compatibility");
  const messages = getMessages(locale);
  const focusMessages = messages.reliabilityFocus;
  const activeCopy = useMemo(
    () => focusMessages[activeFocus],
    [activeFocus, focusMessages],
  );

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
          {focusMessages.compatibilityLabel}
        </button>
        <button
          type="button"
          onClick={() => setActiveFocus("reliability")}
          className={`cursor-pointer rounded-md px-3 py-1 transition ${
            activeFocus === "reliability" ? "bg-primary/20 text-primary" : "text-muted-foreground"
          }`}
        >
          {focusMessages.reliabilityLabel}
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
