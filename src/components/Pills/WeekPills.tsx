'use client'

import { useRef, useState, type TouchEvent, type MouseEvent } from 'react'
import timeUtils from '@utils/time'
import WeekPill from './WeekPill'
import useSelectedWeek from '@store/weekStore'

const msPerPx = 7 * 600000
const GAP = 140

export default function WeekPills() {
  const [dragging, setDragging] = useState<boolean>(false)
  const [initialCenter, initialRadius] = timeUtils.initializeRangeWeeks(2)
  const { selectedWeekNumber, selectedYear, change } = useSelectedWeek()

  const [[center, radius], setRange] = useState<[number, number]>([
    initialCenter,
    initialRadius
  ])

  const rangeRecord = useRef<{ x: number; center: number }>({
    center: center,
    x: 0
  })

  const weeksTimestamps = timeUtils.getWeeksRange(
    center - radius * 2,
    center + radius * 2
  )

  const handleTouchStart = (e: TouchEvent | MouseEvent) => {
    setDragging(true)
    rangeRecord.current = {
      center,
      x: 'touches' in e ? e.targetTouches[0].pageX : e.pageX
    }
  }

  const handleTouchMove = (e: TouchEvent | MouseEvent) => {
    if (!dragging) return
    const x = 'touches' in e ? e.touches[0].pageX : e.pageX
    const walk = rangeRecord.current.x - x

    const msPerPixel = radius / GAP

    const val = walk * msPerPixel

    const prev = rangeRecord.current.center + val

    setRange([prev, radius])
  }

  const handleEnd = () => setDragging(false)

  return (
    <section
      className="flex items-center mx-auto overflow-hidden mt-6 relative h-[54px]"
      onTouchMove={handleTouchMove}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleEnd}
      onMouseDown={handleTouchStart}
      onMouseMove={handleTouchMove}
      onMouseUp={handleEnd}
    >
      {weeksTimestamps.map((weekTimestamp) => {
        const year = new Date(weekTimestamp).getFullYear()
        const weekNumber = timeUtils.getWeekByMs(weekTimestamp)

        const isActualWeek =
          selectedWeekNumber === weekNumber && year === selectedYear

        const translate = (weekTimestamp - center) / msPerPx

        return (
          <WeekPill
            key={weekTimestamp}
            weekNumber={weekNumber}
            translate={translate}
            isActive={isActualWeek}
            handleClick={() => {
              const date = new Date(weekTimestamp)
              const weekNumber = timeUtils.getWeekNumber(date)
              const year = date.getFullYear()
              change(weekNumber, year)
              setRange([weekTimestamp, radius])
            }}
          />
        )
      })}
    </section>
  )
}
