import DashboardCard from '@/components/Dashboard/DashboardCard/Card'
import DashboardHeader from '@/components/Dashboard/Header/Header'
import TopHeader from '@/components/Dashboard/TopHeader/TopHeader'
import Week from '@/components/Dashboard/Week/Week'
// import WeekPills from '@/components/Pills/WeekPills'

export default function Home() {
  return (
    <>
      <DashboardHeader />
      <main className="mx-auto mt-4">
        <TopHeader />
        <Week />
        <section className="flex flex-col gap-4 mt-6 px-4">
          <DashboardCard title="Press banca" target={50} />
          <DashboardCard title="Press militar" target={50} />
          <DashboardCard title="Sentadilla" target={50} />
        </section>
      </main>
    </>
  )
}
