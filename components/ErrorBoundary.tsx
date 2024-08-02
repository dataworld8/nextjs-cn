'use client'

import * as React from 'react'

/**
 * 错误边界组件
 * 错误边界具有一种或两种生命周期方法：
 * static getDerivedStateFromError()（第9-11行）：设置错误状态以呈现后备用户界面。
 * componentDidCatch()（第13-16行）：用于记录错误信息。
 * 
 * https://github.com/ygweric/tech-awesome/issues/91
 * https://github.com/webpack/webpack/issues/6680
 */
export default class ErrorBoundary extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error(error);
    console.error(errorInfo);
  }

  render() {
    if ((this.state as any).hasError) {
      // return <NotFound /> // <h1>Something went wrong...</h1>;
      return <div>404</div>
    }

    return (this.props as any).children;
  }
}
