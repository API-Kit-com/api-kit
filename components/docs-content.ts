export type DocsGroupKey = "getting-started" | "core-concepts" | "api-kit";

export type ApiKitModuleKey =
  | "auth"
  | "billing"
  | "ecommerce"
  | "notification"
  | "organization"
  | "rate-limits"
  | "sdk";

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

export const apiKitModuleMap = Object.fromEntries(apiKitModules.map((module) => [module.key, module])) as Record<
  ApiKitModuleKey,
  ApiKitModule
>;

export function isApiKitModuleKey(value: string): value is ApiKitModuleKey {
  return Object.hasOwn(apiKitModuleMap, value);
}

export const docsNavigation: DocsNavGroup[] = [
  {
    key: "getting-started",
    title: "Getting Started",
    href: "/docs/getting-started",
    items: [
      { label: "Introduction", id: "introduction", href: "/docs/getting-started#introduction" },
      { label: "Installation", id: "installation", href: "/docs/getting-started#installation" },
      { label: "Project Structure", id: "project-structure", href: "/docs/getting-started#project-structure" },
      { label: "Routing", id: "routing", href: "/docs/getting-started#routing" },
    ],
  },
  {
    key: "core-concepts",
    title: "Core Concepts",
    href: "/docs/core-concepts",
    items: [
      { label: "Data Fetching", id: "data-fetching", href: "/docs/core-concepts#data-fetching" },
      { label: "Styling", id: "styling", href: "/docs/core-concepts#styling" },
      { label: "Deployment", id: "deployment", href: "/docs/core-concepts#deployment" },
    ],
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
  "api-kit": {
    breadcrumb: "API-Kit",
    pageTitle: "API-Kit",
    description:
      "Select a module in the sidebar to open its dedicated documentation route.",
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
