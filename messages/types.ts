export type MessageLink = {
  label: string;
  href: string;
  external?: boolean;
  comingSoon?: boolean;
};

export type MessageGroup = {
  title: string;
  links: MessageLink[];
};

export type MessageCard = {
  title: string;
  description: string;
};

export type MessageFaqItem = {
  q: string;
  a: string;
};

export type AppMessages = {
  topbar: {
    nav: {
      showcase: string;
      docs: string;
      templates: string;
      enterprise: string;
    };
    theme: string;
  };
  home: {
    badge: string;
    heroTitleLine1: string;
    heroTitleLine2: string;
    heroDescription: string;
    heroPrimaryCta: string;
    heroSecondaryCta: string;
    apiCatalogTitle: string;
    readyApisLabel: string;
    frameworkVariantsLabel: string;
    integrationWorkflowLabel: string;
    integrationSteps: [string, string, string];
    supportedStacksLabel: string;
    modularSectionTitle: string;
    modularSectionDescription: string;
    performanceCards: MessageCard[];
    featuresLabel: string;
    featuresTitle: string;
    featuresDescription: string;
    featureBenefits: MessageCard[];
    testimonialLabel: string;
    testimonialQuote: string;
    testimonialStatus: string;
    testimonialSubtext: string;
    reliabilityTitle: string;
    reliabilityDescription: string;
    requestQualityTitle: string;
    requestQualityDescription: string;
    performanceObservabilityTitle: string;
    performanceObservabilityDescription: string;
    metricsLabels: [string, string, string];
    faqTitle: string;
    faqSubtitle: string;
    faqItems: MessageFaqItem[];
    ctaTitleLine1: string;
    ctaTitleLine2: string;
    ctaDescription: string;
    ctaPrimaryButton: string;
    ctaSecondaryButton: string;
    footerDescription: string;
    footerCopyright: string;
    footerGroups: MessageGroup[];
  };
  docsShell: {
    docsLabel: string;
    lastUpdated: string;
    previous: string;
    next: string;
    onThisPage: string;
  };
  moduleFramework: {
    frameworkLabel: string;
    openGuidePrefix: string;
  };
  reliabilityFocus: {
    compatibilityLabel: string;
    reliabilityLabel: string;
    compatibility: {
      steps: string[];
      stepDescription: string;
      summary: string;
    };
    reliability: {
      steps: string[];
      stepDescription: string;
      summary: string;
    };
  };
  placeholders: {
    showcase: {
      title: string;
      description: string;
    };
    templates: {
      title: string;
      description: string;
    };
    enterprise: {
      title: string;
      description: string;
    };
  };
  docsTextMap: Record<string, string>;
};

