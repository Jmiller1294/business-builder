import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OpBase — Your entire operation, built for your business",
  description: "Answer a few questions and get a complete operations board, built by AI for your exact business. Free to start.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}

