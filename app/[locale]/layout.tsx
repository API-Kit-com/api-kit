import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import Script from "next/script";
import { TopBar } from "@/components/topbar";
import { SUPPORTED_LOCALES, isSupportedLocale } from "@/lib/i18n/config";
import { toHtmlLang } from "@/lib/i18n/routing";
import "../globals.css";

const themeInitializerScript = `
(() => {
  try {
    const savedTheme = localStorage.getItem("theme");
    const shouldUseDark = savedTheme ? savedTheme === "dark" : true;
    document.documentElement.classList.toggle("dark", shouldUseDark);
  } catch {
    document.documentElement.classList.add("dark");
  }
})();
`;

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "API-Kit",
  description: "API-Kit frontend",
  icons: {
    icon: "/api-kit.svg",
    shortcut: "/api-kit.svg",
    apple: "/api-kit.svg",
  },
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>;

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale } = await params;
  if (!isSupportedLocale(locale)) {
    notFound();
  }

  return (
    <html lang={toHtmlLang(locale)} className={jetbrainsMono.variable} suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Script id="theme-initializer" strategy="beforeInteractive">
          {themeInitializerScript}
        </Script>
        <TopBar />
        <div className="pt-16">{children}</div>
      </body>
    </html>
  );
}
