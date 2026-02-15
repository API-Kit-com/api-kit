import type { Locale } from "@/lib/i18n/config";
import { getMessages } from "@/messages";

export type DocsGroupKey = "getting-started" | "core-concepts" | "framework-guides" | "api-kit";

export type ApiKitModuleKey =
  | "auth"
  | "billing"
  | "ecommerce"
  | "notification"
  | "organization"
  | "rate-limits"
  | "sdk";

export type FrameworkGuideKey = "node-js-ts" | "python" | "java-kotlin" | "other-stacks";
export type GettingStartedTopicKey = "introduction" | "installation" | "project-structure" | "routing";
export type CoreConceptTopicKey = "data-fetching" | "styling" | "deployment";

export type DocsSection = {
  id: string;
  title: string;
  description: string;
  code?: string;
};

export type DocsPageContent = {
  breadcrumb: string;
  pageTitle: string;
  description: string;
  sections: DocsSection[];
};

export type DocsNavItem = {
  label: string;
  id: string;
  href: string;
};

export type DocsNavGroup = {
  key: DocsGroupKey;
  title: string;
  href: string;
  items: DocsNavItem[];
};

type ApiKitModule = {
  key: ApiKitModuleKey;
  label: string;
  href: string;
  page: DocsPageContent;
};

type FrameworkGuide = {
  key: FrameworkGuideKey;
  label: string;
  href: string;
  page: DocsPageContent;
};

type GettingStartedTopic = {
  key: GettingStartedTopicKey;
  label: string;
  href: string;
  page: DocsPageContent;
};

type CoreConceptTopic = {
  key: CoreConceptTopicKey;
  label: string;
  href: string;
  page: DocsPageContent;
};

export const apiKitModules: ApiKitModule[] = [
  {
    key: "auth",
    label: "Auth",
    href: "/docs/api-kit/auth",
    page: {
      breadcrumb: "API-Kit / Auth",
      pageTitle: "Auth",
      description:
        "Implement authentication flows with session management, token validation, and role-aware authorization rules.",
      sections: [
        {
          id: "overview",
          title: "Overview",
          description:
            "Use Auth to handle sign-in, session refresh, and permissions with pluggable identity providers.",
        },
      ],
    },
  },
  {
    key: "billing",
    label: "Billing",
    href: "/docs/api-kit/billing",
    page: {
      breadcrumb: "API-Kit / Billing",
      pageTitle: "Billing",
      description:
        "Run subscription and usage-based billing with invoices, plan upgrades, and lifecycle webhooks.",
      sections: [
        {
          id: "overview",
          title: "Overview",
          description:
            "Configure plans, payment methods, and recurring charges while tracking customer billing status.",
        },
      ],
    },
  },
  {
    key: "ecommerce",
    label: "Ecommerce",
    href: "/docs/api-kit/ecommerce",
    page: {
      breadcrumb: "API-Kit / Ecommerce",
      pageTitle: "Ecommerce",
      description:
        "Compose product catalog, cart, checkout, and order endpoints for custom commerce experiences.",
      sections: [
        {
          id: "overview",
          title: "Overview",
          description:
            "Model products, inventory, and purchase flows with APIs built for headless storefronts.",
        },
      ],
    },
  },
  {
    key: "notification",
    label: "Notification",
    href: "/docs/api-kit/notification",
    page: {
      breadcrumb: "API-Kit / Notification",
      pageTitle: "Notification",
      description:
        "Deliver transactional communications through email, SMS, and push with retries and tracking.",
      sections: [
        {
          id: "overview",
          title: "Overview",
          description:
            "Centralize delivery channels, templates, and provider failover in a single notification layer.",
        },
      ],
    },
  },
  {
    key: "organization",
    label: "Organization",
    href: "/docs/api-kit/organization",
    page: {
      breadcrumb: "API-Kit / Organization",
      pageTitle: "Organization",
      description:
        "Manage workspaces, members, and permissions for multi-tenant products and enterprise accounts.",
      sections: [
        {
          id: "overview",
          title: "Overview",
          description:
            "Control organization-level settings, invitations, and role policies across teams and environments.",
        },
      ],
    },
  },
  {
    key: "rate-limits",
    label: "Rate Limits",
    href: "/docs/api-kit/rate-limits",
    page: {
      breadcrumb: "API-Kit / Rate Limits",
      pageTitle: "Rate Limits",
      description:
        "Protect APIs with quota policies, burst control, and clear error responses for client retry logic.",
      sections: [
        {
          id: "overview",
          title: "Overview",
          description:
            "Set limits per key or workspace and expose headers so clients can adapt traffic automatically.",
        },
      ],
    },
  },
  {
    key: "sdk",
    label: "SDK",
    href: "/docs/api-kit/sdk",
    page: {
      breadcrumb: "API-Kit / SDK",
      pageTitle: "SDK",
      description:
        "Integrate faster with typed clients, built-in auth handling, and helpers for pagination and retries.",
      sections: [
        {
          id: "overview",
          title: "Overview",
          description:
            "Use the SDK as the default integration path for consistent request handling and error management.",
        },
      ],
    },
  },
];

