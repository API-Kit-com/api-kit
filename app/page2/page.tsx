import Link from "next/link";

const navItems = ["Product", "Customers", "Pricing", "Resources", "Docs"];

const trustedBy = [
  "Vercel",
  "Cal.com",
  "Typefully",
  "Resend",
  "Supabase",
  "Raycast",
];

const featureCards = [
  {
    title: "Branded short links",
    description:
      "Connect your own domains and generate short links with custom slugs, tags, and expiration rules.",
  },
  {
    title: "Deep analytics",
    description:
      "Track clicks, unique visitors, devices, geography, and conversions in one clean dashboard.",
  },
  {
    title: "Team workspaces",
    description:
      "Manage projects with granular roles, protected links, and organization-level governance.",
  },
  {
    title: "QR codes",
    description:
      "Create branded QR codes for every link, download in multiple formats, and monitor performance.",
  },
  {
    title: "Link routing",
    description:
      "Route traffic by country, device, language, and more with fast edge-based redirects.",
  },
  {
    title: "Developer API",
    description:
      "Automate everything with a robust REST API and webhooks for your internal workflows.",
  },
];

const faqs = [
  {
    q: "Can I use my own domain?",
    a: "Yes. Add one or many custom domains, verify DNS, and start creating branded links in minutes.",
  },
  {
    q: "Do you support teams?",
    a: "Yes. Invite teammates, assign roles, and manage all projects from one shared workspace.",
  },
  {
    q: "Is there an API?",
    a: "Yes. You can create, update, and delete links programmatically, plus subscribe to webhook events.",
  },
  {
    q: "Can I migrate from another provider?",
    a: "Yes. Bulk import links with metadata and preserve your existing redirect behavior.",
  },
];

const footerGroups = [
  {
    title: "Product",
    links: ["Links", "Analytics", "QR Codes", "API", "Integrations"],
  },
  {
    title: "Company",
    links: ["About", "Customers", "Blog", "Careers", "Contact"],
  },
  {
    title: "Resources",
    links: ["Docs", "Changelog", "Guides", "Status", "Support"],
  },
  {
    title: "Legal",
    links: ["Terms", "Privacy", "DPA", "Security", "Cookies"],
  },
];

