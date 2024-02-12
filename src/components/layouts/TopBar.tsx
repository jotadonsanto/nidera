export default function TopBar({ children }: { children: JSX.Element | JSX.Element[] | (() => JSX.Element) }) {
  return (
    <div className="pt-6">
      <>{ children }</>
    </div>
  )
}