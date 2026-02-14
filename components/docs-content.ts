export type DocsGroupKey = "getting-started" | "core-concepts" | "api-kit";

export type DocsSection = {
  id: string;
  title: string;
  description: string;
  code?: string;
};

export const docsNavigation = [
  {
    key: "getting-started",
    title: "Getting Started",
    href: "/docs/getting-started",
    items: [
      { label: "Introduction", id: "introduction" },
      { label: "Installation", id: "installation" },
      { label: "Project Structure", id: "project-structure" },
      { label: "Routing", id: "routing" },
    ],
  },
  {
    key: "core-concepts",
    title: "Core Concepts",
    href: "/docs/core-concepts",
    items: [
      { label: "Data Fetching", id: "data-fetching" },
      { label: "Styling", id: "styling" },
      { label: "Deployment", id: "deployment" },
    ],
  },
  {
    key: "api-kit",
    title: "API-Kit",
    href: "/docs/api-kit",
    items: [
      { label: "Auth", id: "auth" },
      { label: "Billing", id: "billing" },
      { label: "Ecommerce", id: "ecommerce" },
      { label: "Notification", id: "notification" },
      { label: "Organization", id: "organization" },
      { label: "Rate Limits", id: "rate-limits" },
      { label: "SDK", id: "sdk" },
    ],
  },
] as const;

type DocsPageContent = {
  breadcrumb: string;
  pageTitle: string;
  description: string;
  sections: DocsSection[];
};

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
    pageTitle: "API-Kit Modules",
    description:
      "Explore the modules included in API-Kit and compose only what your product needs, from identity to billing automation.",
    sections: [
      {
        id: "auth",
        title: "Auth",
        description:
          "Handle sign-in, session management, and scoped access tokens with pluggable identity providers.",
      },
      {
        id: "billing",
        title: "Billing",
        description:
          "Manage subscriptions, plans, invoices, and metered usage in a unified billing workflow.",
      },
      {
        id: "ecommerce",
        title: "Ecommerce",
        description:
          "Model catalog, cart, checkout, and order flows with composable APIs ready for custom storefronts.",
      },
      {
        id: "notification",
        title: "Notification",
        description:
          "Send email, SMS, and push notifications with templates, retries, and delivery visibility.",
      },
      {
        id: "organization",
        title: "Organization",
        description:
          "Support multi-tenant workspaces with members, roles, permissions, and organization-level settings.",
      },
      {
        id: "rate-limits",
        title: "Rate Limits",
        description:
          "Protect your platform with per-key quotas, throttling policies, and structured error feedback.",
      },
      {
        id: "sdk",
        title: "SDK",
        description:
          "Use official SDK helpers for authentication headers, pagination, retries, and typed responses.",
      },
    ],
  },
};
