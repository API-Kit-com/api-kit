import { redirect } from "next/navigation";
import { isSupportedLocale } from "@/lib/i18n/config";
import { toLocalePath } from "@/lib/i18n/routing";

type CoreConceptsDocsPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function CoreConceptsDocsPage({ params }: CoreConceptsDocsPageProps) {
  const { locale } = await params;
  if (!isSupportedLocale(locale)) {
    redirect(toLocalePath("en", "/docs/core-concepts/data-fetching"));
  }

  redirect(toLocalePath(locale, "/docs/core-concepts/data-fetching"));
}
