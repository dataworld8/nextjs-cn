import { useState, useEffect } from "react"

export function useTypewriter(initialValue: Array<string> = []) {
  const [texts, setTexts] = useState<Array<string>>([])

  useEffect(() => {
    const fn = (index: number) => {
      const timer = setTimeout(() => {
        if (index < initialValue.length) {
          const item = initialValue[index]
          setTexts((prevText) => prevText.includes(item) ? prevText : [...prevText, item])
          clearTimeout(timer)
          fn(index + 1)
        }
        else {
          clearTimeout(timer)
        }
      }, index > 0 ? 3000 : 100)

      return timer
    }

    const timer = fn(0)

    return () => {
      if (timer) {
        clearTimeout(timer)
      }
    }
  }, [])

  return texts
}
