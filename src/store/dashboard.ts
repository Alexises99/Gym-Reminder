import { create } from 'zustand'

interface DashboardState {
  editedCards: Array<number>
  addPendingCard: (id: number) => void
}

const useDashboard = create<DashboardState>((set) => ({
  editedCards: [],
  addPendingCard: (id) =>
    set((state) => ({ editedCards: [...state.editedCards, id] }))
}))

export default useDashboard
