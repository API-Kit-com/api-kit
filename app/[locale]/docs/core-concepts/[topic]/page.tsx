import { notFound } from "next/navigation";
import { DocsShell } from "@/components/docs-shell";
import {
  getCoreConceptTopicMap,
  getCoreConceptTopics,
  isCoreConceptTopicKey,
  type CoreConceptTopicKey,
} from "@/components/docs-content";
import { SUPPORTED_LOCALES, isSupportedLocale } from "@/lib/i18n/config";
import { getMessages } from "@/messages";

type CoreConceptTopicPageProps = {
  params: Promise<{
    locale: string;
    topic: string;
  }>;
};

export function generateStaticParams() {
  const defaultTopics = getCoreConceptTopics("en");
  return SUPPORTED_LOCALES.flatMap((locale) => defaultTopics.map((topic) => ({ locale, topic: topic.key })));
}

export default async function CoreConceptTopicPage({ params }: CoreConceptTopicPageProps) {
  const { locale, topic } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  if (!isCoreConceptTopicKey(topic)) {
    notFound();
  }

  const topicKey = topic as CoreConceptTopicKey;
  const messages = getMessages(locale);
  const shell = messages.docsShell;
  const coreConceptTopics = getCoreConceptTopics(locale);
  const coreConceptTopicMap = getCoreConceptTopicMap(locale);
  const current = coreConceptTopicMap[topicKey];
  const currentIndex = coreConceptTopics.findIndex((item) => item.key === topicKey);
  const previousTopic = currentIndex > 0 ? coreConceptTopics[currentIndex - 1] : null;
  const nextTopic = currentIndex >= 0 && currentIndex < coreConceptTopics.length - 1 ? coreConceptTopics[currentIndex + 1] : null;

  return (
    <DocsShell
      locale={locale}
      activeGroup="core-concepts"
      activeItemId={topicKey}
      pageOverride={current.page}
      previousLink={previousTopic ? { href: previousTopic.href, label: shell.previous } : null}
      nextLink={nextTopic ? { href: nextTopic.href, label: shell.next } : null}
    />
  );
}
