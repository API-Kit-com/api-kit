"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { frameworkGuides, type ApiKitModuleKey } from "@/components/docs-content";

type ModuleFrameworkSelectorProps = {
  moduleKey: ApiKitModuleKey;
  moduleLabel: string;
};

type FrameworkOption = {
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

export function ModuleFrameworkSelector({ moduleKey, moduleLabel }: ModuleFrameworkSelectorProps) {
  const [selectedKey, setSelectedKey] = useState(frameworkOptions[0]?.key ?? "");

  const selectedFramework = useMemo(
    () => frameworkOptions.find((option) => option.key === selectedKey) ?? frameworkOptions[0],
    [selectedKey],
  );

  if (!selectedFramework) {
    return null;
  }

  const integrationSnippet = buildIntegrationSnippet(moduleKey, selectedFramework.label);

  return (
    <section className="rounded-xl border border-border bg-card p-4 sm:p-5">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-foreground">Framework selector</p>
          <p className="text-xs text-muted-foreground">
            Choose the framework to preview a quick {moduleLabel} integration.
          </p>
        </div>
        <label className="flex items-center gap-2 text-sm text-muted-foreground">
          Framework
          <select
            value={selectedKey}
            onChange={(event) => setSelectedKey(event.target.value)}
            className="h-9 min-w-[220px] rounded-md border border-border bg-background px-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/40"
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
      </div>

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
