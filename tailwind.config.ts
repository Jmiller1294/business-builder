import type { Config } from "tailwindcss";

// Design tokens carried over from the prototype so the shipped app
// stays visually consistent with what you already built.
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0F1624", // app background (dark)
        panel: "#131B2E", // cards / surfaces
        panel2: "#1A2235", // raised surfaces
        line: "#1E2D45", // borders
        brand: "#4F46E5", // primary action
        brand2: "#6366F1", // primary hover / accent
        accent: "#7C3AED", // secondary accent
        ghost: "#475569", // muted text
        chalk: "#F0F4FF", // primary text on dark
      },
    },
  },
  plugins: [],
};
export default config;
