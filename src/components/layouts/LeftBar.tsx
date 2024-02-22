export default function LeftBar({ children }: { children: any[] | string | JSX.Element | JSX.Element[] | (() => JSX.Element) }) {
  return (
    <div className="[&>*]:p-6 min-w-[350px] w-1/5 flex flex-col h-100">
      <>{ children }</>
    </div>
  )
}