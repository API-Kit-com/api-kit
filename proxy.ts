import { NextRequest, NextResponse } from "next/server";
import { DEFAULT_LOCALE, LOCALE_COOKIE, isSupportedLocale, type Locale } from "@/lib/i18n/config";
import { extractLocaleFromPathname, stripLocaleFromPathname, toLocalePath } from "@/lib/i18n/routing";

const LOCALE_CANDIDATE_PATTERN = /^[a-z]{2}(?:-[a-z]{2})?$/i;

function parseAcceptLanguage(headerValue: string | null): string[] {
  if (!headerValue) return [];

  return headerValue
    .split(",")
    .map((part) => {
      const [languagePart, ...params] = part.trim().split(";");
      const qParam = params.find((param) => param.trim().startsWith("q="));
      const quality = qParam ? Number.parseFloat(qParam.split("=")[1]) : 1;

      return {
        language: languagePart.toLowerCase(),
        quality: Number.isNaN(quality) ? 0 : quality,
      };
    })
    .filter((entry) => entry.language.length > 0 && entry.quality > 0)
    .sort((a, b) => b.quality - a.quality)
    .map((entry) => entry.language);
}

function matchLocaleFromLanguageTag(languageTag: string): Locale | null {
  if (isSupportedLocale(languageTag)) return languageTag;

  const baseLanguage = languageTag.split("-")[0];
  if (baseLanguage === "pt") return "pt-br";
  if (baseLanguage === "en") return "en";

  return null;
}

function resolveLocale(request: NextRequest): Locale {
  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value?.toLowerCase();
  if (cookieLocale && isSupportedLocale(cookieLocale)) {
    return cookieLocale;
  }

  const acceptLanguage = request.headers.get("accept-language");
  const candidates = parseAcceptLanguage(acceptLanguage);
  for (const candidate of candidates) {
    const matched = matchLocaleFromLanguageTag(candidate);
    if (matched) return matched;
  }

  const country = request.headers.get("x-vercel-ip-country")?.toUpperCase();
  if (country === "BR") return "pt-br";

  return DEFAULT_LOCALE;
}

function buildRedirectUrl(request: NextRequest, targetPathname: string) {
  const url = request.nextUrl.clone();
  url.pathname = targetPathname;
  return url;
}

function localeCookieResponse(response: NextResponse, locale: Locale) {
  response.cookies.set(LOCALE_COOKIE, locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });

  return response;
}

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const localeFromPath = extractLocaleFromPathname(pathname);

  if (localeFromPath) {
    return localeCookieResponse(NextResponse.next(), localeFromPath);
  }

  const firstSegment = pathname.split("/")[1]?.toLowerCase();
  const isLocaleLike = Boolean(firstSegment && LOCALE_CANDIDATE_PATTERN.test(firstSegment));
  const resolvedLocale = resolveLocale(request);

  if (isLocaleLike && !isSupportedLocale(firstSegment)) {
    const withoutInvalidLocale = stripLocaleFromPathname(pathname.replace(`/${firstSegment}`, "") || "/");
    const redirectUrl = buildRedirectUrl(request, toLocalePath(resolvedLocale, withoutInvalidLocale));
    return localeCookieResponse(NextResponse.redirect(redirectUrl), resolvedLocale);
  }

  const redirectUrl = buildRedirectUrl(request, toLocalePath(resolvedLocale, pathname));
  return localeCookieResponse(NextResponse.redirect(redirectUrl), resolvedLocale);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)",
  ],
};

