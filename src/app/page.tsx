import DashboardCard from '@/components/Dashboard/DashboardCard/Card'
import WeekPills from '@/components/Pills/WeekPills'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <header className="flex justify-between items-center p-4">
        <Image
          width={48}
          height={48}
          src="/icons/user.svg"
          alt="Icono de usuario"
          aria-hidden
          className="border border-primary rounded-full p-2"
        />
        <span className="uppercase text-xl">Gym Reminder</span>
        <Image
          width={48}
          height={48}
          src="/icons/menu.svg"
          alt="Icono de Menu"
          aria-hidden
        />
      </header>
      <main className="mx-auto mt-4">
        <h1 className="text-4xl px-4">Progreso</h1>
        <WeekPills />
        <section className="flex flex-col gap-4 mt-6 px-4">
          <DashboardCard title="Press banca" lastWeight={30} target={50} />
          <DashboardCard title="Press banca" lastWeight={30} target={50} />
          <DashboardCard title="Press banca" lastWeight={30} target={50} />
        </section>
      </main>
    </>
  )
}
