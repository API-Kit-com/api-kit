import { redirect } from "next/navigation";
import { isSupportedLocale } from "@/lib/i18n/config";
import { toLocalePath } from "@/lib/i18n/routing";

type GettingStartedDocsPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function GettingStartedDocsPage({ params }: GettingStartedDocsPageProps) {
  const { locale } = await params;
  if (!isSupportedLocale(locale)) {
    redirect(toLocalePath("en", "/docs/getting-started/introduction"));
  }

  redirect(toLocalePath(locale, "/docs/getting-started/introduction"));
}
