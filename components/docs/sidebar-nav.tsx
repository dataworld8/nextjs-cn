"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { SidebarNavItem } from "types/nav"

import { cn } from "@/lib/utils"

export interface DocsSidebarNavProps {
  items: SidebarNavItem[]
}

export default function DocsSidebarNav({ items }: DocsSidebarNavProps) {
  const pathname = usePathname()

  return items.length ? (
    <div className="w-full">
      {items.map((item, index) => (
        <div key={index} className={cn("pb-4")}>
          {item.title && (
            <h4 className="mb-1 rounded-md pr-2 py-1 text-sm font-semibold">
              {item.title}
            </h4>
          )}
          {item?.items?.length && (
            <DocsSidebarNavItems parent={item.title} items={item.items} pathname={pathname} />
          )}
        </div>
      ))}
    </div>
  ) : null
}

interface DocsSidebarNavItemsProps {
  parent?: string
  items: SidebarNavItem[]
  pathname: string | null
}

export function DocsSidebarNavItems({
  items,
  pathname,
  parent,
}: DocsSidebarNavItemsProps) {
  return items?.length ? (
    <div className="grid grid-flow-row auto-rows-max text-sm">
      {items.map((item, index) =>
        item.href && !item.disabled ? (
          <Link
            key={index}
            href={item.href}
            // className={cn(
            //   "group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline",
            //   item.disabled && "cursor-not-allowed opacity-60",
            //   pathname === item.href
            //     ? "font-medium text-foreground"
            //     : "text-muted-foreground"
            // )}
            className={cn(
              "flex w-full items-center border-slate-200 p-2 text-slate-500 hover:bg-muted hover:text-sky-500",
              {
                "bg-muted rounded-md text-sky-500 border-l-sky-500": pathname === item.href,
                "border-l": !!parent,
                "pl-4": !!parent
              }
            )}
            target={item.external ? "_blank" : ""}
            rel={item.external ? "noreferrer" : ""}
          >
            {item.title}
            {item.label && (
              <span className="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">
                {item.label}
              </span>
            )}
          </Link>
        ) : (
          <span
            key={index}
            className={cn(
              "flex w-full cursor-not-allowed items-center rounded-md p-2 text-muted-foreground hover:underline",
              item.disabled && "cursor-not-allowed opacity-60"
            )}
          >
            {item.title}
            {item.label && (
              <span className="ml-2 rounded-md bg-muted px-1.5 py-0.5 text-xs leading-none text-muted-foreground no-underline group-hover:no-underline">
                {item.label}
              </span>
            )}
          </span>
        )
      )}
    </div>
  ) : null
}
