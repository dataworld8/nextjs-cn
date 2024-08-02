import * as React from 'react'
import { memo } from 'react'
import Image from 'next/image'

import EleadImg from '@/assets/images/elead.jpg'
import IsoftstoneImg from '@/assets/images/isoftstone.png'
import SurfilterImg from '@/assets/images/surfilter.png'

const WorkInfo = ({ className = "", src, href, name, work, children }: any) => {
    return (
        <article className={"w-1/2 shrink items-center border-b border-solid border-border py-11 " + className}>
            <div className="relative m-auto mb-8 h-96 w-full bg-gradient-to-r from-[#c2bbb0] via-[#c6bbb6] to-[#dfdad6]">
                {/* <img src={src} alt="" className="h-full w-full opacity-50" /> */}
                {src && <Image
                    src={src}
                    alt={name}
                    width={undefined}
                    height={undefined}
                    className="h-full w-full opacity-50"
                />}

                {children && (<div className="absolute top-0 m-5 overflow-hidden rounded-md bg-[#e2e8f073] p-5 text-sm hover:bg-[#e2e8f0d9]" style={{ height: "calc(100% - 2.5rem)" }}>
                    {children}
                </div>)}
            </div>
            <h3 className="mb-3.5 text-base font-bold">{href ? <a className="underline underline-offset-4" href={href} target="_target">{name}</a> : name}</h3>
            <p className="text-sm text-ring">{work}</p>
        </article>
    )
}

const Experience: React.FC = () => {
    // 左右
    const leftStyle = " pr-11 border-r"
    const rightStyle = " pl-11"

    // 始末行
    const beforeStyle = " pt-0"
    const afterStyle = " pb-0 border-b-0"

    return (
        <section className="pb-6 pt-12">
            <header className="mb-11">
                <h2 className="inline border-b-2 border-solid border-b-orange-500 pb-3 pr-5 text-xl font-bold">公司历程</h2>
            </header>
            <div className="flex flex-wrap">
                <WorkInfo
                    className={leftStyle + " " + beforeStyle}
                    src={IsoftstoneImg}
                    name="西安软通动力信息技术股份有限公司"
                    work="高级前端工程师（2021/09 / 2023/12）"
                    href="https://www.isoftstone.com"
                >
                    <p>职责业绩:参与了汇丰银行 NetPlus 项目，React Transform 项目的开发。 </p>
                    <p>工业交换机智能运维项目的架构和开发(vue 技术栈开发，数据可视化的方式大屏展示网络监控信息和网络性能情况)</p>
                </WorkInfo>
                <WorkInfo
                    className={rightStyle + " " + beforeStyle}
                    src={EleadImg}
                    name="上海易立德信息技术股份有限公司"
                    work="前端架构师（2015/12 ～ 2021/09）"
                    href="http://www.e-lead.cn"
                >
                    <p className="mb-2.5">职责业绩:负责公司自研产品 ERDP(产品研发管理平台，主要提供企业产品研发管理领域、产品生命周期管理)的前端把控和 性能优化</p>
                    <p className="mb-2.5">项目前端工程化搭建，梳理通用组件、公用工具、协调组员任务分配，把控项目进度等。</p>
                    <p className="mb-2.5">负责了天马微电子产品研发管理客制化项目，西飞工艺会签协同项目并成功上线</p>
                    <p className="mb-2.5">参与美的集团项目开发:美的健康(Webapp)、美的工厂直销(微信服务号)、业务通(Webapp)、小天鹅 U 净洗衣房(消费 +加盟商 Webapp、微信服务号、Node.js 后端)、问卷调查(Webapp、PC)</p>
                    <p className="mb-2.5">贡献:获得公司 2019 年度技术贡献奖</p>
                </WorkInfo>
                <WorkInfo
                    className={leftStyle + " " + afterStyle}
                    src={SurfilterImg}
                    name="任子行网络技术股份有限公司"
                    work="测试工程师（2013/02 ～ 2014/04）"
                    href="http://www.surfilter.com"
                >
                    <div className="text-sm">
                        <p className="mb-1.5">1、负责对本组测试任务的分配，跟踪计划的执行；按照检测规范和作业指导书执行检测。</p>
                        <p className="mb-1.5">2、分析检测结果，对检验质量结果负责，对预防和改变不良品发生提出改进意见，并指导生产过程中做出改进。</p>
                        <p className="mb-1.5">3、负责组织对测试工作进行总结，负责组织测试技术、方法、工具的研究和培训。</p>
                        <p className="mb-1.5">4、负责部门检测资源的管理和维护。</p>
                        <p className="mb-1.5">5、负责对检验不良和检验不合格品进行处理，协助供应商处理问题并获取供应。</p>
                        <p className="mb-1.5">6、产品的检验确认．对能处理的问题进行及时处理，对于不能处理的问题负责将问题汇总，分析并通知采购联系供货商处理。</p>
                        <p className="mb-1.5">7、负责试用/销售退回产品的检验及任务安排，编制检验报告并做好损失报告单。</p>
                        <p className="mb-1.5">8、完成上级指定的相关其他任务。</p>
                    </div>
                </WorkInfo>
                <WorkInfo
                    className={rightStyle + " " + afterStyle}
                    name="深圳义乌华贸电子商务商贸有限公司"
                    work="前端工程师（2014/04 ～ 2015/10）"
                >
                    <p className="mb-2.5">公司是以电子商务模式的网购平台，在职期间担任前端开发工程师的职位，主要负责以下工作：</p>
                    <p className="mb-2.5">1、负责网站相关活动页面的开发制作，将 PSD 图转化为 HTML 页面。如：抽奖活动、新年、五一等相关活动页面的制作和相关效果的实现。</p>
                    <p className="mb-2.5">2、配合后台开发人员，完成页面的交互功能，</p>
                    <p className="mb-2.5">3、优化用户体验，修正网站中出现的异常问题；</p>
                    <p className="mb-2.5">4、优化前端代码，完成前端 css、js 的框架化，以及相关模块化的建立和完善。</p>
                </WorkInfo>
            </div>
        </section>
    )
}

export default memo(Experience)