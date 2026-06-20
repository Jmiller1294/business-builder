export type OnboardingAnswers = {
  businessType: string; unitLabel: string; teamSize: string; challenge: string; pattern: string;
};
export type Question = {
  id: keyof OnboardingAnswers; label: string; hint: string;
  type: "text" | "select"; options?: string[]; placeholder?: string;
};

export const QUESTIONS: Question[] = [
  { id: "businessType", label: "What kind of business do you run?",
    hint: "Be specific — the more detail, the better your board.", type: "text",
    placeholder: "e.g. Commercial cleaning company, dog grooming salon..." },
  { id: "unitLabel", label: "What do you call one unit of work?",
    hint: "This is what you track day to day.", type: "select",
    options: ["Job", "Project", "Order", "Booking", "Case", "Engagement", "Shift"] },
  { id: "teamSize", label: "How big is your team?", hint: "Including yourself.", type: "select",
    options: ["Just me", "2-5 people", "6-15 people", "15+ people"] },
  { id: "challenge", label: "What's your biggest operational headache?",
    hint: "What keeps slipping through the cracks?", type: "select",
    options: ["Things get lost between stages", "Following up with clients",
      "Knowing who's doing what", "Quality consistency", "Scheduling and no-shows"] },
  { id: "pattern", label: "How does your work come in?", hint: "This shapes your workflow.",
    type: "select", options: ["Mostly one-off jobs", "Mostly recurring clients", "A mix of both", "Project-based"] },
];
