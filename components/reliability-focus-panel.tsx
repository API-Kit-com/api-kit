"use client";

import { useMemo, useState } from "react";
import type { Locale } from "@/lib/i18n/config";

type FocusKey = "compatibility" | "reliability";

type FocusCopy = {
  steps: string[];
  stepDescription: string;
  summary: string;
  compatibilityLabel: string;
  reliabilityLabel: string;
};

const focusCopyByLocale: Record<Locale, Record<FocusKey, FocusCopy>> = {
  en: {
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
      compatibilityLabel: "Compatibility",
      reliabilityLabel: "Reliability",
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
      compatibilityLabel: "Compatibility",
      reliabilityLabel: "Reliability",
    },
  },
  "pt-br": {
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
      compatibilityLabel: "Compatibilidade",
      reliabilityLabel: "Confiabilidade",
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
      compatibilityLabel: "Compatibilidade",
      reliabilityLabel: "Confiabilidade",
    },
  },
};

type ReliabilityFocusPanelProps = {
  locale: Locale;
};

export function ReliabilityFocusPanel({ locale }: ReliabilityFocusPanelProps) {
  const [activeFocus, setActiveFocus] = useState<FocusKey>("compatibility");
  const activeCopy = useMemo(() => focusCopyByLocale[locale][activeFocus], [activeFocus, locale]);

  return (
    <article className="rounded-2xl border border-border bg-card p-6">
      <div className="mb-4 inline-flex rounded-lg border border-border bg-muted p-1 text-xs">
        <button
          type="button"
          onClick={() => setActiveFocus("compatibility")}
          className={`cursor-pointer rounded-md px-3 py-1 transition ${
            activeFocus === "compatibility" ? "bg-primary/20 text-primary" : "text-muted-foreground"
          }`}
        >
          {activeCopy.compatibilityLabel}
        </button>
        <button
          type="button"
          onClick={() => setActiveFocus("reliability")}
          className={`cursor-pointer rounded-md px-3 py-1 transition ${
            activeFocus === "reliability" ? "bg-primary/20 text-primary" : "text-muted-foreground"
          }`}
        >
          {activeCopy.reliabilityLabel}
        </button>
      </div>

      <div className="grid gap-2 sm:grid-cols-2">
        {activeCopy.steps.map((step) => (
          <div key={step} className="rounded-xl border border-border bg-muted p-3">
            <p className="text-sm font-medium">{step}</p>
            <p className="mt-1 text-xs text-muted-foreground">{activeCopy.stepDescription}</p>
          </div>
        ))}
      </div>

      <p className="mt-4 text-sm leading-6 text-muted-foreground">{activeCopy.summary}</p>
    </article>
  );
}
