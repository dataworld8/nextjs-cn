import * as React from 'react'
import { memo } from 'react'

const styles = {
  li: 'mb-2.5 pl-3 relative after:content-["\ "] after:absolute after:left-0 after:top-1/2 after:ml-0.5 after:text-red-500 after:bg-orange-500 after:w-1 after:h-1',
  gradient: {
    // '-webkit-text-fill-color': '#0000',
    'backgroundImage': 'linear-gradient(81deg,#8186a3,#a99da1,#f0c3a7)',
  }
}

const About: React.FC = () => {
    return (
      <section className="flex py-11">
        <div className="w-1/2">
          <header className="mb-5">
            <h2 className="mb-3.5 text-xl font-bold">前端架构师</h2>
            <p className="bg-clip-text text-base text-ring" style={styles.gradient}>多年 JavaScript 全栈开发经验，长期关注前端工程化，开发体验优化等方向，对数据可视化、低代码、微前端等多个项目实践。</p>
          </header>
          <div>
            <ul className="color-ring text-base leading-normal">
              <li className={styles.li}>前端：Vue 技术栈、React 技术栈、ES6/7/8、Tailwindcss、d3</li>
              <li className={styles.li}>服务端：Nest.js、Koa2、Express</li>
              <li className={styles.li}>数据库：MongoDB、Mysql、Postgresql</li>
              <li className={styles.li}>其他：Webpack、Vite、Typescript、Serverless</li>
            </ul>
          </div>
          {/* <a
            href="/"
            target="_blank"
            rel="noreferrer"
            // className={buttonVariants({ variant: "outline" })}
          >
            命令行查看
          </a> */}
        </div>
        <div className="w-1/2">
          <div className="m-auto h-full w-4/5 rounded-md bg-gradient-to-r from-[#b3a39c] to-[#dfdad6]"></div>
        </div>
      </section>
    )
  }

export default memo(About)