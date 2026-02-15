import { ReliabilityFocusPanel } from "@/components/reliability-focus-panel";
import { RELIABILITY_METRIC_VALUES } from "@/components/home/home-content";
import type { Locale } from "@/lib/i18n/config";
import type { AppMessages } from "@/messages/types";

type HomeReliabilitySectionProps = {
  locale: Locale;
  home: AppMessages["home"];
};

export function HomeReliabilitySection({ locale, home }: HomeReliabilitySectionProps) {
  return (
    <section className="mx-auto max-w-[1180px] px-6 py-16 sm:px-8">
      <div className="mb-10 max-w-3xl">
        <h2 className="text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">{home.reliabilityTitle}</h2>
        <p className="mt-4 text-muted-foreground">{home.reliabilityDescription}</p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <ReliabilityFocusPanel locale={locale} />

        <div className="grid gap-4">
          <article className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-lg font-semibold">{home.requestQualityTitle}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{home.requestQualityDescription}</p>
            <div className="mt-4 h-28 rounded-xl border border-border bg-[linear-gradient(to_top,rgba(29,171,122,0.20),transparent),repeating-linear-gradient(to_right,transparent,transparent_26px,rgba(0,0,0,0.06)_26px,rgba(0,0,0,0.06)_27px)]" />
          </article>

          <article className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-lg font-semibold">{home.performanceObservabilityTitle}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{home.performanceObservabilityDescription}</p>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {home.metricsLabels.map((label, index) => (
                <div key={label} className="rounded-lg border border-border bg-muted p-2.5">
                  <p className="text-[11px] text-muted-foreground">{label}</p>
                  <p className="mt-1 text-sm font-semibold">{RELIABILITY_METRIC_VALUES[index]}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