export const frameworkGuides: FrameworkGuide[] = [
  {
    key: "node-js-ts",
    label: "Node / JS / TS",
    href: "/docs/framework-guides/node-js-ts",
    page: {
      breadcrumb: "Framework Guides / Node / JS / TS",
      pageTitle: "Node / JS / TS",
      description:
        "Recommended API-Kit integration paths for JavaScript and TypeScript runtimes.",
      sections: [
        {
          id: "express",
          title: "Express.js",
          description:
            "Add API-Kit middleware for auth validation, request context, and module-level permissions in Express routes.",
        },
        {
          id: "nestjs",
          title: "NestJS",
          description:
            "Use API-Kit with guards, interceptors, and modules so your domain services share a consistent policy layer.",
        },
        {
          id: "fastify",
          title: "Fastify",
          description:
            "Register API-Kit plugins to manage scoped clients, hooks, and validated request pipelines.",
        },
        {
          id: "hono",
          title: "Hono",
          description:
            "Wire API-Kit handlers into edge-ready Hono apps with lightweight middleware composition.",
        },
        {
          id: "encore",
          title: "Encore.ts",
          description:
            "Use API-Kit services with typed Encore.ts endpoints to keep contract-first APIs maintainable.",
        },
      ],
    },
  },
  {
    key: "python",
    label: "Python",
    href: "/docs/framework-guides/python",
    page: {
      breadcrumb: "Framework Guides / Python",
      pageTitle: "Python",
      description:
        "Integration guides for Python-based API stacks supported by API-Kit.",
      sections: [
        {
          id: "fastapi",
          title: "FastAPI",
          description:
            "Implement API-Kit dependencies in FastAPI for auth checks, usage control, and structured error responses.",
        },
        {
          id: "django-drf",
          title: "Django + Django REST Framework",
          description:
            "Connect API-Kit with DRF permissions and serializers for secure tenant-aware endpoints.",
        },
        {
          id: "flask",
          title: "Flask",
          description:
            "Attach API-Kit request guards and module clients in Flask blueprints for small and flexible services.",
        },
      ],
    },
  },
  {
    key: "java-kotlin",
    label: "Java & Kotlin",
    href: "/docs/framework-guides/java-kotlin",
    page: {
      breadcrumb: "Framework Guides / Java & Kotlin",
      pageTitle: "Java & Kotlin",
      description:
        "Framework-specific references for JVM backends using API-Kit.",
      sections: [
        {
          id: "spring-boot",
          title: "Spring Boot",
          description:
            "Configure API-Kit via Spring filters and beans to enforce auth and module orchestration across controllers.",
        },
        {
          id: "ktor",
          title: "Kotlin + Ktor",
          description:
            "Set up API-Kit in Ktor pipelines with strongly typed request handling and coroutine-friendly services.",
        },
      ],
    },
  },
  {
    key: "other-stacks",
    label: "Other Stacks",
    href: "/docs/framework-guides/other-stacks",
    page: {
      breadcrumb: "Framework Guides / Other Stacks",
      pageTitle: "Other Stacks",
      description:
        "Additional ecosystems with proven API-Kit integration patterns.",
      sections: [
        {
          id: "gin",
          title: "Gin (Go)",
          description:
            "Use API-Kit middleware wrappers in Gin handlers for token verification and rate-limit enforcement.",
        },
        {
          id: "fiber",
          title: "Fiber (Go)",
          description:
            "Apply API-Kit guards and shared clients in Fiber apps with low-overhead routing.",
        },
        {
          id: "aspnet-core",
          title: "ASP.NET Core (C#)",
          description:
            "Integrate API-Kit with ASP.NET middleware, policies, and dependency injection for enterprise APIs.",
        },
        {
          id: "rails",
          title: "Ruby on Rails",
          description:
            "Connect API-Kit modules into Rails controllers and service objects for secure business workflows.",
        },
        {
          id: "phoenix",
          title: "Phoenix (Elixir)",
          description:
            "Use API-Kit in plugs and contexts to manage authorization and organization-aware request boundaries.",
        },
        {
          id: "actix",
          title: "Actix Web (Rust)",
          description:
            "Compose API-Kit integrations in Actix middleware for fast, strongly typed APIs.",
        },
      ],
    },
  },
];

