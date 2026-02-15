import type { AppMessages } from "@/messages/types";

type HomeFaqSectionProps = {
  home: AppMessages["home"];
};

export function HomeFaqSection({ home }: HomeFaqSectionProps) {
  return (
    <section className="border-y border-border bg-muted/40">
      <div className="mx-auto max-w-[1180px] px-6 py-16 sm:px-8">
        <div className="mb-8 max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">{home.faqTitle}</h2>
          <p className="mt-3 text-muted-foreground">{home.faqSubtitle}</p>
        </div>

        <div className="space-y-3">
          {home.faqItems.map((item, index) => (
            <details key={item.q} className="group rounded-xl border border-border bg-card p-5" open={index === 0}>
              <summary className="cursor-pointer list-none text-base font-semibold">
                {item.q}
                <span className="float-right text-muted-foreground group-open:hidden">+</span>
                <span className="float-right hidden text-muted-foreground group-open:inline">-</span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
