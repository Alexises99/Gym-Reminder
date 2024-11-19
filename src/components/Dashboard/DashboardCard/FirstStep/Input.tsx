'use client'

import useDashboard from '@/store/dashboard'

export default function Input() {
  const { addPendingCard } = useDashboard()

  return (
    <input
      type="number"
      placeholder="30KG"
      name="weight"
      onChange={() => addPendingCard(1)}
      className="w-full appearance-none border-0 text-text-color h-max text-2xl bg-transparent"
    />
  )
}
