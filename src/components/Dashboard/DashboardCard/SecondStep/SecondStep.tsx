import Image from 'next/image'
import Input from '../FirstStep/Input'

interface DashboardCardSecondStepProps {
  target: number
  translate: number
  dragging: boolean
}

export function DashboardCardSecondStep({
  target,
  translate,
  dragging
}: DashboardCardSecondStepProps) {
  return (
    <div
      className={`flex justify-between items-center gap-2 flex-grow shrink-0 min-w-full absolute ${
        dragging ? '' : 'transition-[transform]'
      }`}
      style={{ transform: `translateX(${translate}px)` }}
    >
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
