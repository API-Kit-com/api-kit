import { notFound } from "next/navigation";
import { DocsShell } from "@/components/docs-shell";
import { isSupportedLocale } from "@/lib/i18n/config";

type GettingStartedDocsPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function GettingStartedDocsPage({ params }: GettingStartedDocsPageProps) {
  const { locale } = await params;
  if (!isSupportedLocale(locale)) notFound();

  return <DocsShell locale={locale} activeGroup="getting-started" />;
}
