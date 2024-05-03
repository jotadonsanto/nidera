export default function MainSide({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-1 border px-24 py-14">
      <>{ children }</>
    </div>
  )
}