import type { Locale } from "@/lib/i18n/config";
import { enMessages } from "@/messages/en";
import { ptBrMessages } from "@/messages/pt-br";
import type { AppMessages } from "@/messages/types";

const messagesByLocale: Record<Locale, AppMessages> = {
  en: enMessages,
  "pt-br": ptBrMessages,
};

export function getMessages(locale: Locale): AppMessages {
  return messagesByLocale[locale];
}

