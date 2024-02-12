export default function MainSide({ children }: { children: string | JSX.Element | JSX.Element[] | (() => JSX.Element) }) {
  return (
    <div className="flex-1 border px-24 py-14">
      <>{ children }</>
    </div>
  )
}