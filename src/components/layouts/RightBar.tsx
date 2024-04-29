import { cn } from "@/lib/utils";

export default function RightBar({ className, children }: { className?: string, children?: string | JSX.Element | JSX.Element[] | (() => JSX.Element) }) {
  return (
    <div
    className={cn(
      "flex-1 flex flex-col h-100",
      className
    )}>
      <>{ children }</>
    </div>
  )
}