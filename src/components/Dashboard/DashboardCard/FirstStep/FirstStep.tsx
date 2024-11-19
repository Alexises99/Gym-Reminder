import Image from 'next/image'
import Input from './Input'

interface DashboardCardFirstStepProps {
  target: number
}

export default function DashboardCardFirstStep({
  target
}: DashboardCardFirstStepProps) {
  return (
    <div className="flex justify-between items-center gap-2">
      <div className="flex items-center gap-2 bg-secundary px-2 py-1 rounded-xl">
        <Image
          src="/icons/target.svg"
          alt="Objetivo"
          width={28}
          height={28}
          color="red"
        />
        <span className="text-xl text-text-color">{target} KG</span>
      </div>

      <div className="bg-background max-w-32 items-center rounded-xl flex px-3 py-2">
        <Input />
        <Image src="/icons/kg.svg" width={28} height={28} alt="Nuevo peso" />
      </div>
    </div>
  )
}
