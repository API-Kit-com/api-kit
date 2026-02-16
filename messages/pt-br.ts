import type { AppMessages } from "@/messages/types";

export const ptBrMessages: AppMessages = {
  topbar: {
    nav: {
      showcase: "Vitrine",
      docs: "Documentação",
      templates: "Templates",
      enterprise: "Enterprise",
    },
    theme: "Tema",
  },
  home: {
    badge: "Módulos de API Open Source",
    heroTitleLine1: "Conecte APIs prontas",
    heroTitleLine2: "em qualquer stack",
    heroDescription:
      "API-Kit oferece implementações open-source de APIs para os times não precisarem começar do zero. Use o mesmo núcleo escalável em Node, Python, Java/Kotlin, Go, .NET, Rails, Phoenix e mais.",
    heroPrimaryCta: "Explorar APIs",
    heroSecondaryCta: "Escolher Stack",
    apiCatalogTitle: "Catálogo de APIs",
    readyApisLabel: "APIs prontas",
    frameworkVariantsLabel: "Variações de framework",
    integrationWorkflowLabel: "Fluxo de integração",
    integrationSteps: [
      "1. Escolha um módulo de API pronto",
      "2. Selecione sua implementação de framework",
      "3. Integre e entregue sem reconstruir a lógica central",
    ],
    supportedStacksLabel: "Stacks suportadas",
    modularSectionTitle: "Microserviços modulares que se conectam",
    modularSectionDescription:
      "API-Kit oferece APIs open-source como microserviços independentes. Você pode adotar cada serviço separadamente e conectá-los por contratos compartilhados para construir fluxos completos de produção.",
    performanceCards: [
      {
        title: "Módulos de microserviços independentes",
        description: "Cada API é entregue como um serviço isolado para o time baixar e usar somente o que precisa.",
      },
      {
        title: "Composição por design",
        description:
          "Os módulos são separados, mas conectam de forma limpa, permitindo que Auth, Billing e Notification funcionem juntos em um fluxo único.",
      },
      {
        title: "Escala serviço por serviço",
        description:
          "Faça deploy e escale cada API de forma independente mantendo contratos e integração consistentes.",
      },
    ],
    featuresLabel: "Recursos e benefícios",
    featuresTitle: "Recursos poderosos para arquitetura modular de APIs",
    featuresDescription:
      "Construa mais rápido com módulos open-source que permanecem independentes, integram com clareza e escalam em múltiplos frameworks.",
    featureBenefits: [
      {
        title: "Baixe só o que precisa",
        description: "Adote as APIs por módulo, começando por um serviço e expandindo sem reescrever a plataforma.",
      },
      {
        title: "Contratos compartilhados entre serviços",
        description: "Mantenha integrações confiáveis com schemas, eventos e limites de autenticação consistentes.",
      },
      {
        title: "Implementações por framework",
        description: "Use padrões prontos para Node, Python, Java/Kotlin, Go, .NET, Rails e outros ecossistemas.",
      },
      {
        title: "Arquitetura modular e componível",
        description:
          "Auth, Billing, Notification e Organization permanecem independentes e conectáveis em fluxos completos.",
      },
      {
        title: "Open-source por padrão",
        description: "Inspecione, estenda e rode as implementações sem depender de internals fechados de plataforma.",
      },
      {
        title: "Escala independente por serviço",
        description: "Escale módulos de alto tráfego de forma isolada sem perder previsibilidade de integração.",
      },
    ],
    testimonialLabel: "Depoimento",
    testimonialQuote:
      "Ainda não temos um depoimento oficial de cliente. Se tudo der certo, em breve publicaremos aqui nosso primeiro caso real de uso.",
    testimonialStatus: "Em breve",
    testimonialSubtext: "Próximo case real de cliente API-Kit",
    reliabilityTitle: "Confiabilidade de API verificável em produção",
    reliabilityDescription:
      "Os módulos do API-Kit foram desenhados para manter compatibilidade quando combinados. Você tem tratamento consistente de erros, validação em rotas críticas e visibilidade de performance para saber o que está rápido e o que precisa otimizar.",
    requestQualityTitle: "Insights de qualidade das requisições",
    requestQualityDescription:
      "Identifique padrões de payload inválido, falhas recorrentes e rotas que precisam de validação mais forte antes de impactar o usuário final.",
    performanceObservabilityTitle: "Observabilidade de performance",
    performanceObservabilityDescription:
      "Inspecione tendências de latência, endpoints lentos e logs de serviço para saber exatamente o que está rápido e o que precisa de ajuste.",
    metricsLabels: ["Eventos de erro", "Logs P95", "Rotas rápidas"],
    faqTitle: "Perguntas frequentes",
    faqSubtitle: "Essas são as perguntas mais comuns antes de integrar os módulos do API-Kit.",
    faqItems: [
      {
        q: "O que é o API-Kit?",
        a: "API-Kit é um catálogo open-source de microserviços de API independentes para acelerar produtos sem começar do zero.",
      },
      {
        q: "Posso usar só um microserviço por vez?",
        a: "Sim. Cada API é independente, então você pode adotar somente o necessário e evoluir com novos módulos depois.",
      },
      {
        q: "Quais stacks são suportadas?",
        a: "Você pode escolher implementações para Node/JS/TS, Python, Java/Kotlin e outros ecossistemas como Go, .NET, Rails, Elixir e Rust.",
      },
      {
        q: "Podemos fazer self-host e customizar as APIs?",
        a: "Sim. Cada microserviço é open source, permitindo inspeção, adaptação e execução na sua própria infraestrutura.",
      },
      {
        q: "Como os serviços se conectam quando usados juntos?",
        a: "Os serviços seguem contratos e padrões de integração compartilhados, permitindo compor Auth, Billing e Notification em um único fluxo.",
      },
      {
        q: "Temos visibilidade de erros e performance?",
        a: "Sim. O API-Kit prioriza tratamento consistente de erros, validação de rotas críticas e logs para identificar gargalos.",
      },
    ],
    ctaTitleLine1: "Experimente o API-Kit",
    ctaTitleLine2: "na sua stack hoje",
    ctaDescription:
      "Comece com um microserviço open-source, escolha sua implementação de framework e componha mais APIs conforme seu produto evolui.",
    ctaPrimaryButton: "Explorar módulos de API",
    ctaSecondaryButton: "Ler documentação",
    footerDescription: "Um ecossistema open-source de microserviços de API independentes para adoção módulo a módulo.",
    footerCopyright: "© 2026 API-Kit, Inc. Microserviços de API open-source para qualquer stack.",
    footerGroups: [
      {
        title: "Navegação",
        links: [
          { label: "Vitrine", href: "/showcase" },
          { label: "Documentação", href: "/docs" },
          { label: "Templates", href: "/templates" },
          { label: "Enterprise", href: "/enterprise" },
        ],
      },
      {
        title: "Documentação",
        links: [
          { label: "API-Kit", href: "/docs/api-kit" },
          { label: "Primeiros passos", href: "/docs/getting-started" },
          { label: "Conceitos principais", href: "/docs/core-concepts" },
          { label: "Guias de framework", href: "/docs/framework-guides" },
        ],
      },
      {
        title: "Comunidade",
        links: [
          { label: "GitHub", href: "https://github.com/API-Kit-com", external: true },
          { label: "Mais links em breve", href: "#", comingSoon: true },
        ],
      },
    ],
  },
  docsShell: {
    docsLabel: "Documentação",
    lastUpdated: "Última atualização: Fev 2026",
    previous: "Anterior",
    next: "Próximo",
    onThisPage: "Nesta página",
  },
  moduleFramework: {
    frameworkLabel: "Framework",
    openGuidePrefix: "Abrir guia completo em",
  },
  reliabilityFocus: {
    compatibilityLabel: "Compatibilidade",
    reliabilityLabel: "Confiabilidade",
    compatibility: {
      steps: [
        "Alinhe contratos entre módulos de API",
        "Mantenha limites de versão previsíveis",
        "Reutilize convenções de auth e eventos",
        "Componha serviços sem desvio de schema",
      ],
      stepDescription: "Bloco de fluxo de compatibilidade",
      summary:
        "Mantenha os módulos previsíveis em escala com checagens de compatibilidade, padrões de erro compartilhados e validação nos endpoints mais acessados.",
    },
    reliability: {
      steps: [
        "Padronize contratos de requisição",
        "Valide rotas de alto volume",
        "Trate erros de forma consistente",
        "Acompanhe performance em tempo real",
      ],
      stepDescription: "Bloco de fluxo de confiabilidade",
      summary:
        "Monitore rotas lentas, falhas recorrentes e qualidade das requisições para identificar rapidamente o que está rápido e o que precisa de otimização.",
    },
  },
  placeholders: {
    showcase: {
      title: "Vitrine",
      description: "A página de Vitrine está em construção. Em breve listaremos cases e projetos em destaque.",
    },
    templates: {
      title: "Templates",
      description: "A página de Templates está em construção. Em breve vamos disponibilizar modelos prontos para o time acelerar.",
    },
    enterprise: {
      title: "Enterprise",
      description: "A página Enterprise está em construção. Vamos detalhar aqui os recursos de nível corporativo.",
    },
  },
  docsTextMap: {
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
    "This page is under construction and will be implemented soon.":
      "Esta página está em construção e será implementada em breve.",
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
  },
};
