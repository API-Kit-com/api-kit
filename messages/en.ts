import type { AppMessages } from "@/messages/types";

export const enMessages: AppMessages = {
  topbar: {
    nav: {
      showcase: "Showcase",
      docs: "Docs",
      templates: "Templates",
      enterprise: "Enterprise",
    },
    theme: "Theme",
  },
  home: {
    badge: "Open-Source API Modules",
    heroTitleLine1: "Plug ready APIs",
    heroTitleLine2: "into any stack",
    heroDescription:
      "API-Kit provides open-source API implementations so teams do not need to build from zero. Use the same scalable core across Node, Python, Java/Kotlin, Go, .NET, Rails, Phoenix, and more.",
    heroPrimaryCta: "Browse APIs",
    heroSecondaryCta: "Pick Your Stack",
    apiCatalogTitle: "API Catalog",
    readyApisLabel: "Ready APIs",
    frameworkVariantsLabel: "Framework variants",
    integrationWorkflowLabel: "Integration workflow",
    integrationSteps: [
      "1. Choose a ready API module",
      "2. Select your framework implementation",
      "3. Integrate and ship without rebuilding core logic",
    ],
    supportedStacksLabel: "Supported stacks",
    modularSectionTitle: "Modular microservices that connect together",
    modularSectionDescription:
      "API-Kit provides open-source APIs as independent microservices. You can adopt each service separately and still couple them through shared contracts to build complete, production-ready application flows.",
    performanceCards: [
      {
        title: "Independent microservice modules",
        description: "Each API is shipped as an isolated service so teams can download and run only what they need.",
      },
      {
        title: "Composable by design",
        description:
          "Modules are separated but built to connect cleanly, allowing Auth, Billing, and Notifications to work together as one flow.",
      },
      {
        title: "Scale service by service",
        description:
          "Deploy and scale each API independently across your stack while keeping contracts and integration patterns consistent.",
      },
    ],
    featuresLabel: "Features & Benefits",
    featuresTitle: "Powerful features for modular API architecture",
    featuresDescription:
      "Build faster with open-source API modules that stay independent, integrate cleanly, and scale across multiple frameworks.",
    featureBenefits: [
      {
        title: "Download only what you need",
        description: "Adopt APIs module by module, so teams can start with one service and expand without platform rewrites.",
      },
      {
        title: "Shared contracts across services",
        description: "Keep integrations reliable with consistent schemas, events, and auth boundaries between modules.",
      },
      {
        title: "Framework-specific implementations",
        description: "Use production-ready patterns for Node, Python, Java/Kotlin, Go, .NET, Rails, and other ecosystems.",
      },
      {
        title: "Composable module architecture",
        description:
          "Auth, Billing, Notifications, and Organization services stay independent but plug together in complete flows.",
      },
      {
        title: "Open-source by default",
        description: "Inspect, extend, and self-host API implementations without depending on closed platform internals.",
      },
      {
        title: "Scale each service independently",
        description:
          "Deploy heavy-traffic modules separately while preserving predictable integration behavior across the platform.",
      },
    ],
    testimonialLabel: "Testimonial",
    testimonialQuote:
      "We do not have an official customer testimonial yet. If everything goes well, we will publish our first real user story here very soon.",
    testimonialStatus: "Coming soon",
    testimonialSubtext: "Future API-Kit customer case study",
    reliabilityTitle: "API reliability you can verify in production",
    reliabilityDescription:
      "API-Kit modules are designed to stay compatible when combined. You get consistent error handling, request validation for critical routes, and performance visibility so teams can see what is fast and what needs optimization.",
    requestQualityTitle: "Request quality insights",
    requestQualityDescription:
      "Surface invalid payload patterns, repeated failure points, and routes that need stronger validation before they impact end users.",
    performanceObservabilityTitle: "Performance observability",
    performanceObservabilityDescription:
      "Inspect latency trends, slow endpoints, and service-level logs so your team knows exactly what is fast and what needs tuning.",
    metricsLabels: ["Error Events", "P95 Logs", "Fast Routes"],
    faqTitle: "Frequently asked questions",
    faqSubtitle: "Most teams ask these before integrating API-Kit modules.",
    faqItems: [
      {
        q: "What is API-Kit?",
        a: "API-Kit is an open-source catalog of independent API microservices that teams can plug into their products instead of building core services from scratch.",
      },
      {
        q: "Can we use only one microservice at a time?",
        a: "Yes. Every API is shipped as an independent microservice, so you can adopt only what you need and add more services later.",
      },
      {
        q: "Which stacks are supported?",
        a: "You can choose implementations across Node/JS/TS, Python, Java/Kotlin, and other ecosystems such as Go, .NET, Rails, Elixir, and Rust.",
      },
      {
        q: "Can we self-host and customize the APIs?",
        a: "Yes. Each microservice is open source, so your team can inspect, adapt, and run it in your own infrastructure.",
      },
      {
        q: "How do services connect when used together?",
        a: "Services remain independent but follow shared contracts and integration patterns, so Auth, Billing, and Notifications can be composed in one flow.",
      },
      {
        q: "Do we get visibility for errors and performance?",
        a: "Yes. API-Kit focuses on consistent error handling, request validation for critical routes, and logs to identify fast and slow endpoints.",
      },
    ],
    ctaTitleLine1: "Try API-Kit",
    ctaTitleLine2: "in your stack today",
    ctaDescription:
      "Start with one open-source microservice, choose your framework implementation, and compose more APIs as your product grows.",
    ctaPrimaryButton: "Browse API Modules",
    ctaSecondaryButton: "Read Documentation",
    footerDescription: "An open-source ecosystem of independent API microservices that teams can adopt module by module.",
    footerCopyright: "© 2026 API-Kit, Inc. Open-source API microservices for every stack.",
    footerGroups: [
      {
        title: "Navigation",
        links: [
          { label: "Showcase", href: "/showcase" },
          { label: "Docs", href: "/docs" },
          { label: "Templates", href: "/templates" },
          { label: "Enterprise", href: "/enterprise" },
        ],
      },
      {
        title: "Documentation",
        links: [
          { label: "API-Kit", href: "/docs/api-kit" },
          { label: "Getting Started", href: "/docs/getting-started" },
          { label: "Core Concepts", href: "/docs/core-concepts" },
          { label: "Framework Guides", href: "/docs/framework-guides" },
        ],
      },
      {
        title: "Community",
        links: [
          { label: "GitHub", href: "https://github.com/API-Kit-com", external: true },
          { label: "More links coming soon", href: "#", comingSoon: true },
        ],
      },
    ],
  },
  docsShell: {
    docsLabel: "Docs",
    lastUpdated: "Last updated: Feb 2026",
    previous: "Previous",
    next: "Next",
    onThisPage: "On this page",
  },
  moduleFramework: {
    frameworkLabel: "Framework",
    openGuidePrefix: "Open full guide in",
  },
  reliabilityFocus: {
    compatibilityLabel: "Compatibility",
    reliabilityLabel: "Reliability",
    compatibility: {
      steps: [
        "Align contracts across API modules",
        "Keep version boundaries predictable",
        "Reuse auth and event conventions",
        "Compose services without schema drift",
      ],
      stepDescription: "Compatibility workflow block",
      summary:
        "Keep modules predictable at scale with compatibility checks, shared error patterns, and validation on the endpoints your users hit the most.",
    },
    reliability: {
      steps: [
        "Standardize request contracts",
        "Validate high-volume routes",
        "Handle errors consistently",
        "Track performance in real time",
      ],
      stepDescription: "Reliability workflow block",
      summary:
        "Monitor slow routes, repeated failures, and request quality so teams can quickly find what is fast and what needs optimization.",
    },
  },
  placeholders: {
    showcase: {
      title: "Showcase",
      description: "The Showcase page is under construction. Soon we will list featured case studies and projects.",
    },
    templates: {
      title: "Templates",
      description:
        "The Templates page is under construction. Soon we will provide ready-to-use starters so teams can move faster.",
    },
    enterprise: {
      title: "Enterprise",
      description: "The Enterprise page is under construction. We will detail enterprise-grade capabilities here.",
    },
  },
  docsTextMap: {},
};

