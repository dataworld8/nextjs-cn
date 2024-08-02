import DocsSidebarNav from "@/components/docs/sidebar-nav"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { sidebarNav as sidebars } from "@/config/menu"

import type { FC } from "react"
import type { LayoutSlug } from "@/types"

import "@/styles/mdx.css"

const DocsLayout: FC<LayoutSlug> = ({ children }) => {
  return (
    <div 
      className={cn(
        "container flex-1 items-start md:grid  md:gap-6  lg:gap-10",
        sidebars.length > 0 ? "md:grid-cols-[220px_minmax(0,1fr)]  lg:grid-cols-[240px_minmax(0,1fr)]" : ""
      )}
    >
      {sidebars.length > 0 ? (
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 border-r md:sticky md:block">
          <ScrollArea className="h-full py-6 pr-2 lg:py-8">
            <DocsSidebarNav items={sidebars} />
          </ScrollArea>
        </aside>
      ) : null}
      {children}
    </div>
  )
}

export default DocsLayout
