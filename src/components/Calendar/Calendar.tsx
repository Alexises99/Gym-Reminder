'use client'

import { useState } from 'react'
import DatePicker from './DatePicker/DatePicker'
import Image from 'next/image'

const monthFormat = new Intl.DateTimeFormat('es-ES', {
  month: 'long'
})

export default function Calendar() {
  const actual = new Date()
  const acutalMonth = new Date(actual.getFullYear(), actual.getMonth(), 1)
  const [currentMonth, setCurrentMonth] = useState<Date>(acutalMonth)

  const handleCurrentMonth = (index: number) =>
    setCurrentMonth((prev) => {
      const copyPrev = new Date(prev)
      copyPrev.setMonth(prev.getMonth() + index)
      return copyPrev
    })

  return (
    <article className="flex flex-col border-2 border-container p-4 bg-[#2C2C2C] shadow-calendar z-10">
      <header className="flex justify-between my-4 items-center">
        <Image
          src="/icons/arrow.svg"
          width={32}
          height={32}
          alt="Mes anterior"
          onClick={() => handleCurrentMonth(-1)}
        />
        <span className="text-xl capitalize">
          {monthFormat.format(currentMonth)}
        </span>
        <Image
          src="/icons/arrow.svg"
          width={32}
          height={32}
          alt="Mes posterior"
          className="rotate-180"
          onClick={() => handleCurrentMonth(1)}
        />
      </header>
      <DatePicker
        data={{}}
        currentMonth={currentMonth}
        handleCurrentMonth={handleCurrentMonth}
      />
    </article>
  )
}
