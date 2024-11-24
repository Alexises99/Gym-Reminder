'use client'

import { useState } from 'react'
import DatePicker from './DatePicker/DatePicker'
import useDashboard from '@/store/dashboard'

export default function Calendar() {
  const actual = new Date()
  const acutalMonth = new Date(actual.getFullYear(), actual.getMonth(), 1)
  const [currentMonth, setCurrentMonth] = useState<Date>(acutalMonth)

  const { selectedDate } = useDashboard()

  const dateTemplate = `${selectedDate.getDay()}/${
    selectedDate.getMonth() + 1
  }/${selectedDate.getFullYear()}`

  const handleCurrentMonth = (index: number) =>
    setCurrentMonth((prev) => {
      const copyPrev = new Date(prev)
      copyPrev.setMonth(prev.getMonth() + index)
      return copyPrev
    })

  return (
    <article className="flex flex-col">
      <header className="flex justify-between mx-7">
        <span onClick={() => handleCurrentMonth(-1)}>Atras</span>
        <span>{dateTemplate}</span>
        <span onClick={() => handleCurrentMonth(1)}>Siguiente</span>
      </header>
      <DatePicker
        data={{}}
        currentMonth={currentMonth}
        handleCurrentMonth={handleCurrentMonth}
      />
    </article>
  )
}
