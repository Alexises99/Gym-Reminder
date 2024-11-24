import { create } from 'zustand'

interface DashboardState {
  editedCards: Array<number>
  selectedDate: Date
  addPendingCard: (id: number) => void
  resetPendingCards: () => void
  changeSelectedDate: (newDate: Date) => void
}

const useDashboard = create<DashboardState>((set) => ({
  editedCards: [],
  selectedDate: (() => {
    const current = new Date()
    current.setHours(0, 0, 0, 0)
    return current
  })(),
  addPendingCard: (id) =>
    set((state) => ({ editedCards: [...state.editedCards, id] })),
  resetPendingCards: () => set({ editedCards: [] }),
  changeSelectedDate: (date) => set({ selectedDate: date })
}))

export default useDashboard
