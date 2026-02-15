import { redirect } from "next/navigation";
import { isSupportedLocale } from "@/lib/i18n/config";
import { toLocalePath } from "@/lib/i18n/routing";

type ApiKitDocsPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function ApiKitDocsPage({ params }: ApiKitDocsPageProps) {
  const { locale } = await params;
  if (!isSupportedLocale(locale)) {
    redirect(toLocalePath("en", "/docs/api-kit/auth"));
  }

  redirect(toLocalePath(locale, "/docs/api-kit/auth"));
}
