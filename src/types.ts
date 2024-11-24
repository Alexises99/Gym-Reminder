export interface DayData<T> {
  value: T | null
  date: Date
  isPastMonth?: boolean
  isNextMonth?: boolean
}
