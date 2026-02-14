import { notFound } from "next/navigation";
import { DocsShell } from "@/components/docs-shell";
import {
  ModuleFrameworkDropdown,
  ModuleFrameworkPreview,
} from "@/components/module-framework-selector";
import { apiKitModuleMap, apiKitModules, isApiKitModuleKey, type ApiKitModuleKey } from "@/components/docs-content";

type ModuleDocsPageProps = {
  params: Promise<{
    module: string;
  }>;
  searchParams: Promise<{
    framework?: string | string[];
  }>;
};

export function generateStaticParams() {
  return apiKitModules.map((module) => ({ module: module.key }));
}

export default async function ModuleDocsPage({ params, searchParams }: ModuleDocsPageProps) {
  const { module } = await params;
  const { framework } = await searchParams;

  if (!isApiKitModuleKey(module)) {
    notFound();
  }

  const frameworkParam = Array.isArray(framework) ? framework[0] : framework;
  const moduleKey = module as ApiKitModuleKey;
  const current = apiKitModuleMap[moduleKey];
  const currentIndex = apiKitModules.findIndex((module) => module.key === moduleKey);
  const previousModule = currentIndex > 0 ? apiKitModules[currentIndex - 1] : null;
  const nextModule = currentIndex >= 0 && currentIndex < apiKitModules.length - 1 ? apiKitModules[currentIndex + 1] : null;

  return (
    <DocsShell
      activeGroup="api-kit"
      activeItemId={moduleKey}
      pageOverride={current.page}
      previousLink={previousModule ? { href: previousModule.href, label: "Previous" } : null}
      nextLink={nextModule ? { href: nextModule.href, label: "Next" } : null}
      breadcrumbActions={<ModuleFrameworkDropdown selectedKey={frameworkParam} />}
      customTopContent={
        <ModuleFrameworkPreview
          moduleKey={moduleKey}
          moduleLabel={current.label}
          selectedKey={frameworkParam}
        />
      }
    />
  );
}
