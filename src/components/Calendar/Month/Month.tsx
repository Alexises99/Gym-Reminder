import calendarUtils from '@/utils/calendar'
import Day from '../Day/Day'

interface MonthProps<T> {
  data: Array<T>
  currentMonth: Date
  valueComponent?: React.FC<T>
  handleCurrentMonth: (index: number) => void
}

const daysOfWeek: string[] = ['lun', 'mar', 'mier', 'jue', 'vie', 'sab', 'dom']

export default function Month<T>({
  data,
  valueComponent,
  currentMonth,
  handleCurrentMonth
}: MonthProps<T>) {
  const daysData = calendarUtils.getDays<T>(data, currentMonth)
  const weeks = calendarUtils.getWeeks(daysData)

  return (
    <table className="border-collapse table-fixed w-full text-center">
      <thead>
        <tr>
          {daysOfWeek.map((day) => (
            <td key={day} className="text-lg">
              {day}
            </td>
          ))}
        </tr>
      </thead>
      <tbody>
        {weeks.map((week, index) => {
          return (
            <tr key={index}>
              {week.map(({ date, value, isPastMonth, isNextMonth }) => (
                <Day<T>
                  key={date.valueOf()}
                  value={value}
                  date={date}
                  isPastMonth={isPastMonth}
                  isNextMonth={isNextMonth}
                  valueComponent={valueComponent}
                  handleCurrentMonth={handleCurrentMonth}
                />
              ))}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
