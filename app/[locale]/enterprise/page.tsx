import { notFound } from "next/navigation";
import { isSupportedLocale } from "@/lib/i18n/config";
import { getMessages } from "@/messages";

type EnterprisePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function EnterprisePage({ params }: EnterprisePageProps) {
  const { locale } = await params;
  if (!isSupportedLocale(locale)) notFound();
  const messages = getMessages(locale);
  const content = messages.placeholders.enterprise;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="echelon-side-rails min-h-[calc(100vh-4rem)]">
        <section className="relative overflow-hidden border-b border-border">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,oklch(0.60_0.13_163_/_0.12),transparent_36%)]" />
          <div className="relative mx-auto max-w-4xl px-6 py-20 sm:px-8">
            <h1 className="text-3xl font-semibold tracking-tight">{content.title}</h1>
            <p className="mt-3 text-muted-foreground">{content.description}</p>
          </div>
        </section>
      </main>
    </div>
  );
}
