import { FC, ReactNode, isValidElement } from 'react'
import Icons from "@/components/icons"
import { cn } from "@/lib/utils"

export const Checklist: FC<{ items: ReactNode[] | any[]; className?: string }> = ({ items, className }) => {
  return (
    <ul className={cn('space-y-2 text-slate-700 dark:text-slate-300', className)}>
      {items.map((item, index) => {
        return (
          <li key={index} className="flex space-x-3">
            <div className="pt-1">
              <Icons name={isValidElement(item) ? "Check" : "CheckCircle"}  className="h-5 w-5 text-violet-600 dark:text-violet-500" />
            </div>
            <span>{item}</span>
          </li>
        )
      })}
    </ul>
  )
}
