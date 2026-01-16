import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";

import type React from "react";
import { LanguageWrapper } from "../components/language-wrapper";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const sfPro = localFont({
  src: [
    {
      path: "./fonts/SF-Pro-Text-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/SF-Pro-Text-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/SF-Pro-Text-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/SF-Pro-Text-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/SF-Pro-Text-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sf-pro",
  display: "swap",
});

export const gilroy = localFont({
  src: [
    {
      path: "./fonts/Gilroy-Light.woff",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-gilroy",
  display: "swap",
});
export const metadata: Metadata = {
  title: "ASTRAH OS - Business Operating System for the Gulf",
  description:
    "Stop managing chaos. Start managing revenue. The AI-native OS built for WhatsApp-first sales teams.",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <LanguageWrapper locale={locale}>
      <head>
        <meta name="theme-color" content="#000000" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </head>
      <body
        className={`${poppins.variable} ${gilroy.variable} ${sfPro.variable} font-sans antialiased bg-black text-white`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </LanguageWrapper>
  );
}
