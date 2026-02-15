import { DEFAULT_LOCALE, isSupportedLocale, type Locale } from "@/lib/i18n/config";

function ensureLeadingSlash(pathname: string) {
  if (!pathname) return "/";
  return pathname.startsWith("/") ? pathname : `/${pathname}`;
}

export function extractLocaleFromPathname(pathname: string): Locale | null {
  const normalized = ensureLeadingSlash(pathname);
  const firstSegment = normalized.split("/")[1]?.toLowerCase();
  if (!firstSegment) return null;
  return isSupportedLocale(firstSegment) ? firstSegment : null;
}

export function stripLocaleFromPathname(pathname: string): string {
  const normalized = ensureLeadingSlash(pathname);
  const [, firstSegment, ...rest] = normalized.split("/");

  if (!firstSegment) return "/";
  if (!isSupportedLocale(firstSegment.toLowerCase())) return normalized;

  const nextPath = `/${rest.join("/")}`;
  return nextPath === "/" ? "/" : nextPath.replace(/\/+$/, "");
}

export function toLocalePath(locale: Locale, pathname: string): string {
  const normalizedPath = stripLocaleFromPathname(ensureLeadingSlash(pathname));
  if (normalizedPath === "/") return `/${locale}`;
  return `/${locale}${normalizedPath}`;
}

export function localizeHref(locale: Locale, href: string): string {
  if (
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("#")
  ) {
    return href;
  }

  const hashIndex = href.indexOf("#");
  const hashPart = hashIndex >= 0 ? href.slice(hashIndex) : "";
  const hrefWithoutHash = hashIndex >= 0 ? href.slice(0, hashIndex) : href;

  const queryIndex = hrefWithoutHash.indexOf("?");
  const queryPart = queryIndex >= 0 ? hrefWithoutHash.slice(queryIndex) : "";
  const pathPart = queryIndex >= 0 ? hrefWithoutHash.slice(0, queryIndex) : hrefWithoutHash;

  return `${toLocalePath(locale, pathPart || "/")}${queryPart}${hashPart}`;
}

export function toHtmlLang(locale: Locale): string {
  if (locale === "pt-br") return "pt-BR";
  return "en";
}

export function getLocaleFromPathname(pathname: string): Locale {
  return extractLocaleFromPathname(pathname) ?? DEFAULT_LOCALE;
}

