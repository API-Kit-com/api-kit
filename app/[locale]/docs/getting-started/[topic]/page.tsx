import { notFound } from "next/navigation";
import { DocsShell } from "@/components/docs-shell";
import {
  getGettingStartedTopicMap,
  getGettingStartedTopics,
  isGettingStartedTopicKey,
  type GettingStartedTopicKey,
} from "@/components/docs-content";
import { SUPPORTED_LOCALES, isSupportedLocale } from "@/lib/i18n/config";
import { getMessages } from "@/messages";

type GettingStartedTopicPageProps = {
  params: Promise<{
    locale: string;
    topic: string;
  }>;
};

export function generateStaticParams() {
  const defaultTopics = getGettingStartedTopics("en");
  return SUPPORTED_LOCALES.flatMap((locale) => defaultTopics.map((topic) => ({ locale, topic: topic.key })));
}

export default async function GettingStartedTopicPage({ params }: GettingStartedTopicPageProps) {
  const { locale, topic } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  if (!isGettingStartedTopicKey(topic)) {
    notFound();
  }

  const topicKey = topic as GettingStartedTopicKey;
  const messages = getMessages(locale);
  const shell = messages.docsShell;
  const gettingStartedTopics = getGettingStartedTopics(locale);
  const gettingStartedTopicMap = getGettingStartedTopicMap(locale);
  const current = gettingStartedTopicMap[topicKey];
  const currentIndex = gettingStartedTopics.findIndex((item) => item.key === topicKey);
  const previousTopic = currentIndex > 0 ? gettingStartedTopics[currentIndex - 1] : null;
  const nextTopic =
    currentIndex >= 0 && currentIndex < gettingStartedTopics.length - 1 ? gettingStartedTopics[currentIndex + 1] : null;

  return (
    <DocsShell
      locale={locale}
      activeGroup="getting-started"
      activeItemId={topicKey}
      pageOverride={current.page}
      previousLink={previousTopic ? { href: previousTopic.href, label: shell.previous } : null}
      nextLink={nextTopic ? { href: nextTopic.href, label: shell.next } : null}
    />
  );
}