export const gettingStartedTopics: GettingStartedTopic[] = [
  {
    key: "introduction",
    label: "Introduction",
    href: "/docs/getting-started/introduction",
    page: {
      breadcrumb: "Getting Started / Introduction",
      pageTitle: "Introduction",
      description:
        "API-Kit gives you modular building blocks to ship authentication, billing, and operational APIs with a consistent developer experience.",
      sections: [
        {
          id: "introduction",
          title: "Introduction",
          description:
            "API-Kit gives you modular building blocks to ship authentication, billing, and operational APIs with a consistent developer experience.",
        },
      ],
    },
  },
  {
    key: "installation",
    label: "Installation",
    href: "/docs/getting-started/installation",
    page: {
      breadcrumb: "Getting Started / Installation",
      pageTitle: "Installation",
      description:
        "Create your project, install dependencies, and run the local development server.",
      sections: [
        {
          id: "installation",
          title: "Installation",
          description:
            "Create your project, install dependencies, and run the local development server.",
          code: `npm create next-app@latest api-kit\ncd api-kit\nnpm install\nnpm run dev`,
        },
      ],
    },
  },
  {
    key: "project-structure",
    label: "Project Structure",
    href: "/docs/getting-started/project-structure",
    page: {
      breadcrumb: "Getting Started / Project Structure",
      pageTitle: "Project Structure",
      description:
        "Keep route files in app/, shared UI in components/, utilities in lib/, and static assets in public/ for a scalable structure.",
      sections: [
        {
          id: "project-structure",
          title: "Project Structure",
          description:
            "Keep route files in app/, shared UI in components/, utilities in lib/, and static assets in public/ for a scalable structure.",
        },
      ],
    },
  },
  {
    key: "routing",
    label: "Routing",
    href: "/docs/getting-started/routing",
    page: {
      breadcrumb: "Getting Started / Routing",
      pageTitle: "Routing",
      description:
        "Use file-based routing under app/ and colocate nested layouts when sections share navigation, permissions, or state.",
      sections: [
        {
          id: "routing",
          title: "Routing",
          description:
            "Use file-based routing under app/ and colocate nested layouts when sections share navigation, permissions, or state.",
        },
      ],
    },
  },
];

