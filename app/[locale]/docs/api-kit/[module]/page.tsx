import { notFound } from "next/navigation";
import { DocsShell } from "@/components/docs-shell";
import {
  ModuleFrameworkDropdown,
  ModuleFrameworkPreview,
} from "@/components/module-framework-selector";
import { getApiKitModuleMap, getApiKitModules, isApiKitModuleKey, type ApiKitModuleKey } from "@/components/docs-content";
import { SUPPORTED_LOCALES, isSupportedLocale } from "@/lib/i18n/config";
import { getMessages } from "@/messages";

type ModuleDocsPageProps = {
  params: Promise<{
    locale: string;
    module: string;
  }>;
  searchParams: Promise<{
    framework?: string | string[];
  }>;
};

export function generateStaticParams() {
  const defaultModules = getApiKitModules("en");
  return SUPPORTED_LOCALES.flatMap((locale) => defaultModules.map((module) => ({ locale, module: module.key })));
}

export default async function ModuleDocsPage({ params, searchParams }: ModuleDocsPageProps) {
  const { locale, module } = await params;
  const { framework } = await searchParams;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  if (!isApiKitModuleKey(module)) {
    notFound();
  }

  const frameworkParam = Array.isArray(framework) ? framework[0] : framework;
  const moduleKey = module as ApiKitModuleKey;
  const messages = getMessages(locale);
  const shell = messages.docsShell;
  const apiKitModules = getApiKitModules(locale);
  const apiKitModuleMap = getApiKitModuleMap(locale);
  const current = apiKitModuleMap[moduleKey];
  const currentIndex = apiKitModules.findIndex((module) => module.key === moduleKey);
  const previousModule = currentIndex > 0 ? apiKitModules[currentIndex - 1] : null;
  const nextModule = currentIndex >= 0 && currentIndex < apiKitModules.length - 1 ? apiKitModules[currentIndex + 1] : null;

  return (
    <DocsShell
      locale={locale}
      activeGroup="api-kit"
      activeItemId={moduleKey}
      pageOverride={current.page}
      previousLink={previousModule ? { href: previousModule.href, label: shell.previous } : null}
      nextLink={nextModule ? { href: nextModule.href, label: shell.next } : null}
      breadcrumbActions={<ModuleFrameworkDropdown locale={locale} selectedKey={frameworkParam} />}
      customTopContent={
        <ModuleFrameworkPreview
          moduleKey={moduleKey}
          moduleLabel={current.label}
          locale={locale}
          selectedKey={frameworkParam}
        />
      }
    />
  );
}
