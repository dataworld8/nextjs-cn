import * as React from 'react'
import { memo } from 'react'

const ProjectInfo = ({ title, desc }: any) => {
  return (
    <article className="my-10 ml-10 mr-5 flex items-center pb-10 pl-5 pr-2.5 pt-0" style={{ width: 'calc(50% - 3.75rem)' }}>
      <div className="relative mr-9">
        <div className="flex h-24 w-24 rotate-45 items-center justify-center rounded border-2 border-solid border-border">
          {/* <Icons.gitHub className="h-6 w-6 -rotate-45 text-orange-500" /> */}
          github
        </div>
      </div>
      <div>
        <h3 className="mb-3.5 text-base font-bold">{title}</h3>
        <p className="text-base text-ring">{desc}</p>
      </div>
    </article>
  )
}
const Projects: React.FC = () => {
  return (
    <section className="border-y border-solid border-border pb-6 pt-12">
      <header className="mb-12">
        <h2 className="inline border-b-2 border-solid border-b-orange-500 pb-3 pr-5 text-xl font-bold">项目实践</h2>
      </header>
      <div className="-mb-5 flex flex-wrap">
        <ProjectInfo
          title="数据可视化"
          desc="Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam."
        />
        <ProjectInfo
          title="低代码"
          desc="Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam."
        />
        <ProjectInfo
          title="web 在线工具"
          desc="Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam."
        />
        <ProjectInfo
          title="Play"
          desc="Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam."
        />
      </div>
    </section>
  )
}

export default memo(Projects)