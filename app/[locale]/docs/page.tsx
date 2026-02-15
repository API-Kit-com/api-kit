import { redirect } from "next/navigation";
import { isSupportedLocale } from "@/lib/i18n/config";
import { toLocalePath } from "@/lib/i18n/routing";

type DocsPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function DocsPage({ params }: DocsPageProps) {
  const { locale } = await params;
  if (!isSupportedLocale(locale)) {
    redirect(toLocalePath("en", "/docs/getting-started/introduction"));
  }

  redirect(toLocalePath(locale, "/docs/getting-started/introduction"));
}
