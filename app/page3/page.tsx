import Link from "next/link";

const navItems = ["Product", "Company", "Enterprise", "Coverage", "News"];

const partnerLogos = [
  "Northline",
  "Helix Corp",
  "Proxima",
  "Atlas Labs",
  "Mosaic",
  "VentureBase",
  "Railworks",
  "OmniTech",
];

const performanceCards = [
  {
    title: "Launch fast",
    description:
      "Capture, organize, and distribute institutional knowledge in minutes with clean onboarding flows.",
  },
  {
    title: "Sync your stack",
    description:
      "Connect your tools with integrations, APIs, and event automation so context never gets fragmented.",
  },
  {
    title: "Access anywhere",
    description:
      "Run consistently across desktop, mobile, and field devices for distributed operations and teams.",
  },
];

const featureBenefits = [
  {
    title: "Structured Learning",
    description:
      "Build role-based training tracks with checkpoints, progress visibility, and accountability at scale.",
  },
  {
    title: "Smart Access Controls",
    description:
      "Deliver the right knowledge to the right person with permissioned workflows and secure sharing.",
  },
  {
    title: "Auto Certifications",
    description:
      "Issue completion certificates instantly and maintain an auditable compliance history.",
  },
  {
    title: "HRIS Sync",
    description:
      "Automate provisioning, role updates, and offboarding from your existing people systems.",
  },
  {
    title: "Adaptive Knowledge Hub",
    description:
      "Keep a searchable living knowledge base that evolves with teams, roles, and business context.",
  },
  {
    title: "Enterprise Ready",
    description:
      "Scale governance, reliability, and control across multiple departments and regulated environments.",
  },
];

const modelSteps = ["Construct Model", "Implementation Model", "Test Cases", "Validation"];

const faqItems = [
  {
    q: "What does Echelon-style platform help with?",
    a: "It centralizes policy, learning, and operational knowledge so human teams and AI agents can execute consistently.",
  },
  {
    q: "Is customer data used for model training?",
    a: "No. Sensitive workspace data is isolated with strict controls and can be configured for zero-retention workflows.",
  },
  {
    q: "Can we migrate from existing LMS or wiki tools?",
    a: "Yes. Bulk importers and guided migration flows support content transfer, role mapping, and redirect strategies.",
  },
  {
    q: "Do we need additional software to start?",
    a: "You can start with core modules immediately, then plug in SSO, HRIS, and other integrations over time.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes. You can test the core platform with a free trial and evaluate enterprise controls before rollout.",
  },
];

const footerGroups = [
  {
    title: "Navigations",
    links: ["Product", "Company", "Enterprise", "Coverage", "News"],
  },
  {
    title: "Company",
    links: ["Security", "Legal & Regulatory", "Terms of Service", "Privacy Policy"],
  },
];

