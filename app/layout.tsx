import { Metadata, Viewport } from "next"

import Analytics from "@/components/layouts/analytics"
import ThemeProvider from "@/components/layouts/providers"
import TailwindIndicator from "@/components/layouts/tailwind-indicator"
import ThemeSwitcher from "@/components/layouts/theme-switcher"
import SiteHeader from "@/components/layouts/site-header"
import SiteFooter from "@/components/layouts/site-footer"

import { siteConfig } from "@/config/sitemeta"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"

import type { FC } from "react"
import type { LayoutProps } from "@/types"

import "@/styles/globals.css"
import "@/styles/custom.css"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Radix UI",
  ],
  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.author,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.author,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

const AppLayout: FC<LayoutProps> = ({ children, ...rest }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen max-w-full overflow-x-hidden bg-background font-sans antialiased",
          fontSans.className
        )}
        style={{
          // background: "radial-gradient(ellipse at center,#fffeea 0%,#fffeea 35%,#b7e8eb 100%)",
        }}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex w-full min-h-screen flex-col bg-background">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
          <TailwindIndicator />
          <ThemeSwitcher />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}

export default AppLayout
