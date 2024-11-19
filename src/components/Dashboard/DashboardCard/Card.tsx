import Image from 'next/image'
import DashboardCardFirstStep from './FirstStep/FirstStep'

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
    <article className="flex flex-col bg-container rounded-3xl p-4 gap-4">
      <header className="flex items-center justify-between">
        <h2 className="text-primary text-2xl">{title}</h2>
        <div className="flex gap-4 items-center">
          <div className="flex gap-2">
            <div className="w-2 h-2 bg-white rounded-full" />
            <div className="w-2 h-2 bg-gray-500 rounded-full" />
          </div>
          <button className="bg-background rounded-full p-2">
            <Image
              src="/icons/edit.svg"
              width={24}
              height={24}
              alt="Editar ejercicio"
            />
          </button>
        </div>
      </header>

      <DashboardCardFirstStep target={target} />
    </article>
  )
}
