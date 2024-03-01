import * as React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const InputFile = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, children, ...props }, ref) => {
    return (
      <>
      <Button variant={'secondary'}>{children}</Button>
      <div
        className={cn(
          "hidden gap-2 items-center h-9 w-full rounded-md border border-input bg-white px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-white file:text-sm file:font-medium placeholder:text-muted-foreground focus-within:outline-none focus-within:ring-1 focus-within:ring-gray-600 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}>
        <input
          type={type}
          ref={ref}
          className="flex h-9 w-full rounded-md bg-transparent text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50"
          {...props}
        />
      </div>
      </>
    )
  }
)
InputFile.displayName = "InputFile"

export { InputFile }
