export default function Container({ top, left, right, main }: {
  top?: string | JSX.Element | JSX.Element[] | (() => JSX.Element),
  left?: string | JSX.Element | JSX.Element[] | (() => JSX.Element),
  right?: string | JSX.Element | JSX.Element[] | (() => JSX.Element),
  main?: string | JSX.Element | JSX.Element[] | (() => JSX.Element),
}) {
  return (
    <div className="flex flex-1 flex-col">
      <>{ top }</>
      <>{ main }</>
      {
        (left !== undefined || right !== undefined) &&
        <div className="flex flex-1">
          <>{ left }</>
          <>{ right }</>
        </div>
      }
    </div>
  )
}