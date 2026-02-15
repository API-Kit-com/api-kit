import Image from "next/image";
import Link from "next/link";
import { ReliabilityFocusPanel } from "@/components/reliability-focus-panel";

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

const performanceCards = [
  {
    title: "Independent microservice modules",
    description:
      "Each API is shipped as an isolated service so teams can download and run only what they need.",
  },
  {
    title: "Composable by design",
    description:
      "Modules are separated but built to connect cleanly, allowing Auth, Billing, and Notifications to work together as one flow.",
  },
  {
    title: "Scale service by service",
    description:
      "Deploy and scale each API independently across your stack while keeping contracts and integration patterns consistent.",
  },
];

const featureBenefits = [
  {
    title: "Download only what you need",
    description:
      "Adopt APIs module by module, so teams can start with one service and expand without platform rewrites.",
  },
  {
    title: "Shared contracts across services",
    description:
      "Keep integrations reliable with consistent schemas, events, and auth boundaries between modules.",
  },
  {
    title: "Framework-specific implementations",
    description:
      "Use production-ready patterns for Node, Python, Java/Kotlin, Go, .NET, Rails, and other ecosystems.",
  },
  {
    title: "Composable module architecture",
    description:
      "Auth, Billing, Notifications, and Organization services stay independent but plug together in complete flows.",
  },
  {
    title: "Open-source by default",
    description:
      "Inspect, extend, and self-host API implementations without depending on closed platform internals.",
  },
  {
    title: "Scale each service independently",
    description:
      "Deploy heavy-traffic modules separately while preserving predictable integration behavior across the platform.",
  },
];

const faqItems = [
  {
    q: "What is API-Kit?",
    a: "API-Kit is an open-source catalog of independent API microservices that teams can plug into their products instead of building core services from scratch.",
  },
  {
    q: "Can we use only one microservice at a time?",
    a: "Yes. Every API is shipped as an independent microservice, so you can adopt only what you need and add more services later.",
  },
  {
    q: "Which stacks are supported?",
    a: "You can choose implementations across Node/JS/TS, Python, Java/Kotlin, and other ecosystems such as Go, .NET, Rails, Elixir, and Rust.",
  },
  {
    q: "Can we self-host and customize the APIs?",
    a: "Yes. Each microservice is open source, so your team can inspect, adapt, and run it in your own infrastructure.",
  },
  {
    q: "How do services connect when used together?",
    a: "Services remain independent but follow shared contracts and integration patterns, so Auth, Billing, and Notifications can be composed in one flow.",
  },
  {
    q: "Do we get visibility for errors and performance?",
    a: "Yes. API-Kit focuses on consistent error handling, request validation for critical routes, and logs to identify fast and slow endpoints.",
  },
];

const footerGroups = [
  {
    title: "Navigation",
    links: [
      { label: "Showcase", href: "/showcase" },
      { label: "Docs", href: "/docs" },
      { label: "Templates", href: "/templates" },
      { label: "Enterprise", href: "/enterprise" },
    ],
  },
  {
    title: "Documentation",
    links: [
      { label: "API-Kit", href: "/docs/api-kit" },
      { label: "Getting Started", href: "/docs/getting-started" },
      { label: "Core Concepts", href: "/docs/core-concepts" },
      { label: "Framework Guides", href: "/docs/framework-guides" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "GitHub", href: "https://github.com/API-Kit-com", external: true },
      { label: "More links coming soon", href: "#", comingSoon: true },
    ],
  },
];

const marqueeStacks = [...stackItems, ...stackItems];

