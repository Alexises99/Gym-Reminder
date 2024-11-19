'use client'

import '@styles/WeekPill.css'

interface WeekPillProps {
  weekNumber: number
  translate: number
  isActive: boolean
  dragging: boolean
  handleClick: () => void
}

export default function WeekPill({
  weekNumber,
  translate,
  isActive,
  dragging,
  handleClick
}: WeekPillProps) {
  return (
    <button
      type="button"
      className={`week-pill ${isActive ? 'isActive' : ''} ${
        dragging ? 'dragging' : ''
      }`}
      style={{ transform: `translateX(${translate}px)` }}
      onClick={handleClick}
    >
      Semana {weekNumber}
    </button>
  )
}