export const coreConceptTopics: CoreConceptTopic[] = [
  {
    key: "data-fetching",
    label: "Data Fetching",
    href: "/docs/core-concepts/data-fetching",
    page: {
      breadcrumb: "Core Concepts / Data Fetching",
      pageTitle: "Data Fetching",
      description:
        "Fetch server data in async components, cache per route requirements, and revalidate where your business rules demand freshness.",
      sections: [
        {
          id: "data-fetching",
          title: "Data Fetching",
          description:
            "Fetch server data in async components, cache per route requirements, and revalidate where your business rules demand freshness.",
        },
      ],
    },
  },
  {
    key: "styling",
    label: "Styling",
    href: "/docs/core-concepts/styling",
    page: {
      breadcrumb: "Core Concepts / Styling",
      pageTitle: "Styling",
      description:
        "Build interfaces with shared tokens, reusable primitives, and utility classes so product surfaces remain consistent.",
      sections: [
        {
          id: "styling",
          title: "Styling",
          description:
            "Build interfaces with shared tokens, reusable primitives, and utility classes so product surfaces remain consistent.",
        },
      ],
    },
  },
  {
    key: "deployment",
    label: "Deployment",
    href: "/docs/core-concepts/deployment",
    page: {
      breadcrumb: "Core Concepts / Deployment",
      pageTitle: "Deployment",
      description:
        "Promote builds through staging and production with environment-scoped configuration, observability, and rollback safety.",
      sections: [
        {
          id: "deployment",
          title: "Deployment",
          description:
            "Promote builds through staging and production with environment-scoped configuration, observability, and rollback safety.",
        },
      ],
    },
  },
];

export const apiKitModuleMap = Object.fromEntries(apiKitModules.map((module) => [module.key, module])) as Record<
  ApiKitModuleKey,
  ApiKitModule
>;

export const frameworkGuideMap = Object.fromEntries(frameworkGuides.map((guide) => [guide.key, guide])) as Record<
  FrameworkGuideKey,
  FrameworkGuide
>;

export const gettingStartedTopicMap = Object.fromEntries(gettingStartedTopics.map((topic) => [topic.key, topic])) as Record<
  GettingStartedTopicKey,
  GettingStartedTopic
>;

export const coreConceptTopicMap = Object.fromEntries(coreConceptTopics.map((topic) => [topic.key, topic])) as Record<
  CoreConceptTopicKey,
  CoreConceptTopic
>;

export function isApiKitModuleKey(value: string): value is ApiKitModuleKey {
  return Object.hasOwn(apiKitModuleMap, value);
}

export function isFrameworkGuideKey(value: string): value is FrameworkGuideKey {
  return Object.hasOwn(frameworkGuideMap, value);
}

export function isGettingStartedTopicKey(value: string): value is GettingStartedTopicKey {
  return Object.hasOwn(gettingStartedTopicMap, value);
}

export function isCoreConceptTopicKey(value: string): value is CoreConceptTopicKey {
  return Object.hasOwn(coreConceptTopicMap, value);
}

export const docsNavigation: DocsNavGroup[] = [
  {
    key: "getting-started",
    title: "Getting Started",
    href: "/docs/getting-started/introduction",
    items: gettingStartedTopics.map((topic) => ({
      label: topic.label,
      id: topic.key,
      href: topic.href,
    })),
  },
  {
    key: "core-concepts",
    title: "Core Concepts",
    href: "/docs/core-concepts/data-fetching",
    items: coreConceptTopics.map((topic) => ({
      label: topic.label,
      id: topic.key,
      href: topic.href,
    })),
  },
  {
    key: "framework-guides",
    title: "Framework Guides",
    href: "/docs/framework-guides",
    items: frameworkGuides.map((guide) => ({
      label: guide.label,
      id: guide.key,
      href: guide.href,
    })),
  },
  {
    key: "api-kit",
    title: "API-Kit",
    href: "/docs/api-kit",
    items: apiKitModules.map((module) => ({
      label: module.label,
      id: module.key,
      href: module.href,
    })),
  },
];

