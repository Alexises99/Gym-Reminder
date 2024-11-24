import { DayData } from '@/types'

function getWeeks<T>(days: Array<DayData<T>>): Array<Array<DayData<T>>> {
  const copyDays = structuredClone(days)

  const weeks: Array<Array<DayData<T>>> = []

  while (copyDays.length) {
    weeks.push(copyDays.splice(0, 7))
  }

  return weeks
}

function getDays<T>(data: Array<T>, date: Date): Array<DayData<T>> {
  const startDate = date
  // Add "previous month" days before the first one
  const startDay = (startDate.getDay() + 6) % 7
  let index = startDay

  const emptyDays: Array<DayData<T>> = Array.from({ length: startDay }, () => {
    const copy = new Date(startDate)
    copy.setDate(startDate.getDate() - index)
    copy.setHours(0, 0, 0, 0)
    index--

    return {
      value: null,
      date: copy,
      isPastMonth: true
    }
  })

  let currentDay = new Date(startDate)
  const days: Array<DayData<T>> = []
  while (currentDay.getMonth() === startDate.getMonth()) {
    const dayData = data ? data[currentDay.getDate() - 1] ?? null : null

    currentDay.setHours(0, 0, 0, 0)

    days.push({
      value: dayData,
      date: currentDay
    })

    currentDay = new Date(
      currentDay.getFullYear(),
      currentDay.getMonth(),
      currentDay.getDate() + 1
    )
  }

  // Add "next month" days to fill the last week
  const endDay = (currentDay.getDay() + 6) % 7 // Día de la semana del último día del mes actual
  const daysToAdd = endDay === 0 ? 0 : 7 - endDay

  const nextMonthDays: Array<DayData<T>> = Array.from(
    { length: daysToAdd },
    (_, i) => {
      const copy = new Date(currentDay)
      copy.setDate(currentDay.getDate() + i)
      copy.setHours(0, 0, 0, 0)

      return {
        value: null,
        date: copy,
        isNextMonth: true
      }
    }
  )

  const finalDays: Array<DayData<T>> = [...emptyDays, ...days, ...nextMonthDays]
  return finalDays
}

const calendarUtils = {
  getWeeks,
  getDays
}

export default calendarUtils
