import type { AppMessages } from "@/messages/types";

type HomeTestimonialSectionProps = {
  home: AppMessages["home"];
};

export function HomeTestimonialSection({ home }: HomeTestimonialSectionProps) {
  return (
    <section className="border-y border-border bg-muted/40">
      <div className="mx-auto max-w-[1180px] px-6 py-16 sm:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">{home.testimonialLabel}</p>
        <article className="mt-5 rounded-3xl border border-border bg-card p-8">
          <p className="text-2xl font-medium leading-relaxed sm:text-3xl">“{home.testimonialQuote}”</p>
          <div className="mt-6 flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-primary" />
            <div>
              <p className="text-sm font-semibold">{home.testimonialStatus}</p>
              <p className="text-xs text-muted-foreground">{home.testimonialSubtext}</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
