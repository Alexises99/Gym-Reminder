'use client'

import { useState } from 'react'

export default function Input() {
  const [value, setValue] = useState<number>(0)

  return (
    <input
      type="number"
      placeholder="30KG"
      name="weight"
      value={value}
      onChange={({ target: { value } }) => setValue(Number(value))}
      className="max-w-28 w-full appearance-none border-0 px-4 py-2 text-primary rounded-2xl placeholder:font-bold placeholder:opacity-500"
    />
  )
}
