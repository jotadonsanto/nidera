export default function LeftBar({ children }: { children: string | JSX.Element | JSX.Element[] | (() => JSX.Element) }) {
  return (
    <div className="[&>*]:p-6 min-w-[300px] w-1/5 flex flex-col h-100">
      <>{ children }</>
    </div>
  )
}