export function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="echelon-side-rails">
        <section className="relative overflow-hidden border-b border-border">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,oklch(0.60_0.13_163_/_0.18),transparent_34%),radial-gradient(circle_at_90%_0%,oklch(0.60_0.13_163_/_0.12),transparent_30%),linear-gradient(to_bottom,rgba(0,0,0,0.02),transparent_35%)]" />

          <div className="relative mx-auto grid max-w-[1180px] items-center gap-10 px-6 py-16 sm:px-8 md:grid-cols-2 md:py-22">
            <div>
              <p className="inline-flex items-center rounded-full border border-border bg-primary/10 px-3 py-1 text-xs text-primary">
                Open-Source API Modules
              </p>
              <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl md:text-6xl">
                Plug ready APIs
                <br />
                into any stack
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
                API-Kit provides open-source API implementations so teams do not need to build from zero. Use the same
                scalable core across Node, Python, Java/Kotlin, Go, .NET, Rails, Phoenix, and more.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <button className="rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">
                  Browse APIs
                </button>
                <button className="rounded-xl border border-border bg-card px-5 py-2.5 text-sm text-foreground transition hover:bg-accent">
                  Pick Your Stack
                </button>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-4 shadow-[0_30px_90px_-45px_rgba(0,0,0,0.35)]">
              <div className="mb-3 flex items-center gap-2 border-b border-border pb-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                <p className="ml-2 text-xs text-muted-foreground">API Catalog</p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <article className="rounded-xl border border-border bg-muted p-3">
                  <p className="text-xs text-muted-foreground">Ready APIs</p>
                  <p className="mt-1 text-2xl font-semibold">0</p>
                </article>
                <article className="rounded-xl border border-border bg-muted p-3">
                  <p className="text-xs text-muted-foreground">Framework variants</p>
                  <p className="mt-1 text-2xl font-semibold">0</p>
                </article>
              </div>

              <div className="mt-3 rounded-xl border border-border bg-muted p-3">
                <p className="text-xs text-muted-foreground">Integration workflow</p>
                <div className="mt-2 space-y-2 text-xs">
                  <p className="rounded-md border border-border bg-card px-2 py-1.5">1. Choose a ready API module</p>
                  <p className="rounded-md border border-border bg-card px-2 py-1.5">2. Select your framework implementation</p>
                  <p className="rounded-md border border-border bg-card px-2 py-1.5">3. Integrate and ship without rebuilding core logic</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-muted/30">
          <div className="mx-auto max-w-[1180px] px-6 py-8 sm:px-8">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">Supported stacks</p>
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
              <h2 className="text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
                Modular microservices that connect together
              </h2>
              <p className="mt-4 text-muted-foreground">
                API-Kit provides open-source APIs as independent microservices. You can adopt each service separately
                and still couple them through shared contracts to build complete, production-ready application flows.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {performanceCards.map((card) => (
                <article key={card.title} className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{card.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1180px] px-6 py-16 sm:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">Features & Benefits</p>
          <div className="mb-10 mt-4 max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
              Powerful features for modular API architecture
            </h2>
            <p className="mt-3 text-muted-foreground">
              Build faster with open-source API modules that stay independent, integrate cleanly, and scale across
              multiple frameworks.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featureBenefits.map((feature) => (
              <article key={feature.title} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-border bg-muted/40">
          <div className="mx-auto max-w-[1180px] px-6 py-16 sm:px-8">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">Testimonial</p>
            <article className="mt-5 rounded-3xl border border-border bg-card p-8">
              <p className="text-2xl font-medium leading-relaxed sm:text-3xl">
                “We do not have an official customer testimonial yet. If everything goes well, we will publish our
                first real user story here very soon.”
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary" />
                <div>
                  <p className="text-sm font-semibold">Coming soon</p>
                  <p className="text-xs text-muted-foreground">Future API-Kit customer case study</p>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="mx-auto max-w-[1180px] px-6 py-16 sm:px-8">
          <div className="mb-10 max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
              API reliability you can verify in production
            </h2>
            <p className="mt-4 text-muted-foreground">
              API-Kit modules are designed to stay compatible when combined. You get consistent error handling,
              request validation for critical routes, and performance visibility so teams can see what is fast and what
              needs optimization.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <ReliabilityFocusPanel />

            <div className="grid gap-4">
              <article className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-lg font-semibold">Request quality insights</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Surface invalid payload patterns, repeated failure points, and routes that need stronger validation
                  before they impact end users.
                </p>
                <div className="mt-4 h-28 rounded-xl border border-border bg-[linear-gradient(to_top,rgba(29,171,122,0.20),transparent),repeating-linear-gradient(to_right,transparent,transparent_26px,rgba(0,0,0,0.06)_26px,rgba(0,0,0,0.06)_27px)]" />
              </article>

              <article className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-lg font-semibold">Performance observability</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Inspect latency trends, slow endpoints, and service-level logs so your team knows exactly what is
                  fast and what needs tuning.
                </p>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {[
                    ["Error Events", "24"],
                    ["P95 Logs", "98"],
                    ["Fast Routes", "100%"],
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
              <h2 className="text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">Frequently asked questions</h2>
              <p className="mt-3 text-muted-foreground">Most teams ask these before integrating API-Kit modules.</p>
            </div>

            <div className="space-y-3">
              {faqItems.map((item, index) => (
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
              Try API-Kit
              <br className="hidden sm:block" />
              in your stack today
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Start with one open-source microservice, choose your framework implementation, and compose more APIs as
              your product grows.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/docs/api-kit"
                className="rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
              >
                Browse API Modules
              </Link>
              <Link
                href="/docs"
                className="rounded-xl border border-border bg-card px-5 py-2.5 text-sm text-foreground"
              >
                Read Documentation
              </Link>
            </div>
            <div className="mt-5 flex flex-wrap gap-2 text-xs text-muted-foreground">
              {["Auth", "Billing", "Ecommerce", "Notification", "Organization", "Rate Limits", "SDK"].map((module) => (
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
              <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
                An open-source ecosystem of independent API microservices that teams can adopt module by module.
              </p>
            </div>

            {footerGroups.map((group) => (
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
                        <Link href={link.href} className="transition hover:text-foreground">
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 border-t border-border pt-4 text-xs text-muted-foreground">
            © 2026 API-Kit, Inc. Open-source API microservices for every stack.
          </div>
        </div>
      </footer>
    </div>
  );
}
