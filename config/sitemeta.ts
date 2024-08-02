import { MainNavItem, SidebarNavItem } from "types/nav"

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Learn Next.js 中文教程", // "随风小站",
  url: "https://balac2015.github.io",
  ogImage: "https://ui.shadcn.com/og.jpg",
  description:
    "Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.",
  links: {
    github: "https://github.com/balac2015",
  },
  author: "balac"
}
 
export const mainNav: MainNavItem[] = []
