'use client'

import Image from 'next/image'

export default function DashboardHeader() {
  return (
    <header className="flex justify-between items-center p-4">
      <Image
        width={48}
        height={48}
        src="/icons/user.svg"
        alt="Icono de usuario"
        aria-hidden
        className="border border-primary rounded-full p-2"
      />

      <div className="flex gap-4">
        <button className="px-3 py-1 bg-primary text-background rounded-3xl font-bold">
          Anadir ejercicio
        </button>
        <Image
          width={48}
          height={48}
          src="/icons/menu.svg"
          alt="Icono de Menu"
          aria-hidden
        />
      </div>
    </header>
  )
}
