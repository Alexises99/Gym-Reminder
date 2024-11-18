import Input from './Input'
import { DashboardCardRow } from './Row'

interface DashboardCardProps {
  title: string
  lastWeight: number
  target: number
}

export default function DashboardCard({
  lastWeight,
  target,
  title
}: DashboardCardProps) {
  return (
    <article className="flex flex-col bg-container rounded-3xl p-4">
      <h2 className="text-primary text-2xl">{title}</h2>
      <div className="flex flex-col gap-2 ml-2">
        <DashboardCardRow label="Ultimo registro" value={lastWeight} />
        <DashboardCardRow label="Objetivo" value={target} />
        <div className="self-end">
          <Input />
        </div>
      </div>
    </article>
  )
}
