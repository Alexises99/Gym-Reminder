import Month from '../Month/Month'

interface DatePickerProps<T> {
  data: Record<string, Array<T>>
  currentMonth: Date
  handleCurrentMonth: (index: number) => void
  valueComponent?: React.FC<T>
}

export default function DatePicker<T>({
  data,
  currentMonth,
  valueComponent,
  handleCurrentMonth
}: DatePickerProps<T>) {
  return (
    <div className="flex justify-center">
      <Month<T>
        data={data[currentMonth.getMonth()]}
        valueComponent={valueComponent}
        currentMonth={currentMonth}
        handleCurrentMonth={handleCurrentMonth}
      />
    </div>
  )
}
