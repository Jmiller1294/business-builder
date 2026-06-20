// src/lib/mock-config.ts
import type { TenantConfig } from "@/src/lib/config-schema/schema";

export const MOCK_CONFIG: TenantConfig = { 
    "name": "Dog Grooming Studio",
    "emoji": "🐾",
    "label": "Appointment",
    "color": "#10B981",
    "stages": [
      { "id": "booked",       "name": "Booked",       "color": "#8B5CF6" },
      { "id": "checked_in",   "name": "Checked In",   "color": "#6366F1" },
      { "id": "grooming",     "name": "Grooming",     "color": "#F59E0B" },
      { "id": "drying",       "name": "Drying",       "color": "#F97316" },
      { "id": "ready",        "name": "Ready",        "color": "#10B981" },
      { "id": "checked_out",  "name": "Checked Out",  "color": "#06B6D4" }
    ],
    "checklistsByStage": {
      "checked_in": [
        { "id": "c1", "text": "Confirm service type with owner", "required": true },
        { "id": "c2", "text": "Note any skin conditions or sensitivities", "required": true },
        { "id": "c3", "text": "Give estimated pickup time", "required": true }
      ],
      "ready": [
        { "id": "c4", "text": "Final coat inspection", "required": true },
        { "id": "c5", "text": "Notify owner via text", "required": true },
        { "id": "c6", "text": "Prepare invoice", "required": false }
      ]
    },
    "team": [
      { "id": "t1", "name": "Rosa Campos",  "role": "Lead Groomer", "initials": "RC", "color": "#6366F1" },
      { "id": "t2", "name": "Danny Park",   "role": "Groomer",      "initials": "DP", "color": "#10B981" },
      { "id": "t3", "name": "Lily Okafor",  "role": "Receptionist", "initials": "LO", "color": "#F59E0B" }
    ],
    "jobs": [
      { "id": "j1", "title": "Max (Golden Retriever) — Full Groom",  "stage": "grooming",    "priority": "high",   "assignees": ["t1"],      "notes": "Owner requested blueberry facial. Nervous around dryers.", "due": "" },
      { "id": "j2", "title": "Bella (Poodle) — Bath & Trim",         "stage": "checked_in",  "priority": "normal", "assignees": ["t2"],      "notes": "Standard cut. Regular client.", "due": "2026-06-20" },
      { "id": "j3", "title": "Charlie (Shih Tzu) — Full Groom",      "stage": "booked",      "priority": "low",    "assignees": [],          "notes": "2pm slot. First visit.", "due": "2026-06-21" },
      { "id": "j4", "title": "Luna (Dachshund) — Nail Trim",         "stage": "ready",       "priority": "urgent", "assignees": ["t1","t3"], "notes": "Owner waiting in the lobby.", "due": "2026-06-20" },
      { "id": "j5", "title": "Cooper (Lab Mix) — De-shed Treatment", "stage": "checked_out", "priority": "high",   "assignees": ["t2"],      "notes": "", "due": "2026-06-18" }
    ]
  }