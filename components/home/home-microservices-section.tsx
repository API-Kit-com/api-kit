import type { AppMessages } from "@/messages/types";

type HomeMicroservicesSectionProps = {
  home: AppMessages["home"];
};

export function HomeMicroservicesSection({ home }: HomeMicroservicesSectionProps) {
  return (
    <section className="border-y border-border bg-muted/40">
      <div className="mx-auto max-w-[1180px] px-6 py-16 sm:px-8">
        <div className="mb-10 max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">{home.modularSectionTitle}</h2>
          <p className="mt-4 text-muted-foreground">{home.modularSectionDescription}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {home.performanceCards.map((card) => (
            <article key={card.title} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
