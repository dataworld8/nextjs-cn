import { useEffect } from "react"
import { useSelectedLayoutSegment } from "next/navigation"

import { useConfig } from "./use-config"

export default function useThemeSwitcher() {
  const [config] = useConfig()
  const segment = useSelectedLayoutSegment()

  useEffect(() => {
    document.body.classList.forEach((className) => {
      if (className.match(/^theme.*/)) {
        document.body.classList.remove(className)
      }
    })

    const theme = segment === "themes" ? config.theme : null
    if (theme) {
      return document.body.classList.add(`theme-${theme}`)
    }
  }, [segment, config])

}
