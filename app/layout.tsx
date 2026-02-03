import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages, getTranslations } from "next-intl/server";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";

import Footer from "@/components/footer";
import Header from "@/components/header";
import type React from "react";
import "./globals.css";
import { Toaster } from "sonner";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations("metadata.landing");

  // Get domain from env, fallback to localhost if not set
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const title = t("title");
  const description = t("description");

  return {
    // This now dynamically scales based on your environment
    metadataBase: new URL(siteUrl),

    title: {
      default: title,
      template: `%s | Astrah OS`,
    },
    description,

    alternates: {
      canonical: "./",
    },

    openGraph: {
      title,
      description,
      locale: locale === "ar" ? "ar_AE" : "en_US",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

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
export const sfArabic = localFont({
  src: [
    {
      path: "./fonts/SF-Arabic.ttf",
      style: "normal",
    },
  ],
  variable: "--font-sf-arabic",
  display: "swap",
});

export const gilroy = localFont({
  src: [
    {
      path: "./fonts/Gilroy-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Gilroy-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Gilroy-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Gilroy-SemiBold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Gilroy-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-gilroy",
  display: "swap",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();
  const isRTL = locale === "ar";

  const defaultFont = locale === "ar" ? sfArabic : sfPro;
  return (
    <html lang={locale} dir={isRTL ? "rtl" : "ltr"} suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#000000" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </head>
      <body
        className={`${poppins.variable} ${gilroy.variable} ${defaultFont.className} font-sans antialiased  text-white scroll-smooth`}
      >
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
          <Toaster
            style={
              {
                "--normal-bg": "var(--popover)",
                "--normal-text": "var(--popover-foreground)",
                "--normal-border": "var(--border)",
              } as React.CSSProperties
            }
          />
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
