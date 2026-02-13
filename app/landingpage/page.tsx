import Link from "next/link";

const headerLinks = ["Use Cases", "Docs", "Blog", "Templates", "Enterprise"];

const featureGrid = [
  {
    title: "Built on React",
    description:
      "Use the latest React features, including Server Components and streaming, with production-ready defaults.",
  },
  {
    title: "From local to global",
    description:
      "Develop fast locally and deploy worldwide with optimized caching, routing, and rendering strategies.",
  },
  {
    title: "Production by default",
    description:
      "Automatic code splitting, image optimization, and data fetching patterns that help you ship confidently.",
  },
  {
    title: "Full-stack tooling",
    description:
      "Handle UI, API routes, metadata, and server mutations inside a single framework and file-based router.",
  },
  {
    title: "Flexible runtime",
    description:
      "Run routes on the edge or Node.js runtime, and choose static or dynamic rendering per page.",
  },
  {
    title: "Ready for scale",
    description:
      "Architectures used by startups and enterprises with strong DX, observability, and deployment workflows.",
  },
];

const resources = [
  {
    title: "Documentation",
    description: "Learn the core concepts and APIs to build modern apps.",
  },
  {
    title: "Learn",
    description: "Follow interactive lessons and build a real app step by step.",
  },
  {
    title: "Templates",
    description: "Start from official and community templates for your stack.",
  },
  {
    title: "Deploy",
    description: "Ship your app with performance best practices already in place.",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#f7f7f7] text-[#111111]">
      <div className="border-b border-black/10 bg-[#111111] text-white">
        <p className="mx-auto max-w-[1200px] px-4 py-2 text-center text-xs sm:text-sm">
          Next.js Conf 2026 is live. New releases, demos, and production patterns.
        </p>
      </div>

      <header className="sticky top-0 z-40 border-b border-black/10 bg-[#fafafa]/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2 text-sm font-semibold">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-black text-xs text-white">▲</span>
            <span>Next.js</span>
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-black/70 md:flex">
            {headerLinks.map((item) => (
              <a key={item} href="#" className="transition hover:text-black">
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button className="hidden rounded-md border border-black/15 bg-white px-3 py-1.5 text-sm text-black/70 transition hover:text-black sm:block">
              Search...
            </button>
            <button className="rounded-md bg-black px-3 py-1.5 text-sm font-medium text-white transition hover:bg-black/85">
              Deploy
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-black/10">
          <div className="next-hero-glow" />
          <div className="next-hero-grid" />
          <div className="next-hero-guides" />
          <div className="next-hero-fade" />
          <div className="pointer-events-none absolute left-[4.2%] top-[20px] h-36 w-36 rounded-full border border-dashed border-black/14 bg-transparent" />
          <div className="pointer-events-none absolute left-[63%] top-[56%] h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-black/14 bg-transparent" />

          <div className="relative mx-auto max-w-[1200px] px-4 pb-18 pt-18 text-center sm:pb-24 sm:pt-24">
            <p className="mx-auto mb-5 inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-black/70">
              ▲ Next.js 16
            </p>

            <h1 className="mx-auto max-w-4xl text-4xl font-semibold tracking-[-0.03em] text-black sm:text-6xl md:text-7xl">
              The React Framework
              <br className="hidden sm:block" />
              for the Web
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-black/65 sm:text-lg">
              Used by some of the world&apos;s largest companies, Next.js enables you to create high-quality web
              applications with the power of React components.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <button className="rounded-md bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-black/85">
                Get started
              </button>
              <button className="rounded-md border border-black/15 bg-white px-5 py-2.5 text-sm text-black transition hover:bg-black/[0.03]">
                Learn Next.js
              </button>
            </div>

            <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_20px_80px_-40px_rgba(0,0,0,0.35)]">
              <div className="flex items-center gap-2 border-b border-black/10 bg-[#fbfbfb] px-4 py-3 text-xs text-black/60">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-2">app/page.tsx</span>
              </div>
              <pre className="overflow-x-auto bg-[#fcfcfc] p-5 text-left text-xs leading-6 text-black/85 sm:text-sm">
                <code>{`export default function Page() {
  return (
    <main>
      <h1>The React Framework for the Web</h1>
      <p>Start building with Next.js today.</p>
    </main>
  )
}`}</code>
              </pre>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-4 py-16 sm:py-20">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featureGrid.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-black/10 bg-white p-6 transition hover:border-black/20"
              >
                <h2 className="text-lg font-semibold tracking-tight">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-black/65">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-black/10 bg-white">
          <div className="mx-auto max-w-[1200px] px-4 py-14 sm:py-16">
            <div className="mb-8 flex items-center justify-between gap-4">
              <h3 className="text-2xl font-semibold tracking-tight">Get started in seconds</h3>
              <a href="#" className="text-sm text-black/70 transition hover:text-black">
                View all resources
              </a>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {resources.map((resource) => (
                <a
                  key={resource.title}
                  href="#"
                  className="rounded-xl border border-black/10 bg-[#fcfcfc] p-5 transition hover:border-black/20"
                >
                  <p className="text-sm font-semibold">{resource.title} →</p>
                  <p className="mt-2 text-sm leading-6 text-black/65">{resource.description}</p>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/10 bg-[#fafafa]">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-4 px-4 py-8 text-sm text-black/60 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Vercel, Inc.</p>
          <div className="flex flex-wrap items-center gap-5">
            <a href="#" className="transition hover:text-black">
              Home
            </a>
            <a href="#" className="transition hover:text-black">
              Docs
            </a>
            <a href="#" className="transition hover:text-black">
              Blog
            </a>
            <a href="#" className="transition hover:text-black">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
