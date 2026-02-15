import Image from "next/image";
import Link from "next/link";
import { ReliabilityFocusPanel } from "@/components/reliability-focus-panel";
import type { Locale } from "@/lib/i18n/config";
import { localizeHref } from "@/lib/i18n/routing";
import { getMessages } from "@/messages";

const stackItems = [
  "Node.js",
  "TypeScript",
  "Express.js",
  "NestJS",
  "Fastify",
  "Hono",
  "FastAPI",
  "Django",
  "Flask",
  "Spring Boot",
  "Kotlin + Ktor",
  "Gin (Go)",
  "Fiber (Go)",
  "ASP.NET Core",
  "Ruby on Rails",
  "Phoenix",
  "Actix Web",
];

const marqueeStacks = [...stackItems, ...stackItems];

const moduleChips = ["Auth", "Billing", "Ecommerce", "Notification", "Organization", "Rate Limits", "SDK"];

type HomePageProps = {
  locale: Locale;
};

export function HomePage({ locale }: HomePageProps) {
  const messages = getMessages(locale);
  const home = messages.home;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="echelon-side-rails">
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

        <section className="border-y border-border bg-muted/30">
          <div className="mx-auto max-w-[1180px] px-6 py-8 sm:px-8">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">{home.supportedStacksLabel}</p>
            <div className="stack-marquee-mask mt-4">
              <div className="stack-marquee-track">
                {marqueeStacks.map((stack, index) => (
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
                  {[
                    [home.metricsLabels[0], "24"],
                    [home.metricsLabels[1], "98"],
                    [home.metricsLabels[2], "100%"],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-lg border border-border bg-muted p-2.5">
                      <p className="text-[11px] text-muted-foreground">{label}</p>
                      <p className="mt-1 text-sm font-semibold">{value}</p>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-muted/40">
          <div className="mx-auto max-w-[1180px] px-6 py-16 sm:px-8">
            <div className="mb-8 max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">{home.faqTitle}</h2>
              <p className="mt-3 text-muted-foreground">{home.faqSubtitle}</p>
            </div>

            <div className="space-y-3">
              {home.faqItems.map((item, index) => (
                <details
                  key={item.q}
                  className="group rounded-xl border border-border bg-card p-5"
                  open={index === 0}
                >
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

        <section className="mx-auto max-w-[1180px] px-6 py-18 sm:px-8">
          <div className="rounded-3xl border border-border bg-gradient-to-br from-primary/20 via-primary/10 to-background p-8 sm:p-12">
            <h2 className="text-3xl font-semibold tracking-[-0.02em] sm:text-5xl">
              {home.ctaTitleLine1}
              <br className="hidden sm:block" />
              {home.ctaTitleLine2}
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">{home.ctaDescription}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href={localizeHref(locale, "/docs/api-kit")}
                className="rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
              >
                {home.ctaPrimaryButton}
              </Link>
              <Link
                href={localizeHref(locale, "/docs")}
                className="rounded-xl border border-border bg-card px-5 py-2.5 text-sm text-foreground"
              >
                {home.ctaSecondaryButton}
              </Link>
            </div>
            <div className="mt-5 flex flex-wrap gap-2 text-xs text-muted-foreground">
              {moduleChips.map((module) => (
                <span key={module} className="rounded-full border border-border bg-card px-3 py-1.5">
                  {module}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-background">
        <div className="mx-auto max-w-[1180px] px-6 py-10 sm:px-8">
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <div>
              <div className="flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary">
                  <Image
                    src="/api-kit.svg"
                    alt="API-Kit logo"
                    width={16}
                    height={16}
                    className="h-5 w-5"
                  />
                </span>
                <p className="text-sm font-semibold">API-Kit</p>
              </div>
              <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">{home.footerDescription}</p>
            </div>

            {home.footerGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-semibold">{group.title}</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      {link.comingSoon ? (
                        <span className="text-muted-foreground/70">{link.label}</span>
                      ) : link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition hover:text-foreground"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link href={localizeHref(locale, link.href)} className="transition hover:text-foreground">
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 border-t border-border pt-4 text-xs text-muted-foreground">{home.footerCopyright}</div>
        </div>
      </footer>
    </div>
  );
}
