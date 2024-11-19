import timeUtils from 'src/utils/time'
import { create } from 'zustand'

interface SelectedWeekState {
  selectedWeekInstant: number
  change: (newInstant: number) => void
}

const useSelectedWeek = create<SelectedWeekState>((set) => ({
  selectedWeekInstant: timeUtils.initializeRangeWeeks(2)[0],
  change: (newInstant) => set(() => ({ selectedWeekInstant: newInstant }))
}))

export default useSelectedWeek
