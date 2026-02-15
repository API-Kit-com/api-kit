import Image from "next/image";
import Link from "next/link";
import { ReliabilityFocusPanel } from "@/components/reliability-focus-panel";
import type { Locale } from "@/lib/i18n/config";
import { localizeHref } from "@/lib/i18n/routing";

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

const performanceCardsByLocale = {
  en: [
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
  ],
  "pt-br": [
    {
      title: "Módulos de microserviços independentes",
      description:
        "Cada API é entregue como um serviço isolado para o time baixar e usar somente o que precisa.",
    },
    {
      title: "Composição por design",
      description:
        "Os módulos são separados, mas conectam de forma limpa, permitindo que Auth, Billing e Notification funcionem juntos em um fluxo único.",
    },
    {
      title: "Escala serviço por serviço",
      description:
        "Faça deploy e escale cada API de forma independente mantendo contratos e integração consistentes.",
    },
  ],
} satisfies Record<Locale, Array<{ title: string; description: string }>>;

const featureBenefitsByLocale = {
  en: [
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
  ],
  "pt-br": [
    {
      title: "Baixe só o que precisa",
      description:
        "Adote as APIs por módulo, começando por um serviço e expandindo sem reescrever a plataforma.",
    },
    {
      title: "Contratos compartilhados entre serviços",
      description:
        "Mantenha integrações confiáveis com schemas, eventos e limites de autenticação consistentes.",
    },
    {
      title: "Implementações por framework",
      description:
        "Use padrões prontos para Node, Python, Java/Kotlin, Go, .NET, Rails e outros ecossistemas.",
    },
    {
      title: "Arquitetura modular e componível",
      description:
        "Auth, Billing, Notification e Organization permanecem independentes e conectáveis em fluxos completos.",
    },
    {
      title: "Open-source por padrão",
      description:
        "Inspecione, estenda e rode as implementações sem depender de internals fechados de plataforma.",
    },
    {
      title: "Escala independente por serviço",
      description:
        "Escalone módulos de alto tráfego de forma isolada sem perder previsibilidade de integração.",
    },
  ],
} satisfies Record<Locale, Array<{ title: string; description: string }>>;

const faqItemsByLocale = {
  en: [
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
  ],
  "pt-br": [
    {
      q: "O que é o API-Kit?",
      a: "API-Kit é um catálogo open-source de microserviços de API independentes para acelerar produtos sem começar do zero.",
    },
    {
      q: "Posso usar só um microserviço por vez?",
      a: "Sim. Cada API é independente, então você pode adotar somente o necessário e evoluir com novos módulos depois.",
    },
    {
      q: "Quais stacks são suportadas?",
      a: "Você pode escolher implementações para Node/JS/TS, Python, Java/Kotlin e outros ecossistemas como Go, .NET, Rails, Elixir e Rust.",
    },
    {
      q: "Podemos fazer self-host e customizar as APIs?",
      a: "Sim. Cada microserviço é open source, permitindo inspeção, adaptação e execução na sua própria infraestrutura.",
    },
    {
      q: "Como os serviços se conectam quando usados juntos?",
      a: "Os serviços seguem contratos e padrões de integração compartilhados, permitindo compor Auth, Billing e Notification em um único fluxo.",
    },
    {
      q: "Temos visibilidade de erros e performance?",
      a: "Sim. O API-Kit prioriza tratamento consistente de erros, validação de rotas críticas e logs para identificar gargalos.",
    },
  ],
} satisfies Record<Locale, Array<{ q: string; a: string }>>;

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
  comingSoon?: boolean;
};

type FooterGroup = {
  title: string;
  links: FooterLink[];
};

const footerGroupsByLocale: Record<Locale, FooterGroup[]> = {
  en: [
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
  ],
  "pt-br": [
    {
      title: "Navegação",
      links: [
        { label: "Vitrine", href: "/showcase" },
        { label: "Documentação", href: "/docs" },
        { label: "Templates", href: "/templates" },
        { label: "Enterprise", href: "/enterprise" },
      ],
    },
    {
      title: "Documentação",
      links: [
        { label: "API-Kit", href: "/docs/api-kit" },
        { label: "Primeiros passos", href: "/docs/getting-started" },
        { label: "Conceitos principais", href: "/docs/core-concepts" },
        { label: "Guias de framework", href: "/docs/framework-guides" },
      ],
    },
    {
      title: "Comunidade",
      links: [
        { label: "GitHub", href: "https://github.com/API-Kit-com", external: true },
        { label: "Mais links em breve", href: "#", comingSoon: true },
      ],
    },
  ],
};

const marqueeStacks = [...stackItems, ...stackItems];

type HomePageProps = {
  locale: Locale;
};

