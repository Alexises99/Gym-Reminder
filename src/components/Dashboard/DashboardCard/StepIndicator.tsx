const selectedColor = 'bg-white'
const otherColor = 'bg-gray-500'

interface StepIndicatorProps {
  currentStep: 1 | 2
}

export default function StepIndicator({ currentStep }: StepIndicatorProps) {
  return (
    <div className="flex gap-2">
      <div
        className={`w-2 h-2 ${
          currentStep === 1 ? selectedColor : otherColor
        } rounded-full`}
      />
      <div
        className={`w-2 h-2 ${
          currentStep === 2 ? selectedColor : otherColor
        } rounded-full`}
      />
    </div>
  )
}
