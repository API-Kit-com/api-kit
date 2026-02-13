import Link from "next/link";

const navItems = ["Showcase", "Docs", "Blog", "Templates", "Enterprise"];

const featureCards = [
  {
    title: "App Router",
    description:
      "Build full-stack React applications with nested layouts, streaming, and server components.",
  },
  {
    title: "Caching",
    description:
      "Choose static or dynamic rendering per route and optimize with built-in caching controls.",
  },
  {
    title: "Server Actions",
    description:
      "Run secure mutations on the server with simple form-based APIs and progressive enhancement.",
  },
  {
    title: "Turbopack",
    description:
      "Get instant feedback in development with a Rust-powered bundler built for speed.",
  },
  {
    title: "Image Optimization",
    description:
      "Deliver responsive, optimized images automatically with modern formats and lazy loading.",
  },
  {
    title: "Edge & Node",
    description:
      "Deploy where it makes sense: edge for low latency, node for heavy server-side workloads.",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-white/20">
      <div className="border-b border-white/10 bg-[#111111]">
        <p className="mx-auto max-w-7xl px-4 py-2 text-center text-xs text-white/75 sm:text-sm">
          Next.js Conf is back. Build production-grade apps with React and AI.
        </p>
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050505]/90 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2 text-sm font-semibold tracking-tight">
            <span className="grid h-7 w-7 place-items-center rounded-full border border-white/20 text-xs">N</span>
            <span>Next.js</span>
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            {navItems.map((item) => (
              <a key={item} href="#" className="transition hover:text-white">
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button className="rounded-lg border border-white/20 px-3 py-1.5 text-sm text-white/85 transition hover:border-white/40 hover:text-white">
              Search
            </button>
            <button className="rounded-lg bg-white px-3 py-1.5 text-sm font-medium text-black transition hover:bg-white/90">
              Deploy
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.2),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.15),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.12),transparent_40%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 md:grid-cols-2 md:items-center md:py-28">
            <div>
              <p className="mb-4 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/75">
                React Framework for the Web
              </p>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
                Build instantly.
                <br />
                Ship confidently.
              </h1>
              <p className="mt-5 max-w-xl text-base text-white/70 sm:text-lg">
                Next.js gives you everything needed for production: hybrid rendering, routing, data fetching,
                and performance defaults that scale.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button className="rounded-xl bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-white/90">
                  Start Deploying
                </button>
                <button className="rounded-xl border border-white/20 px-5 py-2.5 text-sm text-white transition hover:border-white/40">
                  Get a Demo
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-white/15 bg-[#0d0d0d] p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_20px_70px_-30px_rgba(255,255,255,0.35)]">
              <div className="mb-3 flex items-center gap-2 border-b border-white/10 pb-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                <p className="ml-2 text-xs text-white/50">Terminal</p>
              </div>
              <pre className="overflow-x-auto text-xs leading-6 text-white/85 sm:text-sm">
                <code>{`$ npx create-next-app@latest
✔ What is your project named? ... api-kit
✔ TypeScript? ... Yes
✔ ESLint? ... Yes
✔ Tailwind CSS? ... Yes

Success! Created api-kit at /workspace/api-kit

$ cd api-kit
$ npm run dev

ready - started server on 0.0.0.0:3000`}</code>
              </pre>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm text-white/60">Production features</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">Everything you need to ship</h2>
            </div>
            <a href="#" className="text-sm text-white/70 underline-offset-4 transition hover:text-white hover:underline">
              Explore docs
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featureCards.map((card) => (
              <article
                key={card.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/25 hover:bg-white/[0.05]"
              >
                <h3 className="text-lg font-medium">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/70">{card.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-4 py-14">
            <p className="mb-5 text-center text-sm text-white/55">Trusted by teams shipping at scale</p>
            <div className="grid grid-cols-2 gap-4 text-center text-sm text-white/65 sm:grid-cols-3 md:grid-cols-6">
              {[
                "OpenAI",
                "Netflix",
                "Twitch",
                "Nike",
                "Spotify",
                "Vercel",
              ].map((brand) => (
                <div key={brand} className="rounded-lg border border-white/10 bg-black/40 py-3">
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Start building your next product</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            Use this /landingpage as a polished home experience inspired by nextjs.org and adapt its blocks to
            your brand.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button className="rounded-xl bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-white/90">
              Create Project
            </button>
            <button className="rounded-xl border border-white/20 px-5 py-2.5 text-sm text-white transition hover:border-white/40">
              View GitHub
            </button>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>MIT Licensed. Copyright 2026.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="transition hover:text-white">
              Docs
            </a>
            <a href="#" className="transition hover:text-white">
              Learn
            </a>
            <a href="#" className="transition hover:text-white">
              GitHub
            </a>
            <a href="#" className="transition hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
