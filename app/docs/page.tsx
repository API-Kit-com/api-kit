import Link from "next/link";

const sidebar = [
  {
    title: "Getting Started",
    items: [
      { label: "Introduction", href: "#introduction", active: true },
      { label: "Installation", href: "#installation" },
      { label: "Project Structure", href: "#project-structure" },
      { label: "Routing", href: "#routing" },
    ],
  },
  {
    title: "Core Concepts",
    items: [
      { label: "Data Fetching", href: "#data-fetching" },
      { label: "Styling", href: "#styling" },
      { label: "Deployment", href: "#deployment" },
    ],
  },
  {
    title: "API-Kit",
    items: [
      { label: "Auth", href: "#auth" },
      { label: "Billing", href: "#billing" },
      { label: "Ecommerce", href: "#ecommerce" },
      { label: "Notification", href: "#notification" },
      { label: "Organization", href: "#organization" },
      { label: "Rate Limits", href: "#rate-limits" },
      { label: "SDK", href: "#sdk" },
    ],
  },
];

const toc = [
  { label: "Introduction", href: "#introduction" },
  { label: "Installation", href: "#installation" },
  { label: "Project Structure", href: "#project-structure" },
  { label: "Routing", href: "#routing" },
  { label: "Data Fetching", href: "#data-fetching" },
  { label: "Deployment", href: "#deployment" },
  { label: "Auth", href: "#auth" },
  { label: "Billing", href: "#billing" },
  { label: "Ecommerce", href: "#ecommerce" },
  { label: "Notification", href: "#notification" },
  { label: "Organization", href: "#organization" },
  { label: "Rate Limits", href: "#rate-limits" },
  { label: "SDK", href: "#sdk" },
];

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="docs-rails relative min-h-[calc(100vh-4rem)]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_4%,oklch(0.60_0.13_163_/_0.16),transparent_32%),radial-gradient(circle_at_88%_0%,oklch(0.60_0.13_163_/_0.12),transparent_30%)]" />

        <div className="relative grid grid-cols-1 md:grid-cols-[240px_minmax(0,1fr)] xl:grid-cols-[minmax(0,1fr)_1148px_minmax(0,1fr)]">
          <aside className="hidden h-[calc(100vh-4rem)] overflow-y-auto px-4 py-8 md:sticky md:top-16 md:block md:border-r md:border-border xl:w-[220px] xl:justify-self-end xl:border-r-0 xl:pr-6">
            {sidebar.map((group) => (
              <div key={group.title} className="mb-7">
                <h2 className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  {group.title}
                </h2>
                <ul className="space-y-1">
                  {group.items.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className={`block rounded-md px-2 py-1.5 text-sm transition hover:bg-accent hover:text-foreground ${
                          item.active ? "bg-accent text-foreground" : "text-muted-foreground"
                        }`}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </aside>

          <article className="min-w-0 px-6 py-10 sm:px-10 xl:col-[2]">
            <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
              <span>Docs</span>
              <span>/</span>
              <span className="text-foreground">Getting Started</span>
            </div>

            <h1 id="introduction" className="text-4xl font-semibold tracking-tight sm:text-5xl">
              API-Kit Documentation
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
              Learn how to integrate API-Kit in your product. This section covers setup, project structure, routing,
              and deployment workflows.
            </p>

            <div className="mt-8 rounded-xl border border-border bg-muted/40 p-4 text-sm text-muted-foreground">
              Looking for templates? Open{" "}
              <Link href="/templates" className="text-foreground underline">
                Templates
              </Link>
              .
            </div>

            <section id="installation" className="mt-12 scroll-mt-24">
              <h2 className="text-2xl font-semibold tracking-tight">Installation</h2>
              <p className="mt-3 text-muted-foreground">
                Create a project and install dependencies with your package manager of choice.
              </p>
              <pre className="mt-4 overflow-x-auto rounded-xl border border-border bg-card p-4 text-sm leading-6">
                <code>{`npm create next-app@latest api-kit
cd api-kit
npm install
npm run dev`}</code>
              </pre>
            </section>

            <section id="project-structure" className="mt-12 scroll-mt-24">
              <h2 className="text-2xl font-semibold tracking-tight">Project Structure</h2>
              <p className="mt-3 text-muted-foreground">
                Keep pages in `app/`, shared UI in `components/`, and static assets in `public/`.
              </p>
              <div className="mt-4 rounded-xl border border-border bg-card p-4 text-sm text-muted-foreground">
                <p>app/</p>
                <p>components/</p>
                <p>public/</p>
                <p>lib/</p>
              </div>
            </section>

            <section id="routing" className="mt-12 scroll-mt-24">
              <h2 className="text-2xl font-semibold tracking-tight">Routing</h2>
              <p className="mt-3 text-muted-foreground">
                Routes are file-based. Create a `page.tsx` file inside any folder under `app/`.
              </p>
            </section>

            <section id="data-fetching" className="mt-12 scroll-mt-24">
              <h2 className="text-2xl font-semibold tracking-tight">Data Fetching</h2>
              <p className="mt-3 text-muted-foreground">
                Fetch data directly in Server Components and cache responses according to your rendering strategy.
              </p>
            </section>

            <section id="styling" className="mt-12 scroll-mt-24">
              <h2 className="text-2xl font-semibold tracking-tight">Styling</h2>
              <p className="mt-3 text-muted-foreground">
                This project uses Tailwind and shared theme tokens defined in `app/globals.css`.
              </p>
            </section>

            <section id="deployment" className="mt-12 scroll-mt-24">
              <h2 className="text-2xl font-semibold tracking-tight">Deployment</h2>
              <p className="mt-3 text-muted-foreground">
                Deploy on your preferred platform. Ensure environment variables are configured in production.
              </p>
            </section>

            <section id="auth" className="mt-12 scroll-mt-24">
              <h2 className="text-2xl font-semibold tracking-tight">Authentication</h2>
              <p className="mt-3 text-muted-foreground">
                API-Kit supports token-based auth with scoped keys for backend and service integrations.
              </p>
            </section>

            <section id="billing" className="mt-12 scroll-mt-24">
              <h2 className="text-2xl font-semibold tracking-tight">Billing</h2>
              <p className="mt-3 text-muted-foreground">
                Configure plans, subscriptions, invoices, and usage-based charging with built-in hooks.
              </p>
            </section>

            <section id="ecommerce" className="mt-12 scroll-mt-24">
              <h2 className="text-2xl font-semibold tracking-tight">Ecommerce</h2>
              <p className="mt-3 text-muted-foreground">
                Use API-Kit modules for carts, checkout orchestration, product catalog, and order workflows.
              </p>
            </section>

            <section id="notification" className="mt-12 scroll-mt-24">
              <h2 className="text-2xl font-semibold tracking-tight">Notification</h2>
              <p className="mt-3 text-muted-foreground">
                Send transactional emails, SMS, and push notifications with templating and delivery tracking.
              </p>
            </section>

            <section id="organization" className="mt-12 scroll-mt-24">
              <h2 className="text-2xl font-semibold tracking-tight">Organization</h2>
              <p className="mt-3 text-muted-foreground">
                Manage organizations, roles, members, and workspace-level permissions in a multi-tenant setup.
              </p>
            </section>

            <section id="rate-limits" className="mt-12 scroll-mt-24">
              <h2 className="text-2xl font-semibold tracking-tight">Rate Limits</h2>
              <p className="mt-3 text-muted-foreground">
                Requests are rate-limited per key. Use retries with backoff for resilient clients.
              </p>
            </section>

            <section id="sdk" className="mt-12 scroll-mt-24">
              <h2 className="text-2xl font-semibold tracking-tight">SDK</h2>
              <p className="mt-3 text-muted-foreground">
                Use the official SDK to simplify auth, pagination, and error handling.
              </p>
            </section>

            <div className="mt-14 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6">
              <span className="text-sm text-muted-foreground">Last updated: Feb 2026</span>
              <div className="flex items-center gap-2">
                <button className="rounded-md border border-border px-3 py-1.5 text-sm hover:bg-accent">Previous</button>
                <button className="rounded-md border border-border px-3 py-1.5 text-sm hover:bg-accent">Next</button>
              </div>
            </div>
          </article>

          <aside className="hidden h-[calc(100vh-4rem)] overflow-y-auto px-4 py-8 xl:sticky xl:top-16 xl:block xl:w-[220px] xl:pl-6">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">On this page</p>
            <ul className="space-y-2 text-sm">
              {toc.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-muted-foreground transition hover:text-foreground">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </main>
    </div>
  );
}
