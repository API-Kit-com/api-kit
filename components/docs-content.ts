import type { Locale } from "@/lib/i18n/config";

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

export const apiKitModuleMap = Object.fromEntries(apiKitModules.map((module) => [module.key, module])) as Record<
  ApiKitModuleKey,
  ApiKitModule
>;

export const frameworkGuideMap = Object.fromEntries(frameworkGuides.map((guide) => [guide.key, guide])) as Record<
  FrameworkGuideKey,
  FrameworkGuide
>;

export function isApiKitModuleKey(value: string): value is ApiKitModuleKey {
  return Object.hasOwn(apiKitModuleMap, value);
}

export function isFrameworkGuideKey(value: string): value is FrameworkGuideKey {
  return Object.hasOwn(frameworkGuideMap, value);
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

const ptBrTranslations: Record<string, string> = {
  "API-Kit / Auth": "API-Kit / Auth",
  "API-Kit / Billing": "API-Kit / Billing",
  "API-Kit / Ecommerce": "API-Kit / Ecommerce",
  "API-Kit / Notification": "API-Kit / Notification",
  "API-Kit / Organization": "API-Kit / Organization",
  "API-Kit / Rate Limits": "API-Kit / Limites de Taxa",
  "API-Kit / SDK": "API-Kit / SDK",
  "Framework Guides / Node / JS / TS": "Guias de Framework / Node / JS / TS",
  "Framework Guides / Python": "Guias de Framework / Python",
  "Framework Guides / Java & Kotlin": "Guias de Framework / Java & Kotlin",
  "Framework Guides / Other Stacks": "Guias de Framework / Outras Stacks",
  "Rate Limits": "Limites de Taxa",
  "Other Stacks": "Outras Stacks",
  "Getting Started": "Primeiros passos",
  "Core Concepts": "Conceitos principais",
  "Framework Guides": "Guias de framework",
  Introduction: "Introdução",
  Installation: "Instalação",
  "Project Structure": "Estrutura do projeto",
  Routing: "Roteamento",
  "Data Fetching": "Busca de dados",
  Styling: "Estilização",
  Deployment: "Deploy",
  Overview: "Visão geral",
  Stacks: "Stacks",
  Modules: "Módulos",
  "Implement authentication flows with session management, token validation, and role-aware authorization rules.":
    "Implemente fluxos de autenticação com gestão de sessão, validação de token e regras de autorização por função.",
  "Use Auth to handle sign-in, session refresh, and permissions with pluggable identity providers.":
    "Use o Auth para gerenciar login, renovação de sessão e permissões com provedores de identidade pluggáveis.",
  "Run subscription and usage-based billing with invoices, plan upgrades, and lifecycle webhooks.":
    "Execute billing por assinatura e por uso com faturas, upgrades de plano e webhooks de ciclo de vida.",
  "Configure plans, payment methods, and recurring charges while tracking customer billing status.":
    "Configure planos, métodos de pagamento e cobranças recorrentes com acompanhamento do status de billing do cliente.",
  "Compose product catalog, cart, checkout, and order endpoints for custom commerce experiences.":
    "Componha endpoints de catálogo, carrinho, checkout e pedidos para experiências de e-commerce customizadas.",
  "Model products, inventory, and purchase flows with APIs built for headless storefronts.":
    "Modele produtos, inventário e fluxos de compra com APIs voltadas para storefronts headless.",
  "Deliver transactional communications through email, SMS, and push with retries and tracking.":
    "Entregue comunicações transacionais por email, SMS e push com retentativas e rastreamento.",
  "Centralize delivery channels, templates, and provider failover in a single notification layer.":
    "Centralize canais de envio, templates e failover de provedores em uma única camada de notificação.",
  "Manage workspaces, members, and permissions for multi-tenant products and enterprise accounts.":
    "Gerencie workspaces, membros e permissões para produtos multi-tenant e contas enterprise.",
  "Control organization-level settings, invitations, and role policies across teams and environments.":
    "Controle configurações em nível de organização, convites e políticas de papéis entre times e ambientes.",
  "Protect APIs with quota policies, burst control, and clear error responses for client retry logic.":
    "Proteja APIs com políticas de cota, controle de burst e respostas de erro claras para lógica de retentativa.",
  "Set limits per key or workspace and expose headers so clients can adapt traffic automatically.":
    "Defina limites por chave ou workspace e exponha headers para clientes adaptarem o tráfego automaticamente.",
  "Integrate faster with typed clients, built-in auth handling, and helpers for pagination and retries.":
    "Integre mais rápido com clients tipados, auth embutida e utilitários para paginação e retentativas.",
  "Use the SDK as the default integration path for consistent request handling and error management.":
    "Use o SDK como caminho padrão de integração para manter consistência no tratamento de requisições e erros.",
  "Recommended API-Kit integration paths for JavaScript and TypeScript runtimes.":
    "Caminhos recomendados de integração do API-Kit para runtimes JavaScript e TypeScript.",
  "Add API-Kit middleware for auth validation, request context, and module-level permissions in Express routes.":
    "Adicione middleware do API-Kit para validação de auth, contexto de requisição e permissões em nível de módulo nas rotas Express.",
  "Use API-Kit with guards, interceptors, and modules so your domain services share a consistent policy layer.":
    "Use API-Kit com guards, interceptors e módulos para que seus serviços de domínio compartilhem uma camada de políticas consistente.",
  "Register API-Kit plugins to manage scoped clients, hooks, and validated request pipelines.":
    "Registre plugins do API-Kit para gerenciar clients por escopo, hooks e pipelines de requisição validados.",
  "Wire API-Kit handlers into edge-ready Hono apps with lightweight middleware composition.":
    "Conecte handlers do API-Kit em apps Hono prontos para edge com composição leve de middleware.",
  "Use API-Kit services with typed Encore.ts endpoints to keep contract-first APIs maintainable.":
    "Use serviços do API-Kit com endpoints tipados no Encore.ts para manter APIs contract-first sustentáveis.",
  "Integration guides for Python-based API stacks supported by API-Kit.":
    "Guias de integração para stacks de API em Python suportadas pelo API-Kit.",
  "Implement API-Kit dependencies in FastAPI for auth checks, usage control, and structured error responses.":
    "Implemente dependências do API-Kit no FastAPI para checagens de auth, controle de uso e respostas de erro estruturadas.",
  "Connect API-Kit with DRF permissions and serializers for secure tenant-aware endpoints.":
    "Conecte API-Kit com permissões e serializers do DRF para endpoints seguros e multi-tenant.",
  "Attach API-Kit request guards and module clients in Flask blueprints for small and flexible services.":
    "Aplique guards de requisição e clients de módulo do API-Kit em blueprints Flask para serviços leves e flexíveis.",
  "Framework-specific references for JVM backends using API-Kit.":
    "Referências específicas por framework para backends JVM usando API-Kit.",
  "Configure API-Kit via Spring filters and beans to enforce auth and module orchestration across controllers.":
    "Configure API-Kit via filtros e beans do Spring para aplicar auth e orquestração de módulos entre controllers.",
  "Set up API-Kit in Ktor pipelines with strongly typed request handling and coroutine-friendly services.":
    "Configure API-Kit em pipelines do Ktor com tratamento de requisição fortemente tipado e serviços amigáveis a corrotinas.",
  "Additional ecosystems with proven API-Kit integration patterns.":
    "Ecossistemas adicionais com padrões de integração do API-Kit já validados.",
  "Use API-Kit middleware wrappers in Gin handlers for token verification and rate-limit enforcement.":
    "Use wrappers de middleware do API-Kit em handlers Gin para verificação de token e aplicação de rate limit.",
  "Apply API-Kit guards and shared clients in Fiber apps with low-overhead routing.":
    "Aplique guards e clients compartilhados do API-Kit em apps Fiber com roteamento de baixo overhead.",
  "Integrate API-Kit with ASP.NET middleware, policies, and dependency injection for enterprise APIs.":
    "Integre API-Kit com middleware, políticas e injeção de dependência do ASP.NET para APIs enterprise.",
  "Connect API-Kit modules into Rails controllers and service objects for secure business workflows.":
    "Conecte módulos do API-Kit em controllers Rails e service objects para fluxos de negócio seguros.",
  "Use API-Kit in plugs and contexts to manage authorization and organization-aware request boundaries.":
    "Use API-Kit em plugs e contexts do Phoenix para gerenciar autorização e limites de requisição por organização.",
  "Compose API-Kit integrations in Actix middleware for fast, strongly typed APIs.":
    "Componha integrações do API-Kit em middleware Actix para APIs rápidas e fortemente tipadas.",
  "Configure API-Kit in minutes with a clean setup flow, a predictable folder structure, and route patterns for production apps.":
    "Configure o API-Kit em minutos com um fluxo de setup limpo, estrutura de pastas previsível e padrões de rota para produção.",
  "API-Kit gives you modular building blocks to ship authentication, billing, and operational APIs with a consistent developer experience.":
    "API-Kit oferece blocos modulares para entregar APIs de autenticação, billing e operações com experiência consistente para desenvolvedores.",
  "Create your project, install dependencies, and run the local development server.":
    "Crie seu projeto, instale dependências e execute o servidor local de desenvolvimento.",
  "Keep route files in app/, shared UI in components/, utilities in lib/, and static assets in public/ for a scalable structure.":
    "Mantenha rotas em app/, UI compartilhada em components/, utilitários em lib/ e assets estáticos em public/ para uma estrutura escalável.",
  "Use file-based routing under app/ and colocate nested layouts when sections share navigation, permissions, or state.":
    "Use roteamento baseado em arquivos dentro de app/ e colocalize layouts aninhados quando seções compartilham navegação, permissões ou estado.",
  "Understand the fundamentals behind API-Kit applications, including data strategies, styling patterns, and deployment readiness.":
    "Entenda os fundamentos das aplicações com API-Kit, incluindo estratégias de dados, padrões de estilização e prontidão para deploy.",
  "Fetch server data in async components, cache per route requirements, and revalidate where your business rules demand freshness.":
    "Busque dados de servidor em componentes assíncronos, use cache por requisito de rota e revalide onde as regras de negócio exigirem atualização.",
  "Build interfaces with shared tokens, reusable primitives, and utility classes so product surfaces remain consistent.":
    "Construa interfaces com tokens compartilhados, primitivas reutilizáveis e classes utilitárias para manter consistência de produto.",
  "Promote builds through staging and production with environment-scoped configuration, observability, and rollback safety.":
    "Promova builds em staging e produção com configuração por ambiente, observabilidade e segurança para rollback.",
  "Select a stack in the sidebar to view framework-specific implementation notes for API-Kit.":
    "Selecione uma stack na barra lateral para ver notas de implementação específicas por framework.",
  "Node / JS / TS, Python, Java & Kotlin, and Other Stacks each have dedicated routes under /docs/framework-guides.":
    "Node / JS / TS, Python, Java & Kotlin e Outras Stacks possuem rotas dedicadas em /docs/framework-guides.",
  "Select a module in the sidebar to open its dedicated documentation route.":
    "Selecione um módulo na barra lateral para abrir sua rota dedicada de documentação.",
  "Auth, Billing, Ecommerce, Notification, Organization, Rate Limits, and SDK each have their own route under /docs/api-kit.":
    "Auth, Billing, Ecommerce, Notification, Organization, Rate Limits e SDK possuem rota própria em /docs/api-kit.",
};

function localizeText(locale: Locale, text: string): string {
  if (locale === "en") return text;
  return ptBrTranslations[text] ?? text;
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

export function getDocsNavigation(locale: Locale): DocsNavGroup[] {
  if (locale === "en") return docsNavigation;

  const localizedFrameworkGuides = getFrameworkGuides(locale);
  const localizedApiKitModules = getApiKitModules(locale);

  return [
    {
      ...docsNavigation[0],
      title: localizeText(locale, docsNavigation[0].title),
      items: docsNavigation[0].items.map((item) => ({
        ...item,
        label: localizeText(locale, item.label),
      })),
    },
    {
      ...docsNavigation[1],
      title: localizeText(locale, docsNavigation[1].title),
      items: docsNavigation[1].items.map((item) => ({
        ...item,
        label: localizeText(locale, item.label),
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
