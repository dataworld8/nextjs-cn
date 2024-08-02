import { FC, ReactNode } from 'react'
import { cn } from "@/lib/utils"

export const Paragraph: FC<{ children: ReactNode; className?: string }> = ({ children, className }) => {
  return <p className={cn('leading-relaxed', className)}>{children}</p>
}
