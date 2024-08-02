
import { allDocuments } from "contentlayer/generated"
import { notFound } from "next/navigation"
import Link from "next/link"
import Balancer from "react-wrap-balancer"

import Icons from "@/components/icons"
import { Mdx } from "@/components/docs/mdx-components"
import DocsPager from "@/components/docs/pager"
import { DashboardTableOfContents } from "@/components/docs/toc"
import { badgeVariants } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"

import { getTableOfContents } from "@/lib/toc"
import { absoluteUrl, cn } from "@/lib/utils"
import { siteConfig } from "@/config/sitemeta"
import { title } from "@/config/menu"

import type { Metadata } from "next"
import type { SlugPageProps } from "@/types"

async function getDocFromParams({ params }: SlugPageProps) {
  let slug = params.slug?.join("/") || ""
  slug = slug === "index" ? "" : slug
  const doc = allDocuments.find((doc) => doc.slug === `/${slug}`)

  if (!doc) {
    return null
  }

  return doc
}

export async function generateMetadata({ params }: SlugPageProps): Promise<Metadata> {
  const doc = await getDocFromParams({ params })

  if (!doc) {
    return {}
  }

  return {
    title: doc.title,
    description: doc.description,
    openGraph: {
      title: doc.title,
      description: doc.description,
      type: "article",
      url: absoluteUrl(doc.slug),
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
      title: doc.title,
      description: doc.description,
      images: [siteConfig.ogImage],
      creator: siteConfig.author,
    },
  }
}

/**
 * 可以在构建时与动态路线段至静态生成路由结合使用，而不是在请求时按需使用
 */
// export async function generateStaticParams(): Promise<SlugPageProps["params"][]> {
//   return allDocuments.map((doc) => ({
//     slug: doc.slugAsParams.split("/"),
//   }))
// }

export default async function DocsPage({ params }: SlugPageProps) {
  const doc = await getDocFromParams({ params })
  const name = params.slug?.[0]

  if (!doc) {
    notFound() // 会显示 404 内容
  }

  const toc = await getTableOfContents(doc.body.raw)

  return (
    <main className={cn("relative py-6 lg:py-8 ", { "lg:gap-10 xl:grid xl:grid-cols-[1fr_300px]": doc.toc })}>
      <div className="mx-auto w-full min-w-0">

        {/* todo: 中文文档 > 入门 > 介绍，多层级问题 */}
        <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
          <div className="overflow-hidden text-ellipsis whitespace-nowrap">
            {title}
          </div>
          <Icons name="ChevronRight" className="h-4 w-4" color="#ccc" />
          <div className="font-medium text-foreground">{doc.title}</div>
        </div>

        <div className="hidden space-y-2">
          <h1 className={cn("scroll-m-20 text-4xl font-bold tracking-tight")}>
            {doc.title}
          </h1>
          {doc.description && (
            <p className="text-lg text-muted-foreground">
              <Balancer>{doc.description}</Balancer>
            </p>
          )}
        </div>

        {doc.links ? (
          <div className="flex items-center space-x-2 pt-4">
            {doc.links?.doc && (
              <Link
                href={doc.links.doc}
                target="_blank"
                rel="noreferrer"
                className={cn(badgeVariants({ variant: "secondary" }), "gap-1")}
              >
                Docs
                <Icons name="ExternalLink" className="h-3 w-3" />
              </Link>
            )}
            {doc.links?.api && (
              <Link
                href={doc.links.api}
                target="_blank"
                rel="noreferrer"
                className={cn(badgeVariants({ variant: "secondary" }), "gap-1")}
              >
                API Reference
                <Icons name="ExternalLink" className="h-3 w-3" />
              </Link>
            )}
          </div>
        ) : null}

        <div className="pb-12 pt-8">
          <Mdx code={doc.body.code} />
        </div>
        <DocsPager doc={doc} />
      </div>
      
      {doc.toc && (
        <div className="hidden text-sm xl:block">
          <div className="sticky top-16 -mt-10 pt-4">
            <ScrollArea className="pb-10">
              <div className="sticky top-16 -mt-10 h-[calc(100vh-3.5rem)] py-12 w-[300px]">
                <DashboardTableOfContents toc={toc} />
              </div>
            </ScrollArea>
          </div>
        </div>
      )}
    </main>
  )
}
