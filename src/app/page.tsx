"use client";
import { useState } from "react";
import type { OnboardingAnswers } from "@/src/lib/questions";
import type { TenantConfig } from "@/src/lib/config-schema/schema";
import { OnboardingFlow } from "@/src/app/components/onboarding/OnboardingFlow";
import { GeneratingScreen } from "@/src/app/components/onboarding/GeneratingScreen";
import { Board } from "@/src/app/components/board/Board";

type Phase = "onboarding" | "generating" | "board";

// In the original JSX this was the <App> component holding `screen` state.
// Same idea here: one client page owns the phase and the generated config.
// The only thing that left is the Claude call -> /api/generate-config.
export default function Page() {
  const [phase, setPhase] = useState<Phase>("onboarding");
  const [answers, setAnswers] = useState<OnboardingAnswers | null>(null);
  const [config, setConfig] = useState<TenantConfig | null>(null);

  if (phase === "onboarding") {
    return (
      <OnboardingFlow
        onComplete={(a) => {
          setAnswers(a);
          setPhase("generating");
        }}
      />
    );
  }

  if (phase === "generating" && answers) {
    return (
      <GeneratingScreen
        answers={answers}
        onDone={(c) => {
          setConfig(c);
          setPhase("board");
        }}
        onError={() => setPhase("onboarding")}
      />
    );
  }

  if (phase === "board" && config) {
    return (
      <Board
        config={config}
        onReset={() => {
          setConfig(null);
          setAnswers(null);
          setPhase("onboarding");
        }}
      />
    );
  }

  return null;
}
