export const STACK_ITEMS = [
  "Node.js",
  "TypeScript",
  "Express.js",
  "NestJS",
  "Fastify",
  "Hono",
  "FastAPI",
  "Django",
  "Flask",
  "Spring Boot",
  "Kotlin + Ktor",
  "Gin (Go)",
  "Fiber (Go)",
  "ASP.NET Core",
  "Ruby on Rails",
  "Phoenix",
  "Actix Web",
] as const;

export const MARQUEE_STACK_ITEMS = [...STACK_ITEMS, ...STACK_ITEMS];

export const API_MODULE_CHIPS = [
  "Auth",
  "Billing",
  "Ecommerce",
  "Notification",
  "Organization",
  "Rate Limits",
  "SDK",
] as const;

export const RELIABILITY_METRIC_VALUES = ["24", "98", "100%"] as const;
