import Link from "next/link"
import { FC } from 'react'
import { Checklist } from './Checklist'
import { Heading } from './Heading'
import Icons from '@/components/icons'
import type { IconName } from '@/components/icons'
import { Paragraph } from './Paragraph'
const steps = ["cli install", "specification", "testing", "optimization", "deploy"]

const content = {
  blocks: [
    {
      icon: 'CodeLight' as IconName,
      heading: 'DevOps',
      text: '📚 DevOps 知识图谱 关于Linux、服务器、数据库、部署等相关体系',
      features: [
        <Link className="underline " href="/devops" key="devops">DevOps</Link>,
        <Link className="underline " href="/linux/linux" key="linux">Linux</Link>,
        <Link className="underline " href="/server/nginx/index" key="server">服务器</Link>,
        <Link className="underline " href="/deploy" key="deploy">部署</Link>,
        <Link className="underline " href="/code" key="code">代码管理</Link>,
      ],
    },
    {
      icon: 'CodeLight' as IconName,
      heading: '前端',
      text: 'JavaScript & HTML & CSS',
      features: [
        <Link className="underline " href="/performance" key="performance">前端性能优化</Link>,
        <Link className="underline " href="/workflow" key="workflow" title={`包含${steps.toString()}可应用于您的系统设计；如果您对从零到一构建项目感到困惑，可以参考此工作流程指南`}>前端工程化（cli、规范、测试、性能、部署）</Link>,
        <Link className="underline " href="/typescript" key="typescript">TypeScript 中文文档</Link>,
        <Link className="underline " href="/nextjscn" key="nextjscn">Next.js 中文文档</Link>,
        'Nest.js',
      ],
    },
    // 下面待整理
    {
      icon: 'CodeLight' as IconName,
      heading: '前端基础知识',
      text: '',
      features: [
        <Link className="underline " href="/html" key="workflow">HTML & 语义化</Link>,
        <Link className="underline " href="/style" key="workflow">CSS & 样式解决方案（sass, less, windcss）</Link>,
        '前端知识图谱（使用思维导图）',
        <Link className="underline " href="/tailwindcss" key="tailwindcss">tailwind.css 使用</Link>,
        <>
          Simply <code>import</code> your content as data
        </>,
        'TypeScript',
      ],
    },
    {
      icon: 'CheckCircle' as IconName,
      heading: 'JavaScript',
      text: '',
      features: [
        <Link className="underline " href="/npms" key="npm">npm 使用 & 常见包</Link>,
        <Link className="underline " href="/nextjscn" key="nextjs">Next.js 使用</Link>,
        <Link className="underline " href="/topics" key="topic">topic</Link>,
        'Node.js'
      ],
    },
    {
      icon: 'Lightning' as IconName,
      heading: "多平台开发",
      text: '',
      features: [
        'Validates your content & frontmatter', 'Generates TypeScript types', 'Great error messages',
        'Incremental & parallel builds', 'Instant content live-reload', 'Scales to 100k of documents'
      ],
    },
    // {
    //   icon: 'lightning' as IconName,
    //   heading: "Node.js & TypeScript 全栈",
    //   text: '',
    //   features: [
    //     'Validates your content & frontmatter', 'Generates TypeScript types', 'Great error messages',
    //     'Incremental & parallel builds', 'Instant content live-reload', 'Scales to 100k of documents'
    //   ],
    // },
    {
      icon: 'Lightning' as IconName,
      heading: "鸿蒙相关",
      text: `独立开发路漫漫，项目、部署、运营、推广`,
      features: [
        <Link className="underline " href="/harmony" key="harmony">鸿蒙认证</Link>,
        '鸿蒙开发流程', // https://www.bilibili.com/video/BV1Aa4y1C7jD/?spm_id_from=333.999.0.0&vd_source=d0f57fac910ae929f1d4938274c2fddf
        'Incremental & parallel builds', 'Instant content live-reload', 'Scales to 100k of documents'
      ],
    },
    {
      icon: 'Lightning' as IconName,
      heading: "参考手册",
      text: `独立开发路漫漫，项目、部署、运营、推广`,
      features: [
        '内容正在更新中',
        'Incremental & parallel builds', 'Instant content live-reload', 'Scales to 100k of documents'
      ],
    },
  ],
}

export const Features: FC = () => {
  return (
    <div className="mt-16 bg-gray-50 md:mt-24 lg:mt-32 dark:bg-gray-900/50">
      <div className="mx-auto grid w-full max-w-screen-xl grid-cols-1 gap-16 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-3 lg:py-32">
        {content.blocks.map(({ icon, heading, text, features }, index) => (
          <div key={index} className="max-w-xl space-y-4 md:mx-auto lg:mx-0">
            <div className="flex items-center">
              <div className="mr-1.5 w-12 rounded-full border border-violet-200 bg-violet-100 p-2.5 text-violet-600 dark:border-violet-900 dark:bg-violet-900/50 dark:text-violet-500">
                <Icons name={icon} />
              </div>
              <Heading level={3}>{heading}</Heading>
            </div>
            <Paragraph>{text}</Paragraph>
            <Checklist items={features} />
          </div>
        ))}
      </div>
    </div>
  )
}
