import Calendar from '@/components/Calendar/Calendar'
import DashboardCard from '@/components/Dashboard/DashboardCard/Card'
import DashboardHeader from '@/components/Dashboard/Header/Header'
// import WeekPills from '@/components/Pills/WeekPills'

export default function Home() {
  return (
    <>
      <DashboardHeader />
      <main className="mx-auto mt-4">
        <h1 className="text-4xl px-4">Rutina</h1>
        <section>
          <Calendar />
        </section>
        <section className="flex flex-col gap-4 mt-6 px-4">
          <DashboardCard title="Press banca" target={50} />
          <DashboardCard title="Press militar" target={50} />
          <DashboardCard title="Sentadilla" target={50} />
        </section>
      </main>
    </>
  )
}
