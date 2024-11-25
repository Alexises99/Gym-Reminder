'use client'

import Calendar from '@/components/Calendar/Calendar'
import Image from 'next/image'
import { useState } from 'react'

export default function TopHeader() {
  const [showCalendar, setShowCalendar] = useState<boolean>(false)
  return (
    <header
      className={`flex w-full px-4 ${
        showCalendar ? 'flex-col' : 'flex-row'
      } relative`}
    >
      <div className="flex w-full items-center justify-between">
        <h1 className="text-4xl">Rutina</h1>
        <Image
          src="/icons/calendar.svg"
          width={42}
          height={42}
          alt={!showCalendar ? 'Abrir calendario' : 'Cerrar calendario'}
          className="bg-primary rounded-full p-2"
          onClick={() => setShowCalendar(!showCalendar)}
        />
      </div>
      {showCalendar ? (
        <div className="absolute left-0 right-0 top-[42px] after:content-[''] after:h-dvh after:block after:w-full after:bg-calendar">
          <Calendar />
        </div>
      ) : null}
    </header>
  )
}
