import { notFound } from "next/navigation";
import { HomePage as HomePageComponent } from "@/components/home-page";
import { isSupportedLocale } from "@/lib/i18n/config";

type HomePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  return <HomePageComponent locale={locale} />;
}
