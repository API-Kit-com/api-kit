import { notFound } from "next/navigation";
import { DocsShell } from "@/components/docs-shell";
import {
  getFrameworkGuideMap,
  getFrameworkGuides,
  isFrameworkGuideKey,
  type FrameworkGuideKey,
} from "@/components/docs-content";
import { SUPPORTED_LOCALES, isSupportedLocale } from "@/lib/i18n/config";
import { getMessages } from "@/messages";

type FrameworkGuidePageProps = {
  params: Promise<{
    locale: string;
    stack: string;
  }>;
};

export function generateStaticParams() {
  const defaultGuides = getFrameworkGuides("en");
  return SUPPORTED_LOCALES.flatMap((locale) => defaultGuides.map((guide) => ({ locale, stack: guide.key })));
}

export default async function FrameworkGuidePage({ params }: FrameworkGuidePageProps) {
  const { locale, stack } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  if (!isFrameworkGuideKey(stack)) {
    notFound();
  }

  const stackKey = stack as FrameworkGuideKey;
  const messages = getMessages(locale);
  const shell = messages.docsShell;
  const frameworkGuides = getFrameworkGuides(locale);
  const frameworkGuideMap = getFrameworkGuideMap(locale);
  const current = frameworkGuideMap[stackKey];
  const currentIndex = frameworkGuides.findIndex((guide) => guide.key === stackKey);
  const previousGuide = currentIndex > 0 ? frameworkGuides[currentIndex - 1] : null;
  const nextGuide = currentIndex >= 0 && currentIndex < frameworkGuides.length - 1 ? frameworkGuides[currentIndex + 1] : null;

  return (
    <DocsShell
      locale={locale}
      activeGroup="framework-guides"
      activeItemId={stackKey}
      pageOverride={current.page}
      previousLink={previousGuide ? { href: previousGuide.href, label: shell.previous } : null}
      nextLink={nextGuide ? { href: nextGuide.href, label: shell.next } : null}
    />
  );
}
