"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { frameworkGuides, type ApiKitModuleKey } from "@/components/docs-content";

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

const frameworkGroups: FrameworkGroup[] = frameworkGuides.map((guide) => ({
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

const frameworkOptions = frameworkGroups.flatMap((group) => group.options);

function buildIntegrationSnippet(moduleKey: ApiKitModuleKey, frameworkLabel: string) {
  return `import { createApiKitClient } from "@api-kit/sdk";

const apiKit = createApiKitClient({
  apiKey: process.env.API_KIT_API_KEY!,
});

await apiKit.module("${moduleKey}").configure({
  framework: "${frameworkLabel}",
});`;
}

export function resolveFrameworkOption(selectedKey?: string | null): FrameworkOption {
  return frameworkOptions.find((option) => option.key === selectedKey) ?? frameworkOptions[0];
}

type ModuleFrameworkDropdownProps = {
  selectedKey?: string;
};

export function ModuleFrameworkDropdown({ selectedKey }: ModuleFrameworkDropdownProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const selectedFramework = resolveFrameworkOption(selectedKey);

  function handleFrameworkChange(nextKey: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("framework", nextKey);
    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }

  return (
    <label className="inline-flex items-center gap-2 text-xs text-muted-foreground">
      Framework
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
  selectedKey?: string;
};

export function ModuleFrameworkPreview({ moduleKey, moduleLabel, selectedKey }: ModuleFrameworkPreviewProps) {
  const selectedFramework = resolveFrameworkOption(selectedKey);
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
          href={selectedFramework.href}
          className="mt-3 inline-flex text-sm text-foreground underline underline-offset-4"
        >
          Open full guide in {selectedFramework.groupLabel}
        </Link>
      </div>
    </section>
  );
}
