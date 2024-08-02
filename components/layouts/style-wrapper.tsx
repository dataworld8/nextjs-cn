"use client"

import * as React from "react"

import { useConfig } from "@/hooks/use-config"

interface StyleWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  styleName?: any
}

export default function StyleWrapper({ styleName, children }: StyleWrapperProps) {
  const [config] = useConfig()

  if (!styleName || config.style === styleName) {
    return <>{children}</>
  }

  return null
}