import Link from "next/link";
import { docsContent, docsNavigation, type DocsGroupKey } from "@/components/docs-content";

type DocsShellProps = {
  activeGroup: DocsGroupKey;
};

export function DocsShell({ activeGroup }: DocsShellProps) {
  const page = docsContent[activeGroup];
  const activeIndex = docsNavigation.findIndex((group) => group.key === activeGroup);
  const previousGroup = activeIndex > 0 ? docsNavigation[activeIndex - 1] : null;
  const nextGroup = activeIndex >= 0 && activeIndex < docsNavigation.length - 1 ? docsNavigation[activeIndex + 1] : null;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="docs-rails relative min-h-[calc(100vh-4rem)]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_4%,oklch(0.60_0.13_163_/_0.16),transparent_32%),radial-gradient(circle_at_88%_0%,oklch(0.60_0.13_163_/_0.12),transparent_30%)]" />

        <div className="relative grid grid-cols-1 md:grid-cols-[240px_minmax(0,1fr)] xl:grid-cols-[minmax(0,1fr)_1148px_minmax(0,1fr)]">
          <aside className="hidden h-[calc(100vh-4rem)] overflow-y-auto px-4 py-8 md:sticky md:top-16 md:block md:border-r md:border-border xl:w-[220px] xl:justify-self-end xl:border-r-0 xl:pr-6">
            {docsNavigation.map((group) => {
              const isActiveGroup = group.key === activeGroup;

              return (
                <div key={group.title} className="mb-7">
                  <Link
                    href={group.href}
                    className={`mb-2 block text-xs font-semibold uppercase tracking-[0.12em] transition ${
                      isActiveGroup ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {group.title}
                  </Link>
                  <ul className="space-y-1">
                    {group.items.map((item, index) => (
                      <li key={item.label}>
                        <Link
                          href={`${group.href}#${item.id}`}
                          className={`block rounded-md px-2 py-1.5 text-sm transition hover:bg-accent hover:text-foreground ${
                            isActiveGroup && index === 0
                              ? "bg-accent text-foreground"
                              : isActiveGroup
                                ? "text-foreground/80"
                                : "text-muted-foreground"
                          }`}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </aside>

          <article className="min-w-0 px-6 py-10 sm:px-10 xl:col-[2]">
            <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
              <span>Docs</span>
              <span>/</span>
              <span className="text-foreground">{page.breadcrumb}</span>
            </div>

            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{page.pageTitle}</h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">{page.description}</p>

            {page.sections.map((section) => (
              <section key={section.id} id={section.id} className="mt-12 scroll-mt-24">
                <h2 className="text-2xl font-semibold tracking-tight">{section.title}</h2>
                <p className="mt-3 text-muted-foreground">{section.description}</p>
                {section.code ? (
                  <pre className="mt-4 overflow-x-auto rounded-xl border border-border bg-card p-4 text-sm leading-6">
                    <code>{section.code}</code>
                  </pre>
                ) : null}
              </section>
            ))}

            <div className="mt-14 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6">
              <span className="text-sm text-muted-foreground">Last updated: Feb 2026</span>
              <div className="flex items-center gap-2">
                {previousGroup ? (
                  <Link
                    href={previousGroup.href}
                    className="rounded-md border border-border px-3 py-1.5 text-sm hover:bg-accent"
                  >
                    Previous
                  </Link>
                ) : (
                  <span className="rounded-md border border-border px-3 py-1.5 text-sm text-muted-foreground">
                    Previous
                  </span>
                )}
                {nextGroup ? (
                  <Link
                    href={nextGroup.href}
                    className="rounded-md border border-border px-3 py-1.5 text-sm hover:bg-accent"
                  >
                    Next
                  </Link>
                ) : (
                  <span className="rounded-md border border-border px-3 py-1.5 text-sm text-muted-foreground">
                    Next
                  </span>
                )}
              </div>
            </div>
          </article>

          <aside className="hidden h-[calc(100vh-4rem)] overflow-y-auto px-4 py-8 xl:sticky xl:top-16 xl:block xl:w-[220px] xl:pl-6">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">On this page</p>
            <ul className="space-y-2 text-sm">
              {page.sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`} className="text-muted-foreground transition hover:text-foreground">
                    {section.title}
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
