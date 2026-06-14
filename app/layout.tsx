import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OpBase",
  description: "An operations board built for your business — in one step.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
