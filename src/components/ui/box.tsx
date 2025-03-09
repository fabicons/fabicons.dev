import * as React from 'react'
import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean
}

const Box = React.forwardRef<HTMLDivElement, BoxProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div'
    return (
      <Comp
        className={cn('rounded-md border-2 border-border p-6', className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Box.displayName = 'Box'

export { Box }