export default function Page2() {
  return (
    <div className="min-h-screen bg-[#f8faf8] text-[#0f1412]">
      <div className="border-b border-emerald-900/10 bg-[#07110b] text-emerald-50">
        <p className="mx-auto max-w-[1200px] px-4 py-2 text-center text-xs sm:text-sm">
          New: Faster link routing and conversion insights are now available.
        </p>
      </div>

      <header className="sticky top-0 z-40 border-b border-black/10 bg-[#f8faf8]/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-[#0b2015] text-xs font-bold text-emerald-300">
              d
            </span>
            <span className="text-sm sm:text-base">dub style</span>
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-black/70 md:flex">
            {navItems.map((item) => (
              <a key={item} href="#" className="transition hover:text-black">
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button className="hidden rounded-md px-3 py-1.5 text-sm text-black/70 transition hover:bg-black/5 sm:block">
              Sign in
            </button>
            <button className="rounded-md bg-[#0f1d15] px-3 py-1.5 text-sm font-medium text-emerald-50 transition hover:bg-[#12251a]">
              Start for free
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-black/10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(18,83,49,0.13),transparent_34%),radial-gradient(circle_at_80%_0%,rgba(18,83,49,0.10),transparent_34%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(16,24,20,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,24,20,0.07)_1px,transparent_1px)] bg-[size:120px_120px]" />

          <div className="relative mx-auto grid max-w-[1200px] items-center gap-10 px-4 pb-20 pt-16 md:grid-cols-2 md:pb-24 md:pt-24">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-emerald-900/15 bg-emerald-100/70 px-3 py-1 text-xs text-emerald-900">
                Open-source link infrastructure
              </p>
              <h1 className="mt-5 text-4xl font-semibold tracking-[-0.03em] text-[#0d1712] sm:text-5xl md:text-6xl">
                Short links that
                <br />
                power real growth.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-black/70 sm:text-lg">
                Create branded short links, track every click, and route traffic intelligently. Built for teams that
                care about speed, reliability, and attribution.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <button className="rounded-xl bg-[#0f1d15] px-5 py-2.5 text-sm font-medium text-emerald-50 transition hover:bg-[#12251a]">
                  Start for free
                </button>
                <button className="rounded-xl border border-black/15 bg-white px-5 py-2.5 text-sm text-black transition hover:bg-black/[0.03]">
                  Book a demo
                </button>
              </div>

              <div className="mt-7 flex flex-wrap gap-4 text-sm text-black/65">
                <span>Unlimited links</span>
                <span>•</span>
                <span>Custom domains</span>
                <span>•</span>
                <span>API included</span>
              </div>
            </div>

            <div className="rounded-2xl border border-emerald-900/12 bg-white p-4 shadow-[0_26px_80px_-42px_rgba(11,35,22,0.36)]">
              <div className="rounded-xl border border-black/10 bg-[#f4f7f5] p-3">
                <p className="mb-2 text-xs font-medium text-black/60">Create short link</p>
                <div className="space-y-2">
                  <input
                    readOnly
                    value="https://example.com/super-long-campaign-link"
                    className="w-full rounded-lg border border-black/10 bg-white px-3 py-2 text-sm text-black/70"
                  />
                  <div className="grid grid-cols-[1fr_auto] gap-2">
                    <input
                      readOnly
                      value="go.yourbrand.com/spring-launch"
                      className="w-full rounded-lg border border-black/10 bg-white px-3 py-2 text-sm text-black/70"
                    />
                    <button className="rounded-lg bg-[#0f1d15] px-3 py-2 text-sm font-medium text-emerald-50">
                      Create
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid gap-2 sm:grid-cols-3">
                <div className="rounded-lg border border-black/10 bg-white p-3">
                  <p className="text-xs text-black/55">Clicks</p>
                  <p className="mt-1 text-lg font-semibold">42.8k</p>
                </div>
                <div className="rounded-lg border border-black/10 bg-white p-3">
                  <p className="text-xs text-black/55">CTR</p>
                  <p className="mt-1 text-lg font-semibold">7.4%</p>
                </div>
                <div className="rounded-lg border border-black/10 bg-white p-3">
                  <p className="text-xs text-black/55">Conversions</p>
                  <p className="mt-1 text-lg font-semibold">1,209</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-4 py-12">
          <p className="mb-5 text-center text-xs uppercase tracking-[0.18em] text-black/45">Trusted by modern teams</p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
            {trustedBy.map((brand) => (
              <div key={brand} className="rounded-lg border border-black/10 bg-white px-3 py-2 text-center text-sm text-black/70">
                {brand}
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-black/10 bg-white/70">
          <div className="mx-auto max-w-[1200px] px-4 py-16 sm:py-20">
            <div className="mb-10 max-w-2xl">
              <p className="text-sm text-emerald-900/70">Everything you need</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">A complete platform for link growth</h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {featureCards.map((feature) => (
                <article
                  key={feature.title}
                  className="rounded-2xl border border-black/10 bg-white p-6 transition hover:border-emerald-900/25 hover:shadow-sm"
                >
                  <h3 className="text-lg font-semibold tracking-tight">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-black/65">{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1200px] gap-6 px-4 py-16 sm:py-20 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm text-emerald-900/70">Analytics that matters</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">From click to conversion in one view</h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-black/70">
              Understand the full journey with real-time dashboards, UTM attribution, and filtering by campaign,
              channel, and geography.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-black/70">
              <li>Realtime analytics with low-latency ingestion</li>
              <li>Filter by country, city, device, and source</li>
              <li>Export raw events or stream with webhooks</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-[0_20px_70px_-40px_rgba(0,0,0,0.35)]">
            <div className="mb-4 flex items-center justify-between border-b border-black/10 pb-3">
              <p className="text-sm font-medium">Overview</p>
              <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs text-emerald-900">+18.2%</span>
            </div>
            <div className="h-44 rounded-xl border border-black/10 bg-[linear-gradient(to_top,rgba(16,96,56,0.18),rgba(16,96,56,0.03)),repeating-linear-gradient(to_right,transparent,transparent_24px,rgba(0,0,0,0.04)_24px,rgba(0,0,0,0.04)_25px)]" />
            <div className="mt-4 grid grid-cols-3 gap-2">
              {[
                ["Clicks", "128,321"],
                ["Leads", "7,912"],
                ["Sales", "$92,440"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-lg border border-black/10 bg-[#f7faf8] p-2.5">
                  <p className="text-[11px] text-black/55">{label}</p>
                  <p className="mt-0.5 text-sm font-semibold">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-black/10 bg-[#f3f7f5]">
          <div className="mx-auto max-w-[1200px] px-4 py-16 sm:py-20">
            <div className="mb-8 flex items-end justify-between gap-4">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Pricing that scales with you</h2>
              <a href="#" className="text-sm text-black/65 hover:text-black">
                Compare plans
              </a>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <article className="rounded-2xl border border-black/10 bg-white p-6">
                <p className="text-sm font-medium">Starter</p>
                <p className="mt-3 text-4xl font-semibold">$0</p>
                <p className="mt-2 text-sm text-black/60">For personal projects and early experiments.</p>
                <button className="mt-6 w-full rounded-lg border border-black/15 px-4 py-2 text-sm">Get started</button>
              </article>

              <article className="rounded-2xl border border-emerald-900/25 bg-white p-6 shadow-sm">
                <p className="text-sm font-medium">Pro</p>
                <p className="mt-3 text-4xl font-semibold">$29</p>
                <p className="mt-2 text-sm text-black/60">For teams that need advanced analytics and API access.</p>
                <button className="mt-6 w-full rounded-lg bg-[#0f1d15] px-4 py-2 text-sm font-medium text-emerald-50">
                  Start trial
                </button>
              </article>

              <article className="rounded-2xl border border-black/10 bg-white p-6">
                <p className="text-sm font-medium">Business</p>
                <p className="mt-3 text-4xl font-semibold">Custom</p>
                <p className="mt-2 text-sm text-black/60">For larger organizations with custom security and support.</p>
                <button className="mt-6 w-full rounded-lg border border-black/15 px-4 py-2 text-sm">Talk to sales</button>
              </article>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-4 py-16 sm:py-20">
          <div className="mb-8 max-w-2xl">
            <p className="text-sm text-emerald-900/70">FAQ</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Frequently asked questions</h2>
          </div>

          <div className="grid gap-3">
            {faqs.map((item) => (
              <article key={item.q} className="rounded-xl border border-black/10 bg-white p-5">
                <h3 className="text-base font-semibold">{item.q}</h3>
                <p className="mt-2 text-sm leading-6 text-black/65">{item.a}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-4 pb-20">
          <div className="rounded-3xl border border-emerald-900/15 bg-gradient-to-br from-[#102519] via-[#132d1f] to-[#0c1812] px-6 py-10 text-emerald-50 sm:px-10 sm:py-14">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Build smarter links today</h2>
            <p className="mt-3 max-w-2xl text-emerald-100/75">
              Launch your branded short-link infrastructure with analytics, QR codes, and APIs in a single platform.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <button className="rounded-xl bg-white px-5 py-2.5 text-sm font-medium text-[#0f1d15]">
                Start for free
              </button>
              <button className="rounded-xl border border-emerald-100/30 px-5 py-2.5 text-sm text-emerald-50/95">
                Contact sales
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/10 bg-[#f8faf8]">
        <div className="mx-auto max-w-[1200px] px-4 py-10">
          <div className="grid gap-10 md:grid-cols-[1.2fr_2fr]">
            <div>
              <div className="flex items-center gap-2 font-semibold tracking-tight">
                <span className="grid h-8 w-8 place-items-center rounded-xl bg-[#0b2015] text-xs font-bold text-emerald-300">
                  d
                </span>
                <span>dub style</span>
              </div>
              <p className="mt-3 max-w-sm text-sm text-black/65">
                Link management for modern teams. Branded links, deep analytics, and routing at scale.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {footerGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="text-sm font-semibold">{group.title}</h3>
                  <ul className="mt-3 space-y-2 text-sm text-black/65">
                    {group.links.map((link) => (
                      <li key={link}>
                        <a href="#" className="transition hover:text-black">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 border-t border-black/10 pt-4 text-xs text-black/55">
            © 2026 dub style. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