export const docsContent: Record<DocsGroupKey, DocsPageContent> = {
  "getting-started": {
    breadcrumb: "Getting Started",
    pageTitle: "Getting Started",
    description:
      "Configure API-Kit in minutes with a clean setup flow, a predictable folder structure, and route patterns for production apps.",
    sections: [
      {
        id: "introduction",
        title: "Introduction",
        description:
          "API-Kit gives you modular building blocks to ship authentication, billing, and operational APIs with a consistent developer experience.",
      },
      {
        id: "installation",
        title: "Installation",
        description:
          "Create your project, install dependencies, and run the local development server.",
        code: `npm create next-app@latest api-kit\ncd api-kit\nnpm install\nnpm run dev`,
      },
      {
        id: "project-structure",
        title: "Project Structure",
        description:
          "Keep route files in app/, shared UI in components/, utilities in lib/, and static assets in public/ for a scalable structure.",
      },
      {
        id: "routing",
        title: "Routing",
        description:
          "Use file-based routing under app/ and colocate nested layouts when sections share navigation, permissions, or state.",
      },
    ],
  },
  "core-concepts": {
    breadcrumb: "Core Concepts",
    pageTitle: "Core Concepts",
    description:
      "Understand the fundamentals behind API-Kit applications, including data strategies, styling patterns, and deployment readiness.",
    sections: [
      {
        id: "data-fetching",
        title: "Data Fetching",
        description:
          "Fetch server data in async components, cache per route requirements, and revalidate where your business rules demand freshness.",
      },
      {
        id: "styling",
        title: "Styling",
        description:
          "Build interfaces with shared tokens, reusable primitives, and utility classes so product surfaces remain consistent.",
      },
      {
        id: "deployment",
        title: "Deployment",
        description:
          "Promote builds through staging and production with environment-scoped configuration, observability, and rollback safety.",
      },
    ],
  },
  "framework-guides": {
    breadcrumb: "Framework Guides",
    pageTitle: "Framework Guides",
    description:
      "Select a stack in the sidebar to view framework-specific implementation notes for API-Kit.",
    sections: [
      {
        id: "stacks",
        title: "Stacks",
        description:
          "Node / JS / TS, Python, Java & Kotlin, and Other Stacks each have dedicated routes under /docs/framework-guides.",
      },
    ],
  },
  "api-kit": {
    breadcrumb: "API-Kit",
    pageTitle: "API-Kit",
    description: "Select a module in the sidebar to open its dedicated documentation route.",
    sections: [
      {
        id: "modules",
        title: "Modules",
        description:
          "Auth, Billing, Ecommerce, Notification, Organization, Rate Limits, and SDK each have their own route under /docs/api-kit.",
      },
    ],
  },
};

function localizeText(locale: Locale, text: string): string {
  if (locale === "en") return text;
  const docsTextMap = getMessages(locale).docsTextMap;
  return docsTextMap[text] ?? text;
}

function localizePage(locale: Locale, page: DocsPageContent): DocsPageContent {
  return {
    ...page,
    breadcrumb: localizeText(locale, page.breadcrumb),
    pageTitle: localizeText(locale, page.pageTitle),
    description: localizeText(locale, page.description),
    sections: page.sections.map((section) => ({
      ...section,
      title: localizeText(locale, section.title),
      description: localizeText(locale, section.description),
    })),
  };
}

export function getApiKitModules(locale: Locale): ApiKitModule[] {
  if (locale === "en") return apiKitModules;
  return apiKitModules.map((module) => ({
    ...module,
    label: localizeText(locale, module.label),
    page: localizePage(locale, module.page),
  }));
}

