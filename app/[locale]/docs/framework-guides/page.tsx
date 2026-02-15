import { redirect } from "next/navigation";
import { isSupportedLocale } from "@/lib/i18n/config";
import { toLocalePath } from "@/lib/i18n/routing";

type FrameworkGuidesPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function FrameworkGuidesPage({ params }: FrameworkGuidesPageProps) {
  const { locale } = await params;
  if (!isSupportedLocale(locale)) {
    redirect(toLocalePath("en", "/docs/framework-guides/node-js-ts"));
  }

  redirect(toLocalePath(locale, "/docs/framework-guides/node-js-ts"));
}
