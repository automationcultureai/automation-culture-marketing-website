import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/ThemeProvider";
import { AnimationController } from "@/components/AnimationController";
import "./globals.css";

export const metadata: Metadata = {
  title: "Automation Culture.AI — We automate the boring parts.",
  description:
    "AI-powered workflow automation for small businesses. Stop doing repetitive work. Start doing the work that matters.",
  openGraph: {
    title: "Automation Culture.AI",
    description: "We automate the boring parts. You take the credit.",
    url: "https://acai-webpage.vercel.app",
    siteName: "Automation Culture.AI",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <AnimationController />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
