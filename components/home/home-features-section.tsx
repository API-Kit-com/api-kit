import type { AppMessages } from "@/messages/types";

type HomeFeaturesSectionProps = {
  home: AppMessages["home"];
};

export function HomeFeaturesSection({ home }: HomeFeaturesSectionProps) {
  return (
    <section className="mx-auto max-w-[1180px] px-6 py-16 sm:px-8">
      <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">{home.featuresLabel}</p>
      <div className="mb-10 mt-4 max-w-3xl">
        <h2 className="text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">{home.featuresTitle}</h2>
        <p className="mt-3 text-muted-foreground">{home.featuresDescription}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {home.featureBenefits.map((feature) => (
          <article key={feature.title} className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-lg font-semibold">{feature.title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
