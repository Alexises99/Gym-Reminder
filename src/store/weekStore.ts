import timeUtils from 'src/utils/time'
import { create } from 'zustand'

interface SelectedWeekState {
  selectedYear: number
  selectedWeekNumber: number
  change: (weekNumber: number, year: number) => void
}

const useSelectedWeek = create<SelectedWeekState>((set) => ({
  selectedWeekNumber: timeUtils.getWeekNumber(new Date()),
  selectedYear: new Date().getFullYear(),
  change: (weekNumber, year) =>
    set(() => ({ selectedWeekNumber: weekNumber, year }))
}))

export default useSelectedWeek
