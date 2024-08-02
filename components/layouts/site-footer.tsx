import { siteConfig } from "@/config/sitemeta"

export default function SiteFooter() {
  return (
    <footer className="py-6 md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-col">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by{" "}
          <a
            href={siteConfig.url}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            balac
          </a>
          . The source code is available on{" "}
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>

        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          如果本教程能为您得到帮助，请给予项目 <a 
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >Learn Next.js 中文教程</a> 一个 ★ 做为支持！
        </p>
        {/* <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          Copyright © 2023 smartchart.cn All Rights Reserved.{" "}
          <a
            href="https://beian.miit.gov.cn"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            粤ICP备19061098号-1
          </a>
          .
        </p> */}
      </div>
    </footer>
  )
}
