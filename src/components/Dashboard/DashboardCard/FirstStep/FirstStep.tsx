import { ReactNode } from 'react'
import Input from './Input'
import Image from 'next/image'

interface RowProps {
  serie: number
  children: ReactNode
}

function PreviousSerie({ weight }: { weight: number }) {
  return (
    <span className="bg-background py-1 px-4 text-text-color text-xl rounded-lg">
      {weight}KG
    </span>
  )
}

function Row({ serie, children }: RowProps) {
  return (
    <div className="flex justify-between items-center">
      <span className="font-bold text-lg">Serie {serie}</span>
      {children}
    </div>
  )
}

interface DashboardCardFirstStepProps {
  translate: number
  dragging: boolean
  pendingAddSerie: boolean
}

export default function DashboardCardFirstStep({
  dragging,
  pendingAddSerie,
  translate
}: DashboardCardFirstStepProps) {
  return (
    <section
      className={`flex flex-col w-full gap-4 ${
        dragging ? '' : 'transition-[transform]'
      }`}
      style={{ transform: `translateX(${translate}px)` }}
    >
      <Row serie={1}>
        <PreviousSerie weight={32} />
      </Row>
      <Row serie={2}>
        <PreviousSerie weight={32} />
      </Row>
      <Row serie={3}>
        <PreviousSerie weight={32} />
      </Row>
      {pendingAddSerie ? (
        <Row serie={4}>
          <div className="bg-background max-w-32 items-center rounded-xl flex px-3 py-2">
            <Input />
            <Image
              src="/icons/kg.svg"
              width={28}
              height={28}
              alt="Nuevo peso"
            />
          </div>
        </Row>
      ) : null}
    </section>
  )
}
