import {
  HomeFaqSection,
  HomeFeaturesSection,
  HomeFinalCtaSection,
  HomeFooter,
  HomeHeroSection,
  HomeMicroservicesSection,
  HomeReliabilitySection,
  HomeStackMarqueeSection,
  HomeTestimonialSection,
} from "@/components/home";
import type { Locale } from "@/lib/i18n/config";
import { getMessages } from "@/messages";

type HomePageProps = {
  locale: Locale;
};

export function HomePage({ locale }: HomePageProps) {
  const messages = getMessages(locale);
  const home = messages.home;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="echelon-side-rails">
        <HomeHeroSection home={home} />
        <HomeStackMarqueeSection home={home} />
        <HomeMicroservicesSection home={home} />
        <HomeFeaturesSection home={home} />
        <HomeTestimonialSection home={home} />
        <HomeReliabilitySection locale={locale} home={home} />
        <HomeFaqSection home={home} />
        <HomeFinalCtaSection locale={locale} home={home} />
      </main>

      <HomeFooter locale={locale} home={home} />
    </div>
  );
}