export function HomePage({ locale }: HomePageProps) {
  const isPtBr = locale === "pt-br";
  const performanceCards = performanceCardsByLocale[locale];
  const featureBenefits = featureBenefitsByLocale[locale];
  const faqItems = faqItemsByLocale[locale];
  const footerGroups = footerGroupsByLocale[locale];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="echelon-side-rails">
        <section className="relative overflow-hidden border-b border-border">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,oklch(0.60_0.13_163_/_0.18),transparent_34%),radial-gradient(circle_at_90%_0%,oklch(0.60_0.13_163_/_0.12),transparent_30%),linear-gradient(to_bottom,rgba(0,0,0,0.02),transparent_35%)]" />

          <div className="relative mx-auto grid max-w-[1180px] items-center gap-10 px-6 py-16 sm:px-8 md:grid-cols-2 md:py-22">
            <div>
              <p className="inline-flex items-center rounded-full border border-border bg-primary/10 px-3 py-1 text-xs text-primary">
                {isPtBr ? "Módulos de API Open Source" : "Open-Source API Modules"}
              </p>
              <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl md:text-6xl">
                {isPtBr ? "Conecte APIs prontas" : "Plug ready APIs"}
                <br />
                {isPtBr ? "em qualquer stack" : "into any stack"}
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
                {isPtBr
                  ? "API-Kit oferece implementações open-source de APIs para os times não precisarem começar do zero. Use o mesmo núcleo escalável em Node, Python, Java/Kotlin, Go, .NET, Rails, Phoenix e mais."
                  : "API-Kit provides open-source API implementations so teams do not need to build from zero. Use the same scalable core across Node, Python, Java/Kotlin, Go, .NET, Rails, Phoenix, and more."}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <button className="rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">
                  {isPtBr ? "Explorar APIs" : "Browse APIs"}
                </button>
                <button className="rounded-xl border border-border bg-card px-5 py-2.5 text-sm text-foreground transition hover:bg-accent">
                  {isPtBr ? "Escolher Stack" : "Pick Your Stack"}
                </button>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-4 shadow-[0_30px_90px_-45px_rgba(0,0,0,0.35)]">
              <div className="mb-3 flex items-center gap-2 border-b border-border pb-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                <p className="ml-2 text-xs text-muted-foreground">{isPtBr ? "Catálogo de APIs" : "API Catalog"}</p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <article className="rounded-xl border border-border bg-muted p-3">
                  <p className="text-xs text-muted-foreground">{isPtBr ? "APIs prontas" : "Ready APIs"}</p>
                  <p className="mt-1 text-2xl font-semibold">0</p>
                </article>
                <article className="rounded-xl border border-border bg-muted p-3">
                  <p className="text-xs text-muted-foreground">{isPtBr ? "Variações de framework" : "Framework variants"}</p>
                  <p className="mt-1 text-2xl font-semibold">0</p>
                </article>
              </div>

              <div className="mt-3 rounded-xl border border-border bg-muted p-3">
                <p className="text-xs text-muted-foreground">{isPtBr ? "Fluxo de integração" : "Integration workflow"}</p>
                <div className="mt-2 space-y-2 text-xs">
                  <p className="rounded-md border border-border bg-card px-2 py-1.5">
                    {isPtBr ? "1. Escolha um módulo de API pronto" : "1. Choose a ready API module"}
                  </p>
                  <p className="rounded-md border border-border bg-card px-2 py-1.5">
                    {isPtBr ? "2. Selecione sua implementação de framework" : "2. Select your framework implementation"}
                  </p>
                  <p className="rounded-md border border-border bg-card px-2 py-1.5">
                    {isPtBr
                      ? "3. Integre e entregue sem reconstruir a lógica central"
                      : "3. Integrate and ship without rebuilding core logic"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-muted/30">
          <div className="mx-auto max-w-[1180px] px-6 py-8 sm:px-8">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
              {isPtBr ? "Stacks suportadas" : "Supported stacks"}
            </p>
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
                {isPtBr ? "Microserviços modulares que se conectam" : "Modular microservices that connect together"}
              </h2>
              <p className="mt-4 text-muted-foreground">
                {isPtBr
                  ? "API-Kit oferece APIs open-source como microserviços independentes. Você pode adotar cada serviço separadamente e conectá-los por contratos compartilhados para construir fluxos completos de produção."
                  : "API-Kit provides open-source APIs as independent microservices. You can adopt each service separately and still couple them through shared contracts to build complete, production-ready application flows."}
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
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">
            {isPtBr ? "Recursos e benefícios" : "Features & Benefits"}
          </p>
          <div className="mb-10 mt-4 max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
              {isPtBr ? "Recursos poderosos para arquitetura modular de APIs" : "Powerful features for modular API architecture"}
            </h2>
            <p className="mt-3 text-muted-foreground">
              {isPtBr
                ? "Construa mais rápido com módulos open-source que permanecem independentes, integram com clareza e escalam em múltiplos frameworks."
                : "Build faster with open-source API modules that stay independent, integrate cleanly, and scale across multiple frameworks."}
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
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">
              {isPtBr ? "Depoimento" : "Testimonial"}
            </p>
            <article className="mt-5 rounded-3xl border border-border bg-card p-8">
              <p className="text-2xl font-medium leading-relaxed sm:text-3xl">
                {isPtBr
                  ? "“Ainda não temos um depoimento oficial de cliente. Se tudo der certo, em breve publicaremos aqui nosso primeiro caso real de uso.”"
                  : "“We do not have an official customer testimonial yet. If everything goes well, we will publish our first real user story here very soon.”"}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary" />
                <div>
                  <p className="text-sm font-semibold">{isPtBr ? "Em breve" : "Coming soon"}</p>
                  <p className="text-xs text-muted-foreground">
                    {isPtBr ? "Próximo case real de cliente API-Kit" : "Future API-Kit customer case study"}
                  </p>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="mx-auto max-w-[1180px] px-6 py-16 sm:px-8">
          <div className="mb-10 max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
              {isPtBr ? "Confiabilidade de API verificável em produção" : "API reliability you can verify in production"}
            </h2>
            <p className="mt-4 text-muted-foreground">
              {isPtBr
                ? "Os módulos do API-Kit foram desenhados para manter compatibilidade quando combinados. Você tem tratamento consistente de erros, validação em rotas críticas e visibilidade de performance para saber o que está rápido e o que precisa otimizar."
                : "API-Kit modules are designed to stay compatible when combined. You get consistent error handling, request validation for critical routes, and performance visibility so teams can see what is fast and what needs optimization."}
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <ReliabilityFocusPanel locale={locale} />

            <div className="grid gap-4">
              <article className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-lg font-semibold">
                  {isPtBr ? "Insights de qualidade das requisições" : "Request quality insights"}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {isPtBr
                    ? "Identifique padrões de payload inválido, falhas recorrentes e rotas que precisam de validação mais forte antes de impactar o usuário final."
                    : "Surface invalid payload patterns, repeated failure points, and routes that need stronger validation before they impact end users."}
                </p>
                <div className="mt-4 h-28 rounded-xl border border-border bg-[linear-gradient(to_top,rgba(29,171,122,0.20),transparent),repeating-linear-gradient(to_right,transparent,transparent_26px,rgba(0,0,0,0.06)_26px,rgba(0,0,0,0.06)_27px)]" />
              </article>

              <article className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-lg font-semibold">
                  {isPtBr ? "Observabilidade de performance" : "Performance observability"}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {isPtBr
                    ? "Inspecione tendências de latência, endpoints lentos e logs de serviço para saber exatamente o que está rápido e o que precisa de ajuste."
                    : "Inspect latency trends, slow endpoints, and service-level logs so your team knows exactly what is fast and what needs tuning."}
                </p>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {[
                    [isPtBr ? "Eventos de erro" : "Error Events", "24"],
                    [isPtBr ? "Logs P95" : "P95 Logs", "98"],
                    [isPtBr ? "Rotas rápidas" : "Fast Routes", "100%"],
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
              <h2 className="text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
                {isPtBr ? "Perguntas frequentes" : "Frequently asked questions"}
              </h2>
              <p className="mt-3 text-muted-foreground">
                {isPtBr
                  ? "Essas são as perguntas mais comuns antes de integrar os módulos do API-Kit."
                  : "Most teams ask these before integrating API-Kit modules."}
              </p>
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
              {isPtBr ? "Experimente o API-Kit" : "Try API-Kit"}
              <br className="hidden sm:block" />
              {isPtBr ? "na sua stack hoje" : "in your stack today"}
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              {isPtBr
                ? "Comece com um microserviço open-source, escolha sua implementação de framework e componha mais APIs conforme seu produto evolui."
                : "Start with one open-source microservice, choose your framework implementation, and compose more APIs as your product grows."}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href={localizeHref(locale, "/docs/api-kit")}
                className="rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
              >
                {isPtBr ? "Explorar módulos de API" : "Browse API Modules"}
              </Link>
              <Link
                href={localizeHref(locale, "/docs")}
                className="rounded-xl border border-border bg-card px-5 py-2.5 text-sm text-foreground"
              >
                {isPtBr ? "Ler documentação" : "Read Documentation"}
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
                {isPtBr
                  ? "Um ecossistema open-source de microserviços de API independentes para adoção módulo a módulo."
                  : "An open-source ecosystem of independent API microservices that teams can adopt module by module."}
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

          <div className="mt-10 border-t border-border pt-4 text-xs text-muted-foreground">
            {isPtBr
              ? "© 2026 API-Kit, Inc. Microserviços de API open-source para qualquer stack."
              : "© 2026 API-Kit, Inc. Open-source API microservices for every stack."}
          </div>
        </div>
      </footer>
    </div>
  );
}
