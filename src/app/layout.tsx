import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OpBase — AI Config Engine",
  description: "Answer five questions, get a board built for your business.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-ink text-chalk">{children}</body>
    </html>
  );
}