export function getApiKitModuleMap(locale: Locale): Record<ApiKitModuleKey, ApiKitModule> {
  return Object.fromEntries(getApiKitModules(locale).map((module) => [module.key, module])) as Record<
    ApiKitModuleKey,
    ApiKitModule
  >;
}

export function getFrameworkGuides(locale: Locale): FrameworkGuide[] {
  if (locale === "en") return frameworkGuides;
  return frameworkGuides.map((guide) => ({
    ...guide,
    label: localizeText(locale, guide.label),
    page: localizePage(locale, guide.page),
  }));
}

export function getFrameworkGuideMap(locale: Locale): Record<FrameworkGuideKey, FrameworkGuide> {
  return Object.fromEntries(getFrameworkGuides(locale).map((guide) => [guide.key, guide])) as Record<
    FrameworkGuideKey,
    FrameworkGuide
  >;
}

export function getGettingStartedTopics(locale: Locale): GettingStartedTopic[] {
  if (locale === "en") return gettingStartedTopics;
  return gettingStartedTopics.map((topic) => ({
    ...topic,
    label: localizeText(locale, topic.label),
    page: localizePage(locale, topic.page),
  }));
}

export function getGettingStartedTopicMap(locale: Locale): Record<GettingStartedTopicKey, GettingStartedTopic> {
  return Object.fromEntries(getGettingStartedTopics(locale).map((topic) => [topic.key, topic])) as Record<
    GettingStartedTopicKey,
    GettingStartedTopic
  >;
}

export function getCoreConceptTopics(locale: Locale): CoreConceptTopic[] {
  if (locale === "en") return coreConceptTopics;
  return coreConceptTopics.map((topic) => ({
    ...topic,
    label: localizeText(locale, topic.label),
    page: localizePage(locale, topic.page),
  }));
}

export function getCoreConceptTopicMap(locale: Locale): Record<CoreConceptTopicKey, CoreConceptTopic> {
  return Object.fromEntries(getCoreConceptTopics(locale).map((topic) => [topic.key, topic])) as Record<
    CoreConceptTopicKey,
    CoreConceptTopic
  >;
}

export function getDocsNavigation(locale: Locale): DocsNavGroup[] {
  if (locale === "en") return docsNavigation;

  const localizedGettingStartedTopics = getGettingStartedTopics(locale);
  const localizedCoreConceptTopics = getCoreConceptTopics(locale);
  const localizedFrameworkGuides = getFrameworkGuides(locale);
  const localizedApiKitModules = getApiKitModules(locale);

  return [
    {
      ...docsNavigation[0],
      title: localizeText(locale, docsNavigation[0].title),
      items: localizedGettingStartedTopics.map((topic) => ({
        label: topic.label,
        id: topic.key,
        href: topic.href,
      })),
    },
    {
      ...docsNavigation[1],
      title: localizeText(locale, docsNavigation[1].title),
      items: localizedCoreConceptTopics.map((topic) => ({
        label: topic.label,
        id: topic.key,
        href: topic.href,
      })),
    },
    {
      ...docsNavigation[2],
      title: localizeText(locale, docsNavigation[2].title),
      items: localizedFrameworkGuides.map((guide) => ({
        label: guide.label,
        id: guide.key,
        href: guide.href,
      })),
    },
    {
      ...docsNavigation[3],
      title: localizeText(locale, docsNavigation[3].title),
      items: localizedApiKitModules.map((module) => ({
        label: module.label,
        id: module.key,
        href: module.href,
      })),
    },
  ];
}

export function getDocsContent(locale: Locale): Record<DocsGroupKey, DocsPageContent> {
  if (locale === "en") return docsContent;

  return {
    "getting-started": localizePage(locale, docsContent["getting-started"]),
    "core-concepts": localizePage(locale, docsContent["core-concepts"]),
    "framework-guides": localizePage(locale, docsContent["framework-guides"]),
    "api-kit": localizePage(locale, docsContent["api-kit"]),
  };
}
