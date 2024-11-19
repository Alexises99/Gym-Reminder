interface DashboardCardEntryProps {
  label: string
  value: number
}

export function DashboardCardRow({ label, value }: DashboardCardEntryProps) {
  return (
    <div className="flex items-center gap-4 w-full justify-between">
      <p className="font-semibold">{label}:</p>
      <span className="w-full block text-center text-primary text-2xl rounded-2xl px-8 font-bold flex-[0] h-fit">
        {value}KG
      </span>
    </div>
  )
}
