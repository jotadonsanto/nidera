export default function RightBar({ children }: { children: string | JSX.Element | JSX.Element[] | (() => JSX.Element) }) {
  return (
    <div className="flex-1">
      <>{ children }</>
    </div>
  )
}