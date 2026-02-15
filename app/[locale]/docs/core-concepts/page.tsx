import { notFound } from "next/navigation";
import { DocsShell } from "@/components/docs-shell";
import { isSupportedLocale } from "@/lib/i18n/config";

type CoreConceptsDocsPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function CoreConceptsDocsPage({ params }: CoreConceptsDocsPageProps) {
  const { locale } = await params;
  if (!isSupportedLocale(locale)) notFound();

  return <DocsShell locale={locale} activeGroup="core-concepts" />;
}
