import { notFound } from "next/navigation";
import { DocsShell } from "@/components/docs-shell";
import { apiKitModuleMap, apiKitModules, isApiKitModuleKey, type ApiKitModuleKey } from "@/components/docs-content";

type ModuleDocsPageProps = {
  params: Promise<{
    module: string;
  }>;
};

export function generateStaticParams() {
  return apiKitModules.map((module) => ({ module: module.key }));
}

export default async function ModuleDocsPage({ params }: ModuleDocsPageProps) {
  const { module } = await params;

  if (!isApiKitModuleKey(module)) {
    notFound();
  }

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
    />
  );
}
