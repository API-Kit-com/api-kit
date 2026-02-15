import Link from "next/link";
import { API_MODULE_CHIPS } from "@/components/home/home-content";
import type { Locale } from "@/lib/i18n/config";
import { localizeHref } from "@/lib/i18n/routing";
import type { AppMessages } from "@/messages/types";

type HomeFinalCtaSectionProps = {
  locale: Locale;
  home: AppMessages["home"];
};

export function HomeFinalCtaSection({ locale, home }: HomeFinalCtaSectionProps) {
  return (
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
          {API_MODULE_CHIPS.map((module) => (
            <span key={module} className="rounded-full border border-border bg-card px-3 py-1.5">
              {module}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
