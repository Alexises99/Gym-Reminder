import useDashboard from '@/store/dashboard'
import { DayData } from '@/types'

interface DayProps<T> extends DayData<T> {
  valueComponent?: React.FC<T>
  handleCurrentMonth: (index: number) => void
}

export default function Day<T>({
  value,
  valueComponent: ValueComponent,
  date,
  isPastMonth = false,
  isNextMonth = false,
  handleCurrentMonth
}: DayProps<T>) {
  const { selectedDate, changeSelectedDate } = useDashboard()

  const dayNumber = date.getDate()

  const isSelectedDate = selectedDate.getTime() === date.getTime()

  const handleClick = () => {
    changeSelectedDate(date)
    if (isPastMonth) handleCurrentMonth(-1)
    if (isNextMonth) handleCurrentMonth(1)
  }

  return (
    <td
      className={`p-1 h-12 font-light border-2 border-[rgb(58,58,58)] ${
        isPastMonth || isNextMonth ? 'opacity-45' : ''
      } ${
        isSelectedDate
          ? 'bg-primary text-black rounded-md border-background border-2 shadow-inner'
          : ''
      }`}
      onClick={handleClick}
    >
      <span
        className={`text-lg ${isSelectedDate ? 'font-bold' : 'font-light'}`}
      >
        {dayNumber}
      </span>
      {value && ValueComponent ? <ValueComponent {...value} /> : null}
    </td>
  )
}
