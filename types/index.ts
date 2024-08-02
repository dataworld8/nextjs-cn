
export interface IconProps {
  color?: string
  className?: string
  width?: string
  height?: string
}

export interface LayoutProps {
  children: React.ReactNode
}

export interface SlugPageProps {
  // params 值：{"slug":["pa"]} 或 {}
  params: {
    slug: string[]  // {"slug": ["build-vite", "params-2"]}
  }
}

export interface LayoutSlug {
  children: React.ReactNode
  params: {
    slug: string[]
  }
}
