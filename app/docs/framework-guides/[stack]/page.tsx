import { notFound } from "next/navigation";
import { DocsShell } from "@/components/docs-shell";
import {
  frameworkGuideMap,
  frameworkGuides,
  isFrameworkGuideKey,
  type FrameworkGuideKey,
} from "@/components/docs-content";

type FrameworkGuidePageProps = {
  params: Promise<{
    stack: string;
  }>;
};

export function generateStaticParams() {
  return frameworkGuides.map((guide) => ({ stack: guide.key }));
}

export default async function FrameworkGuidePage({ params }: FrameworkGuidePageProps) {
  const { stack } = await params;

  if (!isFrameworkGuideKey(stack)) {
    notFound();
  }

  const stackKey = stack as FrameworkGuideKey;
  const current = frameworkGuideMap[stackKey];
  const currentIndex = frameworkGuides.findIndex((guide) => guide.key === stackKey);
  const previousGuide = currentIndex > 0 ? frameworkGuides[currentIndex - 1] : null;
  const nextGuide = currentIndex >= 0 && currentIndex < frameworkGuides.length - 1 ? frameworkGuides[currentIndex + 1] : null;

  return (
    <DocsShell
      activeGroup="framework-guides"
      activeItemId={stackKey}
      pageOverride={current.page}
      previousLink={previousGuide ? { href: previousGuide.href, label: "Previous" } : null}
      nextLink={nextGuide ? { href: nextGuide.href, label: "Next" } : null}
    />
  );
}
