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
        error:
          "border-transparent bg-destructive text-white hover:bg-destructive/80",
      },
      size: {
        default: "",
        sm: "h-4 w-4 rounded-md justify-center p-0 text-xs",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, size }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
