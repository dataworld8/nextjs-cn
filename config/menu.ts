import { MainNavItem, SidebarNavItem } from "types/nav"

export const title: string = "Learn Next.js 中文教程"

export const mainNav: MainNavItem[] = []

export const sidebarNav: SidebarNavItem[] = [
  {
    title: "",
    items: [
      {
        title: "Learn Next.js 介绍",
        href: "/index", // installation
        label: "V14.2",
      },
      {
        title: "Vercel Postgres 搭配本地数据库",
        href: "/chapter17",
      },
      {
        title: "Next.js 学习资源",
        href: "/chapter18",
      },
    ],
  },
  {
    title: "Dashboard App", // getting-started
    items: [
      {
        title: '开始',
        href: '/getting-started',
      },
      {
        title: 'CSS 样式',
        href: '/css-styling',
      },
      {
        title: '优化字体和图片',
        href: '/optimizing-fonts-images',
      },
      {
        title: '创建 Layouts 和 Pages',
        href: '/creating-layouts-and-pages',
      },
      {
        title: '页面间导航',
        href: '/navigating-between-pages',
      },
      {
        title: '建立你的数据库',
        href: '/setting-up-your-database',
      },
      {
        title: '获取数据',
        href: '/fetching-data',
      },
      {
        title: '静态 & 动态渲染',
        href: '/static-and-dynamic-rendering',
      },
      {
        title: '流式传输',
        href: '/streaming',
      },
      {
        title: '部分预渲染',
        href: '/partial-prerendering',
      },
      {
        title: '添加搜索和分野',
        href: '/adding-search-and-pagination',
      },
      {
        title: 'Mutating 数据',
        href: '/mutating-data',
      },
      {
        title: '错误处理',
        href: '/error-handling',
      },
      {
        title: '提高可访问性',
        href: '/improving-accessibility',
      },
      {
        title: '添加身份验证',
        href: '/adding-authentication',
      },
      {
        title: '添加元数据',
        href: '/adding-metadata',
      },
    ],
  },
]
