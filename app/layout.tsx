import React from "react";
import { Metadata } from "next";
import { Inter as FontSans, Lato, Nunito } from "next/font/google";
import { cn } from "@/lib/utils";
import client from "@/tina/__generated__/client";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

import "@/styles.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: "ian's Blog", // 默認標題
    template: "%s | aipowered.top", // 標題模板，%s 會被頁面標題替換
  },
  description: "I like the MCPs.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const globalQuery = await client.queries.global({
    relativePath: "index.json",
  });
  const global = globalQuery.data.global;

  const selectFont = (fontName: string | null | undefined) => {
    switch (fontName) {
      case "nunito":
        return `font-nunito ${nunito.variable}`;
      case "lato":
        return `font-lato ${lato.variable}`;
      case "sans":
      default:
        return `font-sans ${fontSans.variable} `;
    }
  };
  const fontVariable = selectFont(global.theme?.font);

  return (
    <html lang="en">
      <head>
        {/* these are also defined in next.config.js but github pages doesn't support response headers */}
        {/* if you aren't deploying to github pages, feel free to delete these tags */}
        <meta name="X-Frame-Options" content="SAMEORIGIN" />
        <meta name="Content-Security-Policy" content="frame-ancestors 'self'" />
      </head>
      <body
        suppressHydrationWarning
        className={cn("min-h-screen flex flex-col antialiased", fontVariable)}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
