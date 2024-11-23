import { useCallback, useRef, useState, TouchEvent } from 'react'

const VELOCITY_THRESHOLD = 0.5

export default function useDrag(
  gap: number,
  changeCurrentStep: (step: 1 | 2) => void
) {
  const [positionX, setPositionX] = useState<number>(0)
  const [dragging, setDragging] = useState<boolean>(false)
  const startX = useRef<number>(0)
  const startTime = useRef<number>(0)
  const elementPositionX = useRef<number>(0)

  const dragRef = useRef<HTMLDivElement>(null)

  const handleTouchStart = useCallback(
    (e: TouchEvent) => {
      setDragging(true)
      const target = e.target as HTMLElement
      if (target.classList.contains('graph-item')) return

      startX.current = e.touches[0].clientX
      elementPositionX.current = positionX
      startTime.current = Date.now()
    },
    [positionX]
  )

  const updatePositionWithinLimits = useCallback(
    (newPosition: number) => {
      const maxDragLimit = dragRef.current!.offsetWidth + gap

      return !(newPosition > 0 || Math.abs(newPosition) > maxDragLimit)
    },
    [gap]
  )

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      const currentX = e.touches[0].clientX

      const deltaX = currentX - startX.current

      const newPosition = elementPositionX.current + deltaX

      const timeElapsed = Date.now() - startTime.current
      const velocity = Math.abs(deltaX) / timeElapsed

      if (velocity > VELOCITY_THRESHOLD) {
        if (deltaX > 0) {
          setPositionX(0)
          changeCurrentStep(1)
        } else {
          setPositionX(-1 * (350 + gap))
          changeCurrentStep(2)
        }

        return
      }
      if (!updatePositionWithinLimits(newPosition)) return

      setPositionX(newPosition)
    },
    [updatePositionWithinLimits, changeCurrentStep, gap]
  )

  const handleTouchEnd = () => {
    setDragging(false)
    const updatedPosition =
      Math.abs(positionX) < dragRef.current!.offsetWidth / 2
        ? 0
        : -1 * (dragRef.current!.offsetWidth + gap)
    setPositionX(updatedPosition)
    if (updatedPosition === 0) changeCurrentStep(1)
    if (Math.abs(updatedPosition) === dragRef.current!.offsetWidth + gap)
      changeCurrentStep(2)
  }

  return {
    dragRef,
    positionX,
    dragging,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd
  }
}
