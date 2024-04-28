import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-regular transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-yellow-400 text-black hover:bg-yellow-400/90",
        secondary:
          "border-transparent bg-gray-600 text-white hover:bg-gray-600/80",
        outline:
          "border-transparent bg-black text-white hover:bg-black/80",
        destructive:
          "border-transparent bg-green-700 text-white hover:bg-green-700/90",
        error:
          "border-transparent bg-red-500 text-white hover:bg-destructive/80",
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
