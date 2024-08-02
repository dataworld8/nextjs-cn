import { FC, ReactNode } from 'react'
import { cn } from "@/lib/utils"

export const Heading: FC<{ level: number; children: ReactNode; className?: string }> = ({
  level,
  children,
  className,
}) => {
  return (
    <>
      {level == 1 && (
        <h1 className={cn('text-4xl font-semibold text-slate-800 lg:text-5xl dark:text-slate-200', className)}>
          {children}
        </h1>
      )}
      {level == 2 && (
        <h2 className={cn('text-3xl font-semibold text-slate-800 dark:text-slate-200', className)}>
          {children}
        </h2>
      )}
      {level == 3 && (
        <h3 className={cn('text-xl font-semibold text-slate-800 dark:text-slate-200', className)}>
          {children}
        </h3>
      )}
      {level == 4 && (
        <h4 className={cn('text-base font-semibold text-slate-800 dark:text-slate-200', className)}>
          {children}
        </h4>
      )}
    </>
  )
}
