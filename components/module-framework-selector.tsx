"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { getFrameworkGuides, type ApiKitModuleKey } from "@/components/docs-content";
import type { Locale } from "@/lib/i18n/config";
import { getMessages } from "@/messages";
import { localizeHref } from "@/lib/i18n/routing";

export type FrameworkOption = {
  key: string;
  label: string;
  description: string;
  groupLabel: string;
  href: string;
};

type FrameworkGroup = {
  key: string;
  label: string;
  options: FrameworkOption[];
};

function getFrameworkGroups(locale: Locale): FrameworkGroup[] {
  const frameworkGuides = getFrameworkGuides(locale);
  return frameworkGuides.map((guide) => ({
    key: guide.key,
    label: guide.label,
    options: guide.page.sections.map((section) => ({
      key: `${guide.key}:${section.id}`,
      label: section.title,
      description: section.description,
      groupLabel: guide.label,
      href: `${guide.href}#${section.id}`,
    })),
  }));
}

function buildIntegrationSnippet(moduleKey: ApiKitModuleKey, frameworkLabel: string) {
  return `import { createApiKitClient } from "@api-kit/sdk";

const apiKit = createApiKitClient({
  apiKey: process.env.API_KIT_API_KEY!,
});

await apiKit.module("${moduleKey}").configure({
  framework: "${frameworkLabel}",
});`;
}

export function resolveFrameworkOption(locale: Locale, selectedKey?: string | null): FrameworkOption {
  const frameworkOptions = getFrameworkGroups(locale).flatMap((group) => group.options);
  return frameworkOptions.find((option) => option.key === selectedKey) ?? frameworkOptions[0];
}

type ModuleFrameworkDropdownProps = {
  locale: Locale;
  selectedKey?: string;
};

export function ModuleFrameworkDropdown({ locale, selectedKey }: ModuleFrameworkDropdownProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const messages = getMessages(locale);
  const moduleFramework = messages.moduleFramework;
  const frameworkGroups = getFrameworkGroups(locale);
  const selectedFramework = resolveFrameworkOption(locale, selectedKey);

  function handleFrameworkChange(nextKey: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("framework", nextKey);
    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }

  return (
    <label className="inline-flex items-center gap-2 text-xs text-muted-foreground">
      {moduleFramework.frameworkLabel}
      <select
        value={selectedFramework.key}
        onChange={(event) => handleFrameworkChange(event.target.value)}
        className="h-7 w-[140px] rounded-md border border-border bg-background px-1.5 text-[11px] text-foreground outline-none focus:ring-2 focus:ring-primary/40 sm:w-[150px]"
      >
        {frameworkGroups.map((group) => (
          <optgroup key={group.key} label={group.label}>
            {group.options.map((option) => (
              <option key={option.key} value={option.key}>
                {option.label}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
    </label>
  );
}

type ModuleFrameworkPreviewProps = {
  moduleKey: ApiKitModuleKey;
  moduleLabel: string;
  locale: Locale;
  selectedKey?: string;
};

export function ModuleFrameworkPreview({ moduleKey, moduleLabel, locale, selectedKey }: ModuleFrameworkPreviewProps) {
  const messages = getMessages(locale);
  const moduleFramework = messages.moduleFramework;
  const selectedFramework = resolveFrameworkOption(locale, selectedKey);
  const integrationSnippet = buildIntegrationSnippet(moduleKey, selectedFramework.label);

  return (
    <section className="rounded-xl border border-border bg-card p-4 sm:p-5">
      <div className="rounded-lg border border-border bg-muted/40 p-4">
        <p className="text-sm font-medium text-foreground">
          {moduleLabel} with {selectedFramework.label}
        </p>
        <p className="mt-2 text-sm text-muted-foreground">{selectedFramework.description}</p>
        <pre className="mt-4 overflow-x-auto rounded-lg border border-border bg-card p-3 text-xs leading-6 sm:text-sm">
          <code>{integrationSnippet}</code>
        </pre>
        <Link
          href={localizeHref(locale, selectedFramework.href)}
          className="mt-3 inline-flex text-sm text-foreground underline underline-offset-4"
        >
          {`${moduleFramework.openGuidePrefix} ${selectedFramework.groupLabel}`}
        </Link>
      </div>
    </section>
  );
}
