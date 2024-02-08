import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-regular transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-yellow-100 text-yellow-600 hover:bg-yellow-100/80",
        secondary:
          "border-transparent bg-purple-100 text-purple-600 hover:bg-purple-100/80",
        outline:
          "border-transparent bg-blue-100 text-blue-600 hover:bg-blue-100/80",
        destructive:
          "border-transparent bg-green-100 text-green-600 hover:bg-green-100/80",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
