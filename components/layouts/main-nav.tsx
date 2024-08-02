"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { mainNav, siteConfig } from "@/config/sitemeta"
import { cn } from "@/lib/utils"

import Icons from "@/components/icons"
import { Badge } from "@/components/ui/badge"

export default function MainNav() {
  const pathname = usePathname()
  const name = pathname?.split?.("/")?.[1] || ""

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons name="Logo" className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center gap-6 text-sm">
        {mainNav.map((item) => {
          return (
            <Link
              key={item.href}
              href={item.href!}
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname?.startsWith(item.href!) || item?.includes?.includes?.(name) ? "text-foreground" : "text-foreground/60"
              )}
            >
              {item.title}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
