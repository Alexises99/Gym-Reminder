import { create } from 'zustand'

interface DashboardState {
  editedCards: Array<number>
  addPendingCard: (id: number) => void
  resetPendingCards: () => void
}

const useDashboard = create<DashboardState>((set) => ({
  editedCards: [],
  addPendingCard: (id) =>
    set((state) => ({ editedCards: [...state.editedCards, id] })),
  resetPendingCards: () => set({ editedCards: [] })
}))

export default useDashboard
