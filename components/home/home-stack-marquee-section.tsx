import type { AppMessages } from "@/messages/types";
import { MARQUEE_STACK_ITEMS } from "@/components/home/home-content";

type HomeStackMarqueeSectionProps = {
  home: AppMessages["home"];
};

export function HomeStackMarqueeSection({ home }: HomeStackMarqueeSectionProps) {
  return (
    <section className="border-y border-border bg-muted/30">
      <div className="mx-auto max-w-[1180px] px-6 py-8 sm:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">{home.supportedStacksLabel}</p>
        <div className="stack-marquee-mask mt-4">
          <div className="stack-marquee-track">
            {MARQUEE_STACK_ITEMS.map((stack, index) => (
              <div
                key={`${stack}-${index}`}
                className="shrink-0 whitespace-nowrap rounded-lg border border-border bg-card px-3 py-2 text-xs text-muted-foreground"
              >
                {stack}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
