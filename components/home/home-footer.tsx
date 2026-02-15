import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { localizeHref } from "@/lib/i18n/routing";
import type { AppMessages } from "@/messages/types";

type HomeFooterProps = {
  locale: Locale;
  home: AppMessages["home"];
};

export function HomeFooter({ locale, home }: HomeFooterProps) {
  return (
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
  );
}
