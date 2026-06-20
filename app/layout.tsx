import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Extelligence Invest",
  description: "A cross-border early-stage investment firm focused on transformative technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
