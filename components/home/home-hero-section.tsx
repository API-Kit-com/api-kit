import type { AppMessages } from "@/messages/types";

type HomeHeroSectionProps = {
  home: AppMessages["home"];
};

export function HomeHeroSection({ home }: HomeHeroSectionProps) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,oklch(0.60_0.13_163_/_0.18),transparent_34%),radial-gradient(circle_at_90%_0%,oklch(0.60_0.13_163_/_0.12),transparent_30%),linear-gradient(to_bottom,rgba(0,0,0,0.02),transparent_35%)]" />

      <div className="relative mx-auto grid max-w-[1180px] items-center gap-10 px-6 py-16 sm:px-8 md:grid-cols-2 md:py-22">
        <div>
          <p className="inline-flex items-center rounded-full border border-border bg-primary/10 px-3 py-1 text-xs text-primary">
            {home.badge}
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl md:text-6xl">
            {home.heroTitleLine1}
            <br />
            {home.heroTitleLine2}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">{home.heroDescription}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button className="rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">
              {home.heroPrimaryCta}
            </button>
            <button className="rounded-xl border border-border bg-card px-5 py-2.5 text-sm text-foreground transition hover:bg-accent">
              {home.heroSecondaryCta}
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-card p-4 shadow-[0_30px_90px_-45px_rgba(0,0,0,0.35)]">
          <div className="mb-3 flex items-center gap-2 border-b border-border pb-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <p className="ml-2 text-xs text-muted-foreground">{home.apiCatalogTitle}</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <article className="rounded-xl border border-border bg-muted p-3">
              <p className="text-xs text-muted-foreground">{home.readyApisLabel}</p>
              <p className="mt-1 text-2xl font-semibold">0</p>
            </article>
            <article className="rounded-xl border border-border bg-muted p-3">
              <p className="text-xs text-muted-foreground">{home.frameworkVariantsLabel}</p>
              <p className="mt-1 text-2xl font-semibold">0</p>
            </article>
          </div>

          <div className="mt-3 rounded-xl border border-border bg-muted p-3">
            <p className="text-xs text-muted-foreground">{home.integrationWorkflowLabel}</p>
            <div className="mt-2 space-y-2 text-xs">
              {home.integrationSteps.map((step) => (
                <p key={step} className="rounded-md border border-border bg-card px-2 py-1.5">
                  {step}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
