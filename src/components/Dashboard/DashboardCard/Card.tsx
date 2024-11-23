'use client'

import Image from 'next/image'
import DashboardCardFirstStep from './FirstStep/FirstStep'
import useDrag from '@/hooks/useDrag'
import { DashboardCardSecondStep } from './SecondStep/SecondStep'
import StepIndicator from './StepIndicator'
import { useState } from 'react'

const GAP = 16

interface DashboardCardProps {
  title: string
  target: number
}

export default function DashboardCard({ target, title }: DashboardCardProps) {
  const [currentStep, setCurrentStep] = useState<1 | 2>(1)
  const [pendingAddSerie, setPendingAddSerie] = useState<boolean>(false)

  const {
    dragRef,
    dragging,
    positionX,
    handleTouchMove,
    handleTouchStart,
    handleTouchEnd
  } = useDrag(GAP, setCurrentStep)

  return (
    <article className="flex flex-col bg-container rounded-3xl p-4 gap-4">
      <header className="flex items-center justify-between">
        <h2 className="text-primary text-2xl">{title}</h2>
        <div className="flex gap-4 items-center">
          <StepIndicator currentStep={currentStep} />
          <button className="bg-primary rounded-full p-1" type="button">
            {currentStep === 1 ? (
              <Image
                src={`/icons/${pendingAddSerie ? 'done' : 'add'}.svg`}
                width={28}
                height={28}
                alt={`${pendingAddSerie ? 'Anadir serie' : 'Guardar serie'}`}
                onClick={() => setPendingAddSerie((prev) => !prev)}
              />
            ) : (
              <Image
                src="/icons/edit.svg"
                width={28}
                height={28}
                alt="Editar ejercicio"
              />
            )}
          </button>
        </div>
      </header>
      <div
        className="overflow-hidden flex gap-4 relative min-h-12"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        ref={dragRef}
      >
        <DashboardCardFirstStep
          translate={positionX}
          dragging={dragging}
          pendingAddSerie={pendingAddSerie}
        />
        <DashboardCardSecondStep
          target={target}
          translate={350 + GAP + positionX}
          dragging={dragging}
        />
      </div>
    </article>
  )
}
