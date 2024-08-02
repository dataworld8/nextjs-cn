import { useAtom } from "jotai"
import { atomWithStorage } from "jotai/utils"

type Config = {
  style: any // Style["name"]
  theme: any // Theme["name"]
  radius: number
}

const configAtom = atomWithStorage<Config>("config", {
  style: "new-york",
  theme: "zinc",
  radius: 0.5,
})

export function useConfig() {
  return useAtom(configAtom)
}
