export default function LeftBar({ children, ...props }: {  children: React.ReactNode, size?: 'sm' }) {
  return (
    <div className={props?.size === 'sm' ? "min-w-[220px] " : "min-w-[350px] " + " [&>*]:p-6 w-1/5 flex flex-col h-100"}>
      <>{ children }</>
    </div>
  )
}