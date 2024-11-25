'use client'

import useDashboard from '@/store/dashboard'
import timeUtils from '@/utils/time'
import { useEffect, useRef } from 'react'

const dayFormat = new Intl.DateTimeFormat('es-ES', {
  weekday: 'long'
})

export default function Week() {
  const { selectedDate, changeSelectedDate } = useDashboard()

  const week = timeUtils.getWeekRangeAsArray(selectedDate)

  const selectedRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (selectedRef.current) {
      selectedRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      })
    }
  }, [selectedDate])

  return (
    <section className="flex gap-2 px-4 my-3 overflow-scroll">
      {week.map((day) => (
        <span
          key={day.getTime()}
          className={`${
            day.getTime() === selectedDate.getTime() ? 'bg-primary' : 'bg-white'
          } px-4 text-background py-2 rounded-3xl capitalize `}
          ref={day.getTime() === selectedDate.getTime() ? selectedRef : null}
          onClick={() => changeSelectedDate(day)}
        >
          {dayFormat.format(day)}
        </span>
      ))}
    </section>
  )
}