export default function Page3() {
  return (
    <div className="min-h-screen bg-[#050a10] text-[#e8eff8]">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#060d15]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[1180px] items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-cyan-300 to-blue-500 text-xs font-bold text-[#031525]">
              E
            </span>
            <span className="text-sm font-semibold tracking-wide">EchelonAI</span>
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-[#c8d4e6] md:flex">
            {navItems.map((item) => (
              <a key={item} href="#" className="transition hover:text-white">
                {item}
              </a>
            ))}
          </nav>

          <button className="rounded-lg bg-gradient-to-r from-cyan-300 to-blue-500 px-3.5 py-1.5 text-sm font-semibold text-[#031525] transition hover:brightness-105">
            Get Started
          </button>
        </div>
      </header>

      <main className="echelon-side-rails">
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(86,189,248,0.25),transparent_34%),radial-gradient(circle_at_90%_0%,rgba(82,110,255,0.25),transparent_30%),linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent_35%)]" />

          <div className="relative mx-auto grid max-w-[1180px] items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-22">
            <div>
              <p className="inline-flex items-center rounded-full border border-cyan-200/25 bg-cyan-200/10 px-3 py-1 text-xs text-cyan-100">
                Knowledge + Compliance Platform
              </p>
              <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl md:text-6xl">
                Knowledge & compliance
                <br />
                for humans and AI agents
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-[#c2d0e2] sm:text-lg">
                Unite employee workflows and AI execution in one operating layer. Train faster, enforce standards,
                and keep every decision aligned with trusted company context.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <button className="rounded-xl bg-gradient-to-r from-cyan-300 to-blue-500 px-5 py-2.5 text-sm font-semibold text-[#031525]">
                  Get Started
                </button>
                <button className="rounded-xl border border-white/20 bg-white/5 px-5 py-2.5 text-sm text-white transition hover:bg-white/10">
                  Book Demo
                </button>
              </div>
            </div>

            <div className="rounded-3xl border border-white/15 bg-[#0a1220]/85 p-4 shadow-[0_30px_90px_-45px_rgba(90,165,255,0.55)]">
              <div className="mb-3 flex items-center gap-2 border-b border-white/10 pb-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                <p className="ml-2 text-xs text-[#9cb0cc]">Control Center</p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <article className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                  <p className="text-xs text-[#9cb0cc]">Policy coverage</p>
                  <p className="mt-1 text-2xl font-semibold">96.4%</p>
                </article>
                <article className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                  <p className="text-xs text-[#9cb0cc]">Agent alignment</p>
                  <p className="mt-1 text-2xl font-semibold">99.1%</p>
                </article>
              </div>

              <div className="mt-3 rounded-xl border border-white/10 bg-white/[0.03] p-3">
                <p className="text-xs text-[#9cb0cc]">Knowledge refresh workflow</p>
                <div className="mt-2 space-y-2 text-xs text-[#d7e2f2]">
                  <p className="rounded-md border border-white/10 bg-white/[0.02] px-2 py-1.5">1. Ingest updated source docs</p>
                  <p className="rounded-md border border-white/10 bg-white/[0.02] px-2 py-1.5">2. Validate conflicting policies</p>
                  <p className="rounded-md border border-white/10 bg-white/[0.02] px-2 py-1.5">3. Publish governed context to agents</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1180px] px-4 py-10">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-8">
            {partnerLogos.map((brand) => (
              <div key={brand} className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-center text-xs text-[#c6d4e8]">
                {brand}
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#070f19]">
          <div className="mx-auto max-w-[1180px] px-4 py-16">
            <div className="mb-10 max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">Centralized & unified performance</h2>
              <p className="mt-4 text-[#bfd0e6]">
                Bring knowledge, onboarding, and compliance tracking into one operational surface that scales with your
                organization.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {performanceCards.map((card) => (
                <article key={card.title} className="rounded-2xl border border-white/12 bg-white/[0.03] p-6">
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#bfd0e6]">{card.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1180px] px-4 py-16">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-cyan-200/75">Features & Benefits</p>
          <div className="mt-4 mb-10 max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
              Powerful features that remove routine effort
            </h2>
            <p className="mt-3 text-[#bfd0e6]">
              Equip teams with structured processes and guardrails so they can focus on decisions that create impact.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featureBenefits.map((feature) => (
              <article
                key={feature.title}
                className="rounded-2xl border border-white/12 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-6"
              >
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#bfd0e6]">{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#060d15]">
          <div className="mx-auto max-w-[1180px] px-4 py-16">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-cyan-200/75">Testimonial</p>
            <article className="mt-5 rounded-3xl border border-white/12 bg-white/[0.03] p-8">
              <p className="text-2xl font-medium leading-relaxed text-[#e7f0fa] sm:text-3xl">
                “This system became our silent partner in execution, turning scattered knowledge into continuous
                intelligence.”
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan-200 to-blue-500" />
                <div>
                  <p className="text-sm font-semibold">Adam Kupfer</p>
                  <p className="text-xs text-[#9eb2ce]">Advisory Board at Galactic</p>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="mx-auto max-w-[1180px] px-4 py-16">
          <div className="mb-10 max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">Compliance built for AI agents</h2>
            <p className="mt-4 text-[#bfd0e6]">
              Establish operational boundaries and keep automated workflows aligned with the latest business truth.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <article className="rounded-2xl border border-white/12 bg-white/[0.03] p-6">
              <div className="mb-4 inline-flex rounded-lg border border-white/12 bg-white/[0.03] p-1 text-xs">
                <span className="rounded-md bg-cyan-300/20 px-3 py-1 text-cyan-100">Business</span>
                <span className="px-3 py-1 text-[#9fb2cd]">Solo</span>
              </div>

              <div className="grid gap-2 sm:grid-cols-2">
                {modelSteps.map((step) => (
                  <div key={step} className="rounded-xl border border-white/10 bg-[#0a1422] p-3">
                    <p className="text-sm font-medium">{step}</p>
                    <p className="mt-1 text-xs text-[#9fb2cd]">Governed workflow block</p>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-sm leading-6 text-[#bfd0e6]">
                Continuously refresh agents with validated context and enforce policy checks before deployment.
              </p>
            </article>

            <div className="grid gap-4">
              <article className="rounded-2xl border border-white/12 bg-white/[0.03] p-6">
                <h3 className="text-lg font-semibold">Vulnerability insights</h3>
                <p className="mt-2 text-sm leading-6 text-[#bfd0e6]">
                  Detect conflicts and edge-case misalignment early with exception monitoring and risk surfacing.
                </p>
                <div className="mt-4 h-28 rounded-xl border border-white/10 bg-[linear-gradient(to_top,rgba(86,189,248,0.20),transparent),repeating-linear-gradient(to_right,transparent,transparent_26px,rgba(255,255,255,0.08)_26px,rgba(255,255,255,0.08)_27px)]" />
              </article>

              <article className="rounded-2xl border border-white/12 bg-white/[0.03] p-6">
                <h3 className="text-lg font-semibold">Audit transparency</h3>
                <p className="mt-2 text-sm leading-6 text-[#bfd0e6]">
                  Track decision paths with detailed logs so compliance teams can review exactly what happened and why.
                </p>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {[
                    ["Audit Report", "24"],
                    ["Agentic Log", "98"],
                    ["Visibility", "100%"],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-lg border border-white/10 bg-[#0a1422] p-2.5">
                      <p className="text-[11px] text-[#9fb2cd]">{label}</p>
                      <p className="mt-1 text-sm font-semibold">{value}</p>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#070f19]">
          <div className="mx-auto max-w-[1180px] px-4 py-16">
            <div className="mb-8 max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">Frequently asked questions</h2>
              <p className="mt-3 text-[#bfd0e6]">Most teams ask these before rollout.</p>
            </div>

            <div className="space-y-3">
              {faqItems.map((item, index) => (
                <details
                  key={item.q}
                  className="group rounded-xl border border-white/12 bg-white/[0.03] p-5"
                  open={index === 0}
                >
                  <summary className="cursor-pointer list-none text-base font-semibold">
                    {item.q}
                    <span className="float-right text-[#9db0cb] group-open:hidden">+</span>
                    <span className="float-right hidden text-[#9db0cb] group-open:inline">-</span>
                  </summary>
                  <p className="mt-3 text-sm leading-6 text-[#bfd0e6]">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1180px] px-4 py-18">
          <div className="rounded-3xl border border-cyan-200/20 bg-gradient-to-br from-[#0d1b2d] via-[#0a1422] to-[#08111c] p-8 sm:p-12">
            <h2 className="text-3xl font-semibold tracking-[-0.02em] sm:text-5xl">
              Try Echelon-style intelligence
              <br className="hidden sm:block" />
              for knowledge & compliance
            </h2>
            <p className="mt-4 max-w-2xl text-[#bfd0e6]">
              Launch a governed operating layer for people and agents with onboarding, policy controls, and full audit
              visibility.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <button className="rounded-xl bg-gradient-to-r from-cyan-300 to-blue-500 px-5 py-2.5 text-sm font-semibold text-[#031525]">
                Sign up
              </button>
              <button className="rounded-xl border border-white/20 bg-white/[0.03] px-5 py-2.5 text-sm text-white">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#050b12]">
        <div className="mx-auto max-w-[1180px] px-4 py-10">
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
            <div>
              <div className="flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-cyan-300 to-blue-500 text-xs font-bold text-[#031525]">
                  E
                </span>
                <p className="text-sm font-semibold">EchelonAI</p>
              </div>
              <p className="mt-3 max-w-sm text-sm leading-6 text-[#9fb2cd]">
                A unified ecosystem for human learning and agent governance.
              </p>
              <p className="mt-4 text-xs text-[#8ca1bd]">All systems operational</p>
            </div>

            {footerGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-semibold">{group.title}</h3>
                <ul className="mt-3 space-y-2 text-sm text-[#9fb2cd]">
                  {group.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="transition hover:text-white">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 border-t border-white/10 pt-4 text-xs text-[#8ca1bd]">
            © 2026 Basewell-style, Inc. Terms of Service | Privacy Policy
          </div>
        </div>
      </footer>
    </div>
  );
}
